@file:OptIn(ExperimentalJsExport::class)

package civ.model

import civ.hex.Coordinates
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

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
    val requiredBuildings: (Set<Building>) = emptySet()
) {
    SETTLERS(
        value = "settlers",
        attack = 0,
        range = 0,
        defense = 0,
        maxHp = 5,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 40)
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
        requiredBuildings = setOf(Building.STABLE)
    ),

    WARRIOR(
        value = "warrior",
        attack = 3,
        range = 1,
        defense = 1,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 15),
        requiredBuildings = setOf(Building.BARRACKS)
    ),

    // TOWN LEVEL UNITS

    ARCHER(
        value = "archer",
        attack = 4,
        range = 2,
        defense = 1,
        maxHp = 10,
        speed = 1,
        visionRange = 2,
        cost = Stockpiles(food = 15, wood = 10),
        requiredBuildings = setOf(Building.ARCHERY_RANGE)
    ),

    RIDER(
        value = "rider",
        attack = 5,
        range = 1,
        defense = 1,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 20, gold = 5),
        requiredBuildings = setOf(Building.TOWN_HALL, Building.STABLE)
    ),

    SWORDSMAN(
        value = "swordsman",
        attack = 5,
        range = 1,
        defense = 3,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 20, gold = 15),
        requiredBuildings = setOf(Building.BARRACKS, Building.BLACKSMITH)
    ),

    // CASTLE LEVEL UNITS

    KNIGHT(
        value = "knight",
        attack = 10,
        range = 1,
        defense = 5,
        maxHp = 20,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 20, gold = 40),
        requiredBuildings = setOf(Building.CASTLE, Building.STABLE, Building.BLACKSMITH)
    ),

//    HEAVY_PIKEMAN(
//        value = "heavy_pikemen",
//        attack = 4,
//        range = 1,
//        defense = 8,
//        maxHp = 15,
//        speed = 1,
//        visionRange = 1,
//        cost = Stockpiles(food = 20, gold = 20),
//        buildingRequirement = setOf(Building.BARRACKS, Building.ARMORERS_WORKSHOP)
//    ),

    HEAVY_SWORDSMAN(
        value = "heavy_swordsman",
        attack = 8,
        range = 1,
        defense = 10,
        maxHp = 20,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 20, gold = 50),
        requiredBuildings = setOf(Building.BARRACKS, Building.BLACKSMITH, Building.ARMORERS_WORKSHOP)
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
        requiredBuildings = setOf(Building.SIEGE_WORKSHOP)
    )

    ;

    fun buildingRequirement(buildings: Set<Building>): Boolean = buildings.containsAll(requiredBuildings)

    companion object {
        fun byValue(value: String) = entries.first { it.value == value }
    }
}

@JsExport
data class CivUnit(
    val unitId: String = Uuid.random().toHexString(),
    val unitType: UnitType,
    val playerId: String,
    val coordinates: Coordinates,
    val hp: Int = unitType.maxHp,
    val movementLeft: Int = speedToMovement(unitType.speed),
    val actionPoint: Boolean = true,
    val conquerState: ConquerState = ConquerState.NONE,
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

@JsExport
enum class ConquerState {
    NONE, OCCUPYING, CAN_CONQUER
}
