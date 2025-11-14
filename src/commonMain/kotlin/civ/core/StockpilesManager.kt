package civ.core

import civ.addIf
import civ.events.EventListener
import civ.events.StockUpdated
import civ.hex.HexMap
import civ.model.*
import civ.tile.Grass
import civ.tile.Tile

class StockpilesManager(
    private val hexMap: HexMap,
    private val eventListeners: List<EventListener>,
    stocks: Map<String, Stockpiles>,
) {
    private val stocks = stocks.toMutableMap()
    private val income = mutableMapOf<String, Stockpiles>()

    fun getFor(playerId: String) = stocks[playerId].require()
    fun incomeFor(playerId: String) = income[playerId] ?: Stockpiles()

    fun substract(playerId: String, amount: Stockpiles) {
        val updatedStocks = getFor(playerId) - amount
        stocks[playerId] = updatedStocks
        eventListeners.filter { it.playerId == playerId }.forEach {
            it.listener(StockUpdated(updatedStocks, incomeFor(playerId)))
        }
    }

    //todo getCollectCalculation with sources to display
    private fun calculateIncome(playerCities: Collection<City>, allUnits: Collection<CivUnit>): Stockpiles {
        val playerId = playerCities.firstOrNull()?.playerId ?: return Stockpiles()

        var stock = Stockpiles()
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
        return stock.also {
            income[playerId] = stock
        }
    }

    fun recalculateIncome(playerCities: Collection<City>, allUnits: Collection<CivUnit>) {
        val playerId = playerCities.firstOrNull()?.playerId ?: return
        eventListeners.filter { it.playerId == playerId }.forEach {
            it.listener(StockUpdated(getFor(playerId), calculateIncome(playerCities, allUnits)))
        }
    }

    fun collect(playerCities: Collection<City>, allUnits: Collection<CivUnit>) {
        val playerId = playerCities.firstOrNull()?.playerId ?: return

        val income = calculateIncome(playerCities, allUnits)
        val updated = getFor(playerId) + income

        stocks[playerId] = updated
        eventListeners.filter { it.playerId == playerId }.forEach { it.listener(StockUpdated(updated, income)) }
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