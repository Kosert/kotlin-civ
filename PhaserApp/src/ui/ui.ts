import { Scene } from "phaser"
import { UiTile } from "./ui-tile"
import { civ } from "kotlin-civ"
import { Button } from "./button"
import { BuildingButton } from "./building-button"

export class Ui {

    static colorDarkest = 0x03002e
    static colorDark = 0x010048
    static colorMedium = 0x010057
    static colorLight = 0x02006c
    static colorLightest = 0x090088
    static colorAccent = Phaser.Display.Color.ValueToColor(0xffd700)
    static colorText = Phaser.Display.Color.ValueToColor(0xffffff)

    static uiHeight = 200
    static stockX = 0
    static stocksWidth = 150
    static uiMainStart = Ui.stockX + Ui.stocksWidth
    static uiMainWidth = 400
    static uiMainEnd = Ui.uiMainStart + Ui.uiMainWidth

    // private tooltip: Tooltip

    private stockBackground: Phaser.GameObjects.Rectangle
    private foodIcon: Phaser.GameObjects.Image
    private foodText: Phaser.GameObjects.Text
    private woodIcon: Phaser.GameObjects.Image
    private woodText: Phaser.GameObjects.Text
    private goldIcon: Phaser.GameObjects.Image
    private goldText: Phaser.GameObjects.Text
    private endTurnButton: Button

    private selectedSeparator: Phaser.GameObjects.Line
    private selectedBackground: Phaser.GameObjects.Rectangle
    private selectedTile: UiTile
    private selectedTitle: Phaser.GameObjects.Text
    private selectedText: Phaser.GameObjects.Text
    private buildingButtons = new Map<civ.model.Building, BuildingButton>()

    private belowMap = new Map<civ.model.Building, civ.model.Building>()
        .set(civ.model.Building.SAWMILL, civ.model.Building.LUMBERCAMP)
        .set(civ.model.Building.WATERMILL, civ.model.Building.RIVERLAND_FARM)
        .set(civ.model.Building.WINDMILL, civ.model.Building.FARM)
        .set(civ.model.Building.BUTCHERS, civ.model.Building.LIVESTOCK_FARM)
        .set(civ.model.Building.MARKET, civ.model.Building.ROAD)
        .set(civ.model.Building.PORT, civ.model.Building.FISHING_HUT)
        .set(civ.model.Building.WALLS, civ.model.Building.GUARD_TOWERS)
        .set(civ.model.Building.ARCHERY_RANGE, civ.model.Building.BARRACKS)
        .set(civ.model.Building.ARMORERS_WORKSHOP, civ.model.Building.BLACKSMITH)
        .set(civ.model.Building.TOWN_HALL, civ.model.Building.VILLAGE_HALL)
        .set(civ.model.Building.CASTLE, civ.model.Building.TOWN_HALL)

    private stocks: civ.model.Stockpiles

    constructor(
        scene: Scene,
        onEndTurnClicked: () => void
    ) {
        const stockX = Ui.stockX
        const stockY = scene.cameras.main.height - Ui.uiHeight
        this.stockBackground = scene.add.rectangle(stockX, stockY, Ui.stocksWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.foodIcon = scene.add.image(stockX + 10, stockY + 10, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.foodText = scene.add.text(stockX + 45, stockY + 12, "1234", { font: "bold 20px Arial", color: Ui.colorText.rgba }).setDepth(91).setScrollFactor(0)

        this.woodIcon = scene.add.image(stockX + 10, stockY + 50, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.woodText = scene.add.text(stockX + 45, stockY + 52, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.goldIcon = scene.add.image(stockX + 10, stockY + 90, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.goldText = scene.add.text(stockX + 45, stockY + 92, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.endTurnButton = new Button(scene, 0, 0, "End turn", onEndTurnClicked)
        this.endTurnButton.setPosition(stockX + 10, stockY + Ui.uiHeight - this.endTurnButton.height() - 16)

        const selectedY = stockY
        this.selectedSeparator = scene.add.line(Ui.uiMainStart, selectedY, 0, 0, 0, Ui.uiHeight, Ui.colorAccent.color).setOrigin(0, 0).setDepth(91).setScrollFactor(0)

        this.selectedBackground = scene.add.rectangle(Ui.uiMainStart, stockY, Ui.uiMainWidth, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.selectedTile = new UiTile(scene, Ui.uiMainStart + 16, stockY + 16)
            .setDepth(91)
        scene.add.existing(this.selectedTile)

        this.selectedTitle = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 16, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.selectedText = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 16 + this.selectedTitle.height + 8, "", { font: "bold 16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        civ.model.Building.values().forEach(it => {
            const button = new BuildingButton(scene, 0, 0, 91, it)
            button.hide()
            this.buildingButtons.set(it, button)
        })

        this.setSelection(null)
    }

    isPointerInside(pointer: { x: number, y: number }): boolean {
        if (pointer.y < this.stockBackground.y) {
            return false
        }
        let constraintX: number
        if (this.selectedBackground.visible) {
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

            if (!entity.tile) {
                this.selectedTitle.setText("Unknown")
                this.selectedText.setText("-")
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

            this.selectedText.setText("TODO")

            const mainCityBuilding = entity.tile.getMainCityBuilding()
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

            const building1RowY = this.selectedTile.y + this.selectedTile.height + 16
            const building2RowY = building1RowY + 50 + 16 // 50?
            let xCounter = Ui.uiMainStart + 16
            entity.tile.getAllPossibleBuildings().asJsReadonlyArrayView().forEach(it => {
                console.log(it)
                const button = this.buildingButtons.get(it)
                const isLocked = !it.unlockRequirement(entity.tile)
                if (this.belowMap.has(it)) {
                    const placeBelow = this.buildingButtons.get(this.belowMap.get(it))
                    button.setup(placeBelow.x, placeBelow.y + placeBelow.height + 2, isLocked)
                } else {
                    button.setup(xCounter, building1RowY, isLocked)
                    xCounter = xCounter + 2 + button.width
                }
            })

        } else if (entity instanceof civ.model.CivUnit) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)

            this.selectedTitle.setText(entity.unitType.name)

            let description = `HP: ${entity.hp}/${entity.maxHp}\nAttack: ${entity.attack}\n`
            if (true /*isCurrentPlayer*/) {
                description += `Movement left: ${(entity.movementLeft / 10).toPrecision(2)}`
            }
            this.selectedText.setText(description)

        } else {
            this.selectedBackground.setVisible(false)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(false)
            this.selectedText.setVisible(false)
            this.selectedText.setVisible(false)
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