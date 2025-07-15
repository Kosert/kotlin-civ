import { Tile } from "../tile"
import MultiKey from "../util/multi-key"
import { civ } from "hexcore-js"
import { hexcore } from "hexcore-js"
import { TestData } from "hexcore-js"

export class MainScene extends Phaser.Scene {
    private myFirstSprite: Phaser.GameObjects.Sprite

    constructor() {
        super({
            key: "MainScene"
        })
    }

    private leftKey: MultiKey
    private rightKey: MultiKey
    private upKey: MultiKey
    private downKey: MultiKey

    private tiles = new Map<hexcore.Coordinates, Tile>()
    private gameApi = civ.GameApi.Companion.fromGameState(TestData.gameState1)
    private playersMap = new Map<String, civ.Player>()
    private player: civ.Player

    private hovered?: hexcore.PlayerTileData
    private selected?: hexcore.PlayerTileData

    private test: Phaser.GameObjects.Arc

    preload(): void {

    }

    create(): void {
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W } = Phaser.Input.Keyboard.KeyCodes
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        this.input.mouse.disableContextMenu()

        TestData.gameState1.players.asJsReadonlyArrayView().forEach(it => {
            this.playersMap.set(it.playerId, it)
        })

        const self = this
        this.input.on(Phaser.Input.Events.POINTER_DOWN, function(pointer: Phaser.Input.Pointer) {
            // if (!self.input.mouse.locked) {
            //     self.input.mouse.requestPointerLock()
            // }

            if (pointer.leftButtonDown()) {
                if (self.selected) {
                    self.tiles.get(self.selected.coordinates).setSelected(false)
                }
                self.selected = self.hovered
                if (self.hovered) {
                    self.tiles.get(self.hovered.coordinates).setSelected(true)
                }

                console.log("Selected: ", self.selected)
            }
            
            if (pointer.rightButtonDown()) {
                const target = self.hovered
                const targetTile = self.tiles.get(self.hovered?.coordinates)

                const selectedUnit = self.selected?.unit
                if (selectedUnit) {

                    if (target.unit) {
                        //todo attack
                    } else {
                        //todo move
                        self.gameApi.execute(new civ.Move(selectedUnit.unitId, target.coordinates))
                    }
                    
                }
            }
        })

        this.player = TestData.gameState1.players.asJsReadonlyArrayView()[0]
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().map(it => {
            this.tiles.set(it.coordinates, new Tile(this, it, this.playersMap))
        })

        this.tiles.forEach(it =>
            this.add.existing(it)
        )



        // this.test = this.add.circle(0, 0, 16, 0xff0000).setDepth(10)
    }

    update(time: number, delta: number): void {
        const gameW: number = this.sys.game.config.width as number
        const gameH: number = this.sys.game.config.height as number

        let horizontalMove = 0
        let verticalMove = 0

        const mouseX = Phaser.Math.Clamp(this.input.activePointer.x, 0, gameW)
        const mouseY = Phaser.Math.Clamp(this.input.activePointer.y, 0, gameH)

        const mouseScrollThreshold = 25
        if (mouseX - mouseScrollThreshold < 0) {
            horizontalMove = -5
        } else if (mouseX + mouseScrollThreshold > gameW) {
            horizontalMove = 5
        }

        if (mouseY - mouseScrollThreshold < 0) {
            verticalMove = -5
        } else if (mouseY + mouseScrollThreshold > gameH) {
            verticalMove = 5
        }

        if (this.rightKey.isDown()) {
            horizontalMove = 5
        } else if (this.leftKey.isDown()) {
            horizontalMove = -5
        }

        if (this.downKey.isDown()) {
            verticalMove = 5
        } else if (this.upKey.isDown()) {
            verticalMove = -5
        }

        this.cameras.main.scrollX += horizontalMove
        this.cameras.main.scrollY += verticalMove
        this.input.activePointer.updateWorldPoint(this.cameras.main)

        // this.test.x = this.input.activePointer.worldX
        // this.test.y = this.input.activePointer.worldY


        const x = (this.input.activePointer.worldX - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const y = (this.input.activePointer.worldY - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const q = (Tile.SQRT3/3 * x - 1.0/3 * y)
        const r = (2.0/3.0 * y)
        const s = -q-r
        const hoveredCoordinates = hexcore.Coordinates.Companion.fromDoubles(q, r, s)

        this.hovered = null
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().forEach(it => {
            const tile = this.tiles.get(it.coordinates)
            tile.updateTileData(it)
            const isThisHovered = tile.coordinates.equals(hoveredCoordinates)
            tile.setHovered(isThisHovered)
            if (isThisHovered) {
                this.hovered = it
            }
        })

    }

}
