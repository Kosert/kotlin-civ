package civ.model

import civ.contains
import civ.tile.Grass
import civ.tile.Mountains
import civ.tile.Tile
import civ.tile.Water
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport


sealed interface TileBonus

data class OverrideMovementCost(val movementCost: Int, val leaveCost: Int) : TileBonus
data class StockCollectBonus(val amount: Stockpiles) : TileBonus
data class DefenseBonus(val amount: Int) : TileBonus

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class Building(
    val tileRequirement: (Tile) -> Boolean,
    val unlockRequirement: (Tile) -> Boolean = { true },
    val cost: Stockpiles,
    val bonuses: List<TileBonus> = listOf(),
    //replaces only for main city buildings
    val replaces: Building? = null,
) {
    // MAIN CITY BUILDINGS
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
    CASTLE(
        tileRequirement = { it.buildings.contains(TOWN_HALL) },
        replaces = TOWN_HALL,
        cost = Stockpiles(wood = 100, gold = 50),
        bonuses = listOf(
            StockCollectBonus(Stockpiles(gold = 5)),
            DefenseBonus(2),
        )
    ),

    // ECONOMY AND CIVILIAN
    ROAD(
        tileRequirement = { it is Grass },
        cost = Stockpiles(gold = 5),
        bonus = OverrideMovementCost(5, 0)
    ),
    MARKET(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(TOWN_HALL) },
        cost = Stockpiles(wood = 30, gold = 15),
        bonus = StockCollectBonus(Stockpiles(gold = 3))
    ),

    FISHING_SHIP(
        tileRequirement = { it is Water },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 3))
    ),

    FISHING_HUT(
        tileRequirement = { it.isNotACity() && it is Grass && it.coast },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 2))
    ),
    PORT(
        tileRequirement = { FISHING_HUT.tileRequirement(it) },
        unlockRequirement = { it.buildings.contains(FISHING_HUT) },
        cost = Stockpiles(wood = 40),
        bonus = StockCollectBonus(Stockpiles(food = 2, gold = 3))
    ),

    LUMBERCAMP(
        tileRequirement = { it.isNotACity() && it is Grass && it.forest },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(wood = 2))
    ),
    SAWMILL(
        tileRequirement = { LUMBERCAMP.tileRequirement(it) },
        unlockRequirement = { it.buildings.contains(LUMBERCAMP) },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(wood = 3))
    ),

    FARM(
        tileRequirement = { it.isNotACity() && it is Grass && !it.forest && !it.river },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 2))
    ),
    WINDMILL(
        tileRequirement = { FARM.tileRequirement(it) },
        unlockRequirement = { it.buildings.contains(FARM) },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 3))
    ),

    RIVERLAND_FARM(
        tileRequirement = { it.isNotACity() && it is Grass && it.river && !it.forest },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 3))
    ),
    WATERMILL(
        tileRequirement = { RIVERLAND_FARM.tileRequirement(it) },
        unlockRequirement = { it.buildings.contains(RIVERLAND_FARM) },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 4))
    ),

    HUNTERS_CAMP(
        tileRequirement = { it.isNotACity() && it is Grass && it.animals },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 2, gold = 1))
    ),
    BUTCHERY(
        tileRequirement = { HUNTERS_CAMP.tileRequirement(it) },
        unlockRequirement = { it.buildings.contains(HUNTERS_CAMP) },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 3, gold = 1))
    ),

    MINE(
        tileRequirement = { it is Mountains && it.gold },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(gold = 5))
    ),

    // MILITARY
    BARRACKS(
        tileRequirement = { it.isACity() },
        cost = Stockpiles(wood = 20),
    ),
    STABLE(
        tileRequirement = { it.isACity() },
        cost = Stockpiles(wood = 30),
    ), //todo knight's stables?
    ARCHERY_RANGE(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(TOWN_HALL, BARRACKS) },
        cost = Stockpiles(wood = 30),
    ),

    GUARD_TOWERS(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(TOWN_HALL) },
        cost = Stockpiles(wood = 50),
        bonus = DefenseBonus(1),
    ),
    WALLS(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(CASTLE, GUARD_TOWERS) },
        cost = Stockpiles(wood = 50),
        bonus = DefenseBonus(2),
    ),

    BLACKSMITH(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(CASTLE) },
        cost = Stockpiles(wood = 30, gold = 30),
    ),
    ARMORERS_WORKSHOP(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(CASTLE) },
        cost = Stockpiles(wood = 30, gold = 30),
    ),
    SIEGE_WORKSHOP(
        tileRequirement = { it.isACity() },
        unlockRequirement = { it.buildings.contains(CASTLE) },
        cost = Stockpiles(wood = 30, gold = 30),
    ),

    ;

    constructor(
        tileRequirement: (Tile) -> Boolean,
        unlockRequirement: (Tile) -> Boolean = { true },
        cost: Stockpiles,
        bonus: TileBonus,
        replaces: Building? = null
    ) : this(tileRequirement, unlockRequirement, cost, listOf(bonus), replaces)

    companion object {
        val cityMainBuildings: Array<Building>
            get() = arrayOf(VILLAGE_HALL, TOWN_HALL, CASTLE)
    }
}

private fun Tile.isACity() = this.buildings.any { it in Building.cityMainBuildings }
private fun Tile.isNotACity() = this.buildings.none { it in Building.cityMainBuildings }

