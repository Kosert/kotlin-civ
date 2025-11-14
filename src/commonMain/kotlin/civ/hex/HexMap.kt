@file:OptIn(ExperimentalJsExport::class)

package civ.hex

import civ.model.Building
import civ.core.require
import civ.tile.Grass
import civ.tile.Tile
import kotlin.collections.buildList
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
data class Paths(
    val start: Coordinates,
    private val cameFrom: Map<Coordinates, Coordinates>,
    private val costs: Map<Coordinates, Int>,
    // attackTarget to from
    val attackTargets: Map<Coordinates, Coordinates> = mapOf(),
) {
    val moveTargets
        get() = costs.keys

    val possibleTargets: Set<Coordinates>
        get() = costs.keys + attackTargets.keys

    fun getPath(target: Coordinates): List<PathSegment>? {
        if (target !in possibleTargets) {
            return null
        }

        var pointer = attackTargets[target] ?: target
        return buildList<PathSegment> {
            if (target in attackTargets) {
                add(PathSegment(target, 0))
            }
            while (pointer != start) {
                add(PathSegment(pointer, costs.getValue(pointer)))
                pointer = cameFrom.getValue(pointer)
            }
        }.reversed()
    }
}

@JsExport
data class PathSegment(val coordinates: Coordinates, val cost: Int)

class HexMap(
    tileList: Collection<Tile>,
) {
    val tiles: MutableMap<Coordinates, Tile> = tileList.associateBy { it.coords }.toMutableMap()

    fun get(coordinates: Coordinates): Tile? = tiles[coordinates]
    fun set(tile: Tile) {
        tiles[tile.coords] = tile
    }

    fun range(center: Coordinates, radius: Int): List<Coordinates> {
        return center.getAllInRange(radius)
    }

    fun markBusy(coordinates: Coordinates, isBusy: Boolean) {
        val tile = tiles[coordinates].require()
        tiles[coordinates] = tile.updated(isBusy = isBusy)
    }

    fun build(coordinates: Coordinates, building: Building) {
        val tile = tiles[coordinates].require()

        val updatedBuildings = (building.replaces?.let { tile.buildings - it } ?: tile.buildings).plus(building)

        val updated = if (building in Building.cityMainBuildings && tile is Grass) {
            tile.copy(
                animals = false,
                forest = false,
                buildings = updatedBuildings
            )
        } else {
            tile.updated(buildings = updatedBuildings)
        }
        tiles[coordinates] = updated
    }

    // list of possible paths
    fun movementRange(start: Coordinates, movement: Int): Paths {
        val frontier = mutableListOf(start to 0)
        val cameFrom = mutableMapOf<Coordinates, Coordinates>()
        val totalCosts = mutableMapOf<Coordinates, Int>(start to 0)
        val costPerTile = mutableMapOf<Coordinates, Int>()

        while (frontier.isNotEmpty()) {
            frontier.sortBy { it.second }
            val current = frontier.removeFirst().first

            current.neighbors()
                .mapNotNull { tiles[it] }
                .forEach { nextTile ->
                    val newCost = totalCosts.getValue(current) + nextTile.movementCost()
                    if (newCost > movement) {
                        return@forEach
                    }
                    if (totalCosts[nextTile.coords]?.let { it > newCost } != false) {
                        costPerTile[nextTile.coords] = nextTile.movementCost()
                        totalCosts[nextTile.coords] = newCost
                        cameFrom[nextTile.coords] = current
                        frontier.add(nextTile.coords to newCost)
                    }
            }
        }
        return Paths(start, cameFrom, costPerTile)
    }

    fun line(from: Coordinates, to: Coordinates): List<Coordinates> {
        return from.lineTo(to)
    }

    fun isVisible(from: Coordinates, to: Coordinates): Boolean {
        TODO()
    }

    fun getFoV(from: Coordinates): Coordinates {
        TODO()
    }
}
