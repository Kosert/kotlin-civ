import { Scene } from "phaser"


export class Ui {

    static colorDarkest = 0x03002e
    static colorDark = 0x010048
    static colorMedium = 0x010057
    static colorLight = 0x02006c
    static colorLightest = 0x090088
    static colorAccent = Phaser.Display.Color.ValueToColor(0xffd700)

    private uiHeight = 200

    private background: Phaser.GameObjects.Rectangle
    // private tooltip: Tooltip
    private foodIcon: Phaser.GameObjects.Image
    private foodText: Phaser.GameObjects.Text

    private woodIcon: Phaser.GameObjects.Image
    private woodText: Phaser.GameObjects.Text

    private goldIcon: Phaser.GameObjects.Image
    private goldText: Phaser.GameObjects.Text

    private endTurnButton: Button

    constructor(scene: Scene) {
        const x = 0
        const y = scene.cameras.main.height - this.uiHeight
        this.background = scene.add.rectangle(x, y, 300, this.uiHeight, Ui.colorMedium, 0.99)
            .setOrigin(0, 0)
            .setDepth(90)
            .setScrollFactor(0)


        this.foodIcon = scene.add.image(x + 10, y + 10, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.foodText = scene.add.text(x + 45, y + 12, "1234", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.woodIcon = scene.add.image(x + 10, y + 50, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.woodText = scene.add.text(x + 45, y + 52, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.goldIcon = scene.add.image(x + 10, y + 90, "gold_coin").setOrigin(0, 0).setDepth(91).setScrollFactor(0)
        this.goldText = scene.add.text(x + 45, y + 92, "0", { font: "bold 20px Arial", color: "#FFFFFF" }).setDepth(91).setScrollFactor(0)

        this.endTurnButton = new Button(scene, x + 10, y + 130, "End turn")
    }

}

class Button {

    private background: Phaser.GameObjects.Rectangle
    private text: Phaser.GameObjects.Text

    constructor(
        scene: Scene,
        x: number,
        y: number,
        buttonText: string
    ) {
        this.text = scene.add.text(x, y, buttonText, { font: "bold 20px Arial", color: Ui.colorAccent.rgba })
            .setOrigin(0.5, 0.5)
            .setDepth(92)
            .setScrollFactor(0)

        this.background = scene.add.rectangle(x, y, this.text.width + 32, this.text.height + 8, Ui.colorLightest)
            .setOrigin(0, 0)
            .setStrokeStyle(1, Ui.colorAccent.color)
            .setDepth(91)
            .setScrollFactor(0)
            .setInteractive()

        this.text.setPosition(
            x + this.background.width / 2, y + this.background.height / 2
        )

        this.background.width

        const self = this

        this.background.on(Phaser.Input.Events.POINTER_DOWN, function(pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonDown()) {
                self.background.fillColor = Ui.colorDarkest
            }
        })
        scene.input.on(Phaser.Input.Events.POINTER_UP, function(pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.background.fillColor = Ui.colorLightest
            }
        })
    }

}