package civ

import civ.model.Building
import civ.model.StockCollectBonus
import kotlin.test.Test

class BuildingStockRatio {

    //todo test - buildings with higher cost should have better ratios
    @Test
    fun printRatios() {
        Building.entries
            .filter {
                val income = it.bonuses.filterIsInstance<StockCollectBonus>().sumOf { it.amount.total }
                income > 0
            }.sortedBy {
                val income = it.bonuses.filterIsInstance<StockCollectBonus>().sumOf { it.amount.total }
                val ratio = it.cost.total / income.toDouble()
                ratio
            }
            .forEach {
                val income = it.bonuses.filterIsInstance<StockCollectBonus>().sumOf { it.amount.total }
                val ratio = it.cost.total / income.toDouble()
                println(it.name + " - " + it.cost.total + " (+$income), ratio ${ratio}")
            }
    }

}