import { Scene } from "phaser"

export class Tile extends Phaser.GameObjects.Polygon {

    private static readonly SQRT3 = Math.sqrt(3.0)
    private static readonly HEX_OFFSET = 250
    private static readonly HEX_SIZE = 50
    private static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    private static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    constructor(
        readonly scene: Scene,
        q: number,
        r: number,
    ) {
        const centerX = (Tile.SQRT3 * q + Tile.SQRT3/2 * r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const centerY = (1.5 * r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        super(scene, centerX, centerY, [
            0, -Tile.HEX_SIZE,
            Tile.HEX_WIDTH / 2, -Tile.HEX_SIZE / 2,
            Tile.HEX_WIDTH / 2, Tile.HEX_SIZE / 2,
            0,  Tile.HEX_SIZE,
            0 -Tile.HEX_WIDTH / 2, Tile.HEX_SIZE / 2,
            0 - Tile.HEX_WIDTH / 2, -Tile.HEX_SIZE / 2,
        ], 0x00ff00)

        this.setStrokeStyle(2, 0xff0000)
        this.setInteractive()
        this.setDepth(2)
        this.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.setStrokeStyle(4, 0xefc53f);
            this.setDepth(3)
        })
        // this.on(Phaser.Input.Events.POINTER_OUT, () => {
        //     this.setStrokeStyle(2, 0xff0000);
        //     this.setDepth(2)
        // })
    } 
}