import { Scene } from "phaser"
import { UiTile } from "./ui-tile"
import { civ } from "kotlin-civ"

export class Ui {

    static colorDarkest = 0x03002e
    static colorDark = 0x010048
    static colorMedium = 0x010057
    static colorLight = 0x02006c
    static colorLightest = 0x090088
    static colorAccent = Phaser.Display.Color.ValueToColor(0xffd700)

    static uiHeight = 200
    static stockX = 0
    static stocksWidth = 150
    static uiMainStart = Ui.stockX + Ui.stocksWidth

    private stockBackground: Phaser.GameObjects.Rectangle

    // private tooltip: Tooltip
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
        this.foodText = scene.add.text(stockX + 45, stockY + 12, "1234", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.woodIcon = scene.add.image(stockX + 10, stockY + 50, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.woodText = scene.add.text(stockX + 45, stockY + 52, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.goldIcon = scene.add.image(stockX + 10, stockY + 90, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.goldText = scene.add.text(stockX + 45, stockY + 92, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.endTurnButton = new Button(scene, 0, 0, "End turn", onEndTurnClicked)
        this.endTurnButton.setPosition(stockX + 10, stockY + Ui.uiHeight - this.endTurnButton.height() - 16)

        const selectedY = stockY
        this.selectedSeparator = scene.add.line(Ui.uiMainStart, selectedY, 0, 0, 0, Ui.uiHeight, Ui.colorAccent.color).setOrigin(0, 0).setDepth(91).setScrollFactor(0)

        this.selectedBackground = scene.add.rectangle(Ui.uiMainStart, stockY, 300, Ui.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)

        this.selectedTile = new UiTile(scene, Ui.uiMainStart + 16, stockY + 16)
            .setDepth(91)
        scene.add.existing(this.selectedTile)

        this.selectedTitle = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 16, "", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)
        this.selectedText = scene.add.text(Ui.uiMainStart + this.selectedTile.width + 32, stockY + 16 + this.selectedTitle.height, "", { font: "bold 16px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.setSelection(null)
    }

    isPointerInside(pointerX: number, pointerY: number): boolean {
        //todo
        return false
    }


    setSelection(entity?: civ.model.PlayerTileData | civ.model.CivUnit) {

        if (entity instanceof civ.model.PlayerTileData) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(true)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)
            this.selectedTile.updateTileData(entity)

            if (!entity.tile) {
                this.selectedTitle.setText("Unknown")
                this.selectedText.setText("-")
            } else if (entity.tile instanceof civ.tile.Grass) {
                this.selectedTitle.setText("Plains")
                this.selectedText.setText("sdfgsg\njgsdigisd")
            } else if (entity.tile instanceof civ.tile.Mountains) {
                this.selectedTitle.setText("Mountains")
            } else if (entity.tile instanceof civ.tile.Water) {
                this.selectedTitle.setText("Water")
            }

        } else if (entity instanceof civ.model.CivUnit) {
            this.selectedBackground.setVisible(true)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(true)
            this.selectedText.setVisible(true)

            this.selectedTitle.setText(entity.unitType.name)
            this.selectedText.setText("Movement left: " + (entity.movementLeft / 10).toPrecision(1))



        } else {
            this.selectedBackground.setVisible(false)
            this.selectedTile.setVisible(false)
            this.selectedTitle.setVisible(false)
            this.selectedText.setVisible(false)
            this.selectedText.setVisible(false)
        }
    }
}

class Button {

    private background: Phaser.GameObjects.Rectangle
    private text: Phaser.GameObjects.Text

    constructor(
        scene: Scene,
        x: number,
        y: number,
        textContent: string,
        private clickListener: () => void
    ) {
        this.text = scene.add.text(x, y, textContent, { font: "bold 20px Arial", color: Ui.colorAccent.rgba })
            .setOrigin(0.5, 0.5)
            .setDepth(92)
            .setScrollFactor(0)

        this.background = scene.add.rectangle(x, y, this.text.width + 32, this.text.height + 8, Ui.colorLightest)
            .setOrigin(0, 0)
            .setStrokeStyle(1, Ui.colorAccent.color)
            .setDepth(91)
            .setScrollFactor(0)
            .setInteractive()

        this.setPosition(x, y)

        const self = this
        this.background.on(Phaser.Input.Events.POINTER_DOWN, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonDown()) {
                self.background.fillColor = Ui.colorDarkest
            }
        })
        this.background.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.clickListener()
            }
        })
        scene.input.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.background.fillColor = Ui.colorLightest
            }
        })
    }

    width(): number {
        return this.background.width
    }

    height(): number {
        return this.background.height
    }

    setPosition(x: number, y: number) {
        this.background.setPosition(x, y)
        this.text.setPosition(x + this.background.width / 2, y + this.background.height / 2)
    }

    setText(textContent: string) {
        this.text.setText(textContent)
    }

    destroy() {
        this.background.destroy()
        this.text.destroy()
    }
}