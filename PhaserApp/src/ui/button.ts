import { Scene } from "phaser";
import { Ui } from "./ui";

export class Button {

    private background: Phaser.GameObjects.Rectangle;
    private frontLines: Phaser.GameObjects.Line[] = [];
    private text: Phaser.GameObjects.Text;

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
            .setScrollFactor(0);

        this.background = scene.add.rectangle(x, y, this.text.width + 32, this.text.height + 8, Ui.colorLightest)
            .setOrigin(0, 0)
            .setStrokeStyle(3, Ui.colorAccent.color)
            .setDepth(91)
            .setScrollFactor(0)
            .setInteractive()

        this.frontLines.push(
            scene.add.line(x, y, 0, this.background.height, this.background.width, this.background.height)
            .setOrigin(0, 0)
            .setLineWidth(3)
            .setStrokeStyle(3, Ui.colorAccentDark.color)
            .setDepth(92)
            .setScrollFactor(0)
        )
        this.frontLines.push(
            scene.add.line(x, y, this.background.width, 0, this.background.width, this.background.height)
            .setOrigin(0, 0)
            .setLineWidth(3)
            .setStrokeStyle(3, Ui.colorAccentDark.color)
            .setDepth(92)
            .setScrollFactor(0)
        )

        this.setPosition(x, y);

        const self = this;
        this.background.on(Phaser.Input.Events.POINTER_DOWN, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonDown()) {
                self.background.fillColor = Ui.colorDarkest;
                self.background.strokeColor = Ui.colorAccentDark.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccent.color)
            }
        });
        this.background.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.clickListener();
            }
        });
        scene.input.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.background.fillColor = Ui.colorLightest;
                self.background.strokeColor = Ui.colorAccent.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
            }
        });
        scene.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased()) {
                self.background.fillColor = Ui.colorLightest;
                self.background.strokeColor = Ui.colorAccent.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
            }
        });
    }

    width(): number {
        return this.background.width;
    }

    height(): number {
        return this.background.height;
    }

    setPosition(x: number, y: number) {
        this.background.setPosition(x, y)
        this.text.setPosition(x + this.background.width / 2, y + this.background.height / 2)
        this.frontLines.forEach(it => it.setPosition(x, y))
    }

    setText(textContent: string) {
        this.text.setText(textContent)
    }

    destroy() {
        this.background.destroy()
        this.text.destroy()
        this.frontLines.forEach(it => it.destroy())
    }
}
