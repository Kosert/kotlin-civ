package civ.core

import civ.hex.HexMap
import civ.model.*
import civ.tile.Grass
import civ.tile.Tile

class StockpilesManager(
    private val hexMap: HexMap,
    stocks: Map<String, Stockpiles>,
) {
    private val stocks = stocks.toMutableMap()

    fun getFor(playerId: String) = stocks[playerId].require()

    fun collect(playerCities: Collection<City>, allUnits: Collection<CivUnit>) {
        val playerId = playerCities.firstOrNull()?.playerId ?: return

        var stock = getFor(playerId)
        playerCities.forEach { city ->
            val tiles = hexMap.range(city.coordinates, city.borderRange)
                .mapNotNull { hexMap.get(it) }

            tiles.forEach { tile ->
                if (tile.isBusy && allUnits.first { it.coordinates == tile.coords }.playerId != playerId) {
                    //ignore if enemy is occupying
                } else {
                    stock += tile.collect()
                }
            }
        }
        stocks[playerId] = stock
    }
}

private fun Tile.collect(): Stockpiles {
    val base = when {
        this.buildings.any { it in Building.cityMainBuildings } -> Stockpiles()
        this is Grass -> Stockpiles(
            food = if (this.animals) 2 else 1,
            wood = if (this.forest) 1 else 0,
        )
        else -> Stockpiles()
    }

    return buildings.flatMap { it.bonuses }
        .filterIsInstance<StockCollectBonus>()
        .fold(base) { acc, bonus -> acc + bonus.amount }
}