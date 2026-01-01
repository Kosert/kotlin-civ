import { civ } from "kotlin-civ"
import { Scene } from "phaser"

export class Tile extends Phaser.GameObjects.Polygon {

    static readonly SQRT3 = Math.sqrt(3.0)
    static readonly HEX_OFFSET = 0//250
    static readonly HEX_SIZE = 50
    static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    // static centerPosition(coordinates: civ.hex.Coordinates) {
    //     return {
    //         x: (Tile.SQRT3 * coordinates.q + Tile.SQRT3/2 * coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET,
    //         y: (1.5 * coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
    //     }
    // }

    readonly coordinates: civ.hex.Coordinates

    private isHovered: boolean = false
    private isSelected: boolean = false
    private highlightMode: ("move" | "path" | "none") = "none"
    private isHighlightAttack: boolean

    private terrainGraphics: Phaser.GameObjects.Image
    private cityGraphics: Phaser.GameObjects.Image
    private roadsGraphics: Phaser.GameObjects.Image
    private mainOverlay: Phaser.GameObjects.Polygon
    private cityRangeOverlay: Phaser.GameObjects.Polygon
    private highlight: Phaser.GameObjects.Arc
    private pathHighlight: Phaser.GameObjects.Arc
    private borderLines = new Map<civ.hex.HexEdge, Phaser.GameObjects.Line>()
    private rivers: Map<civ.hex.HexEdge, Phaser.GameObjects.Image>
    private overlayTween: Phaser.Tweens.Tween

    getTileData(): civ.model.PlayerTileData {
        return this.tileData
    }
    
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
        this.tileData = data
        if (!data.tile) {
            this.mainOverlay.fillAlpha = 1
            this.borderLines.forEach(it => it.setVisible(false))
            this.cityRangeOverlay.setFillStyle(0x000000, 0)
            // this.rivers?.forEach(it => it.setVisible(false))
            this.roadsGraphics?.setVisible(false)
            this.setFillStyle(0x888888)
            return
        }

        let terrainTextureName: string
        if (data.tile instanceof civ.tile.Water) {
            this.setFillStyle(0x2389da)
        } else {
            this.setFillStyle(0x489030)
            if (data.tile instanceof civ.tile.Grass) {

                if (!this.rivers) {
                    this.rivers = new Map<civ.hex.HexEdge, Phaser.GameObjects.Image>()
                    data.tile.riverEdges.asJsReadonlyArrayView().forEach(edge => {
                        this.rivers.set(
                            edge, 
                            this.scene.add.image(this.x, this.y, "river_" + edge.name.toLowerCase())
                                .setDepth(1)
                        )
                    })
                }

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
                .setDepth(4)
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
                    cityTextureName = "city"
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
            this.animateOverlayAlpha(0)
        } else {
            this.animateOverlayAlpha(0.5)
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
                    color = 0x00ff00
                    break;
                case civ.model.PlayerColor.YELLOW:
                    color = 0xffea00
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

        if (data.tile.buildings.asJsReadonlySetView().has(civ.model.Building.ROAD)) {
            if (!this.roadsGraphics){
                this.roadsGraphics = this.scene.add.image(this.x, this.y, "roads").setDepth(2)
            }
        } else {
            this.roadsGraphics?.setVisible(false)
        }
    }

    private animateOverlayAlpha(targetAlpha: number) {
        if (this.mainOverlay.fillAlpha == targetAlpha) return
        this.overlayTween?.remove()
        this.overlayTween = this.scene.tweens.add({
            targets: this.mainOverlay,
            props: { fillAlpha: targetAlpha },
            ease: 'Linear',
            duration: 400,
            repeat: 0,
            yoyo: false,
        })
    }

    setStates(hovered: boolean, selected: boolean) {
        this.isHovered = hovered
        this.isSelected = selected
        this.refreshState()
    }

    setHighlight(move: boolean, path: boolean, attack: boolean) {
        if (this.mainOverlay.fillAlpha == 1) {
            this.highlightMode = "none"
            return
        }

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
        this.terrainGraphics?.destroy()
        this.cityGraphics?.destroy()
        this.roadsGraphics?.destroy()
        this.mainOverlay.destroy()
        this.cityRangeOverlay.destroy()
        this.highlight.destroy()
        this.pathHighlight.destroy()
        this.borderLines.forEach(it => it.destroy())
        this.rivers?.forEach(it => it.destroy())
        this.overlayTween?.destroy()
        super.destroy()
    }
}