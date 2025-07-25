@file:OptIn(ExperimentalJsExport::class)

package civ.core

import civ.core.VisionCalculator.VisionData
import civ.hex.*
import civ.model.City
import civ.model.Player
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
data class CityRange(
    val playerId: String,
    val borders: List<HexEdge>,
)

class BorderCalculator(
    private val hexMap: HexMap,
) {
    private val data = mutableMapOf<Coordinates, CityRange>()

    fun forTile(coordinates: Coordinates): CityRange? = data[coordinates]

    fun recalculate(
        players: List<Player>,
        cities: Collection<City>
    ) {
        data.clear()
        players.forEach { player ->
            cities.filter { it.playerId == player.playerId }.forEach { city ->
                val cityTiles = hexMap.range(city.coordinates, city.borderRange)
                    .mapNotNull { hexMap.get(it) }

                cityTiles.forEach { controlledTile ->
                    val edges = HexEdge.entries.filter { edge ->
                        cityTiles.none { it.coords == controlledTile.coords.movedBy(edge) }
                    }
                    data[controlledTile.coords] = CityRange(player.playerId, edges)
                }
            }
        }
    }
}