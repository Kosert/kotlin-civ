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

    private tiles: Tile[]
    private gameApi = civ.GameApi.Companion.fromGameState(TestData.gameState1)
    private playersMap = new Map<String, civ.Player>()

    private test: Phaser.GameObjects.Arc

    preload(): void {

    }

    create(): void {
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W } = Phaser.Input.Keyboard.KeyCodes
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        TestData.gameState1.players.asJsReadonlyArrayView().forEach(it => {
            this.playersMap.set(it.playerId, it)
        })

        const self = this
        // this.input.on(Phaser.Input.Events.POINTER_DOWN, function() {
        //     if (!self.input.mouse.locked) {
        //         self.input.mouse.requestPointerLock()
        //     }
        // })

        const player1 = TestData.gameState1.players.asJsReadonlyArrayView()[0]
        this.tiles = this.gameApi.tilesForPlayer(player1.playerId).asJsReadonlyArrayView().map(it => {
            return new Tile(this, it, this.playersMap)
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

        //todo
        const mouseX = Phaser.Math.Clamp(this.input.activePointer.x, 0, gameW)
        // console.log(this.input.activePointer.x, this.input.activePointer.x)
        const mouseScrollThreshold = 25
        if (/*this.input.activePointer.locked && */mouseX - mouseScrollThreshold < 0) {
            horizontalMove = -5
        } else if (/*this.input.activePointer.locked &&*/ this.input.activePointer.x + mouseScrollThreshold > gameW) {
            horizontalMove = 5
        }

        if (this.rightKey.isDown()) {
            horizontalMove = 5
        } else if (this.leftKey.isDown()) {
            horizontalMove = -5
        }

        let verticalMove = 0
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
        const hovered = hexcore.Coordinates.Companion.fromDoubles(q, r, s)
        this.tiles.forEach(it => {
            it.markHovered(it.coordinates.equals(hovered))
        })

    }

}
