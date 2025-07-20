import { Scene } from "phaser";
import { Ui } from "./ui";

export class Button {

    private background: Phaser.GameObjects.Rectangle;
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
            .setStrokeStyle(1, Ui.colorAccent.color)
            .setDepth(91)
            .setScrollFactor(0)
            .setInteractive();

        this.setPosition(x, y);

        const self = this;
        this.background.on(Phaser.Input.Events.POINTER_DOWN, function (pointer: Phaser.Input.Pointer) {
            if (pointer.leftButtonDown()) {
                self.background.fillColor = Ui.colorDarkest;
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
        this.background.setPosition(x, y);
        this.text.setPosition(x + this.background.width / 2, y + this.background.height / 2);
    }

    setText(textContent: string) {
        this.text.setText(textContent);
    }

    destroy() {
        this.background.destroy();
        this.text.destroy();
    }
}
