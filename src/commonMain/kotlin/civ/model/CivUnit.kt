package civ.model

import civ.contains
import civ.hex.Coordinates
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class UnitType(
    val value: String,
    val attack: Int, //todo attack range? actions?
    val range: Int,
    val defense: Int,
    val maxHp: Int,
    val speed: Int,
    val visionRange: Int,
    val cost: Stockpiles,
    val buildingRequirement: (Set<Building>) -> Boolean = { true }
) {
    SETTLERS(
        value = "settlers",
        attack = 0,
        range = 0,
        defense = 0,
        maxHp = 5,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 30)
    ),

    SCOUT(
        value = "scout",
        attack = 3,
        range = 1,
        defense = 1,
        maxHp = 10,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 10),
        buildingRequirement = { it.contains(Building.STABLE) }
    ),

    WARRIOR(
        value = "warrior",
        attack = 4,
        range = 1,
        defense = 1,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 10),
        buildingRequirement = { it.contains(Building.BARRACKS) }
    ),

    ARCHER(
        value = "archer",
        attack = 4,
        range = 2,
        defense = 1,
        maxHp = 10,
        speed = 1,
        visionRange = 2,
        cost = Stockpiles(food = 10, wood = 5),
        buildingRequirement = { it.contains(Building.ARCHERY_RANGE) }
    ),

    SWORDSMAN(
        value = "swordsman",
        attack = 6,
        range = 1,
        defense = 3,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 10, gold = 10),
        buildingRequirement = { it.contains(Building.BARRACKS, Building.BLACKSMITH) }
    ),

    KNIGHT(
        value = "knight",
        attack = 10,
        range = 1,
        defense = 5,
        maxHp = 20,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 20, gold = 20),
        buildingRequirement = { it.contains(Building.STABLE, Building.BLACKSMITH) }
    ),

    HEAVY_PIKEMAN(
        value = "heavy_pikemen",
        attack = 4,
        range = 1,
        defense = 8,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 20, gold = 20),
        buildingRequirement = { it.contains(Building.BARRACKS, Building.ARMORERS_WORKSHOP) }
    ),

    HEAVY_SWORDSMAN(
        value = "heavy_swordsman",
        attack = 10,
        range = 1,
        defense = 10,
        maxHp = 20,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 20, gold = 50),
        buildingRequirement = { it.contains(Building.BARRACKS, Building.BLACKSMITH, Building.ARMORERS_WORKSHOP) }
    ),

    TREBUCHET(
        value = "trebuchet",
        attack = 10,
        range = 3,
        defense = 0,
        maxHp = 10,
        speed = 1,
        visionRange = 3,
        cost = Stockpiles(wood = 50, gold = 50),
        buildingRequirement = { it.contains(Building.SIEGE_WORKSHOP) }
    )

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
    val movementLeft: Int = speedToMovement(unitType.speed),
    val actionPoint: Boolean = true,
) {
    val attack: Int = unitType.attack
    val defense: Int = unitType.defense
    val attackRange: Int = unitType.range
    val maxHp: Int = unitType.maxHp
    val speed: Int = unitType.speed
    val visionRange: Int = unitType.visionRange

    companion object {
        fun speedToMovement(speed: Int): Int {
            if (speed == 1)
                return 11
            return speed * 10
        }
    }
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
