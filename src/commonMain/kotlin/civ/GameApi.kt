package civ

import hexcore.HexMap
import hexcore.PlayerTileData
import hexcore.Tile
import hexcore.distanceTo
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
        println("start vision")
        turns.forEach {
            visionCalculator.recalculate(
                it.playerId,
                unitsFor(it.playerId),
                citiesFor(it.playerId),
            )
        }
        println("end vision")
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

    fun testCrash()  {
        throw IllegalStateException("chuj")
    }

    fun execute(action: Action) {
        when (action) {
            is Move -> {
                val unit = units.values.firstOrNull { it.unitId == action.unitId }
                    ?.takeIf { it.playerId == currentPlayer.playerId }
                    ?: TODO()

                println("start movementRange")
                val paths = hexMap.movementRange(unit.coordinates, unit.movementLeft)

                println("Paths: $paths")

                val path = paths.find { it.last() == action.destination } ?: TODO()

                println("got path")

                //todo
//                if (path.first() == unit.coordinates)
//                    error("first is same")

                path.forEach {
                    println("step to $it")
                    val current = unit.coordinates
                    val nextTile = hexMap.get(it).require()

                    hexMap.markBusy(current, false)
                    hexMap.markBusy(nextTile.coords, true)

                    units.remove(current)
                    units.put(nextTile.coords, unit.copy(
                        coordinates = nextTile.coords,
                        movementLeft = unit.movementLeft - 1//TODO STEP COST
                    ))

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
                    TODO()
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

    fun endTurn() {
        val removed = turns.removeAt(0)
        turns.add(removed)

        unitsFor(currentPlayer.playerId)
            .forEach {
                units.put(it.coordinates, it.copy(movementLeft = it.speed * 10))
            }

        stocksManager.collect(
            playerCities = citiesFor(currentPlayer.playerId),
            allUnits = units.values
        )

        //todo other triggers turn start
        // run ai if player is ai
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
