package civ.core

import civ.addIf
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

    fun substract(playerId: String, amount: Stockpiles) {
        val stock = getFor(playerId)
        stocks[playerId] = stock - amount
    }

    //todo getCollectCalculation with sources to display

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
                    stock += tile.getIncome()
                }
            }
        }
        stocks[playerId] = stock
    }
}

fun Tile.getIncome(): Stockpiles {
    val base = when {
        this.buildings.any { it in Building.cityMainBuildings } -> Stockpiles()
        this is Grass -> Stockpiles(
            food = 1.addIf(this.animals, 1).addIf(this.forest, -1),
            wood = 0.addIf(this.forest, 1),
        )
        else -> Stockpiles()
    }

    return buildings.flatMap { it.bonuses }
        .filterIsInstance<StockCollectBonus>()
        .fold(base) { acc, bonus -> acc + bonus.amount }
}