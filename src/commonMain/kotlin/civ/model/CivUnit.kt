@file:OptIn(ExperimentalJsExport::class)

package civ.model

import civ.hex.Coordinates
import kotlinx.serialization.Serializable
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
enum class UnitType(
    val value: String,
    val attack: Int,
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
        cost = Stockpiles(food = 80)
    ),

    WARRIOR(
        value = "warrior",
        attack = 2,
        range = 1,
        defense = 2,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 40),
        requiredBuildings = setOf(Building.BARRACKS)
    ),

    SCOUT(
        value = "scout",
        attack = 3,
        range = 1,
        defense = 1,
        maxHp = 10,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 50),
        requiredBuildings = setOf(Building.STABLE)
    ),

    ARCHER(
        value = "archer",
        attack = 3,
        range = 2,
        defense = 1,
        maxHp = 10,
        speed = 1,
        visionRange = 2,
        cost = Stockpiles(food = 40, gold = 10),
        requiredBuildings = setOf(Building.ARCHERY_RANGE)
    ),

    // TOWN LEVEL UNITS

    SWORDSMAN(
        value = "swordsman",
        attack = 5,
        range = 1,
        defense = 3,
        maxHp = 15,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 50, gold = 10),
        requiredBuildings = setOf(Building.BLACKSMITH)
    ),

    RIDER(
        value = "rider",
        attack = 5,
        range = 1,
        defense = 1,
        maxHp = 15,
        speed = 2,
        visionRange = 1,
        cost = Stockpiles(food = 60, gold = 10),
        requiredBuildings = setOf(Building.WARHORSE_STABLES)
    ),

    CROSSBOWMAN(
        value = "crossbowman",
        attack = 6,
        range = 2,
        defense = 1,
        maxHp = 15,
        speed = 1,
        visionRange = 2,
        cost = Stockpiles(food = 50, gold = 25),
        requiredBuildings = setOf(Building.ARBALEST_GUILD)
    ),

    // CASTLE LEVEL UNITS

    HEAVY_SWORDSMAN(
        value = "heavy_swordsman",
        attack = 8,
        range = 1,
        defense = 10,
        maxHp = 20,
        speed = 1,
        visionRange = 1,
        cost = Stockpiles(food = 100, gold = 50),
        requiredBuildings = setOf(Building.ARMORERS_WORKSHOP)
    ),

    KNIGHT(
        value = "knight",
        attack = 10,
        range = 1,
        defense = 5,
        maxHp = 20,
        speed = 2,
        visionRange = 2,
        cost = Stockpiles(food = 100, gold = 80),
        requiredBuildings = setOf(Building.KNIGHTS_HALL)
    ),

    TREBUCHET(
        value = "trebuchet",
        attack = 10,
        range = 3,
        defense = 0,
        maxHp = 10,
        speed = 1,
        visionRange = 3,
        cost = Stockpiles(food = 50, gold = 100),
        requiredBuildings = setOf(Building.SIEGE_WORKSHOP)
    ),

    ;

    fun buildingRequirement(buildings: Set<Building>): Boolean = buildings.containsAll(requiredBuildings)

    companion object {
        fun byValue(value: String) = entries.first { it.value == value }
    }
}

@JsExport
@Serializable
data class CivUnit(
    val unitId: String = Uuid.random().toHexString(),
    val unitType: UnitType,
    val playerId: String,
    val coordinates: Coordinates,
    val hp: Int = unitType.maxHp,
    val movementLeft: Int = speedToMovement(unitType.speed),
    val actionPoint: Boolean = true,
    val conquerState: ConquerState = ConquerState.None,
) {
    val attack: Int = unitType.attack
    val defense: Int = unitType.defense
    val attackRange: Int = unitType.range
    val maxHp: Int = unitType.maxHp
    val speed: Int = unitType.speed
    val visionRange: Int = unitType.visionRange

    companion object {
        fun speedToMovement(speed: Int): Int = speed * 10
    }
}

@JsExport
@Serializable
sealed class ConquerState {
    @Serializable
    data object None: ConquerState() {
        override val canConquer: Boolean = false
    }

    @Serializable
    open class Occupying(val turnsLeft: Int): ConquerState() {
        override val canConquer: Boolean = this.turnsLeft == 0
        override fun onTurnPassed(): ConquerState = Occupying((turnsLeft - 1).coerceAtLeast(0))
        override fun toString(): String = "Occupying($turnsLeft)"
    }

    abstract val canConquer: Boolean
    open fun onTurnPassed(): ConquerState = this
}
