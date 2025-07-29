@file:OptIn(ExperimentalJsExport::class)

package civ.events

import civ.hex.Coordinates
import civ.model.CivUnit
import civ.model.Stockpiles
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
interface GameEvent

@JsExport
data class StockUpdated(val stock: Stockpiles):  GameEvent

@JsExport
object VisionChanged: GameEvent

@JsExport
sealed class UnitEvent(
    val unitId: String,
): GameEvent {

    class Created(val unit: CivUnit) : UnitEvent(unit.unitId)

    class Moved(unit: CivUnit) : UnitEvent(unit.unitId) {
        val newCoordinates: Coordinates = unit.coordinates
    }

    class Updated(val unit: CivUnit) : UnitEvent(unit.unitId)

    class Vanish(unit: CivUnit) : UnitEvent(unit.unitId)

    override fun toString(): String = "UnitEvent.${this::class.simpleName}(unitId='$unitId')"
}