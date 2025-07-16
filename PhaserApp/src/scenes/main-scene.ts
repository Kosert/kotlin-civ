import { Tile } from "../tile"
import FpsText from "../ui/fpsText"
import { Ui } from "../ui/ui"
import MultiKey from "../util/multi-key"
import { civ } from "kotlin-civ"

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

    private gameApi = civ.core.GameApi.Companion.fromGameState(civ.TestData.gameState1)
    private playersMap = new Map<String, civ.model.Player>()
    private player: civ.model.Player

    private hovered?: civ.model.PlayerTileData
    private selected?: civ.model.PlayerTileData //sleect unit or tile
    private moveHighlights: civ.hex.Coordinates[] = []

    private tiles = new Map<civ.hex.Coordinates, Tile>()
    private ui: Ui
    private fpsText: FpsText

    preload(): void {
        this.load.image("attack", "assets/icons/attack.png")
        this.load.image("attack_range", "assets/icons/attack_range.png")
        this.load.image("gold_coin", "assets/icons/gold_coin.png")
        this.load.image("heart", "assets/icons/heart.png")
        this.load.image("placeholder", "assets/icons/placeholder.png")
        this.load.image("speed", "assets/icons/speed.png")
        this.load.image("locked", "assets/icons/locked.png")
    }

    create(): void {
        this.fpsText = new FpsText(this)
        this.ui = new Ui(this)
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W } = Phaser.Input.Keyboard.KeyCodes
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        this.input.mouse.disableContextMenu()

        civ.TestData.gameState1.players.asJsReadonlyArrayView().forEach(it => {
            this.playersMap.set(it.playerId, it)
        })

        const self = this
        this.input.on(Phaser.Input.Events.POINTER_DOWN, function(pointer: Phaser.Input.Pointer) {

            if (pointer.leftButtonDown()) {
                if (self.selected) {
                    // self.tiles.get(self.selected.coordinates).setSelected(false)
                }
                self.selected = self.hovered
                self.moveHighlights = []
                if (self.selected) {
                    // self.tiles.get(self.selected.coordinates).setSelected(true)
                    if (self.selected.unit?.playerId == self.player.playerId) {
                        const paths = self.gameApi.movementRangeFor(self.selected.unit.unitId)
                        self.moveHighlights = Array.from(paths.possibleTargets.asJsReadonlySetView())
                        console.log(self.moveHighlights)
                    }
                }

                console.log("Selected: ", self.selected)
            }
            
            if (pointer.rightButtonDown()) {
                const target = self.hovered
                const targetTile = self.tiles.get(self.hovered?.coordinates)

                const selectedUnit = self.selected?.unit
                if (selectedUnit) {

                    if (selectedUnit.playerId == self.player.playerId) {
                        if (target.unit) {
                            //todo attack
                        } else {
                            //todo move
                            self.gameApi.execute(new civ.action.Move(selectedUnit.unitId, target.coordinates))
                            self.selected = null
                            self.moveHighlights = []
                        }
                    } else {
                        //selected enemy unit
                    }
                    
                }
            }
        })

        this.player = civ.TestData.gameState1.players.asJsReadonlyArrayView()[0]
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().map(it => {
            this.tiles.set(it.coordinates, new Tile(this, it, this.playersMap))
        })

        this.tiles.forEach(it =>
            this.add.existing(it)
        )
    }

    update(time: number, delta: number): void {
        this.fpsText.update()
        const gameW: number = this.sys.game.config.width as number
        const gameH: number = this.sys.game.config.height as number

        let horizontalMove = 0
        let verticalMove = 0

        const mouseX = Phaser.Math.Clamp(this.input.activePointer.x, 0, gameW)
        const mouseY = Phaser.Math.Clamp(this.input.activePointer.y, 0, gameH)

        const mouseScrollThreshold = NaN//25
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


        const x = (this.input.activePointer.worldX - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const y = (this.input.activePointer.worldY - Tile.HEX_OFFSET) / Tile.HEX_SIZE
        const q = (Tile.SQRT3/3 * x - 1.0/3 * y)
        const r = (2.0/3.0 * y)
        const s = -q-r
        //todo null if pointer is over UI
        const hoveredCoordinates = civ.hex.Coordinates.Companion.fromDoubles(q, r, s)

        this.hovered = null
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().forEach(data => {
            const tile = this.tiles.get(data.coordinates)
            tile.updateTileData(data)
            tile.setHighlight(
                this.moveHighlights.some(it => it.equals(data.coordinates)),
                false,
            )
            const isHovered = tile.coordinates.equals(hoveredCoordinates)
            const isSelected = tile.coordinates.equals(this.selected?.coordinates)
            tile.setStates(isHovered, isSelected)
            if (isHovered) {
                this.hovered = data
            }
        })

    }

}
