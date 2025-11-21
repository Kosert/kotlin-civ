@file:OptIn(ExperimentalJsExport::class)

package civ.hex

import civ.core.require
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

fun Pair<Int, Int>.toCoordinates() = Coordinates(first, second)

fun Coordinates.movedBy(q: Int = 0, r: Int = 0): Coordinates = Coordinates(this.q + q, this.r + r)
fun Coordinates.movedBy(edge: HexEdge): Coordinates = Coordinates(this.q + edge.q, this.r + edge.r)

fun Coordinates.neighbors(): List<Coordinates> = listOf(
    this.movedBy(-1, 0),
    this.movedBy(-1, 1),
    this.movedBy(0, 1),
    this.movedBy(0, -1),
    this.movedBy(1, 0),
    this.movedBy(1, -1),
)

fun Coordinates.distanceTo(other: Coordinates): Int {
    return (abs(this.q - other.q) +
        abs(this.r - other.r) +
        abs(this.s - other.s)) / 2
}

fun Coordinates.lineTo(other: Coordinates): List<Coordinates> {
    if (this == other)
        return listOf(this)

    fun lerp(a: Int, b: Int, t: Double) = a + (b - a) * t
    fun cubeLerp(a: Coordinates, b: Coordinates, t: Double): Triple<Double, Double, Double> {
        return Triple(
            lerp(a.q, b.q, t),
            lerp(a.r, b.r, t),
            lerp(a.s, b.s, t)
        )
    }

    val length = this.distanceTo(other)
    return List(length + 1) {
        val (q, r, s) = cubeLerp(this, other, 1.0 / length * it)
        Coordinates.fromDoubles(q, r, s)
    }
}

fun Coordinates.getAllInRange(radius: Int): List<Coordinates> = buildList {
    for (q in -radius..radius) {
        for (r in max(-radius, -q - radius)..min(radius, -q + radius)) {
            add(this@getAllInRange.movedBy(q, r))
        }
    }
}

fun dijkstra(
    start: Coordinates,
    possibleEnds: List<Coordinates>,
    cost: Coordinates.() -> Int
): List<Coordinates> {
    val frontier = mutableListOf(start to 0)
    val cameFrom = mutableMapOf<Coordinates, Coordinates>()
    val totalCosts = mutableMapOf<Coordinates, Int>(start to 0)

    var end: Coordinates? = null
    var iterationCount = 0
    while (frontier.isNotEmpty()) {
        iterationCount++
        if (iterationCount > 100_000) {
            throw RuntimeException("Iteration count over 100_000")
            return emptyList()
        }
        frontier.sortBy { it.second }
        val current = frontier.removeFirst().first

        if (current in possibleEnds) {
            end = current
            break
        }

        current.neighbors()
            .forEach { nextTile ->
                val newCost = totalCosts.getValue(current) + nextTile.cost()
                if (totalCosts[nextTile]?.let { it > newCost } != false) {
                    totalCosts[nextTile] = newCost
                    cameFrom[nextTile] = current
                    frontier.add(nextTile to newCost)
                }
            }
    }

    println("dijkstra iteration count: $iterationCount")

    var pointer = end.require()
    return buildList<Coordinates> {
        while (pointer != start) {
            add(pointer)
            pointer = cameFrom.getValue(pointer)
        }
    }.reversed()
}

fun dijkstra(
    start: Coordinates,
    end: Coordinates,
    cost: Coordinates.() -> Int
): List<Coordinates> {
    val frontier = mutableListOf(start to 0)
    val cameFrom = mutableMapOf<Coordinates, Coordinates>()
    val totalCosts = mutableMapOf<Coordinates, Int>(start to 0)

    while (frontier.isNotEmpty()) {
        frontier.sortBy { it.second }
        val current = frontier.removeFirst().first

        if (current == end)
            break

        current.neighbors()
            .forEach { nextTile ->
                val newCost = totalCosts.getValue(current) + nextTile.cost()
                if (totalCosts[nextTile]?.let { it > newCost } != false) {
                    totalCosts[nextTile] = newCost
                    cameFrom[nextTile] = current
                    frontier.add(nextTile to newCost)
                }
            }
    }

    var pointer = end
    return buildList<Coordinates> {
        while (pointer != start) {
            add(pointer)
            pointer = cameFrom.getValue(pointer)
        }
    }.reversed()
}