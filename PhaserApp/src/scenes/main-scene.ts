import { Tile } from "../gameobjects/tile"
import { Unit } from "../gameobjects/unit"
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

    private gameApi = civ.core.GameApi.Companion.fromGameState(civ.TestData.generated)
    private playersMap = new Map<string, civ.model.Player>()
    private player: civ.model.Player

    private hovered?: civ.model.PlayerTileData
    private selected?: civ.model.PlayerTileData | civ.model.CivUnit
    private selectedUnitPaths?: civ.hex.Paths
    private pathHighlights: civ.hex.Coordinates[] = []
    private moveHighlights: civ.hex.Coordinates[] = []
    private selectedCityRange: civ.hex.Coordinates[] = []

    private tiles: Tile[] = []
    private units = new Map<string, Unit>()
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

        this.load.image("river_bottom_left", "assets/river_bottom_left.png")
        this.load.image("river_left", "assets/river_left.png")
        this.load.image("river_top_left", "assets/river_top_left.png")
        this.load.image("river_bottom_right", "assets/river_bottom_right.png")
        this.load.image("river_right", "assets/river_right.png")
        this.load.image("river_top_right", "assets/river_top_right.png")

        this.load.image("forest", "assets/forest.png")
        this.load.image("animals", "assets/animals.png")
        this.load.image("forest_animals", "assets/forest_animals.png")
        this.load.image("mountains", "assets/mountains.png")
        this.load.image("mountains_gold", "assets/mountains_gold.png")

        this.load.image("village", "assets/village.png")
        this.load.image("town", "assets/town.png")

        const self = this
        this.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, function(file: Phaser.Loader.File) {
            this.load.image(file.key, "assets/icons/placeholder50.png")
        }, this)

        civ.model.Building.values().forEach(it => {
            this.load.image(BuildingIcons.get(it), "assets/icons/buildings/" + BuildingIcons.get(it) + ".png")
        })
        civ.model.UnitType.values().forEach(it => {
            this.load.image(UnitIcons.get(it), "assets/icons/units/" + UnitIcons.get(it) + ".png")
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

        civ.TestData.generated.players.asJsReadonlyArrayView().forEach(it => {
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
            }
            
            if (pointer.rightButtonDown()) {
                const target = self.hovered

                if (self.selected instanceof civ.model.CivUnit) {

                    if (self.selected.playerId == self.player.playerId) {
                        const selectedUnitId = self.selected.unitId
                        if (target.unit) {
                            const targetUnitId = target.unit.unitId
                            const gameAction = new civ.action.Attack(selectedUnitId, targetUnitId)
                            if (self.tryExecute(gameAction)) {
                                const updatedTile = self.gameApi.tilesForPlayer(self.player.playerId).asJsReadonlyArrayView().find(it => it.unit?.unitId == selectedUnitId)
                                self.select(updatedTile?.unit)
                            }
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

        this.player = civ.TestData.generated.players.asJsReadonlyArrayView()[0]
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().map(it => {
            this.tiles.push(new Tile(this, it, this.playersMap))
            // this.tiles.set(it.coordinates, new Tile(this, it, this.playersMap))
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
                case UiAction.CONQUER:
                    gameAction = new civ.action.Conquer(seletedCoordinates)
                    if (self.tryExecute(gameAction)) {
                        self.select(self.gameApi.tilesForPlayer(self.player.playerId).asJsReadonlyArrayView().find(it => it.coordinates.equals(seletedCoordinates)))                    
                    }
                    break
                case UiAction.DISBAND:
                    //todo
                    break
                case UiAction.END_TURN:
                    self.gameApi.endTurn(self.player.playerId)
                    self.select(null)
                    break
                default:
                    break;
            }
        })

        // @ts-ignore fixme
        this.player = { playerId: "" }
        // this.gameApi.registerEventListener(this.player.playerId, function(event) { self.onGameEvent(event) })
        // this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId))
    }

    private tryExecute(gameAction: civ.action.Action): boolean {
        const result = this.gameApi.execute(this.player.playerId, gameAction)
        if (result.errorAlert) {
            this.ui.postAlert(result.errorAlert)
        }
        if (result.exception) {
            console.log(result.exception.message, result.exception)
        }
        return result.isSuccess
    }

    private onGameEvent(event: civ.events.GameEvent) {
        console.log("Game event:", event)
        if (event instanceof civ.events.StockUpdated) {
            this.ui.setStockpiles(event.stock)

        } else if (event == civ.events.VisionChanged) {
            this.updateUnitsFromTiles()

        } else if (event instanceof civ.events.UnitEvent.Created) {
            const tile = this.tiles.find(tile => tile.coordinates.equals(event.unit.coordinates))
            const unitColor = this.playersMap.get(event.unit.playerId).color
            this.units.set(event.unitId, new Unit(this, event.unit, unitColor, tile.x, tile.y))

        } else if (event instanceof civ.events.UnitEvent.Moved) {
            const tile = this.tiles.find(tile => tile.coordinates.equals(event.newCoordinates))
            const unit = this.units.get(event.unitId)
            unit.updateUnitPosition(tile.x, tile.y)

        } else if (event instanceof civ.events.UnitEvent.Updated) {
            const unit = this.units.get(event.unitId)
            unit.updateUnitHp(event.unit.hp)

        } else if (event instanceof civ.events.UnitEvent.Vanish) {
            const unit = this.units.get(event.unitId)
            unit.destroy()
            this.units.delete(unit.unitId)
        }
    }

    private updateUnitsFromTiles() {
        const unitsFromApi: civ.model.CivUnit[] = []
        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().forEach((data, index) => {
            const tile = this.tiles[index]
            // tile.updateTileData(data)
            // tile.setHighlight(
                // this.moveHighlights.some(it => it.equals(data.coordinates)),
                // this.pathHighlights.some(it => it.equals(data.coordinates)),
                // data.unit && data.unit.playerId != this.player.playerId,
            // )
            // const isHovered = tile.coordinates.equals(hoveredCoordinates)
            // const isSelected = tile.coordinates.equals(this.selected?.coordinates)
            // tile.setStates(isHovered, isSelected)
            // if (isHovered) {
                // this.hovered = data
            // }

            if (data.unit) {
                unitsFromApi.push(data.unit)
            }
        })

        this.units.forEach(it => {
            const updated = unitsFromApi.find(unit => unit.unitId == it.unitId)
            if (updated) {
                // const tile = this.tiles.find(tile => tile.coordinates.equals(updated.coordinates))
                // it.updateUnitData(tile.x, tile.y, updated.hp)
            } else {
                it.tryDestroy()
                this.units.delete(it.unitId)
            }
        })

        unitsFromApi.forEach(it => {
            if (!this.units.has(it.unitId)) {
                const tile = this.tiles.find(tile => tile.coordinates.equals(it.coordinates))
                const unitColor = this.playersMap.get(it.playerId).color
                this.units.set(it.unitId, new Unit(this, it, unitColor, tile.x, tile.y))
            }
        })
    }

    select(entity: civ.model.PlayerTileData | civ.model.CivUnit) {
        this.selected = entity
        this.selectedUnitPaths = null
        this.moveHighlights = []
        this.pathHighlights = []
        this.selectedCityRange = []
        this.ui.setSelection(entity)
        console.log("Select", entity)

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
            horizontalMove = -1
        } else if (mouseX + mouseScrollThreshold > gameW) {
            horizontalMove = 1
        }

        if (mouseY - mouseScrollThreshold < 0) {
            verticalMove = -1
        } else if (mouseY + mouseScrollThreshold > gameH) {
            verticalMove = 1
        }

        if (this.rightKey.isDown()) {
            horizontalMove = 1
        } else if (this.leftKey.isDown()) {
            horizontalMove = -1
        }

        if (this.downKey.isDown()) {
            verticalMove = 1
        } else if (this.upKey.isDown()) {
            verticalMove = -1
        }

        this.cameras.main.scrollX += horizontalMove * delta
        this.cameras.main.scrollY += verticalMove * delta
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

        if (this.player.playerId != this.gameApi.currentPlayer.playerId) {
            this.gameApi.unregisterEventListeners(this.player.playerId)
            this.player = this.gameApi.currentPlayer
            const self = this
            this.gameApi.registerEventListener(this.player.playerId, function(event) { self.onGameEvent(event) })
            this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId))
            this.updateUnitsFromTiles()
            console.log("player switched")
        }

        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().forEach((data, index) => {
            const tile = this.tiles[index]
            //todo migrate from update() to events
            tile.updateTileData(data)
            tile.setHighlight(
                this.moveHighlights.some(it => it.equals(tile.coordinates)),
                this.pathHighlights.some(it => it.equals(tile.coordinates)),
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
