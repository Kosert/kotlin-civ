package civ

import civ.hex.Coordinates
import civ.hex.distanceTo
import civ.hex.getAllInRange
import civ.hex.neighbors
import kotlin.test.Test
import kotlin.test.assertContains

class CoordinatesTest {

    @Test
    fun rangeTest() {

        val center = Coordinates(0, 0)
        val range = center.getAllInRange(1)
        assertContains(range, center)
    }

    @Test
    fun  distanceTest() {
        val center = Coordinates(0, 0)
        center.neighbors().forEach {
            println(it.distanceTo(center))
        }

    }
}