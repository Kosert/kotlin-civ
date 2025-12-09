package civ.core

import civ.model.CivUnit
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

fun<K, V> MutableMap<K, V>.edit(key: K, block: (V) -> V) {
    this[key] = block(this.getValue(key))
}

class StatisticsCounter(
    initial: Map<String, GameStatistics>,
    private val totalTileCount: Int,
) {
    private val stats = initial.toMutableMap()

    fun onTurnEnded(playerId: String) {
        stats.edit(playerId) {
            it.copy(turnNumber = it.turnNumber + 1)
        }
    }

    fun onVisionChanged(discoveredCounts: Map<String, Int>) {
        discoveredCounts.forEach { (playerId, count) ->
            stats.edit(playerId) {
                it.copy(tilesDiscovered = count)
            }
        }
    }

    fun calculatePoints(
        unitsFor: (String) -> Collection<CivUnit>,
    ): Map<String, Int> {
        return stats.mapValues { (playerId, stats) ->
            val unitScore = unitsFor(playerId)
                .sumOf { it.unitType.cost.total } * 0.2

            val buildingScore = 0
            //todo
//            val buildingScore = citiesFor(playerId).sumOf { city ->
//                hexMap.range(city.coordinates, city.borderRange)
//                    .mapNotNull { hexMap.get(it) }
//                    .flatMap { it.buildings.toList() }
//                    .sumOf {
//                        if (it == Building.VILLAGE_HALL)
//                            UnitType.SETTLERS.cost.total
//                        else it.cost.total
//                    }
//            } * 0.2

            val discoveredPercent = stats.tilesDiscovered / totalTileCount.toDouble()
            val visionScore = discoveredPercent * 100
            (unitScore + buildingScore + visionScore).toInt()
        }
    }

    fun exportData(): Map<String, GameStatistics> = stats
}

@OptIn(ExperimentalJsExport::class)
@JsExport
@Serializable
data class GameStatistics(
    val turnNumber: Int = 0,

    // vision
    val tilesDiscovered: Int = 0,

    //todo
    // units - trained, killed, lost
    // buildings - built, roads built
    // resources - collected
    // cities - found, conquered
)