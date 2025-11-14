package civ.core

import civ.action.*
import civ.ai.create
import civ.cheats.Cheat
import civ.cheats.CheatEngine
import civ.events.EventListener
import civ.events.GameEvent
import civ.events.UnitEvent
import civ.events.VisionChanged
import civ.hex.*
import civ.model.*
import civ.tile.Grass
import civ.tile.Tile
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport


@OptIn(ExperimentalJsExport::class)
@JsExport
class GameApi private constructor(
    players: List<Player>,
    tileList: Collection<Tile>,
    cities: Collection<City>,
    units: Collection<CivUnit>,
    stocks: Map<String, Stockpiles>,
) {
    //todo initial sort?
    private val turns = players.toMutableList()
    private val eventListeners = mutableListOf<EventListener>()
    private val cheatEngine = CheatEngine(players)

    //fixme
    val log = GameLogImpl().also {
        it.addMessageListener(ConsoleLog())
    }

    private val hexMap = HexMap(tileList)
    private val visionCalculator = VisionCalculator(hexMap, cheatEngine)
    private val borderCalculator = BorderCalculator(hexMap)
    private val combatCalculator = CombatCalculator()

    private val stocksManager = StockpilesManager(hexMap, eventListeners, stocks)

    private val cities = cities.associateBy { it.coordinates }.toMutableMap()
    private val units = units.associateBy { it.coordinates }.toMutableMap()

    fun citiesFor(playerId: String) = cities.values.filter { it.playerId == playerId }
    fun unitsFor(playerId: String) = units.values.filter { it.playerId == playerId }
    fun stocksFor(playerId: String) = stocksManager.getFor(playerId)
    fun incomeFor(playerId: String): Stockpiles {
        stocksManager.recalculateIncome(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )
        return stocksManager.incomeFor(playerId)
    }

    private val ais = players.associate {
        it.playerId to it.aiType?.create(this, it.playerId)
    }

    private fun triggerEvent(recipientIds: List<String>, event: GameEvent) {
        eventListeners.filter { it.playerId in recipientIds }.forEach { it.listener(event) }
    }

    private fun recalculateVision() {
        turns.forEach { player ->
            visionCalculator.recalculate(
                player.playerId,
                unitsFor(player.playerId),
                citiesFor(player.playerId),
            )
        }
        borderCalculator.recalculate(turns, cities.values)
        eventListeners.forEach { it.listener(VisionChanged) }
    }

    private fun isTileVisible(playerId: String, coordinates: Coordinates): Boolean {
        val vision = visionCalculator.getVisionFor(playerId)
        return vision.visible.contains(coordinates) || cheatEngine.getFor(playerId).contains(Cheat.POLO)
    }

    init {
        //todo load discovered data
        recalculateVision()
    }

    val currentPlayer
        get() = turns.first()

    fun registerEventListener(playerId: String, listener: (GameEvent) -> Unit) {
        eventListeners.add(EventListener(playerId, listener))
    }

    fun unregisterEventListeners(playerId: String) = eventListeners.removeAll { it.playerId == playerId }

    fun tilesForPlayer(playerId: String): List<PlayerTileData> {
        val vision = visionCalculator.getVisionFor(playerId)
        val cheats = cheatEngine.getFor(playerId)

        return hexMap.tiles.values.map {
            val isDiscovered = vision.discovered.contains(it.coords) || cheats.contains(Cheat.MARCO)
            val isVisible = vision.visible.contains(it.coords) || (cheats.contains(Cheat.POLO) && isDiscovered)
            PlayerTileData(
                coordinates = it.coords,
                isVisible = isVisible,
                tile = it.takeIf { isDiscovered },
                unit = units[it.coords].takeIf { isVisible },
                city = cities[it.coords].takeIf { isDiscovered },
                cityRange = borderCalculator.forTile(it.coords).takeIf { isVisible }
            )
        }
    }

    fun canBuild(coordinates: Coordinates, playerId: String): Boolean {
        val cityRange = borderCalculator.forTile(coordinates)
        val occupyingUnit = units[coordinates]

        val isEnemyCity = cityRange?.playerId?.let { it != playerId } ?: false
        val isEnemyUnit = occupyingUnit?.playerId?.let { it != playerId } ?: false
        if (isEnemyCity || isEnemyUnit) {
            return false
        }

        return occupyingUnit?.let { it.playerId == playerId } ?: (cityRange?.playerId == playerId)
    }

    fun getTileIncome(coordinates: Coordinates, playerId: String): Stockpiles? {
        val vision = visionCalculator.getVisionFor(playerId)
        val isVisible = vision.visible.contains(coordinates) || cheatEngine.getFor(playerId).contains(Cheat.POLO)
        return hexMap.get(coordinates)?.takeIf { isVisible }?.getIncome()
    }

    //todo what if target is not visible obstacle
    fun actionsForUnit(playerId: String, unitId: String): Paths {
        val unit = units.values.firstOrNull { it.unitId == unitId }
            ?.takeIf { it.playerId == playerId }
            ?: error("Unit $unitId not found for current player")

        return hexMap.movementRange(unit.coordinates, unit.movementLeft).run {
            if (unit.actionPoint) {

                // target, attackFrom + cost
                val attackTargets = mutableMapOf<Coordinates, Pair<Coordinates, Int>>()

                hexMap.range(unit.coordinates, unit.attackRange)
                    .mapNotNull { units[it] }
                    .filter { it.playerId != playerId }
                    .map { it.coordinates }
                    .filter { isTileVisible(playerId, it) }
                    .forEach { attackTarget ->
                        attackTargets[attackTarget] = unit.coordinates to 0
                    }

                this.moveTargets.forEach { moveTarget ->
                    val path = getPath(moveTarget) ?: return@forEach
                    val pathCost = path.sumOf { it.cost }

                    hexMap.range(moveTarget, unit.attackRange)
                        .mapNotNull { units[it] }
                        .filter { it.playerId != playerId }
                        .map { it.coordinates }
                        .filter { isTileVisible(playerId, it) }
                        .forEach { attackTarget ->
                            attackTargets[attackTarget]?.let { (_, currentCost) ->
                                if (currentCost > pathCost) {
                                    attackTargets[attackTarget] = moveTarget to pathCost
                                }
                            } ?: run {
                                attackTargets[attackTarget] = moveTarget to pathCost
                            }
                        }
                }

                this.copy(attackTargets = attackTargets.mapValues { it.value.first })
            } else this
        }
    }

    private fun executeAttack(attacker: CivUnit, defender: CivUnit) {
        val isRangedAttack = defender.coordinates !in attacker.coordinates.neighbors()

        val (updatedAttacker, updatedDefender) = combatCalculator.calculate(
            attacker = attacker,
            defender = defender,
            defenseBonus = hexMap.get(defender.coordinates).require().defenseBonus()
        )

        if (isRangedAttack) {
            val updated = attacker.copy(actionPoint = false)
            units[attacker.coordinates] = updated
            triggerEvent(
                visionCalculator.getPlayersThatCanSee(updated.coordinates),
                UnitEvent.Updated(updated)
            )
        } else {
            if (updatedAttacker.hp <= 0) {
                hexMap.markBusy(updatedAttacker.coordinates, false)
                units.remove(updatedAttacker.coordinates)
            } else {
                units[updatedAttacker.coordinates] = updatedAttacker.copy(actionPoint = false)
            }
            triggerEvent(
                visionCalculator.getPlayersThatCanSee(updatedAttacker.coordinates),
                UnitEvent.Updated(updatedAttacker)
            )
        }

        if (updatedDefender.hp <= 0) {
            hexMap.markBusy(updatedDefender.coordinates, false)
            units.remove(updatedDefender.coordinates)
        } else {
            units[updatedDefender.coordinates] = updatedDefender
        }
        triggerEvent(
            visionCalculator.getPlayersThatCanSee(updatedDefender.coordinates),
            UnitEvent.Updated(updatedDefender)
        )
        recalculateVision()
        stocksManager.recalculateIncome(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )
        log.write(currentPlayer, attacker, "attacked", defender, "units after battle:", updatedAttacker, updatedDefender)
    }

    fun execute(playerId: String, action: Action): ActionResult {
        if (playerId != currentPlayer.playerId) {
            return ActionResult.fail("Not your turn")
        }
        when (action) {
            is Move -> {
                val unit = units.values.firstOrNull { it.unitId == action.unitId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: return ActionResult.exception("Unit ${action.unitId} not found for current player")

                val paths = hexMap.movementRange(unit.coordinates, unit.movementLeft)

                val path = paths.getPath(action.destination)
                    ?: return ActionResult.exception("Path to ${action.destination} not found")

                path.forEach {
                    val updatedUnit = units.values.first { it.unitId == action.unitId }
                    val current = updatedUnit.coordinates

                    val isOccupying = cities[it.coordinates]
                        ?.takeIf { updatedUnit.attack > 0 }
                        ?.takeUnless { it.playerId == updatedUnit.playerId } != null

                    hexMap.markBusy(current, false)
                    hexMap.markBusy(it.coordinates, true)

                    units.remove(current)
                    units[it.coordinates] = updatedUnit.copy(
                        coordinates = it.coordinates,
                        movementLeft = updatedUnit.movementLeft - it.cost,
                        conquerState = if (isOccupying) ConquerState.OCCUPYING else ConquerState.NONE
                    )
                    recalculateVision()
                    triggerEvent(
                        visionCalculator.getPlayersThatCanSee(current, it.coordinates),
                        UnitEvent.Moved(units.getValue(it.coordinates))
                    )
                    log.write(currentPlayer, "Moved", updatedUnit, "from", current, "to", it.coordinates)
                }
            }
            is Settle -> {
                val unit = units.values.firstOrNull { it.unitId == action.settlersId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?.takeIf { it.unitType == UnitType.SETTLERS }
                    ?: return ActionResult.exception("Settlers ${action.settlersId} not found for current player")

                val tile = hexMap.get(unit.coordinates).require()
                if (tile !is Grass) {
                    return ActionResult.fail("Cannot create village on this tile type")
                }

                if (cities.keys.any { it.distanceTo(unit.coordinates) < 4 }) {
                    return ActionResult.fail("Cannot create village, too close to another settlement")
                }

                hexMap.markBusy(unit.coordinates, false)
                hexMap.build(unit.coordinates, Building.VILLAGE_HALL)

                units.remove(unit.coordinates)
                cities[unit.coordinates] = City(
                    coordinates = unit.coordinates,
                    playerId = unit.playerId
                )
                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(unit.coordinates),
                    UnitEvent.Vanish(unit)
                )
                recalculateVision()
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(currentPlayer.playerId),
                    allUnits = units.values
                )
                log.write(currentPlayer, "Settlement created", cities[unit.coordinates])
            }
            is Build -> {
                if (!canBuild(action.coordinates, currentPlayer.playerId)) {
                    return ActionResult.fail("Cannot build on this tile")
                }

                val tile = hexMap.get(action.coordinates).require()
                if (tile.buildings.contains(action.building)) {
                    return ActionResult.fail("This building is already built", "This building is already built")
                }
                if (!action.building.tileRequirement(tile) || !action.building.unlockRequirement(tile)) {
                    return ActionResult.exception("Cannot build ${action.building}, requirements not met")
                }

                val stocks = stocksManager.getFor(currentPlayer.playerId)
                if (!stocks.canSubstract(action.building.cost)) {
                    return ActionResult.fail(
                        "Not enough resources",
                        "Cannot build ${action.building}, not enough resources"
                    )
                }

                stocksManager.substract(currentPlayer.playerId, action.building.cost)
                hexMap.build(action.coordinates, action.building)
                log.write(currentPlayer, "Built", action.building, "at", action.coordinates)

                when (action.building) {
                    Building.TOWN_HALL -> CityLevel.TOWN
                    Building.CASTLE -> CityLevel.CITY
                    else -> null
                }?.let { newCityLevel ->
                    val city = cities.getValue(action.coordinates)
                    cities[action.coordinates] = city.copy(level = newCityLevel)
                    recalculateVision()
                }
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(currentPlayer.playerId),
                    allUnits = units.values
                )
            }
            is Recruit -> {
                val tile = hexMap.get(action.coordinates).require()
                if (!action.unitType.buildingRequirement(tile.buildings)) {
                    return ActionResult.exception("Cannot recruit ${action.unitType}, requirements not met")
                }

                if (tile.isBusy) {
                    return ActionResult.exception("Cannot recruit ${action.unitType}, tile is occupied")
                }

                val stocks = stocksManager.getFor(currentPlayer.playerId)
                if (!stocks.canSubstract(action.unitType.cost)) {
                    return ActionResult.fail(
                        "Not enough resources",
                        "Cannot build ${action.unitType}, not enough resources"
                    )
                }

                stocksManager.substract(currentPlayer.playerId, action.unitType.cost)
                val newUnit = CivUnit(
                    unitType = action.unitType,
                    playerId = currentPlayer.playerId,
                    coordinates = action.coordinates,
                    movementLeft = 0,
                    actionPoint = false,
                )
                units[action.coordinates] = newUnit
                hexMap.markBusy(action.coordinates, true)
                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(newUnit.coordinates),
                    UnitEvent.Created(newUnit)
                )
                recalculateVision()
                log.write(currentPlayer, "Recruited", newUnit, "at", newUnit.coordinates)
            }
            is Attack -> {
                val attacker = units.values.firstOrNull { it.unitId == action.unitId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: return ActionResult.exception("Unit ${action.unitId} not found for current player")

                if (!attacker.actionPoint) {
                    return ActionResult.fail("Not enough action points")
                }
                if (attacker.attack == 0) {
                    return ActionResult.exception("This unit (${attacker.unitType}) cannot attack")
                }

                val defender = units[action.targetCoordinates]
                    ?: return ActionResult.exception("Target unit not found at ${action.targetCoordinates}")

                if (defender.playerId == attacker.playerId) {
                    return ActionResult.exception("Cannot attack own unit")
                }

                val paths = actionsForUnit(playerId, attacker.unitId)
                val path = paths.getPath(action.targetCoordinates)
                    ?: return ActionResult.exception("No valid attack path for ${action.targetCoordinates}")

                path.dropLast(1).lastOrNull()?.let {
                    execute(playerId, Move(attacker.unitId, it.coordinates))
                    GlobalScope.launch {
                        delay(500)
                        val movedAttacker = units.values.first { it.unitId == attacker.unitId }
                        executeAttack(movedAttacker, defender)
                    }
                } ?: run {
                    executeAttack(attacker, defender)
                }
            }
            is Conquer -> {
                val attacker = units[action.coordinates]
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: return ActionResult.exception("Unit not found for current player")

                cities[action.coordinates] = cities[action.coordinates]!!.copy(
                    playerId = attacker.playerId
                )

                val updatedAttacker = attacker.copy(
                    actionPoint = false,
                    conquerState = ConquerState.NONE
                )
                units[action.coordinates] = updatedAttacker
                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(updatedAttacker.coordinates),
                    UnitEvent.Updated(updatedAttacker)
                )
                recalculateVision()
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(currentPlayer.playerId),
                    allUnits = units.values
                )
                log.write(currentPlayer, updatedAttacker, "conquered", cities[action.coordinates])
            }
        }
        return ActionResult.success()
    }

    fun endTurn(playerId: String) {
        if (turns.first().playerId != playerId) {
            error("Not your turn")
        }

        val removed = turns.removeAt(0)
        turns.add(removed)
        log.write(removed, "ended turn")

        unitsFor(currentPlayer.playerId)
            .forEach {
                val updatedUnit = it.copy(
                    movementLeft = CivUnit.speedToMovement(it.speed),
                    actionPoint = true,
                    conquerState = if (it.conquerState == ConquerState.OCCUPYING) ConquerState.CAN_CONQUER else it.conquerState
                )
                units.put(it.coordinates, updatedUnit)
                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(updatedUnit.coordinates),
                    UnitEvent.Updated(updatedUnit)
                )
            }

        stocksManager.collect(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )

        ais.get(currentPlayer.playerId)?.let { ai ->
            //fixme
            GlobalScope.launch {
                ai.takeTurn()
                verifyIntegrity()
            }
        }
    }

    fun verifyIntegrity() {
        val reports = mutableListOf<String>()

        units.values.groupingBy { it.unitId }.eachCount()
            .filter { it.value > 1 }
            .forEach {
                reports.add("Duplicated unit ${it.key}")
            }

        cities.values.groupingBy { it.cityId }.eachCount()
            .filter { it.value > 1 }
            .forEach {
                reports.add("Duplicated city ${it.key}")
            }

        if (reports.isNotEmpty()) {
            throw IllegalStateException("Integrity check failed, found ${reports.size} issues: ${reports.joinToString { it }}")
        }
    }

    fun generateGameState(): GameState {
        return GameState(
            players = turns,
            tileList = hexMap.tiles.values.toSet(),
            cities = cities.values.toSet(),
            units = units.values.toSet(),
            stock = turns.associate { it.playerId to stocksManager.getFor(it.playerId) }
        )
    }

    companion object {
        fun fromGameState(state: GameState): GameApi = GameApi(
            players = state.players,
            tileList = state.tileList,
            cities = state.cities,
            units = state.units,
            stocks = state.stock
        )
    }
}

fun <T : Any> T?.require(): T = this ?: throw NullPointerException()
