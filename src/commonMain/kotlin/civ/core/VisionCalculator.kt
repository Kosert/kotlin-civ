package civ.core

import civ.model.City
import civ.model.CivUnit
import civ.hex.Coordinates
import civ.hex.HexMap
import kotlin.collections.emptySet


class VisionCalculator(
    private val hexMap: HexMap,
) {
    private val data = mutableMapOf<String, VisionData>()

    fun getVisionFor(playerId: String) = data[playerId] ?: VisionData(emptySet(), emptySet())

    //todo?
//    fun recalculate(units: Collection<CivUnit>, cities: Collection<City>) {
//        val visionPoints = units.map { it.coordinates to it.visionRange }
//            .plus(cities.map { it.coordinates to it.visionRange })
//
//        val visible = visionPoints.flatMapTo(mutableSetOf()) { (coordinates, range) ->
//            hexMap.range(coordinates, range)
//        }
//
//    }

    fun recalculate(playerId: String, units: Collection<CivUnit>, cities: Collection<City>) {
        val visionPoints = units.map { it.coordinates to it.visionRange }
            .plus(cities.map { it.coordinates to it.visionRange })

        val visible = visionPoints.flatMapTo(mutableSetOf()) { (coordinates, range) ->
            hexMap.range(coordinates, range)
        }

        val updatedDiscovered = getVisionFor(playerId).discovered + visible
        data.put(playerId, VisionData(visible, updatedDiscovered))
    }

    class VisionData(
        val visible: Set<Coordinates>,
        val discovered: Set<Coordinates>,
    )
}
