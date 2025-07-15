package hexcore

import civ.Building
import civ.require
import kotlin.collections.buildList


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

    fun findPath(start: Coordinates, destination: Coordinates): List<Coordinates> {
        TODO() //is it needed at all?
    }

    // list of possible paths, todo path cost
    fun movementRange(start: Coordinates, movement: Int): List<List<Coordinates>> {
        println("dijkstra start")
        val frontier = mutableListOf(start to 0)
        val cameFrom = mutableMapOf<Coordinates, Coordinates>()
        val costSoFar = mutableMapOf<Coordinates, Int>(start to 0)

        while (frontier.isNotEmpty()) {
            frontier.sortBy { it.second }
            val current = frontier.removeFirst().first

            current.neighbors()
                .mapNotNull { tiles[it] }
                .forEach { nextTile ->
                    val newCost = costSoFar.getValue(current) + nextTile.movementCost()
                    if (newCost > movement) {
                        return@forEach
                    }
                    if (costSoFar[nextTile.coords]?.let { it > newCost } != false) {
                        costSoFar[nextTile.coords] = newCost
                        frontier.add(nextTile.coords to newCost)
                        cameFrom[nextTile.coords] = current
                    }
            }
        }

        println("costSoFar: $costSoFar")
        println("cameFrom: ${cameFrom.keys}")

        costSoFar.remove(start)
        //todo populate paths from maps
        return costSoFar.keys.map { target ->
            var pointer = target
            buildList {
                while (pointer != start) {
                    add(pointer)
                    pointer = cameFrom.getValue(pointer)
                }
            }
        }

        // paths associates by movement cost
//        val costToPaths = mutableMapOf<Int, List<List<Coordinates>>>(
//            0 to mutableListOf(listOf(start))
//        )
//
//        for (i in 1..movement) {
//            val paths = costToPaths.getValue(i - 1)
//            val existingPathEnds = paths.map { it.last() }
//
//            costToPaths[i] = paths.map { path ->
//                val possibleTargets = path.last()
//                    .neighbors()
//                    .filter { tiles[it]?.canGoThrough() == true && !existingPathEnds.contains(it) && it != start }
//
//                possibleTargets.map { path + it }
//            }.flatten()
//        }
//
//        println("breadth first done")
//
//        costToPaths.remove(0)
//        return costToPaths.values.flatten()
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
