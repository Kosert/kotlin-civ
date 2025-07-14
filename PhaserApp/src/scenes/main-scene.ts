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

    private test: Phaser.GameObjects.Arc

    preload(): void {

    }

    create(): void {
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W } = Phaser.Input.Keyboard.KeyCodes
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        const player1 = TestData.gameState1.players.asJsReadonlyArrayView()[0]
        this.tiles = this.gameApi.tilesForPlayer(player1.playerId).asJsReadonlyArrayView().map(it => {
            return new Tile(this, it.coordinates.q, it.coordinates.r)
        })

        this.tiles.forEach(it =>
            this.add.existing(it)
        )

        this.test = this.add.circle(0, 0, 16, 0xff0000)

        this.input.on(Phaser.Input.Events.POINTER_MOVE, function (pointer, localX, localY, event) {
            this.test.x = this.input.activePointer.worldX
            this.test.y = this.input.activePointer.worldY

            //todo mark 
        })
    }

    update(time: number, delta: number): void {
        const gameW: number = this.sys.game.config.width as number
        const gameH: number = this.sys.game.config.height as number

        let horizontalMove = 0
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

        // this.input.activePointer.updateWorldPoint(this.cameras.main)
        // this.test.x = this.input.activePointer.worldX
        // this.test.y = this.input.activePointer.worldY

        // const scrollX = (-gameW / 2 + this.player.x).coerceIn(this.cameraBounds.left, this.cameraBounds.right)
        // const scrollY = (-gameH / 2 + this.player.y).coerceIn(this.cameraBounds.top, this.cameraBounds.bottom)

        // this.cameras.main.setScroll(scrollX, scrollY)
    }

}
