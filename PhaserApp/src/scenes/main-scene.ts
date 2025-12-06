import { Projectile } from "../gameobjects/projectile"
import { Tile } from "../gameobjects/tile"
import { Unit } from "../gameobjects/unit"
import FpsText from "../ui/fpsText"
import { BuildingIcons, UnitIcons } from "../ui/icons"
import { Ui } from "../ui/ui"
import { UiAction, UiActionEvent } from "../ui/ui-actions"
import MultiKey from "../util/multi-key"
import { civ } from "kotlin-civ"
import { TestJson } from "./test-json"
import { Menu } from "../ui/menu"

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" })
    }

    private escKey: MultiKey
    private leftKey: MultiKey
    private rightKey: MultiKey
    private upKey: MultiKey
    private downKey: MultiKey

    private gameApi?: civ.core.GameApi = null//civ.core.GameApi.Companion.fromGameState(civ.core.GameState.Companion.fromJson(new TestJson().json))
    private playersMap = new Map<string, civ.model.Player>()
    private player: civ.model.Player

    private hovered?: civ.model.PlayerTileData
    private selected?: civ.model.PlayerTileData | civ.model.CivUnit
    private selectedUnitPaths?: civ.hex.Paths
    private pathHighlights: civ.hex.Coordinates[] = []
    private moveHighlights: civ.hex.Coordinates[] = []
    private justAttackedUnit?: civ.model.CivUnit

    private tiles: Tile[] = []
    private units = new Map<string, Unit>()
    private ui: Ui
    private fpsText: FpsText
    private scrollingTween: Phaser.Tweens.Tween
    private menu: Menu
    
    private playerSwitchingEnabled: boolean = false//true

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
        this.load.image("roads", "assets/roads.png")

        this.load.image("village", "assets/village.png")
        this.load.image("town", "assets/town.png")
        this.load.image("city", "assets/city.png")

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
        // @ts-expect-error
        window.generateGameState = () => {
            return self.gameApi.generateGameState().toJson()
        }

        this.fpsText = new FpsText(this)
        this.ui = new Ui(this)
        this.menu = new Menu(this)
        const { LEFT, RIGHT, UP, DOWN, S, A, D, W, ESC } = Phaser.Input.Keyboard.KeyCodes
        this.escKey = new MultiKey(this, ESC)
        this.leftKey = new MultiKey(this, LEFT, A)
        this.rightKey = new MultiKey(this, RIGHT, D)
        this.upKey = new MultiKey(this, W, UP)
        this.downKey = new MultiKey(this, S, DOWN)

        this.input.mouse.disableContextMenu()


        // this.gameApi.allPlayers().asJsReadonlyArrayView().forEach(it => {
        //     this.playersMap.set(it.playerId, it)
        // })

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
                            const targetUnitCoords = target.unit.coordinates
                            const gameAction = new civ.action.Attack(selectedUnitId, targetUnitCoords)
                            self.justAttackedUnit = self.selected
                            if (self.tryExecute(gameAction)) {
                                self.select(null)
                            }
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
        
        //fixme player that should be the player, not current
        // this.player = this.gameApi.currentPlayer //civ.TestData.generated.players.asJsReadonlyArrayView()[0]
        // this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().map(it => {
        //     this.tiles.push(new Tile(this, it, this.playersMap))
        //     // this.tiles.set(it.coordinates, new Tile(this, it, this.playersMap))
        // })

        // this.tiles.forEach(it =>
        //     this.add.existing(it)
        // )

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
        // this.player = { playerId: "" }
        // this.gameApi.registerEventListener(this.player.playerId, function(event) { self.onGameEvent(event) })
        // this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId), this.gameApi.incomeFor(this.player.playerId))
        // this.updateUnitsFromTiles()
        
        // this.initGameApi(civ.core.GameState.Companion.fromJson(new TestJson().json))
        this.menu.onEscClicked()
    }

    private initGameApi(gameState: civ.core.GameState) {
        this.select(null)
        this.gameApi?.unregisterEventListeners(this.player.playerId)
        this.tiles.forEach(it => it.destroy())
        this.tiles = []
        this.units.forEach(it => it.destroy())
        this.units.clear()
        this.playersMap.clear()
        this.player = null
        this.ui.gameApi = null
        this.menu.setGameApi(null)

        if (!gameState)
            return

        this.gameApi = civ.core.GameApi.Companion.fromGameState(gameState)
        this.gameApi.allPlayers().asJsReadonlyArrayView().forEach(it => {
            this.playersMap.set(it.playerId, it)
        })
        this.player = this.gameApi.allPlayers().asJsReadonlyArrayView().find(it => it.aiType == null )

        this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView().map(it => {
            this.tiles.push(new Tile(this, it, this.playersMap))
        })
        this.tiles.forEach(it => this.add.existing(it))
        this.ui.gameApi = this.gameApi
        this.menu.setGameApi(this.gameApi)
        this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId), this.gameApi.incomeFor(this.player.playerId))
        const self = this
        this.gameApi.registerEventListener(this.player.playerId, function(event) { self.onGameEvent(event) })
        this.updateUnitsFromTiles()

        const firstCity = this.gameApi.citiesFor(this.player.playerId).asJsReadonlyArrayView().values().next().value
        if (firstCity) {
            this.scrollToTile(firstCity.coordinates)
        } else {
            const firstUnit = this.gameApi.unitsFor(this.player.playerId).asJsReadonlyArrayView().values().next().value
            if (firstUnit) {
                this.scrollToTile(firstUnit.coordinates)
            }
        }
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
            this.ui.setStockpiles(event.stock, event.income)

        } else if (event == civ.events.VisionChanged) {
            this.updateUnitsFromTiles()

        } else if (event instanceof civ.events.UnitEvent.Created) {
            const tile = this.tiles.find(tile => tile.coordinates.equals(event.unit.coordinates))
            const unitColor = this.playersMap.get(event.unit.playerId).color
            this.units.set(event.unitId, new Unit(this, event.unit, unitColor, tile.x, tile.y))
            this.scrollToTile(tile.coordinates)

        } else if (event instanceof civ.events.UnitEvent.Moved) {
            //todo unlock visionChanged events
            const tile = this.tiles.find(tile => tile.coordinates.equals(event.newCoordinates))
            const unit = this.units.get(event.unitId)
            unit.updateUnitPosition(tile.x, tile.y, tile.coordinates)
            this.scrollToTile(tile.coordinates)

        } else if (event instanceof civ.events.UnitEvent.Updated) {
            //noop

        } else if (event instanceof civ.events.UnitEvent.Vanish) {
            const unit = this.units.get(event.unitId)
            unit.destroy()
            this.units.delete(unit.unitId)

        } else if (event instanceof civ.events.AttackEvent) {
            //todo prevent visionChanged events until animations finish
            const tileFrom = this.tiles.find(tile => tile.coordinates.equals(event.from))
            const tileTo = this.tiles.find(tile => tile.coordinates.equals(event.to))
            if (!this.isTileVisible(event.from)) {
                this.scrollToTile(event.from)
            } else {
                this.scrollToTile(event.to)
            }

            const allUnits = this.gameApi.tilesForPlayer(this.player.playerId).asJsReadonlyArrayView()
                .map(it => it.unit)
                .filter(it => it)
            const attacker = allUnits.find(it => it.coordinates.equals(event.from))
            // not in api -> unit was killed and removed -> hp = 0
            const updatedAttackerHp = allUnits.find(it => it.coordinates.equals(event.from))?.hp ?? 0
            const updatedDefenderHp = allUnits.find(it => it.coordinates.equals(event.to))?.hp ?? 0
            
            const localUnits = [...this.units.values()]
            const attackerUnit: Unit = localUnits.find(it => it.getCoordinates().equals(event.from))
            const defenderUnit: Unit = localUnits.find(it => it.getCoordinates().equals(event.to))

            let shouldReselect = false
            if (this.justAttackedUnit && attacker?.unitId == this.justAttackedUnit?.unitId) {
                shouldReselect = true
                this.justAttackedUnit = null
            }

            const self = this
            if (event.isRanged) {
                const angleFrom = Phaser.Math.Angle.BetweenPoints(tileFrom, tileTo)
                defenderUnit?.updateUnitHp(updatedDefenderHp, 400)
                const projectile = new Projectile(this, tileFrom.x, tileFrom.y, angleFrom, tileTo.x, tileTo.y, () => {
                    if (shouldReselect) {
                        self.select(attacker)
                    }
                })
                this.add.existing(projectile)
            } else {
                if (attackerUnit) {
                    const angleFrom = Phaser.Math.Angle.BetweenPoints(tileFrom, tileTo)
                    attackerUnit.bump(angleFrom, 100)
                    defenderUnit?.updateUnitHp(updatedDefenderHp, 200)
                } else {
                    defenderUnit?.updateUnitHp(updatedDefenderHp)
                }

                if (defenderUnit && defenderUnit.unitType.defense > 0) {
                    const angleTo = Phaser.Math.Angle.BetweenPoints(tileTo, tileFrom)
                    attackerUnit?.updateUnitHp(updatedAttackerHp, 500)
                    defenderUnit.bump(angleTo, 400, () => { 
                        if (shouldReselect) {
                            this.select(attacker)
                        }
                    })
                } else {
                    attackerUnit?.updateUnitHp(updatedAttackerHp)
                    if (shouldReselect) {
                        this.select(attacker)
                    }
                }
            }
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
                this.units.set(it.unitId, new Unit(this, it, unitColor, tile.x, tile.y, it.hp))
            }
        })
    }

    private isTileVisible(coordinates: civ.hex.Coordinates): boolean {
        //todo padding?
        const viewport = new Phaser.Geom.Rectangle(
            this.cameras.main.scrollX,// - this.cameras.main.width / 2,
            this.cameras.main.scrollY,// - this.cameras.main.height / 2,
            this.cameras.main.width,
            this.cameras.main.height - Ui.uiHeight
        )

        const tile = this.tiles.find(tile => tile.coordinates.equals(coordinates))
        return viewport.contains(tile.x, tile.y)
    }

    private scrollToTile(coordinates: civ.hex.Coordinates, force: boolean = false) {
        if (this.isTileVisible(coordinates) && !force)
            return

        const startCameraX = this.cameras.main.scrollX
        const startCameraY = this.cameras.main.scrollY

        const tile = this.tiles.find(tile => tile.coordinates.equals(coordinates))
        const targetX = tile.x - this.cameras.main.width / 2
        const targetY = tile.y - this.cameras.main.height / 2

        this.scrollingTween?.destroy()
        this.scrollingTween = this.tweens.addCounter({
            ease: 'Cubic',
            duration: 300,
        })
        const self = this
        this.scrollingTween.on(Phaser.Tweens.Events.TWEEN_UPDATE, function(tween, key, target, current: number , previous) {
            self.cameras.main.scrollX = startCameraX + (targetX - startCameraX) * current
            self.cameras.main.scrollY = startCameraY + (targetY - startCameraY) * current
            self.input.activePointer.updateWorldPoint(self.cameras.main)
        })
    }

    select(entity: civ.model.PlayerTileData | civ.model.CivUnit) {
        this.selected = entity
        this.selectedUnitPaths = null
        this.moveHighlights = []
        this.pathHighlights = []
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

        const mouseX = this.input.activePointer.x
        const mouseY = this.input.activePointer.y

        const mouseScrollThreshold = this.input.activePointer.locked ? 20 : NaN
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

        if (horizontalMove != 0 || verticalMove != 0) {
            this.scrollingTween?.destroy()
            this.cameras.main.scrollX += horizontalMove * delta
            this.cameras.main.scrollY += verticalMove * delta
            this.input.activePointer.updateWorldPoint(this.cameras.main)
        }

        if (this.escKey.isJustDown()) {
            if (this.selected != null) {
                this.select(null)
            } else {
                this.menu.onEscClicked()
            }
        }

        let hoveredCoordinates: civ.hex.Coordinates
        if (!this.ui.isPointerInside(this.input.activePointer) && !this.menu.isVisible()) {
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

        if (!this.gameApi) {
            return
        }

        // PLAYER SWAPPING
        if (this.playerSwitchingEnabled && this.player.playerId != this.gameApi.currentPlayer.playerId) {
            this.gameApi.unregisterEventListeners(this.player.playerId)
            this.player = this.gameApi.currentPlayer
            const self = this

            this.gameApi.registerEventListener(this.player.playerId, function(event) { self.onGameEvent(event) })
            this.ui.setStockpiles(this.gameApi.stocksFor(this.player.playerId), this.gameApi.incomeFor(this.player.playerId))
            this.updateUnitsFromTiles()
            
            const firstCity = this.gameApi.citiesFor(this.player.playerId).asJsReadonlyArrayView().values().next().value
            if (firstCity) {
                this.scrollToTile(firstCity.coordinates)
            } else {
                const firstUnit = this.gameApi.unitsFor(this.player.playerId).asJsReadonlyArrayView().values().next().value
                if (firstUnit) {
                    this.scrollToTile(firstUnit.coordinates)
                }
            }
        }

        this.ui.disableEndTurn(this.gameApi.currentPlayer.playerId != this.player.playerId || this.menu.isVisible())

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
