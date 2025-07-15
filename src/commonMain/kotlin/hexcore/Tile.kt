@file:OptIn(ExperimentalJsExport::class)

package hexcore

import civ.Building
import civ.City
import civ.CivUnit
import civ.OverrideMovementCost
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
sealed class Tile {
    abstract val coords: Coordinates
    abstract val buildings: Set<Building>

    open val isBusy: Boolean = false

    protected abstract val baseMovementCost: Int
    fun movementCost(): Int {
        return if (isBusy)
            Int.MAX_VALUE
        else {
            buildings.flatMap { it.bonuses }
                .filterIsInstance<OverrideMovementCost>()
                .firstOrNull()
                ?.movementCost
                ?: baseMovementCost
        }
    }

    abstract fun updated(
        isBusy: Boolean = this.isBusy,
        buildings: Set<Building> = this.buildings,
    ): Tile

    @Deprecated("use movementCost()")
    open fun canGoThrough(): Boolean = !isBusy
}

@JsExport
data class Water(
    override val coords: Coordinates,
    override val buildings: Set<Building> = setOf(),
) : Tile() {
    override val baseMovementCost: Int = Int.MAX_VALUE
    override fun updated(isBusy: Boolean, buildings: Set<Building>) = copy(buildings = buildings)
}

@JsExport
data class Grass(
    override val coords: Coordinates,
    override val isBusy: Boolean = false,
    val coast: Boolean = false,
    val forest: Boolean = false,
    val animals: Boolean = false,
    val river: Boolean = false,
    override val buildings: Set<Building> = setOf(),
) : Tile() {
    override val baseMovementCost: Int
        get() = when {
            river || forest -> 15
            else -> 10
        }

    override fun updated(
        isBusy: Boolean,
        buildings: Set<Building>
    ) = copy(isBusy = isBusy, buildings = buildings)
}

@JsExport
data class Mountains(
    override val coords: Coordinates,
    override val isBusy: Boolean = false,
    override val buildings: Set<Building> = setOf(),
    val gold: Boolean = false,
) : Tile() {
    override val baseMovementCost: Int
        get() = 15

    override fun updated(
        isBusy: Boolean,
        buildings: Set<Building>
    ) = copy(isBusy = isBusy, buildings = buildings)
}

@JsExport
data class PlayerTileData(
    val coordinates: Coordinates,
    val isVisible: Boolean,

    /**
     * null means Tile is not yet discovered
     */
    val tile: Tile?,
    val unit: CivUnit?,
    val city: City?,
)
