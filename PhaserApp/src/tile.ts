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
    private highlightMode: ("move" | "path" | "none") = "none"
    private isHighlightAttack: boolean

    private terrainGraphics: Phaser.GameObjects.Image
    private cityGraphics: Phaser.GameObjects.Image
    private unit: Phaser.GameObjects.Arc
    private mainOverlay: Phaser.GameObjects.Polygon
    private cityRangeOverlay: Phaser.GameObjects.Polygon
    private highlight: Phaser.GameObjects.Arc
    private pathHighlight: Phaser.GameObjects.Arc
    private borderLines = new Map<civ.hex.HexEdge, Phaser.GameObjects.Line>()

    constructor(
        readonly scene: Scene,
        tileData: civ.model.PlayerTileData,
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

        civ.hex.HexEdge.values().forEach((it, index) => {
            const startX = polygonPoints[index * 2] - weirdOffsetFix.x
            const startY = polygonPoints[index * 2 + 1] - weirdOffsetFix.y
            let nextIndex = index + 1
            if (nextIndex > civ.hex.HexEdge.values().length - 1) {
                nextIndex = 0
            }
            const endX = polygonPoints[nextIndex * 2] - weirdOffsetFix.x
            const endY = polygonPoints[nextIndex * 2 + 1] - weirdOffsetFix.y
            this.borderLines.set(it, scene.add.line(this.x, this.y, startX, startY, endX, endY).setDepth(6).setOrigin(0, 0))
        })

        this.cityRangeOverlay = scene.add.polygon(centerX, centerY, polygonPoints)
            .setDepth(5)
            .setFillStyle(0x000000, 0)
        this.unit = scene.add.circle(this.x, this.y, 16)
            .setDepth(6)
        this.mainOverlay = scene.add.polygon(centerX, centerY, polygonPoints)
            .setDepth(7)
            .setFillStyle(0x000000, 0)
        this.highlight = scene.add.circle(this.x, this.y, 37)
            .setStrokeStyle(8, 0x00ffff, 0.5)
            .setDepth(8)
        this.pathHighlight = scene.add.circle(this.x, this.y, 20)
            .setFillStyle(0x00ffff, 0.5)
            .setDepth(8)

        this.setStates(false, false)
        this.updateTileData(tileData)
    } 

    updateTileData(data: civ.model.PlayerTileData) {
        if (!data.tile) {
            this.unit.setVisible(false)
            this.mainOverlay.fillAlpha = 1
            this.borderLines.forEach(it => it.setVisible(false))
            this.cityRangeOverlay.setFillStyle(0x000000, 0)
            this.setFillStyle(0x888888)
            return
        }

        let terrainTextureName: string
        if (data.tile instanceof civ.tile.Water) {
            this.setFillStyle(0x2389da)
        } else {
            this.setFillStyle(0x489030)

            if (data.tile instanceof civ.tile.Grass) {
                if (data.tile.forest && data.tile.animals) {
                    terrainTextureName = "forest_animals"
                } else if (data.tile.forest) {
                    terrainTextureName = "forest"
                } else if (data.tile.animals) {
                    terrainTextureName = "animals"
                }
            } else if (data.tile instanceof civ.tile.Mountains) {
                if (data.tile.gold) {
                    terrainTextureName = "mountains_gold"
                } else {
                    terrainTextureName = "mountains"
                }
            }
        }
        if (terrainTextureName != this.terrainGraphics?.texture?.key) {
            this.terrainGraphics?.destroy()
            if (terrainTextureName) {
                this.terrainGraphics = this.scene.add.image(this.x, this.y, terrainTextureName)
                .setDepth(2)
            }
        } 

        let cityTextureName: string
        if (data.city) {
            const cityBuilding = data.tile.getMainCityBuilding()
            switch (cityBuilding) {
                case civ.model.Building.VILLAGE_HALL:
                    cityTextureName = "village"
                    break;
                case civ.model.Building.TOWN_HALL:
                    cityTextureName = "town"
                    break;            
               case civ.model.Building.CASTLE:
                    cityTextureName = "castle"
                    break;
            }
        }
        if (cityTextureName != this.cityGraphics?.texture?.key) {
            this.cityGraphics?.destroy()
            if (cityTextureName) {
                this.cityGraphics = this.scene.add.image(this.x, this.y, cityTextureName)
                    .setDepth(3)
            }
        }

        if (data.isVisible) {
            this.mainOverlay.setFillStyle(0x000000, 0)
        } else {
            this.mainOverlay.setFillStyle(0x000000, 0.5)
        }
        
        this.borderLines.forEach(it => it.setVisible(false))
        if (data.cityRange) {
            const colorType = this.playersMap.get(data.cityRange.playerId).color
            let color = 0x000000
            switch (colorType) {
                case civ.model.PlayerColor.BLUE:
                    color = 0x0000ff
                    break
                case civ.model.PlayerColor.RED:
                    color = 0x8B0000
                    break
                case civ.model.PlayerColor.GREEN:
                    color = 0x6666ff
                    break;
                default:
                    break;
            }
            this.cityRangeOverlay.setFillStyle(color, 0.1)
            data.cityRange.borders.asJsReadonlyArrayView().forEach(edge => {
                this.borderLines.get(edge).setVisible(true).setStrokeStyle(2, color, 1).setLineWidth(2)
            })
        } else {
            this.cityRangeOverlay.setFillStyle(0x000000, 0)
        }

        if (data.unit) {
            this.unit.setVisible(true)
            const color = this.playersMap.get(data.unit.playerId).color
            switch (color) {
                case civ.model.PlayerColor.BLUE:
                    this.unit.setFillStyle(0x0000ff)
                    break
                case civ.model.PlayerColor.RED:
                    this.unit.setFillStyle(0x8B0000)
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

    setHighlight(move: boolean, path: boolean, attack: boolean) {
        this.isHighlightAttack = attack
        if (path) {
            this.highlightMode = "path"
        } else if (move) {
            this.highlightMode = "move"
        } else {
            this.highlightMode = "none"
        }
    }

    private refreshState() {
        switch (this.highlightMode) {
            case "path":
                this.pathHighlight.setVisible(true)
                this.highlight.setVisible(true)
                break
            case "move":
                this.pathHighlight.setVisible(false)
                this.highlight.setVisible(true)
                break
            case "none":
                this.pathHighlight.setVisible(false)
                this.highlight.setVisible(false)
                break
        }

        if (this.isHighlightAttack) {
            this.pathHighlight.fillColor = 0xff0000
            this.highlight.strokeColor = 0xff0000
        } else {
            this.pathHighlight.fillColor = 0x00ffff
            this.highlight.strokeColor = 0x00ffff
        }

        if (this.isSelected) {
            this.mainOverlay.setStrokeStyle(4, 0xffffff, 1)
            this.mainOverlay.setDepth(7)
        } else if (this.isHovered) {
            this.mainOverlay.setStrokeStyle(4, 0xffffff, 0.4)
            this.mainOverlay.setDepth(7)
        } else {
            this.mainOverlay.setStrokeStyle(1, 0xffffff, 0.2)
            this.mainOverlay.setDepth(6)
        }
    }

    destroy(): void {
        //todo
    }
}