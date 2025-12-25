@file:OptIn(ExperimentalJsExport::class)

package civ.tile

import civ.hex.Coordinates
import civ.hex.HexEdge
import civ.model.*
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

const val IMPASSABLE_COST = 100_000

@JsExport
@Serializable //todo separate tile serializable type?
sealed class Tile {
    abstract val coords: Coordinates
    abstract val buildings: Set<Building>

    open val isBusy: Boolean
        get() = false

    protected open val baseMovementCost: Int
        get() = 10
    protected open val baseDefenseBonus: Int
        get() = 0

    fun movementCost(): Int {
        return if (isBusy)
            IMPASSABLE_COST
        else {
            buildings.flatMap { it.bonuses }
                .filterIsInstance<OverrideMovementCost>()
                .firstOrNull()
                ?.movementCost
                ?: baseMovementCost
        }
    }

    fun tileVision(): Int = buildings.flatMap { it.bonuses }
        .filterIsInstance<VisionUpgrade>()
        .maxOf { it.amount }

    fun defenseBonus(): Int = baseDefenseBonus + buildings.flatMap { it.bonuses }
        .filterIsInstance<DefenseBonus>()
        .sumOf { it.amount }

    abstract fun updated(
        isBusy: Boolean = this.isBusy,
        buildings: Set<Building> = this.buildings,
    ): Tile

    fun getAllPossibleBuildings(): List<Building> = buildings
        .plus(Building.entries.filter { it.tileRequirement(this) })
        .sortedBy { it.ordinal }

    fun getMainCityBuilding(): Building? = buildings.firstOrNull { it in Building.cityMainBuildings }

    abstract fun getVisibleName(): String
}

@JsExport
@Serializable
data class Water(
    override val coords: Coordinates,
    override val buildings: Set<Building> = setOf(),
) : Tile() {
    override val baseMovementCost: Int
        get() = IMPASSABLE_COST

    override fun updated(isBusy: Boolean, buildings: Set<Building>) = copy(buildings = buildings)

    override fun getVisibleName() = "Water"
}

@JsExport
@Serializable
data class Grass(
    override val coords: Coordinates,
    override val isBusy: Boolean = false,
    val coast: Boolean = false,
    val forest: Boolean = false,
    val animals: Boolean = false,
    val riverEdges: List<HexEdge> = listOf(),
    override val buildings: Set<Building> = setOf(),
) : Tile() {
    val river: Boolean
        get() = riverEdges.isNotEmpty()

    override val baseMovementCost: Int
        get() = when {
            river || forest -> 20
            else -> 10
        }

    override fun updated(
        isBusy: Boolean,
        buildings: Set<Building>
    ) = copy(isBusy = isBusy, buildings = buildings)

    override fun getVisibleName(): String = listOfNotNull(
        if (forest) "Forest" else "Plains",
        "coastline".takeIf { coast },
        "river".takeIf { river },
        "animals".takeIf { animals },
    ).joinToString(", ")
}

@JsExport
@Serializable
data class Mountains(
    override val coords: Coordinates,
    override val isBusy: Boolean = false,
    override val buildings: Set<Building> = setOf(),
    val gold: Boolean = false,
) : Tile() {
    override val baseMovementCost: Int
        get() = 100
    override val baseDefenseBonus: Int
        get() = 1

    override fun updated(
        isBusy: Boolean,
        buildings: Set<Building>
    ) = copy(isBusy = isBusy, buildings = buildings)

    override fun getVisibleName() = "Mountains" + if (gold) ", gold ore" else ""
}

