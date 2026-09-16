import { civ } from "kotlin-civ"
import { Scene } from "phaser"
import { Tile } from "../gameobjects/tile";

export class UiTile extends Phaser.GameObjects.Polygon {

    static readonly SQRT3 = Math.sqrt(3.0)
    static readonly HEX_OFFSET = 0//250
    static readonly HEX_SIZE = 30
    static readonly HEX_HEIGHT = this.HEX_SIZE * 2
    static readonly HEX_WIDTH = this.HEX_SIZE * this.SQRT3

    static readonly ELEMENT_SCALE = UiTile.HEX_SIZE / Tile.HEX_SIZE

    private terrainGraphics: Phaser.GameObjects.Image
    private rivers: Map<civ.hex.HexEdge, Phaser.GameObjects.Image>
    private roadsGraphics: Phaser.GameObjects.Image
    private cityGraphics: Phaser.GameObjects.Image
    private overlay: Phaser.GameObjects.Polygon

    constructor(
        readonly scene: Scene,
        x: number,
        y: number,
    ) {
        const weirdOffsetFix = { x: UiTile.HEX_WIDTH / 2, y: UiTile.HEX_SIZE }
        const centerX = x//(Tile.SQRT3 * tileData.coordinates.q + Tile.SQRT3/2 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const centerY = y//(1.5 * tileData.coordinates.r) * Tile.HEX_SIZE + Tile.HEX_OFFSET
        const polygonPoints = [
            0 + weirdOffsetFix.x, -UiTile.HEX_SIZE + weirdOffsetFix.y,
            UiTile.HEX_WIDTH / 2 + weirdOffsetFix.x, -UiTile.HEX_SIZE / 2 + weirdOffsetFix.y,
            UiTile.HEX_WIDTH / 2 + weirdOffsetFix.x, UiTile.HEX_SIZE / 2 + weirdOffsetFix.y,
            0 + weirdOffsetFix.x,  UiTile.HEX_SIZE + weirdOffsetFix.y,
            - UiTile.HEX_WIDTH / 2 + weirdOffsetFix.x, UiTile.HEX_SIZE / 2 + weirdOffsetFix.y,
            - UiTile.HEX_WIDTH / 2 + weirdOffsetFix.x, -UiTile.HEX_SIZE / 2 + weirdOffsetFix.y,
        ]
        super(scene, centerX, centerY, polygonPoints)

        this.setScrollFactor(0).setDepth(91).setOrigin(0, 0)

        this.rivers = new Map<civ.hex.HexEdge, Phaser.GameObjects.Image>()
        civ.hex.HexEdge.values().forEach(edge => {
            this.rivers.set(
                edge,
                this.scene.add.image(this.x, this.y, "river_" + edge.name.toLowerCase())
                    .setOrigin(0, 0)
                    .setDepth(92)
                    .setScrollFactor(0)
                    .setVisible(false)
                    .setScale(UiTile.ELEMENT_SCALE)
            )
        })

        this.roadsGraphics = this.scene.add.image(this.x, this.y, "roads")
            .setOrigin(0, 0)
            .setDepth(92)
            .setScrollFactor(0)
            .setVisible(false)
            .setScale(UiTile.ELEMENT_SCALE)

        this.terrainGraphics = this.scene.add.image(this.x, this.y, "")
            .setScrollFactor(0)
            .setOrigin(0, 0)
            .setDepth(92)
            .setVisible(false)
            .setScale(UiTile.ELEMENT_SCALE)

        this.cityGraphics = this.scene.add.image(this.x, this.y, "")
            .setOrigin(0, 0)
            .setDepth(92)
            .setScrollFactor(0)
            .setVisible(false)
            .setScale(UiTile.ELEMENT_SCALE)

        this.overlay = scene.add.polygon(centerX, centerY, polygonPoints)
            .setDepth(92)
            .setOrigin(0, 0)
            .setFillStyle(0x000000, 0)
            .setScrollFactor(0)
    }

    setVisible(value: boolean): this {
        super.setVisible(value)
        const alpha = value ? 1 : 0
        this.terrainGraphics.setAlpha(alpha)
        this.rivers.forEach(it => it.setAlpha(alpha))
        this.roadsGraphics.setAlpha(alpha)
        this.cityGraphics.setAlpha(alpha)
        this.overlay.setVisible(value)
        return this
    }

    updateTileData(data: civ.model.PlayerTileData) {
        if (!data.tile) {
            this.overlay.fillAlpha = 0
            this.terrainGraphics.setVisible(false)
            this.rivers.forEach(it => it.setVisible(false))
            this.roadsGraphics.setVisible(false)
            this.cityGraphics.setVisible(false)
            this.setFillStyle(0x111111)
            return
        }

        let terrainTextureName: string
        if (data.tile instanceof civ.tile.Water) {
            this.setFillStyle(0x2389da)
        } else {
            this.setFillStyle(0x489030)
        }

        if (data.tile instanceof civ.tile.Grass) {
            const rivers = data.tile.riverEdges.asJsReadonlyArrayView()
            this.rivers.forEach((riverGraphics, edge) => {
                riverGraphics.setVisible(rivers.includes(edge))
            })

            if (data.tile.forest && data.tile.animals) {
                terrainTextureName = "forest_animals"
            } else if (data.tile.forest) {
                terrainTextureName = "forest"
            } else if (data.tile.animals) {
                terrainTextureName = "animals"
            }
        } else {
            this.rivers.forEach(it => it.setVisible(false))
            if (data.tile instanceof civ.tile.Mountains) {
                if (data.tile.gold) {
                    terrainTextureName = "mountains_gold"
                } else {
                    terrainTextureName = "mountains"
                }
            }
        }

        if (terrainTextureName) {
            this.terrainGraphics.setTexture(terrainTextureName).setVisible(true)
        } else {
            this.terrainGraphics.setVisible(false)
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
        if (cityTextureName) {
            this.cityGraphics.setTexture(cityTextureName).setVisible(true)
        } else {
            this.cityGraphics.setVisible(false)
        }

        this.roadsGraphics.setVisible(
            data.tile.buildings.asJsReadonlySetView().has(civ.model.Building.ROAD)
        )

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