package civ.core

import civ.model.Building
import civ.model.Player
import civ.model.UnitType

class StatisticsCounter(
    val players: List<Player>
) {
    //todo
    val turnNumer = 0

//    fun points() {
//        players.sortedBy { it.color.ordinal }.forEach { player ->
//            val unitScore = unitsFor(player.playerId)
//                .sumOf { it.unitType.cost.total } * 0.2
//
//            val buildingScore = citiesFor(player.playerId).sumOf { city ->
//                hexMap.range(city.coordinates, city.borderRange)
//                    .mapNotNull { hexMap.get(it) }
//                    .flatMap { it.buildings.toList() }
//                    .sumOf {
//                        if (it == Building.VILLAGE_HALL)
//                            UnitType.SETTLERS.cost.total
//                        else it.cost.total
//                    }
//            } * 0.2
//
//            val discoveredHexes = visionCalculator.getVisionFor(player.playerId).discovered.size
//            val discoveredPercent = discoveredHexes / hexMap.tiles.size.toDouble()
//            println("Discovered: $discoveredHexes / ${hexMap.tiles.size.toDouble()}, percent: $discoveredPercent")
//            val visionScore = discoveredPercent * 100
//            val totalScore = unitScore + buildingScore + visionScore
//
//            log.write("Player ${player.color}, score: $unitScore + $buildingScore + $visionScore = $totalScore")
//        }
//    }

}