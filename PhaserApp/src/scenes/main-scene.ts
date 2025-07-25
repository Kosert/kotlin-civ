import { Tile } from "../tile"
import FpsText from "../ui/fpsText"
import { BuildingIcons, UnitIcons } from "../ui/icons"
import { Ui } from "../ui/ui"
import { UiAction, UiActionEvent } from "../ui/ui-actions"
import MultiKey from "../util/multi-key"
import { civ } from "kotlin-civ"

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" })
    }

    private escKey: MultiKey
    private leftKey: MultiKey
    private rightKey: MultiKey
    private upKey: MultiKey
    private downKey: MultiKey

    private gameApi = civ.core.GameApi.Companion.fromGameState(civ.TestData.gameState2)
    private playersMap = new Map<String, civ.model.Player>()
    private player: civ.model.Player

    private hovered?: civ.model.PlayerTileData
    private selected?: civ.model.PlayerTileData | civ.model.CivUnit
    private selectedUnitPaths?: civ.hex.Paths
    private pathHighlights: civ.hex.Coordinates[] = []
    private moveHighlights: civ.hex.Coordinates[] = []
    private selectedCityRange: civ.hex.Coordinates[] = []

    private tiles = new Map<civ.hex.Coordinates, Tile>()
    private ui: Ui
    private fpsText: FpsText

    preload(): void {
        this.load.image("attack", "assets/icons/attack.png")
        this.load.image("attack_range", "assets/icons/attack_range.png")
        this.load.image("gold_coin", "assets/icons/gold_icon2.png")
        this.load.image("food_icon", "assets/icons/food_icon.png")
        this.load.image("wood_icon", "assets/icons/wood_icon.png")
        this.load.image("heart", "assets/icons/heart.png")
        this.load.image("placeholder", "assets/icons/placeholder50.png")
        this.load.image("speed", "assets/icons/speed.png")
        this.load.image("locked", "assets/icons/locked.png")
    
        this.load.image("road", "assets/icons/buildings/road.png")
        this.load.image("village_hall", "assets/icons/buildings/village_hall2.png")
        this.load.image("town_hall", "assets/icons/buildings/town_hall.png")
        this.load.image("windmill", "assets/icons/buildings/windmill.png")

        this.load.image("forest", "assets/forest.png")
        this.load.image("animals", "assets/animals.png")
        this.load.image("forest_animals", "assets/forest_animals.png")
        this.load.image("mountains", "assets/mountains.png")
        this.load.image("mountains_gold", "assets/mountains_gold.png")
        this.load.image("village", "assets/village.png")

        civ.model.Building.values().forEach(it => {
            this.load.image(BuildingIcons.get(it), "assets/icons/placeholder50.png")
        })
        civ.model.UnitType.values().forEach(it => {
            this.load.image(UnitIcons.get(it), "assets/icons/placeholder50.png")
        })

        this.load.bitmapFont("civ_font", "assets/fonts/civ_font.png", "assets/fonts/civ_font.xml")
    }

    create(): void {
        const self = this

        this.fpsText = new FpsText(this)
        this.ui = new Ui(this, this.gameApi)
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W, ESC } = Phaser.Input.Keyboard.KeyCodes
        this.escKey = new MultiKey(this, ESC)
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        this.input.mouse.disableContextMenu()

        civ.TestData.gameState2.players.asJsReadonlyArrayView().forEach(it => {
            this.playersMap.set(it.playerId, it)
        })

        this.input.on(Phaser.Input.Events.POINTER_DOWN, function(pointer: Phaser.Input.Pointer) {
            if (self.ui.isPointerInside(pointer)) {
                return
            }

            if (pointer.leftButtonDown()) {
                if (self.selected instanceof civ.model.CivUnit && self.selected.coordinates.equals(self.hovered?.coordinates)) {
                    self.select(self.hovered)
                } else if (self.hovered?.unit) {
                    self.select(self.hovered.unit)
                } else {
                    self.select(self.hovered)
                }
                console.log("Selected: ", self.selected?.coordinates, self.selected)
            }
            
            if (pointer.rightButtonDown()) {
                const target = self.hovered
                const targetTile = self.tiles.get(self.hovered?.coordinates)

                if (self.selected instanceof civ.model.CivUnit) {

                    if (self.selected.playerId == self.player.playerId) {
                        const selectedUnitId = self.selected.unitId
                        if (target.unit) {
                            const targetUnitId = target.unit.unitId
                            self.gameApi.execute(self.player.playerId, new civ.action.Attack(selectedUnitId, targetUnitId))
                            //todo
                        } else {
                            self.gameApi.execute(self.player.playerId, new civ.action.Move(selectedUnitId, target.coordinates))
                            const updatedUnit = self.gameApi.unitsFor(self.player.playerId).asJsReadonlyArrayView().find(it => it.unitId == selectedUnitId)
                            self.select(updatedUnit)
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

        this.events.on(UiActionEvent, function(action: UiAction, arg) {
            const seletedCoordinates = self.selected?.coordinates
            let gameAction
            switch (action) {
                case UiAction.SETTLE:
                    const settlers = self.selected as civ.model.CivUnit
                    gameAction = new civ.action.Settle(settlers.unitId)
                    if (self.tryExecute(gameAction)) {
                        self.select(null)
                    }
                    break;
                case UiAction.RECRUIT:
                    gameAction = new civ.action.Recruit(seletedCoordinates, arg as civ.model.UnitType)
                    if (self.tryExecute(gameAction)) {
                        self.select(self.gameApi.tilesForPlayer(self.player.playerId).asJsReadonlyArrayView().find(it => it.coordinates.equals(seletedCoordinates)))
                    }
                    break
                case UiAction.BUILD:
                    gameAction = new civ.action.Build(seletedCoordinates, arg as civ.model.Building)
                    if (self.tryExecute(gameAction)) {
                        self.select(self.gameApi.tilesForPlayer(self.player.playerId).asJsReadonlyArrayView().find(it => it.coordinates.equals(seletedCoordinates)))                    
                    }
                    break
                case UiAction.END_TURN:
                    self.gameApi.endTurn(self.player.playerId)
                    self.select(null)
                    break
                default:
                    break;
            }

        })
    }

    private tryExecute(gameAction: civ.action.Action): boolean {
        try {
            this.gameApi.execute(this.player.playerId, gameAction)
            return true
        } catch (error) {
            //todo alert user
            console.log(error)
            return false
        }
    }

    select(entity: civ.model.PlayerTileData | civ.model.CivUnit) {
        this.selected = entity
        this.selectedUnitPaths = null
        this.moveHighlights = []
        this.pathHighlights = []
        this.selectedCityRange = []
        this.ui.setSelection(entity)

        if (entity instanceof civ.model.CivUnit) {
            if (entity.playerId == this.player.playerId) {
                this.selectedUnitPaths = this.gameApi.actionsForUnit(this.player.playerId, entity.unitId)
                this.moveHighlights = Array.from(this.selectedUnitPaths.possibleTargets.asJsReadonlySetView())
            }
        } else if (entity instanceof civ.model.PlayerTileData) {

            
        } else {

        }
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

        if (this.escKey.isDown()) {
            this.select(null)
        }

        let hoveredCoordinates: civ.hex.Coordinates
        if (!this.ui.isPointerInside(this.input.activePointer)) {
            const x = (this.input.activePointer.worldX - Tile.HEX_OFFSET) / Tile.HEX_SIZE
            const y = (this.input.activePointer.worldY - Tile.HEX_OFFSET) / Tile.HEX_SIZE
            const q = (Tile.SQRT3/3 * x - 1.0/3 * y)
            const r = (2.0/3.0 * y)
            const s = -q-r
            hoveredCoordinates = civ.hex.Coordinates.Companion.fromDoubles(q, r, s)    
        }

        let hoverChanged = false
        if (!this.hovered?.coordinates.equals(hoveredCoordinates)) {
            hoverChanged = true
        }

        if (hoverChanged && this.selectedUnitPaths && hoveredCoordinates) {
            const path = this.selectedUnitPaths.getPath(hoveredCoordinates)
            if (path) {
                this.pathHighlights = path.asJsReadonlyArrayView().map(segment => segment.coordinates)
            } else {
                this.pathHighlights = []
            }
        }

        this.hovered = null
        this.player = this.gameApi.currentPlayer
        this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId))
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().forEach(data => {
            const tile = this.tiles.get(data.coordinates)
            tile.updateTileData(data)
            tile.setHighlight(
                this.moveHighlights.some(it => it.equals(data.coordinates)),
                this.pathHighlights.some(it => it.equals(data.coordinates)),
                data.unit && data.unit.playerId != this.player.playerId,
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
