package civ.core

import civ.cheats.Cheat
import civ.cheats.CheatEngine
import civ.model.City
import civ.model.CivUnit
import civ.hex.Coordinates
import civ.hex.HexMap
import kotlin.collections.emptySet


class VisionCalculator(
    private val hexMap: HexMap,
    private val cheatEngine: CheatEngine,
) {
    private val data = mutableMapOf<String, VisionData>()

    fun getVisionFor(playerId: String): VisionData {
        return data[playerId] ?: VisionData(emptySet(), emptySet())
    }

    fun getPlayersThatCanSee(vararg coordinates: Coordinates): List<String> = data.mapNotNull { (playerId, vision) ->
        playerId.takeIf {
            vision.visible.any { it in coordinates } || (getPlayersThatDiscovered(*coordinates).contains(playerId) && cheatEngine.getFor(playerId).contains(Cheat.POLO))
        }
    }

    fun getPlayersThatDiscovered(vararg coordinates: Coordinates): List<String> = data.mapNotNull { (playerId, vision) ->
        playerId.takeIf {
            vision.discovered.any { it in coordinates } || cheatEngine.getFor(playerId).contains(Cheat.MARCO)
        }
    }

    fun recalculate(playerId: String, units: Collection<CivUnit>, cities: Collection<City>) {
        val visionPoints = units.map { it.coordinates to it.visionRange }
            .plus(cities.map { it.coordinates to it.visionRange })

        val visible = visionPoints.flatMapTo(mutableSetOf()) { (coordinates, range) ->
            hexMap.range(coordinates, range)
        }

        val updatedDiscovered = getVisionFor(playerId).discovered + visible
        data[playerId] = VisionData(visible, updatedDiscovered)
    }

    fun importData(visionData: Map<String, GameStateVisionData>) {
        this.data.clear()
        visionData.forEach { (playerId, data) ->
            this.data[playerId] = VisionData(data.visible, data.discovered)
        }
    }

    fun exportData(): Map<String, GameStateVisionData> = data.mapValues { (_, data) ->
        GameStateVisionData(data.visible, data.discovered)
    }

    class VisionData(
        val visible: Set<Coordinates>,
        val discovered: Set<Coordinates>,
    )
}
