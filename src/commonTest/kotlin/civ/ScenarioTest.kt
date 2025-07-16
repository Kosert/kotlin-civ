package civ


import civ.action.Move
import civ.core.GameApi
import civ.hex.movedBy
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull


class MoveTest {

    @Test
    fun moveBy1() {
        val gameApi = GameApi.fromGameState(TestData.gameState1)
        val player = TestData.gameState1.players.first()
        val unit = gameApi.unitsFor(player.playerId)[1]

        val target = unit.coordinates.movedBy(0, 1)
        gameApi.execute(Move(unit.unitId, target))

        val updatedTiles = gameApi.tilesForPlayer(player.playerId).filter { it.tile != null }
        val unitAtTarget = updatedTiles.find { it.coordinates == target }?.unit
        val unitAtSource = updatedTiles.find { it.coordinates == unit.coordinates }?.unit

        gameApi.verifyIntegrity()
        assertEquals(unit.unitId, unitAtTarget?.unitId)
        assertNull(unitAtSource)
        println(gameApi.movementRangeFor(unit.unitId))
    }

    @Test
    fun moveBy2() {
        val gameApi = GameApi.fromGameState(TestData.gameState1)
        val player = TestData.gameState1.players.first()
        val unit = gameApi.unitsFor(player.playerId)[1]

        val target = unit.coordinates.movedBy(0, 2)
        val passed = unit.coordinates.movedBy(0, 1)
        gameApi.execute(Move(unit.unitId, target))

        val updatedTiles = gameApi.tilesForPlayer(player.playerId).filter { it.tile != null }
        val unitAtSource = updatedTiles.find { it.coordinates == unit.coordinates }?.unit
        val unitAtPassed = updatedTiles.find { it.coordinates == passed }?.unit
        val unitAtTarget = updatedTiles.find { it.coordinates == target }?.unit

        gameApi.verifyIntegrity()
        assertNull(unitAtPassed)
        assertNull(unitAtSource)
        assertEquals(unit.unitId, unitAtTarget?.unitId)

        println(gameApi.movementRangeFor(unit.unitId))
    }

//    @Test
//    fun moveBy2OneByOne() {
//        val gameApi = GameApi.fromGameState(TestData.gameState1)
//        val player = TestData.gameState1.players.first()
//        val unit = gameApi.unitsFor(player.playerId)[1]
//
//        val target = unit.coordinates.movedBy(0, 1)
//        gameApi.execute(Move(unit.unitId, target))
//
//        val updatedTiles = gameApi.tilesForPlayer(player.playerId).filter { it.tile != null }
//        val unitAtTarget = updatedTiles.find { it.coordinates == target }?.unit
//        val unitAtSource = updatedTiles.find { it.coordinates == unit.coordinates }?.unit
//
//        gameApi.verifyIntegrity()
//        assertEquals(unit.unitId, unitAtTarget?.unitId)
//        assertNull(unitAtSource)
//    }
}