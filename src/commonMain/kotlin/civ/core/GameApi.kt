package civ.core

import civ.action.Action
import civ.action.Attack
import civ.action.Move
import civ.action.Settle
import civ.hex.HexMap
import civ.hex.Paths
import civ.hex.distanceTo
import civ.model.*
import civ.tile.Tile
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

    private val hexMap = HexMap(tileList)
    private val visionCalculator = VisionCalculator(hexMap)

    //todo resources controller or something?
    private val stocksManager = StockpilesManager(hexMap, stocks)

    //todo map vs set
//    private val cities = cities.toMutableSet()
//    private val units = units.toMutableSet()

    private val cities = cities.associateBy { it.coordinates }.toMutableMap()
    private val units = units.associateBy { it.coordinates }.toMutableMap()

    fun citiesFor(playerId: String) = cities.values.filter { it.playerId == playerId }
    fun unitsFor(playerId: String) = units.values.filter { it.playerId == playerId }
    fun stocksFor(playerId: String) = stocksManager.getFor(playerId)

    private fun recalculateVision() {
        turns.forEach {
            visionCalculator.recalculate(
                it.playerId,
                unitsFor(it.playerId),
                citiesFor(it.playerId),
            )
        }
    }

    init {
        //todo load discovered data
        recalculateVision()
    }

    val currentPlayer
        get() = turns.first()

    fun tilesForPlayer(playerId: String): List<PlayerTileData> {
        val vision = visionCalculator.getVisionFor(playerId)

        return hexMap.tiles.values.map {
            val isVisible = vision.visible.contains(it.coords)
            val isDiscovered by lazy { vision.discovered.contains(it.coords) }
            PlayerTileData(
                coordinates = it.coords,
                isVisible = isVisible,
                tile = it.takeIf { isDiscovered },
                unit = units[it.coords].takeIf { isVisible },
                city = cities[it.coords].takeIf { isDiscovered },
            )
        }
    }

    //todo what if target is not visible obstacle
    // limit movement to visible tiles?
    fun movementRangeFor(unitId: String): Paths {
        val unit = units.values.firstOrNull { it.unitId == unitId }
            ?.takeIf { it.playerId == currentPlayer.playerId }
            ?: error("Unit $unitId not found for current player")

        return hexMap.movementRange(unit.coordinates, unit.movementLeft)
    }

    fun execute(action: Action) {
        when (action) {
            is Move -> {
                val unit = units.values.firstOrNull { it.unitId == action.unitId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: error("Unit ${action.unitId} not found for current player")

                val paths = hexMap.movementRange(unit.coordinates, unit.movementLeft)

                val path = paths.getPath(action.destination) ?: error("Path to ${action.destination} not found")

                path.forEach {
                    val updatedUnit = units.values.first { it.unitId == action.unitId }
                    val current = updatedUnit.coordinates
                    val nextTile = hexMap.get(it.coordinates).require()

                    hexMap.markBusy(current, false)
                    hexMap.markBusy(nextTile.coords, true)

                    units.remove(current)
                    units[nextTile.coords] = updatedUnit.copy(
                        coordinates = nextTile.coords,
                        movementLeft = updatedUnit.movementLeft - it.cost
                    )

                    //todo on move -> check triggers
                    recalculateVision()
                }
            }
            is Attack -> TODO()
            is Settle -> {
                val unit = units.values.firstOrNull { it.unitId == action.settlersId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?.takeIf { it.unitType == UnitType.SETTLERS }
                    ?: TODO()

                if (cities.keys.any { it.distanceTo(unit.coordinates) < 4 }) {
                    //todo cannot build
                    error("Too close to another city")
                }

                hexMap.markBusy(unit.coordinates, false)
                hexMap.build(unit.coordinates, Building.VILLAGE_HALL)

                units.remove(unit.coordinates)
                cities.put(unit.coordinates, City(
                    coordinates = unit.coordinates,
                    playerId = unit.playerId
                ))
            }
        }
    }

    fun endTurn(playerId: String) {
        if (turns.first().playerId != playerId) {
            error("Not your turn")
        }

        val removed = turns.removeAt(0)
        turns.add(removed)

        unitsFor(currentPlayer.playerId)
            .forEach {
                units.put(it.coordinates, it.copy(movementLeft = CivUnit.speedToMovement(it.speed)))
            }

        stocksManager.collect(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )

        //todo other triggers turn start
        // run ai if player is ai
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
        TODO()
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
