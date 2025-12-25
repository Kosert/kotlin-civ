package civ.model

import civ.tile.Grass
import civ.tile.Mountains
import civ.tile.Tile
import civ.tile.Water
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport


sealed interface TileBonus

data class OverrideMovementCost(val movementCost: Int) : TileBonus
data class StockCollectBonus(val amount: Stockpiles) : TileBonus
data class DefenseBonus(val amount: Int) : TileBonus
data class VisionUpgrade(val amount: Int) : TileBonus

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class Building(
    val tileRequirement: (Tile) -> Boolean,
    val buildingRequirements: Set<Building> = emptySet(),
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
            OverrideMovementCost(5),
            StockCollectBonus(Stockpiles(gold = 1)),
        ),
    ),
    TOWN_HALL(
        tileRequirement = { it.buildings.contains(VILLAGE_HALL) },
        replaces = VILLAGE_HALL,
        cost = Stockpiles(food = 100, gold = 50),
        bonuses = listOf(
            OverrideMovementCost(5),
            StockCollectBonus(Stockpiles(gold = 3)),
            DefenseBonus(1),
        ),
    ),
    CASTLE(
        tileRequirement = { it.buildings.contains(TOWN_HALL) },
        replaces = TOWN_HALL,
        cost = Stockpiles(food = 300, gold = 100),
        bonuses = listOf(
            OverrideMovementCost(5),
            StockCollectBonus(Stockpiles(gold = 5)),
            DefenseBonus(2),
        )
    ),

    // ECONOMY AND CIVILIAN
    ROAD(
        tileRequirement = { it is Grass && it.isNotACity() },
        cost = Stockpiles(gold = 5),
        bonus = OverrideMovementCost(5)
    ),
    WATCH_TOWER(
        tileRequirement = { it is Grass && it.isNotACity() },
        cost = Stockpiles(wood = 10, gold = 5),
        bonus = VisionUpgrade(3)
    ),

    FISH_TRAP(
        tileRequirement = { it is Water },
        cost = Stockpiles(wood = 5),
        bonus = StockCollectBonus(Stockpiles(food = 1))
    ),
    FISHING_SHIP(
        tileRequirement = { it is Water },
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(food = 3))
    ),

    FISHING_HUT(
        tileRequirement = { it.isNotACity() && it is Grass && it.coast },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 1))
    ),
    PORT(
        tileRequirement = { FISHING_HUT.tileRequirement(it) },
        buildingRequirements = setOf(FISHING_HUT),
        cost = Stockpiles(wood = 35),
        bonus = StockCollectBonus(Stockpiles(food = 2, gold = 3))
    ),

    LUMBERCAMP(
        tileRequirement = { it.isNotACity() && it is Grass && it.forest },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(wood = 1))
    ),
    SAWMILL(
        tileRequirement = { LUMBERCAMP.tileRequirement(it) },
        buildingRequirements = setOf(LUMBERCAMP),
        cost = Stockpiles(wood = 20),
        bonus = StockCollectBonus(Stockpiles(wood = 3))
    ),

    FARM(
        tileRequirement = { it.isNotACity() && it is Grass && !it.forest && !it.river },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 1))
    ),
    WINDMILL(
        tileRequirement = { FARM.tileRequirement(it) },
        buildingRequirements = setOf(FARM),
        cost = Stockpiles(wood = 25),
        bonus = StockCollectBonus(Stockpiles(food = 3))
    ),

    RIVERLAND_FARM(
        tileRequirement = { it.isNotACity() && it is Grass && it.river && !it.forest },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 2))
    ),
    WATERMILL(
        tileRequirement = { RIVERLAND_FARM.tileRequirement(it) },
        buildingRequirements = setOf(RIVERLAND_FARM),
        cost = Stockpiles(wood = 25),
        bonus = StockCollectBonus(Stockpiles(food = 4))
    ),

    HUNTERS_CAMP(
        tileRequirement = { it.isNotACity() && it is Grass && it.animals },
        cost = Stockpiles(wood = 10),
        bonus = StockCollectBonus(Stockpiles(food = 1, gold = 1))
    ),
    BUTCHERY(
        tileRequirement = { HUNTERS_CAMP.tileRequirement(it) },
        buildingRequirements = setOf(HUNTERS_CAMP),
        cost = Stockpiles(wood = 30),
        bonus = StockCollectBonus(Stockpiles(food = 3, gold = 1))
    ),

    //todo something else for mountains?
    MINE(
        tileRequirement = { it is Mountains && it.gold },
        cost = Stockpiles(wood = 40),
        bonus = StockCollectBonus(Stockpiles(gold = 5))
    ),

    // City buildings

    //todo another gold income building for cities
    MARKET(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(TOWN_HALL),
        cost = Stockpiles(wood = 20, gold = 5),
        bonus = StockCollectBonus(Stockpiles(gold = 3))
    ),

    GUARD_TOWERS(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(TOWN_HALL),
        cost = Stockpiles(wood = 40),
        bonus = DefenseBonus(1),
    ),
    WALLS(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(CASTLE, GUARD_TOWERS),
        cost = Stockpiles(wood = 60),
        bonus = DefenseBonus(2),
    ),

    // MILITARY
    BARRACKS(
        tileRequirement = { it.isACity() },
        cost = Stockpiles(wood = 20),
    ),
    BLACKSMITH(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(TOWN_HALL, BARRACKS),
        cost = Stockpiles(wood = 50, gold = 20),
    ),
    ARMORERS_WORKSHOP(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(CASTLE, BLACKSMITH),
        cost = Stockpiles(wood = 50, gold = 50),
    ),

    STABLE(
        tileRequirement = { it.isACity() },
        cost = Stockpiles(wood = 30),
    ),
    WARHORSE_STABLES(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(TOWN_HALL, STABLE),
        cost = Stockpiles(wood = 50, gold = 20),
    ),
    KNIGHTS_HALL(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(CASTLE, WARHORSE_STABLES),
        cost = Stockpiles(wood = 50, gold = 50),
    ),

    ARCHERY_RANGE(
        tileRequirement = { it.isACity() },
        cost = Stockpiles(wood = 30),
    ),
    ARBALEST_GUILD(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(TOWN_HALL, ARCHERY_RANGE),
        cost = Stockpiles(wood = 50, gold = 20),
    ),
    SIEGE_WORKSHOP(
        tileRequirement = { it.isACity() },
        buildingRequirements = setOf(CASTLE, ARBALEST_GUILD),
        cost = Stockpiles(wood = 50, gold = 50),
    ),

    ;

    constructor(
        tileRequirement: (Tile) -> Boolean,
        buildingRequirements: Set<Building> = emptySet(),
        cost: Stockpiles,
        bonus: TileBonus,
        replaces: Building? = null
    ) : this(tileRequirement, buildingRequirements, cost, listOf(bonus), replaces)

    private fun getAllReplacements(): Set<Building> = buildSet {
        this@Building.replaces?.let {
            add(it)
            addAll(it.getAllReplacements())
        }
    }

    fun unlockRequirement(tile: Tile): Boolean = buildingRequirements.all { requiredBuilding ->
        tile.buildings.any { it == requiredBuilding || requiredBuilding in it.getAllReplacements() }
    }

    companion object {
        val cityMainBuildings: Array<Building>
            get() = arrayOf(VILLAGE_HALL, TOWN_HALL, CASTLE)
    }
}

private fun Tile.isACity() = this.buildings.any { it in Building.cityMainBuildings }
private fun Tile.isNotACity() = this.buildings.none { it in Building.cityMainBuildings }

