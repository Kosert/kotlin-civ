package civ

import civ.GameApi
import civ.Move
import hexcore.movedBy
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.asserter


class ScenarioTest {

    @Test
    fun scenario1() {
        val gameApi = GameApi.fromGameState(TestData.gameState1)
        val player = TestData.gameState1.players.first()
        println("start")

        println(gameApi.tilesForPlayer(player.playerId).filter { it.tile != null })

        val unit = gameApi.unitsFor(player.playerId).get(1)

        println("selected: $unit")
        val target = unit.coordinates.movedBy(0, 1)
        println("Move to $target")

        gameApi.execute(Move(unit.unitId, target))

        val updatedTiles = gameApi.tilesForPlayer(player.playerId).filter { it.tile != null }
        val unit2 = gameApi.unitsFor(player.playerId).get(1)

        println(unit2)
        val unitAtTarget = updatedTiles.find { it.coordinates == target }?.unit
        assertEquals(unit, unit2)
    }
}