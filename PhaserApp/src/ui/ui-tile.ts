import { civ } from "kotlin-civ"
import { Scene } from "phaser"
import { Tile } from "../tile"

export class UiTile extends Phaser.GameObjects.Polygon {

    static readonly SQRT3 = Math.sqrt(3.0)
    static readonly HEX_OFFSET = 0//250
    static readonly HEX_SIZE = 50
    static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    // readonly coordinates: civ.hex.Coordinates

    private overlay: Phaser.GameObjects.Polygon
    // private highlight: Phaser.GameObjects.Arc

    constructor(
        readonly scene: Scene,
        x: number,
        y: number
        // private tileData: civ.model.PlayerTileData,
        // private playersMap: Map<String, civ.model.Player>
    ) {
        const weirdOffsetFix = { x: Tile.HEX_WIDTH / 2, y: Tile.HEX_SIZE }
        const centerX = x//(Tile.SQRT3 * tileData.coordinates.q + Tile.SQRT3/2 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const centerY = y//(1.5 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const polygonPoints = [
            0 + weirdOffsetFix.x, -Tile.HEX_SIZE + weirdOffsetFix.y,
            Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, -Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            0 + weirdOffsetFix.x,  Tile.HEX_SIZE + weirdOffsetFix.y,
            - Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            - Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, -Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
        ]
        super(scene, centerX, centerY, polygonPoints)

        this.setScrollFactor(0).setDepth(91).setOrigin(0, 0)

        // this.coordinates = tileData.coordinates

        // this.unit = scene.add.circle(this.x, this.y, 16)
        //     .setDepth(5)
        this.overlay = scene.add.polygon(centerX, centerY, polygonPoints)
            .setDepth(95)
            .setOrigin(0, 0)
            .setFillStyle(0x000000, 0)
            .setScrollFactor(0)
        // this.highlight = scene.add.circle(this.x, this.y, 37)
            // .setStrokeStyle(8, 0x00ffff, 0.5)
        //     .setDepth(6)

        // this.setStates(false, false)
        // this.updateTileData(tileData)
    }

    setVisible(value: boolean): this {
        super.setVisible(value)
        this.overlay.setVisible(value)
        return this
    }

    updateTileData(data: civ.model.PlayerTileData) {
        if (!data.tile) {
            this.overlay.fillAlpha = 0
            this.setFillStyle(0x888888)
            return
        }

        if (data.tile instanceof civ.tile.Grass) {
            this.setFillStyle(0x489030)
        } else if (data.tile instanceof civ.tile.Water) {
            this.setFillStyle(0x0000ff)
        } else if (data.tile instanceof civ.tile.Mountains) {
            this.setFillStyle(0x888888)
        }

        if (data.isVisible) {
            this.overlay.fillAlpha = 0
        } else {
            this.overlay.fillAlpha = 0.5
        }
    }



    destroy(): void {
        //todo
    }
}