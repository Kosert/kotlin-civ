package civ

import hexcore.Coordinates
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class UnitType(
    val value: String,
    val attack: Int, //todo attack range? actions?
    val maxHp: Int,
    val speed: Int,
    val visionRange: Int,
    val cost: Stockpiles,
) {
    SETTLERS(
        value = "settlers",
        attack = 0,
        maxHp = 10,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 30)
    ),

    SCOUT(
        value = "scout",
        attack = 1,
        maxHp = 10,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 5)
    ),

    ;

    companion object {
        fun byValue(value: String) = entries.first { it.value == value }
    }
}

@OptIn(ExperimentalJsExport::class)
@JsExport
data class CivUnit(
    val unitId: String = Uuid.random().toHexString(),
    val unitType: UnitType,
    val playerId: String,
    val coordinates: Coordinates,
    val hp: Int = unitType.maxHp,
    val movementLeft: Int = unitType.speed * 10,
    //todo attackAction: Boolean
) {
    val attack: Int = unitType.attack
    val maxHp: Int = unitType.maxHp
    val speed: Int = unitType.speed
    val visionRange: Int = unitType.visionRange
}

//sealed class CivUnit(
//    unitType: UnitType
//) {
//    val attack: Int = unitType.attack
//    val maxHp: Int = unitType.maxHp
//    val movement: Int = unitType.movement
//    val visionRange: Int = unitType.visionRange
//}
//
//data class Settlers(
//    val playerId: String,
//    val hp: Int = unitType.maxHp,
//    val movementLeft: Int = unitType.movement
//) : CivUnit(unitType) {
//
//    companion object {
//        private val unitType = UnitType.SETTLERS
//    }
//}
//
//class Scout(
//    val playerId: String,
//    val hp: Int = unitType.maxHp,
//    val movementLeft: Int = unitType.movement
//) : CivUnit(unitType) {
//
//    companion object {
//        private val unitType = UnitType.SCOUT
//    }
//}
