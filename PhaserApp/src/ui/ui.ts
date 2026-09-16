import { Scene } from "phaser"
import { UiTile } from "./ui-tile"
import { civ } from "kotlin-civ"
import { Button } from "./button"
import { BuildingButton } from "./building-button"
import { Tooltip } from "./building-tooltip"
import { UiAction, UiActionEvent } from "./ui-actions"
import { Texts } from "./texts"
import { RecruitButton } from "./recruit-button"
import { UnitIcons } from "./icons"
import { StrikethroughText } from "./strikethrough-text";

export class Ui {

    static colorDarkest = 0x03002e
    static colorDark = 0x010048
    static colorMedium = 0x010057
    static colorLight = 0x02006c
    static colorLightest = 0x090088
    static colorAccent = Phaser.Display.Color.ValueToColor(0xffd700)
    static colorAccentDark = Phaser.Display.Color.ValueToColor(0x998100)
    static colorText = Phaser.Display.Color.ValueToColor(0xffffff)

    static uiHeight = 190
    static stockX = 0
    static stocksWidth = 150
    static uiMainStart = Ui.stockX + Ui.stocksWidth
    static uiMainWidth = 462
    static uiMainEnd = Ui.uiMainStart + Ui.uiMainWidth
    static uiRecruitmentWidth = 230
    static uiRecruitmentEnd = Ui.uiMainEnd + Ui.uiRecruitmentWidth

    private stockBackground: Phaser.GameObjects.Rectangle
    private foodIcon: Phaser.GameObjects.Image
    private foodText: Phaser.GameObjects.Text
    private woodIcon: Phaser.GameObjects.Image
    private woodText: Phaser.GameObjects.Text
    private goldIcon: Phaser.GameObjects.Image
    private goldText: Phaser.GameObjects.Text
    private stocksTween: Phaser.Tweens.Tween
    private turnCounter: Phaser.GameObjects.Text
    private endTurnButton: Button

    private scoreTexts = new Map<string, StrikethroughText>()

    private selectedBackground: Phaser.GameObjects.Rectangle
    private selectedTile: UiTile
    private selectedIcon: Phaser.GameObjects.Image
    private selectedTitle: Phaser.GameObjects.Text
    private selectedText: Phaser.GameObjects.BitmapText
    private buildingButtons = new Map<civ.model.Building, BuildingButton>()

    private selectedSeparator: Phaser.GameObjects.Line
    private recruitBackground: Phaser.GameObjects.Rectangle
    private recruitTitle: Phaser.GameObjects.Text
    private recruitButtons = new Map<civ.model.UnitType, RecruitButton>()

    private errorAlertBackground: Phaser.GameObjects.Rectangle
    private errorAlert: Phaser.GameObjects.Text
    private errorAlertDisappear: Phaser.Tweens.Tween

    private tooltip: Tooltip

    private buttonSettle: Button
    private buttonConquer: Button
    private buttonDisband: Button

    private belowMap = new Map<civ.model.Building, civ.model.Building>()
        .set(civ.model.Building.SAWMILL, civ.model.Building.LUMBERCAMP)
        .set(civ.model.Building.WATERMILL, civ.model.Building.RIVERLAND_FARM)
        .set(civ.model.Building.WINDMILL, civ.model.Building.FARM)
        .set(civ.model.Building.BUTCHERY, civ.model.Building.HUNTERS_CAMP)
        .set(civ.model.Building.FISHING_SHIP, civ.model.Building.FISH_TRAP)
        .set(civ.model.Building.PORT, civ.model.Building.FISHING_HUT)
        .set(civ.model.Building.WALLS, civ.model.Building.GUARD_TOWERS)
        .set(civ.model.Building.STABLE, civ.model.Building.BARRACKS)
        .set(civ.model.Building.WARHORSE_STABLES, civ.model.Building.BLACKSMITH)
        .set(civ.model.Building.KNIGHTS_HALL, civ.model.Building.ARMORERS_WORKSHOP)
        .set(civ.model.Building.ARBALEST_GUILD, civ.model.Building.ARCHERY_RANGE)
        .set(civ.model.Building.TOWN_HALL, civ.model.Building.VILLAGE_HALL)
        .set(civ.model.Building.CASTLE, civ.model.Building.TOWN_HALL)

    private gameApi: civ.core.GameApi
    //todo if gameApi == null hide everything

    constructor(
        private scene: Scene,
    ) {
        const self = this
        const stockX = Ui.stockX
        const stockY = scene.cameras.main.height - Ui.uiHeight
        this.stockBackground = scene.add.rectangle(stockX, stockY, Ui.stocksWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.foodIcon = scene.add.image(stockX + 10, stockY + 10, "food_icon").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.foodText = scene.add.text(stockX + 45, stockY + 12, "", { font: "bold 20px Arial", color: Ui.colorText.rgba }).setDepth(91).setScrollFactor(0)

        this.woodIcon = scene.add.image(stockX + 10, stockY + 50, "wood_icon").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.woodText = scene.add.text(stockX + 45, stockY + 52, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.goldIcon = scene.add.image(stockX + 10, stockY + 90, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.goldText = scene.add.text(stockX + 45, stockY + 92, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.turnCounter = scene.add.text(stockX + 8, stockY + 128, "", { font: "16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.endTurnButton = new Button(scene, 0, 0, "End turn", function() { 
            scene.events.emit(UiActionEvent, UiAction.END_TURN) 
        })
        this.endTurnButton.setPosition(stockX + 8, scene.cameras.main.height - this.endTurnButton.height() - 8)

        const selectedY = stockY
        const stocksSeparator = scene.add.line(Ui.uiMainStart, selectedY, 0, 0, 0, Ui.uiHeight, Ui.colorAccent.color).setOrigin(0, 0).setDepth(91).setScrollFactor(0)

        this.selectedBackground = scene.add.rectangle(Ui.uiMainStart, stockY, Ui.uiMainWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.selectedTile = new UiTile(scene, Ui.uiMainStart + 12, stockY + 12)
            .setDepth(91)
        scene.add.existing(this.selectedTile)

        this.selectedIcon = scene.add.image(Ui.uiMainStart + 12, stockY + 12, "food_icon").setOrigin(0, 0).setDepth(91).setScrollFactor(0)

        this.selectedTitle = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 20, stockY + 12, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.selectedText = scene.add.bitmapText(Ui.uiMainStart + this.selectedTile.width + 20, stockY + 16 + this.selectedTitle.height + 8, "civ_font", "", 16).setDepth(91).setScrollFactor(0)

        this.buttonSettle = new Button(scene, Ui.uiMainEnd - 110, stockY + 14, "Settle", function() { 
            scene.events.emit(UiActionEvent, UiAction.SETTLE) 
        }).setFixedWidth(100)
        this.buttonConquer = new Button(scene, Ui.uiMainEnd - 110, stockY + 16, "Conquer", function() {
            scene.events.emit(UiActionEvent, UiAction.CONQUER) 
        }).setFixedWidth(100)
        this.buttonDisband = new Button(scene, Ui.uiMainEnd - 110, stockY + 16, "Disband", function() {
            scene.events.emit(UiActionEvent, UiAction.DISBAND) 
        }).setFixedWidth(100)

        this.tooltip = new Tooltip(scene, 0, 0)
        this.tooltip.show(null)

        civ.model.Building.values().forEach(it => {
            const button = new BuildingButton(scene, 0, 0, 91, it, this.tooltip, function() {
                self.scene.events.emit(UiActionEvent, UiAction.BUILD, it)
            })
            button.hide()
            this.buildingButtons.set(it, button)
        })

        this.selectedSeparator = scene.add.line(Ui.uiMainEnd, selectedY, 0, 0, 0, Ui.uiHeight, Ui.colorAccent.color).setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.recruitBackground = scene.add.rectangle(Ui.uiMainEnd, selectedY, Ui.uiRecruitmentWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.recruitTitle = scene.add.text(Ui.uiMainEnd + 16, selectedY + 16, "Recruit", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        let xCounter = Ui.uiMainEnd + 7
        let yCounter = selectedY + 15//this.recruitTitle.getBottomLeft().y
        const recruit1RowY = this.recruitTitle.y + this.recruitTitle.height + 16
        civ.model.UnitType.values().forEach((it, index) => {
            const button = new RecruitButton(scene, xCounter, yCounter, 91, it, this.tooltip, function() {
                self.scene.events.emit(UiActionEvent, UiAction.RECRUIT, it)
            })
            self.recruitButtons.set(it, button)

            if (index == 0) {
                xCounter += button.width + 5
                return
            }

            xCounter += button.width + 5
            if ((index) % 3 == 0) {
                yCounter += button.height + 5
                xCounter = Ui.uiMainEnd + 12 + button.width
            }
        })

        this.errorAlertBackground = scene.add.rectangle(scene.cameras.main.width / 2, scene.cameras.main.height / 2, 0, 0, 0x000000, 0.8)
        .setDepth(101).setScrollFactor(0).setOrigin(0.5, 0.5)
        .setStrokeStyle(1, Ui.colorAccent.color)
        this.errorAlert = scene.add.text(scene.cameras.main.width / 2, scene.cameras.main.height / 2, "", { font: "bold 20px Arial", color: "#FF0000" })
        .setDepth(101)
        .setOrigin(0.5, 0.5)
        .setScrollFactor(0)

        this.setSelection(null)
    }

    setGameApi(gameApi: civ.core.GameApi) {
        this.gameApi = gameApi
        this.scoreTexts.forEach(it => it.destroy())
        this.scoreTexts.clear()

        this.gameApi?.allPlayers().asJsReadonlyArrayView().forEach((it, index, array) => {
            let color = 0x000000
            switch (it.color) {
                case civ.model.PlayerColor.BLUE:
                    color = 0x0000ff
                    break
                case civ.model.PlayerColor.RED:
                    color = 0xFF0000
                    break
                case civ.model.PlayerColor.GREEN:
                    color = 0x00ff00
                    break;
                case civ.model.PlayerColor.YELLOW:
                    color = 0xffea00
                    break;
                default:
                    break;
            }

            const text = new StrikethroughText(this.scene, 4, 4 + index * 20, "civ_font", "", 16)
                .setDepth(91).setScrollFactor(0).setTint(color)
            this.scene.add.existing(text)
            this.scoreTexts.set(it.playerId, text)
        })
    }

    postAlert(alertText: string) {
        this.errorAlertDisappear?.remove()
        this.errorAlert.setText(alertText).setAlpha(1).setX(this.scene.cameras.main.width / 2)
        this.errorAlertBackground.setSize(this.errorAlert.width + 32, this.errorAlert.height + 16).setAlpha(1).setX(this.scene.cameras.main.width / 2)
        this.scene.tweens.add({
            targets: [this.errorAlert, this.errorAlertBackground],
            props: {
                x: { value: this.scene.cameras.main.width / 2 + 5, duration: 75, ease: 'Bounce.InOut' },
            },
            delay: 0,
            repeat: 3,
            yoyo: true,
        })

        this.errorAlertDisappear = this.scene.tweens.add({
            targets: [this.errorAlert, this.errorAlertBackground],
            alpha: 0,
            delay: 3000,
            ease: 'Linear',
            duration: 500,
            repeat: 0,
            yoyo: false,
        })
    }

    isPointerInside(pointer: { x: number, y: number }): boolean {
        if (pointer.y < this.stockBackground.y) {
            return false
        }
        let constraintX: number
        if (this.recruitBackground.visible) {
            constraintX = Ui.uiRecruitmentEnd
        }
        else if (this.selectedBackground.visible) {
            constraintX = Ui.uiMainEnd
        } else {
            constraintX = Ui.uiMainStart
        }
        return pointer.x <= constraintX
    }

    setSelection(entity?: civ.model.PlayerTileData | civ.model.CivUnit) {
        this.buildingButtons.forEach(button => button.hide())

        if (entity instanceof civ.model.PlayerTileData) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(true)
            this.selectedIcon.setVisible(false)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)
            this.selectedTile.updateTileData(entity)
            this.buttonSettle.setVisible(false)
            this.buttonConquer.setVisible(false)
            this.buttonDisband.setVisible(false)

            if (!entity.tile) {
                this.selectedTitle.setText("Unknown")
                this.selectedText.setText("Move closer to reveal this tile")
                this.selectedSeparator.setVisible(false)
                this.recruitBackground.setVisible(false)
                this.recruitTitle.setVisible(false)
                this.recruitButtons.forEach(it => it.hide())
                return
            }

            this.selectedTitle.setText(entity.tile.getVisibleName())

            //todo const playerId
            const playerId = this.gameApi.currentPlayer.playerId
            const income = this.gameApi.getTileIncome(entity.coordinates, playerId)
            this.selectedText.setText(Texts.tileDescription(income))

            const mainCityBuilding = entity.tile.getMainCityBuilding()
            if (mainCityBuilding) {
                this.selectedSeparator.setVisible(true)
                this.recruitBackground.setVisible(true)
                this.recruitTitle.setVisible(false)
                civ.model.UnitType.values().forEach(it => {
                    const button = this.recruitButtons.get(it)
                    const canBuy = it.buildingRequirement(entity.tile.buildings)// && !entity.tile.isBusy
                    button.setup(canBuy ? "clickable" : "locked")
                })
            }
            switch (mainCityBuilding) {
                case civ.model.Building.VILLAGE_HALL:
                    this.selectedTitle.setText("Village")
                    break;
                case civ.model.Building.TOWN_HALL:
                    this.selectedTitle.setText("Town")
                    break
                case civ.model.Building.CASTLE:
                    this.selectedTitle.setText("City")
                    break
                default:
                    break;
            }

            const canBuild = this.gameApi.canBuild(entity.coordinates, playerId)
            const building1RowY = this.selectedTile.y + this.selectedTile.height + 5
            let xCounter = Ui.uiMainStart + 12
            entity.tile.getAllPossibleBuildings().asJsReadonlyArrayView().forEach((it, _, possibleBuildings) => {
                const button = this.buildingButtons.get(it)

                let state: "locked" | "built" | "clickable"
                if (entity.tile.buildings.asJsReadonlySetView().has(it)) {
                    state = "built"
                } else if (it.unlockRequirement(entity.tile) && canBuild) {
                    state = "clickable"
                } else {
                    state = "locked"
                }

                if (this.belowMap.has(it) && possibleBuildings.includes(this.belowMap.get(it))) {
                    const placeBelow = this.buildingButtons.get(this.belowMap.get(it))
                    button.setup(placeBelow.x, placeBelow.y + placeBelow.height + 4, state)
                } else {
                    button.setup(xCounter, building1RowY, state)
                    xCounter = xCounter + 5 + button.width
                }
            })

        } else if (entity instanceof civ.model.CivUnit) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(false)
            this.selectedIcon.setVisible(true)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)
            this.selectedSeparator.setVisible(false)
            this.recruitBackground.setVisible(false)
            this.recruitTitle.setVisible(false)
            this.recruitButtons.forEach(it => it.hide())

            this.selectedTitle.setText(Texts.unitName(entity.unitType))
            this.selectedIcon.setTexture(UnitIcons.get(entity.unitType))
            this.selectedText.setText(Texts.selectedUnitStats(entity))

            this.buttonSettle.setVisible(entity.unitType == civ.model.UnitType.SETTLERS)
            this.buttonSettle.setDisabled(!entity.actionPoint)
            this.buttonConquer.setPosition(this.buttonSettle.x(), this.buttonSettle.y() + this.buttonSettle.height() + (this.buttonSettle.height() ? 5 : 0))

            if (entity.conquerState instanceof civ.model.ConquerState.Occupying) {
                this.buttonConquer.setVisible(true)
                const turnsLeftText = entity.conquerState.turnsLeft > 0 ? ` (${entity.conquerState.turnsLeft})` : ""
                this.buttonConquer.setText("Conquer" + turnsLeftText)
                this.buttonConquer.setDisabled(!entity.actionPoint || entity.conquerState.turnsLeft > 0)
            } else {
                this.buttonConquer.setVisible(false)
            }

            this.buttonDisband.setPosition(this.buttonConquer.x(), this.buttonConquer.y() + this.buttonConquer.height() + (this.buttonConquer.height() ? 5 : 0))
            this.buttonDisband.setVisible(true)

        } else {
            this.selectedBackground.setVisible(false)
            this.selectedTile.setVisible(false)
            this.selectedIcon.setVisible(false)
            this.selectedTitle.setVisible(false)
            this.selectedText.setVisible(false)
            this.buttonSettle.setVisible(false)
            this.buttonConquer.setVisible(false)
            this.buttonDisband.setVisible(false)
            this.recruitBackground.setVisible(false)
            this.selectedSeparator.setVisible(false)
            this.recruitTitle.setVisible(false)
            this.recruitButtons.forEach(it => it.hide())
        }
    }

    private currentStock: civ.model.Stockpiles
    setStockpiles(newStocks: civ.model.Stockpiles, income: civ.model.Stockpiles) {
        // if (this.stocks?.equals(newStocks)) {
        //     return
        // }

        if (this.currentStock) {
            this.stocksTween?.remove()
            this.stocksTween = this.scene.tweens.addCounter({
                ease: 'Cubic',
                duration: 500,
                repeat: 0,
                yoyo: false,
            })

            const sourceFood = this.currentStock.food
            const sourceWood = this.currentStock.wood
            const sourceGold = this.currentStock.gold
            const self = this
            this.stocksTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number, previous) {
                // if (!started) {
                //     started = true
                // }
    
                const newFood = sourceFood + (newStocks.food - sourceFood) * current
                const newWood = sourceWood + (newStocks.wood - sourceWood) * current
                const newGold = sourceGold + (newStocks.gold - sourceGold) * current
                
                self.foodText.setText(newFood.toFixed(0) + " (+" + income.food.toString() + ")")
                self.woodText.setText(newWood.toFixed(0) + " (+" + income.wood.toString() + ")")
                self.goldText.setText(newGold.toFixed(0) + " (+" + income.gold.toString() + ")")
            })
        } else {
            this.foodText.setText(newStocks.food.toString() + " (+" + income.food.toString() + ")")
            this.woodText.setText(newStocks.wood.toString() + " (+" + income.wood.toString() + ")")
            this.goldText.setText(newStocks.gold.toString() + " (+" + income.gold.toString() + ")")
        }

        // this.foodText.setText(newStocks.food.toString() + " (+" + income.food.toString() + ")")
        // this.woodText.setText(newStocks.wood.toString() + " (+" + income.wood.toString() + ")")
        // this.goldText.setText(newStocks.gold.toString() + " (+" + income.gold.toString() + ")")
        this.currentStock = newStocks
    }

    setTurnData(endTurnDisabled: boolean, turnNumber: number) {
        this.endTurnButton.setDisabled(endTurnDisabled)
        this.turnCounter.setText(Number.isNaN(turnNumber) ? "" : "Turn " + (turnNumber + 1))
    }

    setScores(scores: ReadonlyMap<string, civ.core.SimpleStats>) {
        const players = this.gameApi.allPlayers().asJsReadonlyArrayView()

        const sorted = [...scores.entries()]
            .sort((a, b) => b[1].points - a[1].points)

        sorted.forEach(([playerId, stats], index) => {
            const player = players.find(it => it.playerId == playerId)
            const textObject = this.scoreTexts.get(playerId)
            textObject.setY(4 + index * 20)
            textObject.setStrikethrough(stats.isDefeated)
            textObject.text = player.name + ": " + stats.points
        })
    }
}