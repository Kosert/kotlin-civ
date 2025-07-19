import { civ } from "kotlin-civ"
import { Scene } from "phaser"

export class Tile extends Phaser.GameObjects.Polygon {

    static readonly SQRT3 = Math.sqrt(3.0)
    static readonly HEX_OFFSET = 0//250
    static readonly HEX_SIZE = 50
    static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    readonly coordinates: civ.hex.Coordinates

    private isHovered: boolean = false
    private isSelected: boolean = false
    private highlightMode: ("move" | "attack" | "none") = "none"

    private unit: Phaser.GameObjects.Arc
    private overlay: Phaser.GameObjects.Polygon
    private highlight: Phaser.GameObjects.Arc

    constructor(
        readonly scene: Scene,
        private tileData: civ.model.PlayerTileData,
        private playersMap: Map<String, civ.model.Player>
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

        this.unit = scene.add.circle(this.x, this.y, 16)
            .setDepth(5)
        this.overlay = scene.add.polygon(centerX, centerY, polygonPoints)
            .setDepth(5)
            .setFillStyle(0x000000, 0)
        this.highlight = scene.add.circle(this.x, this.y, 37)
            .setStrokeStyle(8, 0x00ffff, 0.5)
            .setDepth(6)

        this.setStates(false, false)
        this.updateTileData(tileData)
    } 

    updateTileData(data: civ.model.PlayerTileData) {
        if (!data.tile) {
            this.unit.setVisible(false)
            this.overlay.fillAlpha = 1
            this.setFillStyle(0x888888)
            return
        }
        if (data.tile instanceof civ.tile.Grass) {
            this.setFillStyle(0x489030)
        } else if (data.tile instanceof civ.tile.Water) {
            this.setFillStyle(0x184d72)
        } else if (data.tile instanceof civ.tile.Mountains) {
            this.setFillStyle(0x888888)
        }

        if (data.isVisible) {
            this.overlay.fillAlpha = 0
        } else {
            this.overlay.fillAlpha = 0.5
        }

        if (data.unit) {
            this.unit.setVisible(true)
            const color = this.playersMap.get(data.unit.playerId).color
            switch (color) {
                case civ.model.PlayerColor.BLUE:
                    this.unit.setFillStyle(0x0000ff)
                    break
                case civ.model.PlayerColor.RED:
                    this.unit.setFillStyle(0xff0000)
                    break
                case civ.model.PlayerColor.GREEN:
                    this.unit.setFillStyle(0x6666ff)
                    break;
                default:
                    break;
            }
        } else {
            this.unit.setVisible(false)
        }
    }

    setStates(hovered: boolean, selected: boolean) {
        this.isHovered = hovered
        this.isSelected = selected
        this.refreshState()
    }

    setHighlight(move: boolean, attack: boolean) {
        if (attack) {
            this.highlightMode = "attack"
        } else if (move) {
            this.highlightMode = "move"
        } else {
            this.highlightMode = "none"
        }
    }

    private refreshState() {
        switch (this.highlightMode) {
            case "move":
                this.highlight.setVisible(true)
                break
            case "attack":
                this.highlight.setVisible(true)
                break
            case "none":
                this.highlight.setVisible(false)
                break
        }

        if (this.isSelected) {
            this.overlay.setStrokeStyle(4, 0xffffff, 1)
            this.overlay.setDepth(6)
        } else if (this.isHovered) {
            this.overlay.setStrokeStyle(4, 0xffffff, 0.4)
            this.overlay.setDepth(6)
        } else {
            this.overlay.setStrokeStyle(1, 0xffffff, 0.2)
            this.overlay.setDepth(5)
        }
    }

    destroy(): void {
        //todo
    }
}