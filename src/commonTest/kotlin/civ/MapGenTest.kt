package civ

import civ.hex.MapGenerator
import civ.model.Player
import civ.model.PlayerColor
import kotlin.test.Test

class MapGenTest {

    @Test
    fun gen() {

        val generator = MapGenerator(123)

        generator.generate(players = listOf(
            Player(name  = "p1", color = PlayerColor.BLUE),
            Player(name  = "p2", color = PlayerColor.RED),
        ))

    }

}