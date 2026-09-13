@file:OptIn(ExperimentalJsExport::class)

package civ.events

import civ.core.GameStatistics
import civ.core.SimpleStats
import civ.hex.Coordinates
import civ.model.CivUnit
import civ.model.PlayerTileData
import civ.model.Stockpiles
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
interface GameEvent

@JsExport
data class StockUpdated(
    val stock: Stockpiles,
    val income: Stockpiles?,
): GameEvent

@JsExport
data class VisionChanged(
    val tiles: List<PlayerTileData>,
): GameEvent

@JsExport
data class AttackEvent(
    val from: Coordinates,
    val to: Coordinates,
    val isRanged: Boolean,
    val updatedAttacker: CivUnit?,
    val updatedDefender: CivUnit?,
): GameEvent

@JsExport
data class TileUpdated(
    val tileData: PlayerTileData,
): GameEvent

@JsExport
data class ScoreChanged(
    val score: Map<String, SimpleStats>,
): GameEvent

@JsExport
sealed class UnitEvent(
    val unitId: String,
): GameEvent {

    class Created(val unit: CivUnit) : UnitEvent(unit.unitId)

    class Moved(unit: CivUnit) : UnitEvent(unit.unitId) {
        val newCoordinates: Coordinates = unit.coordinates
    }

    class CombinedMove(
        unit: CivUnit,
        val visionEvents: List<VisionChanged>,
        val movedEvents: List<Moved>,
    ) : UnitEvent(unit.unitId)

    class Vanish(unit: CivUnit) : UnitEvent(unit.unitId)

    override fun toString(): String = "UnitEvent.${this::class.simpleName}(unitId='$unitId')"
}

@JsExport
data class TurnEndedEvent(
    val newCurrentPlayerId: String,
    val turnNumber: Int,
): GameEvent

@JsExport
data class GameOverEvent(
    val finalStats: Map<String, GameStatistics>,
): GameEvent