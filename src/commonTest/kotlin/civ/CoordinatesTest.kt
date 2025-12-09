package civ

import civ.hex.Coordinates
import civ.hex.distanceTo
import civ.hex.getAllInRange
import civ.hex.neighbors
import kotlin.test.Test
import kotlin.test.assertContains
import kotlin.test.assertContentEquals

class CoordinatesTest {

    @Test
    fun rangeTest() {
        val center = Coordinates(0, 0)
        val range = center.getAllInRange(1)
        assertContains(range, center)

        val neighbors = center.neighbors()
        assertContentEquals((range - center).sortedBy { it.hashCode() }, neighbors.sortedBy { it.hashCode() })
    }

    @Test
    fun distanceTest() {
        val center = Coordinates(0, 0)
        center.neighbors().forEach {
            println(it.distanceTo(center))
        }

    }
}