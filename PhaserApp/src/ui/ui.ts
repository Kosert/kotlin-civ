import { Scene } from "phaser"
import { UiTile } from "./ui-tile"
import { civ } from "kotlin-civ"
import { Button } from "./button"
import { BuildingButton } from "./building-button"
import { Tooltip } from "./building-tooltip"
import { MainScene } from "../scenes/main-scene"
import { UiAction, UiActionEvent } from "./ui-actions"
import { Texts } from "./texts"
import { RecruitButton } from "./recruit-button"

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
    static uiMainWidth = 400
    static uiMainEnd = Ui.uiMainStart + Ui.uiMainWidth
    static uiRecruitmentWidth = 170
    static uiRecruitmentEnd = Ui.uiMainEnd + Ui.uiRecruitmentWidth


    // private tooltip: Tooltip

    private stockBackground: Phaser.GameObjects.Rectangle
    private foodIcon: Phaser.GameObjects.Image
    private foodText: Phaser.GameObjects.Text
    private woodIcon: Phaser.GameObjects.Image
    private woodText: Phaser.GameObjects.Text
    private goldIcon: Phaser.GameObjects.Image
    private goldText: Phaser.GameObjects.Text
    private endTurnButton: Button

    private selectedBackground: Phaser.GameObjects.Rectangle
    private selectedTile: UiTile
    private selectedTitle: Phaser.GameObjects.Text
    private selectedText: Phaser.GameObjects.BitmapText
    private buildingButtons = new Map<civ.model.Building, BuildingButton>()

    private selectedSeparator: Phaser.GameObjects.Line
    private recruitBackground: Phaser.GameObjects.Rectangle
    private recruitTitle: Phaser.GameObjects.BitmapText
    private recruitButtons = new Map<civ.model.UnitType, RecruitButton>()

    private tooltip: Tooltip

    private buttonSettle: Button
    private buttonConquer: Button
    private buttonDisband: Button

    private belowMap = new Map<civ.model.Building, civ.model.Building>()
        .set(civ.model.Building.SAWMILL, civ.model.Building.LUMBERCAMP)
        .set(civ.model.Building.WATERMILL, civ.model.Building.RIVERLAND_FARM)
        .set(civ.model.Building.WINDMILL, civ.model.Building.FARM)
        .set(civ.model.Building.BUTCHERY, civ.model.Building.HUNTERS_CAMP)
        .set(civ.model.Building.MARKET, civ.model.Building.ROAD)
        .set(civ.model.Building.PORT, civ.model.Building.FISHING_HUT)
        .set(civ.model.Building.WALLS, civ.model.Building.GUARD_TOWERS)
        .set(civ.model.Building.ARCHERY_RANGE, civ.model.Building.BARRACKS)
        .set(civ.model.Building.ARMORERS_WORKSHOP, civ.model.Building.BLACKSMITH)
        .set(civ.model.Building.TOWN_HALL, civ.model.Building.VILLAGE_HALL)
        .set(civ.model.Building.CASTLE, civ.model.Building.TOWN_HALL)

    private stocks: civ.model.Stockpiles

    constructor(
        private scene: Scene,
        private gameApi: civ.core.GameApi
    ) {
        const self = this
        const stockX = Ui.stockX
        const stockY = scene.cameras.main.height - Ui.uiHeight
        this.stockBackground = scene.add.rectangle(stockX, stockY, Ui.stocksWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.foodIcon = scene.add.image(stockX + 10, stockY + 10, "food_icon").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.foodText = scene.add.text(stockX + 45, stockY + 12, "1234", { font: "bold 20px Arial", color: Ui.colorText.rgba }).setDepth(91).setScrollFactor(0)

        this.woodIcon = scene.add.image(stockX + 10, stockY + 50, "wood_icon").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.woodText = scene.add.text(stockX + 45, stockY + 52, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.goldIcon = scene.add.image(stockX + 10, stockY + 90, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.goldText = scene.add.text(stockX + 45, stockY + 92, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.endTurnButton = new Button(scene, 0, 0, "End turn", function() { 
            scene.events.emit(UiActionEvent, UiAction.END_TURN) 
        })
        this.endTurnButton.setPosition(stockX + 10, stockY + Ui.uiHeight - this.endTurnButton.height() - 16)

        const selectedY = stockY
        const stocksSeparator = scene.add.line(Ui.uiMainStart, selectedY, 0, 0, 0, Ui.uiHeight, Ui.colorAccent.color).setOrigin(0, 0).setDepth(91).setScrollFactor(0)

        this.selectedBackground = scene.add.rectangle(Ui.uiMainStart, stockY, Ui.uiMainWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.selectedTile = new UiTile(scene, Ui.uiMainStart + 16, stockY + 16)
            .setDepth(91)
        scene.add.existing(this.selectedTile)

        this.selectedTitle = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 12, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.selectedText = scene.add.bitmapText(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 16 + this.selectedTitle.height + 8, "civ_font", "", 16).setDepth(91).setScrollFactor(0)

        this.buttonSettle = new Button(scene, Ui.uiMainEnd - 110, stockY + 16, "Settle", function() { 
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

            //todo normal text? bold?
        this.recruitTitle = scene.add.bitmapText(Ui.uiMainEnd + 16, selectedY + 16, "civ_font", "", 20).setDepth(91).setScrollFactor(0)

        let xCounter = Ui.uiMainEnd + 8
        let yCounter = selectedY + 15//this.recruitTitle.getBottomLeft().y
        const recruit1RowY = this.recruitTitle.y + this.recruitTitle.height + 16
        civ.model.UnitType.values().forEach((it, index) => {
            const button = new RecruitButton(scene, xCounter, yCounter, 91, it, this.tooltip, function() {
                self.scene.events.emit(UiActionEvent, UiAction.RECRUIT, it)
            })
            self.recruitButtons.set(it, button)
            xCounter += button.width + 5
            if ((index + 1) % 3 == 0) {
                yCounter += button.height + 5
                xCounter = Ui.uiMainEnd + 5
            }
        })

        this.setSelection(null)
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
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)
            this.selectedTile.updateTileData(entity)
            this.buttonSettle.setVisible(false)
            this.buttonConquer.setVisible(false)
            this.buttonDisband.setVisible(false)

            if (!entity.tile) {
                this.selectedTitle.setText("Unknown")
                this.selectedText.setText("-")
                this.selectedSeparator.setVisible(false)
                this.recruitBackground.setVisible(false)
                this.recruitTitle.setVisible(false)
                this.recruitButtons.forEach(it => it.hide())
                return
            }

            if (entity.tile instanceof civ.tile.Grass) {
                if (entity.tile.forest) {
                    this.selectedTitle.setText("Forest")
                } else {
                    this.selectedTitle.setText("Plains")
                }
            } else if (entity.tile instanceof civ.tile.Mountains) {
                this.selectedTitle.setText("Mountains")
            } else if (entity.tile instanceof civ.tile.Water) {
                this.selectedTitle.setText("Water")
            }

            //todo const playerId
            const playerId = this.gameApi.currentPlayer.playerId
            const income = this.gameApi.getTileIncome(entity.coordinates, playerId)
            this.selectedText.setText(Texts.tileDescription(income))

            const mainCityBuilding = entity.tile.getMainCityBuilding()
            if (mainCityBuilding && !entity.tile.isBusy) {
                this.selectedSeparator.setVisible(true)
                this.recruitBackground.setVisible(true)
                this.recruitTitle.setVisible(true)
                civ.model.UnitType.values().forEach(it => {
                    const button = this.recruitButtons.get(it)
                    button.setup(it.buildingRequirement(entity.tile.buildings) ? "clickable" : "locked")
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
            const building1RowY = this.selectedTile.y + this.selectedTile.height
            let xCounter = Ui.uiMainStart + 16
            entity.tile.getAllPossibleBuildings().asJsReadonlyArrayView().forEach(it => {
                const button = this.buildingButtons.get(it)

                let state: "locked" | "built" | "clickable"
                if (entity.tile.buildings.asJsReadonlySetView().has(it)) {
                    state = "built"
                } else if (it.unlockRequirement(entity.tile) && canBuild) {
                    state = "clickable"
                } else {
                    state = "locked"
                }

                if (this.belowMap.has(it)) {
                    const placeBelow = this.buildingButtons.get(this.belowMap.get(it))
                    button.setup(placeBelow.x, placeBelow.y + placeBelow.height + 5, state)
                } else {
                    button.setup(xCounter, building1RowY, state)
                    xCounter = xCounter + 5 + button.width
                }
            })

        } else if (entity instanceof civ.model.CivUnit) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)
            this.selectedSeparator.setVisible(false)
            this.recruitBackground.setVisible(false)
            this.recruitTitle.setVisible(false)
            this.recruitButtons.forEach(it => it.hide())

            this.selectedTitle.setText(entity.unitType.name)

            let description = `HP: ${entity.hp}/${entity.maxHp}\nAttack: ${entity.attack}\n`
            if (true /*isCurrentPlayer*/) {
                description += `Movement left: ${(entity.movementLeft / 10).toPrecision(2)}`
            }
            this.selectedText.setText(description)

            this.buttonSettle.setVisible(entity.unitType == civ.model.UnitType.SETTLERS)
            //todo determine if can conquer
            this.buttonConquer.setPosition(this.buttonSettle.x(), this.buttonSettle.y() + this.buttonSettle.height() + 5)
            this.buttonConquer.setVisible(true)
            this.buttonDisband.setPosition(this.buttonConquer.x(), this.buttonConquer.y() + this.buttonConquer.height() + 5)
            this.buttonDisband.setVisible(true)

        } else {
            this.selectedBackground.setVisible(false)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(false)
            this.selectedText.setVisible(false)
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

    setStockpiles(newStocks: civ.model.Stockpiles) {
        if (this.stocks?.equals(newStocks)) {
            return
        }

        this.foodText.setText(newStocks.food.toString())
        this.woodText.setText(newStocks.wood.toString())
        this.goldText.setText(newStocks.gold.toString())
    }
}