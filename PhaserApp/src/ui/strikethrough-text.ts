

export class StrikethroughText extends Phaser.GameObjects.BitmapText {

    private line: Phaser.GameObjects.Line

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        font: string,
        text?: string | string[],
        size?: number,
        align?: number,
        stroked?: boolean,
    ) {
        super(scene, x, y, font, text, size, align)
        const rightCenter = this.getRightCenter()
        this.line = scene.add.line(x, y, 0, size / 2, rightCenter.x, size / 2)
            .setDepth(92)
            .setScrollFactor(0)
            .setLineWidth(3)
        this.line.setVisible(stroked)
    }

    setText(value: string | string[]): this {
        super.setText(value)
        if (!this.line)
            return
        const rightCenter = this.getRightCenter()
        this.line.setTo(0, this.fontSize / 2, rightCenter.x, this.fontSize / 2)
        return this
    }

    setTint(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this {
        this.line.setStrokeStyle(3, topLeft)
        return super.setTint(topLeft, topRight, bottomLeft, bottomRight);
    }

    setY(value?: number): this {
        this.line.setY(value)
        return super.setY(value);
    }

    setStrikethrough(value: boolean): this {
        this.line.setVisible(value)
        return this
    }

    destroy(fromScene?: boolean) {
        this.line.destroy(fromScene)
        super.destroy(fromScene)
    }
}