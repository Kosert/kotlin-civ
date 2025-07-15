import { hexcore, civ } from "hexcore-js"
import { Scene } from "phaser"

export class Tile extends Phaser.GameObjects.Polygon {

    static readonly SQRT3 = Math.sqrt(3.0)
    static readonly HEX_OFFSET = 0//250
    static readonly HEX_SIZE = 50
    static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    readonly coordinates: hexcore.Coordinates

    private isHovered: boolean = false
    private isSelected: boolean = false

    private unit: Phaser.GameObjects.Arc

    constructor(
        readonly scene: Scene,
        private tileData: hexcore.PlayerTileData,
        private playersMap: Map<String, civ.Player>
    ) {
        const weirdOffsetFix = { x: Tile.HEX_WIDTH / 2, y: Tile.HEX_SIZE }
        const centerX = (Tile.SQRT3 * tileData.coordinates.q + Tile.SQRT3/2 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const centerY = (1.5 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const polygonPoints = [
            0 + weirdOffsetFix.x, -Tile.HEX_SIZE + weirdOffsetFix.y,
            Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, -Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            0 + weirdOffsetFix.x,  Tile.HEX_SIZE + weirdOffsetFix.y,
            - Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
            - Tile.HEX_WIDTH / 2 + weirdOffsetFix.x, -Tile.HEX_SIZE / 2 + weirdOffsetFix.y,
        ]
        super(scene, centerX, centerY, polygonPoints, 0x00ff00)
        this.coordinates = tileData.coordinates

        this.unit = scene.add.circle(this.x, this.y, 16).setDepth(5)

        this.setHovered(false)
        this.updateTileData(tileData)
    } 

    updateTileData(data: hexcore.PlayerTileData) {
        if (!data.tile) {
            this.unit.setVisible(false)
            this.setFillStyle(0x888888)
            return
        }
        if (data.tile instanceof hexcore.Grass) {
            this.setFillStyle(0x00ff00)
        } else if (data.tile instanceof hexcore.Water) {
            this.setFillStyle(0x0000ff)
        } else if (data.tile instanceof hexcore.Mountains) {
            this.setFillStyle(0x888888)
        }

        if (data.unit) {
            this.unit.setVisible(true)
            const color = this.playersMap.get(data.unit.playerId).color
            switch (color) {
                case civ.PlayerColor.BLUE:
                    this.unit.setFillStyle(0x0000ff)
                    break
                case civ.PlayerColor.RED:
                    this.unit.setFillStyle(0xff0000)
                    break
                case civ.PlayerColor.GREEN:
                    this.unit.setFillStyle(0x6666ff)
                    break;
                default:
                    break;
            }
        }
    }

    setSelected(selected: boolean) {
        this.isSelected = selected
        this.refreshState()
    }

    setHovered(hovered: boolean) {
        this.isHovered = hovered
        this.refreshState()
    }

    private refreshState() {
        if (this.isSelected) {
            this.setStrokeStyle(4, 0xffffff, 1);
            this.setDepth(3)
        } else if (this.isHovered) {
            this.setStrokeStyle(4, 0xffffff, 0.4);
            this.setDepth(3)
        } else {
            this.setStrokeStyle(2, 0x000000, 0.2)
            this.setDepth(2)
        }
    }
}