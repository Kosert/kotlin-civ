package civ.core

import civ.hex.HexMap
import civ.model.*
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

fun<K, V> MutableMap<K, V>.edit(key: K, block: (V) -> V) {
    this[key] = block(this.getValue(key))
}

class StatisticsCounter(
    initial: Map<String, GameStatistics>,
    private val hexMap: HexMap,
) {
    private val stats = initial.toMutableMap()

    fun getTurnNumber(playerId: String) = stats.getValue(playerId).turnNumber

    fun onTurnEnded(playerId: String, stockCollected: Stockpiles) {
        stats.edit(playerId) { it.copy(turnNumber = it.turnNumber + 1, stockCollected = it.stockCollected + stockCollected) }
    }

    fun onVisionChanged(discoveredCounts: Map<String, Int>) {
        discoveredCounts.forEach { (playerId, count) ->
            stats.edit(playerId) { it.copy(tilesDiscovered = count) }
        }
    }

    fun onUnitRecruited(playerId: String) {
        stats.edit(playerId) { it.copy(unitsTrained = it.unitsTrained + 1) }
    }

    fun onUnitKilled(killerPlayerId: String, killedPlayerId: String) {
        stats.edit(killerPlayerId) { it.copy(unitsKilled = it.unitsKilled + 1) }
        stats.edit(killedPlayerId) { it.copy(unitsLost = it.unitsLost + 1) }
    }

    fun onBuildingBuilt(playerId: String, building: Building) {
        stats.edit(playerId) {
            it.copy(
                buildingsBuilt = it.buildingsBuilt + if (building == Building.ROAD) 0 else 1,
                roadsBuilt = it.roadsBuilt + if (building == Building.ROAD) 1 else 0
            )
        }
    }

    fun onCityFound(playerId: String) {
        stats.edit(playerId) { it.copy(citiesFound = it.citiesFound + 1) }
    }

    fun onCityConquered(playerId: String) {
        stats.edit(playerId) { it.copy(citiesConquered = it.citiesConquered + 1) }
    }

    fun recalculatePoints(
        unitsFor: (String) -> Collection<CivUnit>,
        citiesFor: (String) -> Collection<City>,
    ): Map<String, SimpleStats> = stats.mapValues { (playerId, stats) ->
        val units = unitsFor(playerId)
        val unitScore = units.sumOf { it.unitType.cost.total } * 0.2

        val cities = citiesFor(playerId)
        val buildingScore = cities.sumOf { city ->
            hexMap.range(city.coordinates, city.borderRange)
                .mapNotNull { hexMap.get(it) }
                .flatMap { it.buildings.toList() }
                .sumOf {
                    if (it == Building.VILLAGE_HALL)
                        UnitType.SETTLERS.cost.total
                    else
                        it.cost.total
                }
        } * 0.2

        val discoveredPercent = stats.tilesDiscovered / hexMap.tiles.size.toDouble()
        val visionScore = discoveredPercent * 100
        SimpleStats(
            points = (unitScore + buildingScore + visionScore).toInt(),
            isDefeated = units.isEmpty() && cities.isEmpty(),
        )
    }

    fun exportData(): Map<String, GameStatistics> = stats
}

@OptIn(ExperimentalJsExport::class)
@JsExport
data class SimpleStats(
    val points: Int,
    val isDefeated: Boolean,
)

@OptIn(ExperimentalJsExport::class)
@JsExport
@Serializable
data class GameStatistics(
    val turnNumber: Int = 0,

    // vision
    val tilesDiscovered: Int = 0,

    //units
    val unitsTrained: Int = 0,
    val unitsKilled: Int = 0,
    val unitsLost: Int = 0,

    // buildings
    val buildingsBuilt: Int = 0,
    val roadsBuilt: Int = 0,

    // stock
    val stockCollected: Stockpiles = Stockpiles(),

    // cities
    val citiesFound: Int = 0,
    val citiesConquered: Int = 0,
)