package civ

import civ.hex.Coordinates
import civ.hex.getAllInRange
import kotlin.test.Test
import kotlin.test.assertContains

class CoordinatesTest {

    @Test
    fun rangeTest() {

        val center = Coordinates(0, 0)
        val range = center.getAllInRange(1)
        assertContains(range, center)
    }
}