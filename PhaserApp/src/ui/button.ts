import { Scene } from "phaser";
import { Ui } from "./ui";

export class Button {

    private background: Phaser.GameObjects.Rectangle;
    private overlay: Phaser.GameObjects.Rectangle;
    private frontLines: Phaser.GameObjects.Line[] = [];
    private text: Phaser.GameObjects.Text;

    private disabled: boolean = false

    constructor(
        scene: Scene,
        x: number,
        y: number,
        textContent: string,
        private clickListener: () => void
    ) {
        this.text = scene.add.text(x, y, textContent, { font: "bold 20px Arial", color: Ui.colorAccent.rgba, padding: { bottom: 2 } })
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

        this.overlay = scene.add.rectangle(x, y, this.text.width + 32, this.text.height + 8, 0x000000, 0.5)
            .setOrigin(0, 0)
            .setDepth(93)
            .setScrollFactor(0)
            .setInteractive()
            .setVisible(false)

        this.setPosition(x, y);

        const self = this;
        this.background.on(Phaser.Input.Events.POINTER_DOWN, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonDown() && !self.disabled) {
                self.background.fillColor = Ui.colorDarkest;
                self.background.strokeColor = Ui.colorAccentDark.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccent.color)
            }
        });
        this.background.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased() && !self.disabled) {
                self.clickListener();
            }
        });
        scene.input.on(Phaser.Input.Events.POINTER_UP, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased() && !self.disabled) {
                self.background.fillColor = Ui.colorLightest;
                self.background.strokeColor = Ui.colorAccent.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
            }
        });
        scene.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonReleased() && !self.disabled) {
                self.background.fillColor = Ui.colorLightest;
                self.background.strokeColor = Ui.colorAccent.color;
                self.frontLines.forEach(it => it.strokeColor = Ui.colorAccentDark.color)
            }
        });
    }

    x(): number {
        return this.background.x;
    }

    y(): number {
        return this.background.y;
    }

    width(): number {
        if (this.background.visible)
            return this.background.width;
        else 
            return 0
    }

    height(): number {
        if (this.background.visible)
            return this.background.height
        else
            return 0
    }

    setDepth(depth: number): Button {
        this.text.setDepth(depth + 2)
        this.background.setDepth(depth + 1)
        this.frontLines.forEach(it => it.setDepth(depth + 2))
        this.overlay.setDepth(depth + 3)
        return this
    }

    setFixedWidth(width: number): Button {
        this.background.setSize(width, this.background.height)
        this.text.setPosition(this.background.x + this.background.width / 2, this.background.y + this.background.height / 2)
        this.frontLines[0].setTo(0, this.background.height, this.background.width, this.background.height)
        this.frontLines[1].setTo(this.background.width, 0, this.background.width, this.background.height)
        this.overlay.setSize(width + 2, this.background.height + 2)
        return this
    }

    setDisabled(disabled: boolean): Button {
        this.disabled = disabled
        this.overlay.setVisible(disabled && this.background.visible)
        return this
    }

    setVisible(value: boolean): Button {
        this.background.setVisible(value)
        this.text.setVisible(value)
        this.frontLines.forEach(it => it.setVisible(value))
        this.overlay.setVisible(value && this.disabled)
        return this
    }

    setY(y: number): Button {
        this.setPosition(this.background.x, y)
        return this
    }

    setPosition(x: number, y: number): Button {
        this.background.setPosition(x, y)
        this.text.setPosition(x + this.background.width / 2, y + this.background.height / 2)
        this.frontLines.forEach(it => it.setPosition(x, y))
        this.overlay.setPosition(x - 1, y - 1)
        return this
    }

    setText(textContent: string): Button {
        this.text.setText(textContent)
        return this
    }

    destroy() {
        this.background.destroy()
        this.text.destroy()
        this.frontLines.forEach(it => it.destroy())
        this.overlay.destroy()
    }
}
