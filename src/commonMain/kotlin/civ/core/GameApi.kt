package civ.core

import civ.LongWrapper
import civ.action.*
import civ.ai.create
import civ.cheats.Cheat
import civ.cheats.CheatEngine
import civ.events.*
import civ.hex.*
import civ.model.*
import civ.tile.Grass
import civ.tile.Tile
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport


@OptIn(ExperimentalJsExport::class)
@JsExport
class GameApi private constructor(
    private val mapSeed: Long,
    players: List<Player>,
    tileList: Collection<Tile>,
    cities: Collection<City>,
    units: Collection<CivUnit>,
    stocks: Map<String, Stockpiles>,
    statistics: Map<String, GameStatistics>,
    visionData: Map<String, GameStateVisionData>? = null,
) {
    private val turns = players.toMutableList()
    private val eventListeners = mutableListOf<EventListener>()
    private val cheatEngine = CheatEngine(players)

    private val log = GameLogImpl().also {
        it.addMessageListener(ConsoleLog())
    }

    private val hexMap = HexMap(tileList)
    private val visionCalculator = VisionCalculator(hexMap, cheatEngine)
    private val borderCalculator = BorderCalculator(hexMap)
    private val combatCalculator = CombatCalculator()

    private val stocksManager = StockpilesManager(hexMap, eventListeners, stocks)
    private val statCounter = StatisticsCounter(statistics, hexMap)

    private val cities = cities.associateBy { it.coordinates }.toMutableMap()
    private val units = units.associateBy { it.coordinates }.toMutableMap()

    fun allPlayers() = turns.toList()
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

    private fun triggerEvent(recipientIds: List<String>, eventCreator: (playerId: String) -> GameEvent) {
        eventListeners.filter { it.playerId in recipientIds }.forEach { it.listener(eventCreator(it.playerId)) }
    }

    private fun recalculateVision(sendEvents: Boolean = true) {
        turns.forEach { player ->
            visionCalculator.recalculate(
                player.playerId,
                unitsFor(player.playerId),
                citiesFor(player.playerId),
            )
        }
        borderCalculator.recalculate(turns, cities.values)
        statCounter.onVisionChanged(visionCalculator.getDiscoveredCount())
        recalculateScore()

        if (sendEvents) {
            eventListeners.forEach {
                val tiles = tilesForPlayer(playerId = it.playerId)
                it.listener(VisionChanged(tiles))
            }
        }
    }

    private fun recalculateScore() {
        val stats = statCounter.recalculatePoints(::unitsFor, ::citiesFor)
        eventListeners.forEach {
            it.listener(ScoreChanged(stats))
        }
    }

    private fun isTileVisible(playerId: String, coordinates: Coordinates): Boolean {
        val vision = visionCalculator.getVisionFor(playerId)
        return vision.visible.contains(coordinates) || cheatEngine.getFor(playerId).contains(Cheat.POLO)
    }

    init {
        verifyIntegrity()
        visionData?.let {
            visionCalculator.importData(it)
        }

        log.write("GameApi initialised - starting")
        recalculateVision()

        ais[currentPlayer.playerId]?.takeTurn()
    }

    val currentPlayer
        get() = turns.first()

    fun registerEventListener(playerId: String, listener: (GameEvent) -> Unit) {
        eventListeners.add(EventListener(playerId, listener))
    }

    fun unregisterEventListeners(playerId: String) = eventListeners.removeAll { it.playerId == playerId }

    private fun Tile.toPlayerTileData(playerId: String): PlayerTileData {
        val vision = visionCalculator.getVisionFor(playerId)
        val cheats = cheatEngine.getFor(playerId)
        val isDiscovered = vision.discovered.contains(this.coords) || cheats.contains(Cheat.MARCO)
        val isVisible = vision.visible.contains(this.coords) || (cheats.contains(Cheat.POLO) && isDiscovered)
        return PlayerTileData(
            coordinates = this.coords,
            isVisible = isVisible,
            tile = this.takeIf { isDiscovered },
            unit = units[this.coords].takeIf { isVisible },
            city = cities[this.coords].takeIf { isDiscovered },
            cityRange = borderCalculator.forTile(this.coords).takeIf { isVisible }
        )
    }

    fun tilesForPlayer(playerId: String): List<PlayerTileData> {
        return hexMap.tiles.values.map { it.toPlayerTileData(playerId) }
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

        //todo filter out tiles not visible
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

        val defenseBonus = hexMap.get(defender.coordinates).require().defenseBonus()
            .takeIf { cities[defender.coordinates]?.let { it.playerId == defender.playerId } ?: true }
            ?: 0

        val (updatedAttacker, updatedDefender) = combatCalculator.calculate(
            attacker = attacker,
            defender = defender,
            defenseBonus = defenseBonus
        )

        if (isRangedAttack) {
            val updated = attacker.copy(actionPoint = false)
            units[attacker.coordinates] = updated
        } else {
            if (updatedAttacker.hp <= 0) {
                hexMap.markBusy(updatedAttacker.coordinates, false)
                units.remove(updatedAttacker.coordinates)
                statCounter.onUnitKilled(defender.playerId, attacker.playerId)
            } else {
                units[updatedAttacker.coordinates] = updatedAttacker.copy(actionPoint = false)
            }
        }

        if (updatedDefender.hp <= 0) {
            hexMap.markBusy(updatedDefender.coordinates, false)
            units.remove(updatedDefender.coordinates)
            statCounter.onUnitKilled(attacker.playerId, defender.playerId)
        } else {
            units[updatedDefender.coordinates] = updatedDefender
        }

        val playersSeeingAttacker = visionCalculator.getPlayersThatCanSee(attacker.coordinates)
        val playersSeeingDefender = visionCalculator.getPlayersThatCanSee(defender.coordinates)

        eventListeners.filter {
            it.playerId in playersSeeingAttacker || it.playerId in playersSeeingDefender
        }.forEach { listener ->
            listener.listener(
                AttackEvent(
                    from = attacker.coordinates,
                    to = defender.coordinates,
                    isRanged = isRangedAttack,
                    updatedAttacker = updatedAttacker.takeIf { listener.playerId in playersSeeingAttacker },
                    updatedDefender = updatedDefender.takeIf { listener.playerId in playersSeeingDefender },
            ))
        }

        recalculateVision()
        stocksManager.recalculateIncome(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )
        recalculateScore()
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

                val combinedEvents = eventListeners.associate { it.playerId to listOf<GameEvent>() }.toMutableMap()
                path.forEach {
                    val updatedUnit = units.values.first { it.unitId == action.unitId }
                    val current = updatedUnit.coordinates

                    val occupiedCity = cities[it.coordinates]
                        ?.takeIf { updatedUnit.attack > 0 }
                        ?.takeUnless { it.playerId == updatedUnit.playerId }

                    hexMap.markBusy(current, false)
                    hexMap.markBusy(it.coordinates, true)

                    units.remove(current)
                    units[it.coordinates] = updatedUnit.copy(
                        coordinates = it.coordinates,
                        movementLeft = updatedUnit.movementLeft - it.cost,
                        conquerState = occupiedCity?.let { ConquerState.Occupying(it.level.occupationTime) } ?: ConquerState.None
                    )
                    recalculateVision(sendEvents = false)
                    val playersThatCanSee = visionCalculator.getPlayersThatCanSee(current, it.coordinates)
                    combinedEvents.keys.forEach { playerId ->
                        if (playerId !in playersThatCanSee){
                            return@forEach
                        }

                        val tiles = tilesForPlayer(playerId = playerId)
                        combinedEvents.edit(playerId) { events ->
                            events + VisionChanged(tiles) + UnitEvent.Moved(units.getValue(it.coordinates))
                        }
                    }
//                    triggerEvent(
//                        visionCalculator.getPlayersThatCanSee(current, it.coordinates),
//                        UnitEvent.Moved(units.getValue(it.coordinates))
//                    )
                    log.write(currentPlayer, "Moved", updatedUnit, "from", current, "to", it.coordinates)
                }

                combinedEvents
                    .filter { it.value.isNotEmpty() }
                    .forEach { (playerId, events) ->
                        val combinedEvent = UnitEvent.CombinedMove(
                            units.getValue(action.destination),
                            visionEvents = events.filterIsInstance<VisionChanged>(),
                            movedEvents = events.filterIsInstance<UnitEvent.Moved>(),
                        )
                        eventListeners.first { it.playerId == playerId }.listener(combinedEvent)
                    }

                //todo dont recalculate for everyone
                turns.forEach {
                    stocksManager.recalculateIncome(
                        playerCities = citiesFor(it.playerId),
                        allUnits = units.values
                    )
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
                    { UnitEvent.Vanish(unit) }
                )
                recalculateVision()
                statCounter.onCityFound(unit.playerId)
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(currentPlayer.playerId),
                    allUnits = units.values
                )
                recalculateScore()
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

                stocksManager.subtract(currentPlayer.playerId, action.building.cost, sendEvent = false)
                hexMap.build(action.coordinates, action.building)
                log.write(currentPlayer, "Built", action.building, "at", action.coordinates)

                when (action.building) {
                    Building.TOWN_HALL -> CityLevel.TOWN
                    Building.CASTLE -> CityLevel.CITY
                    else -> null
                }?.let { newCityLevel ->
                    val city = cities.getValue(action.coordinates)
                    cities[action.coordinates] = city.copy(level = newCityLevel)
//                    recalculateVision()
                }
                //fixme only update the updated tile?
                recalculateVision()
                statCounter.onBuildingBuilt(currentPlayer.playerId, action.building)
                recalculateScore()
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

                stocksManager.subtract(currentPlayer.playerId, action.unitType.cost)
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
                    { UnitEvent.Created(newUnit) }
                )
                recalculateVision()
                statCounter.onUnitRecruited(currentPlayer.playerId)
                recalculateScore()
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
                    val movedAttacker = units.values.first { it.unitId == attacker.unitId }
                    executeAttack(movedAttacker, defender)
                } ?: run {
                    executeAttack(attacker, defender)
                }
            }
            is Conquer -> {
                val attacker = units[action.coordinates]
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: return ActionResult.exception("Unit not found for current player")

                val originalCity = cities[action.coordinates]
                    ?: return ActionResult.exception("City not found at ${action.coordinates}")

                cities[action.coordinates] = originalCity.copy(playerId = attacker.playerId)

                val updatedAttacker = attacker.copy(
                    actionPoint = false,
                    conquerState = ConquerState.None
                )
                units[action.coordinates] = updatedAttacker

                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(updatedAttacker.coordinates)
                ) { eventPlayerId ->
                    TileUpdated(
                        hexMap.tiles.getValue(updatedAttacker.coordinates).toPlayerTileData(eventPlayerId)
                    )
                }
                recalculateVision()
                statCounter.onCityConquered(currentPlayer.playerId)
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(originalCity.playerId),
                    allUnits = units.values
                )
                stocksManager.recalculateIncome(
                    playerCities = citiesFor(currentPlayer.playerId),
                    allUnits = units.values
                )
                recalculateScore()
                log.write(currentPlayer, updatedAttacker, "conquered", cities[action.coordinates])
            }
        }
        return ActionResult.success()
    }

    fun endTurn(playerId: String) {
        if (turns.first().playerId != playerId) {
            error("Not your turn")
        }
        verifyIntegrity()

        val removed = turns.removeAt(0)
        turns.add(removed)
        log.write(removed, "ended turn")
        statCounter.onTurnEnded(removed.playerId, stocksManager.incomeFor(playerId))

        if (units.values.count { it.playerId == currentPlayer.playerId } + cities.values.count { it.playerId == currentPlayer.playerId } == 0) {
            println("Player $currentPlayer is defeated, skipping turn")
            endTurn(currentPlayer.playerId)
            return
        }

        unitsFor(currentPlayer.playerId)
            .forEach {
                val updatedUnit = it.copy(
                    movementLeft = CivUnit.speedToMovement(it.speed),
                    actionPoint = true,
                    conquerState = it.conquerState.onTurnPassed(),
                )
                units.put(it.coordinates, updatedUnit)
                triggerEvent(
                    visionCalculator.getPlayersThatCanSee(updatedUnit.coordinates)
                ) { eventPlayerId ->
                    TileUpdated(
                        hexMap.tiles.getValue(updatedUnit.coordinates).toPlayerTileData(eventPlayerId)
                    )
                }
            }

        stocksManager.collect(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )
        eventListeners.forEach {
            it.listener(
                TurnEndedEvent(
                    newCurrentPlayerId = currentPlayer.playerId,
                    turnNumber = statCounter.getTurnNumber(currentPlayer.playerId)
                )
            )
        }

        ais.get(currentPlayer.playerId)?.takeTurn()
    }

    private fun verifyIntegrity() {
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
            stock = turns.associate { it.playerId to stocksManager.getFor(it.playerId) },
            mapSeed = LongWrapper.fromLong(mapSeed),
            visionData = visionCalculator.exportData(),
            statistics = statCounter.exportData()
        )
    }

    companion object {
        fun fromGameState(state: GameState): GameApi = GameApi(
            mapSeed = state.mapSeed.toLong(),
            players = state.players,
            tileList = state.tileList,
            cities = state.cities,
            units = state.units,
            stocks = state.stock,
            statistics = state.statistics ?: state.players.associate { it.playerId to GameStatistics() },
            visionData = state.visionData,
        )
    }
}

fun <T : Any> T?.require(): T = this ?: throw NullPointerException()
