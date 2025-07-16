package civ.model

import civ.tile.Grass
import civ.tile.Tile
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport


sealed interface TileBonus

data class OverrideMovementCost(val movementCost: Int) : TileBonus
data class StockCollectBonus(val amount: Stockpiles) : TileBonus
data class DefenseBonus(val amount: Int) : TileBonus

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class Building(
    val tileRequirement: (Tile) -> Boolean,
    val cost: Stockpiles,
    val bonuses: List<TileBonus>,
    val replaces: Building? = null,
) {
    // CITIES
    VILLAGE_HALL(
        tileRequirement = { false }, // built by settlers
        cost = Stockpiles(),
        bonuses = listOf(
            StockCollectBonus(Stockpiles(gold = 1)),
        ),
    ),
    TOWN_HALL(
        tileRequirement = { it.buildings.contains(VILLAGE_HALL) },
        replaces = VILLAGE_HALL,
        cost = Stockpiles(wood = 50, gold = 25),
        bonuses = listOf(
            StockCollectBonus(Stockpiles(gold = 3)),
            DefenseBonus(1),
        ),
    ),
    CITY_HALL(
        tileRequirement = { it.buildings.contains(TOWN_HALL) },
        replaces = TOWN_HALL,
        cost = Stockpiles(TODO()),
        bonuses = listOf(
            StockCollectBonus(Stockpiles(gold = 5)),
            DefenseBonus(2),
        )
    ),

    // ================

    ROAD(
        tileRequirement = { it is Grass },
        cost = Stockpiles(gold = 1),
        bonus = OverrideMovementCost(5)
    ),
    LUMBERCAMP(
        tileRequirement = { it is Grass && it.forest },
        cost = Stockpiles(wood = 5),
        bonus = StockCollectBonus(Stockpiles(wood = 2))
    ),

    ;

    constructor(
        tileRequirement: (Tile) -> Boolean,
        cost: Stockpiles,
        bonus: TileBonus,
        replaces: Building? = null
    ) : this(tileRequirement, cost, listOf(bonus), replaces)

    companion object {
        val cityMainBuildings: Array<Building>
            get() = arrayOf(VILLAGE_HALL, TOWN_HALL, CITY_HALL)
    }
}

