package civ.ai

import civ.action.*
import civ.allMaxBy
import civ.allMinBy
import civ.core.GameApi
import civ.core.LogMessage
import civ.core.require
import civ.hex.Coordinates
import civ.hex.dijkstra
import civ.hex.distanceTo
import civ.hex.neighbors
import civ.model.*
import civ.onFailure
import civ.onSuccess
import kotlinx.coroutines.delay
import kotlinx.coroutines.withTimeoutOrNull
import kotlin.random.Random

class EasyAi(
    gameApi: GameApi, playerId: String
) : Ai(gameApi, playerId) {

    private val targetCityCount = 3

    private fun isCityLimitReached(): Boolean {
        val myCities = gameApi.citiesFor(playerId)
        val myUnits = gameApi.unitsFor(playerId)
        val currentCityCount = myCities.size + myUnits.count { it.unitType == UnitType.SETTLERS }
        return currentCityCount >= targetCityCount
    }

    private val priorityQueue = PriorityQueueBuilder.build {
        item(Building.SAWMILL)
        item(Building.LUMBERCAMP)
        item(Building.FISHING_SHIP)
        item(Building.BARRACKS)

        item(Building.WATERMILL)
        item(Building.RIVERLAND_FARM)

        item(Building.BUTCHERY)
        item(Building.HUNTERS_CAMP)

        item(Building.WINDMILL)
        item(Building.FARM)
        item(Building.FISHING_HUT)

//        item(Building.MINE)
        item(Building.PORT)
//        item(Building.MARKET)

        item(UnitType.SETTLERS, Condition.Predicate { !isCityLimitReached() })
        item(UnitType.WARRIOR, Condition.Predicate { isCityLimitReached() })
    }

    private val myCities
        get() = gameApi.citiesFor(playerId)

    val myUnits
        get() = gameApi.unitsFor(playerId)


    private fun findPossibleTargets(tiles: List<PlayerTileData>, targets: List<Coordinates>): List<Coordinates> {
        targets.filter { target -> tiles.find { it.coordinates == target }?.tile?.isBusy != true }
            .takeIf { it.isNotEmpty() }
            ?.let { return it }

        return findPossibleTargets(
            tiles,
            targets.flatMap { it.neighbors() }.distinct()
        )
    }

    override suspend fun takeTurn() {
        //todo looks good?
        delay(1000)

        // Settlers - try to settle > move away from cities
        val cityTiles = gameApi.tilesForPlayer(playerId).filter { it.city != null }
        myUnits.filter { it.unitType == UnitType.SETTLERS }
            .forEach { unit ->
                execute(Settle(unit.unitId)).onFailure {
                    val target = gameApi.actionsForUnit(playerId, unit.unitId)
                        .possibleTargets.allMaxBy { target ->
                            //todo od wszystkich miast + od przeciwników?
                            //todo find target prioritized by nearby resources
                            cityTiles.sumOf { it.coordinates.distanceTo(target) }
                        }.randomOrNull()

                    target?.let {
                        execute(Move(unit.unitId, target))
                        execute(Settle(unit.unitId))
                    }
                }
            }

        //todo refresh tiles after move?

        fun closestEnemyCity(tiles: List<PlayerTileData>, coordinates: Coordinates) = tiles//.asSequence()
            .filter { it.cityRange != null && it.cityRange.playerId != playerId }
//            .also { println(it.joinToString()) }
            .minByOrNull {
                val distance = it.coordinates.distanceTo(coordinates)
                distance + (if (it.city == null) 100_000 else 0)
            }

        fun closestEnemy(tiles: List<PlayerTileData>, coordinates: Coordinates) = tiles
            .mapNotNull { it.unit?.takeUnless { it.playerId == playerId } }
            .minByOrNull { it.coordinates.distanceTo(coordinates) }

        fun closestUndiscovered(tiles: List<PlayerTileData>, coordinates: Coordinates) = tiles
            .filter { it.tile == null }
            .allMinBy { it.coordinates.distanceTo(coordinates) }
            .randomOrNull()

        // military units - conquer > attack > move to enemy > scout
        myUnits.filterNot { it.unitType == UnitType.SETTLERS }
            .forEach { unit ->
                if (unit.conquerState == ConquerState.CAN_CONQUER) {
                    execute(Conquer(unit.coordinates))
                }

                val actions = gameApi.actionsForUnit(playerId, unit.unitId)
                val tiles = gameApi.tilesForPlayer(playerId)

                val attackTarget = actions.attackTargets.asSequence()
                    .map { target -> tiles.first { it.coordinates == target.key }.unit }
                    .minByOrNull {
                        if (it?.conquerState == ConquerState.OCCUPYING)
                            -1
                        else
                            it?.hp ?: Int.MAX_VALUE
                    }

                //fixme dopiero odkryte nie beda w tiles

                if (attackTarget != null) {
                    execute(Attack(unit.unitId, attackTarget.coordinates))
                    println("Attacking executed - returning (${unit.unitId}")
                    return@forEach
                }

                //fixme
//                val unit = myUnits.first { it.unitId == unit.unitId }

                println("Looking for move target for (${unit.unitId}")
                val target = closestEnemyCity(tiles, unit.coordinates)?.coordinates
                    ?: closestEnemy(tiles, unit.coordinates)?.coordinates
                    ?: closestUndiscovered(tiles, unit.coordinates)?.coordinates
                    ?: error("enemy somewhere in the fog of war, what now? select random not visible tile?")

                if (unit.coordinates == target) {
                    return@forEach
                }

                val possibleTargets = findPossibleTargets(tiles, listOf(target))

                println("${unit.unitType} ${unit.coordinates} Target: $possibleTargets")
                val preferredPath = withTimeoutOrNull(1000) {
                    dijkstra(unit.coordinates, possibleTargets, cost = {
                        tiles.find { it.coordinates == this }?.tile?.movementCost() ?: 10
                    }).withIndex()
                } ?: run {
                    println("Pathing timed out after 1s")
                    println("from ${unit.coordinates} to: $possibleTargets")
                    gameApi.log.write(
                        "Unit: ", unit
                    )
                    gameApi.log.write(
                        "Target tile", possibleTargets,
                    )
                    return@forEach
                }

                println("Preferred path: ${preferredPath.joinToString { it.value.toString() }}")
                
                actions.moveTargets.maxByOrNull { moveTarget ->
                    println("Checking target $moveTarget index: ${preferredPath.find { it.value == moveTarget }?.index ?: -1}")

                    preferredPath.find { it.value == moveTarget }?.index ?: -1
                }?.let {
                    println("Selected move: $it")
                    execute(Move(unit.unitId, it))
                }
            }

        priorityQueue.forEach { item ->
            if (!item.canExecute) {
                return@forEach
            }

            //fixme
            val tiles = gameApi.tilesForPlayer(playerId)

            when (item) {
                is PriorityQueueItem.BuildingItem -> processQueueItem(tiles, item)
                is PriorityQueueItem.UnitItem -> processQueueItem(tiles, myCities, item)
            }
        }

        println("AI done")
//        gameApi.endTurn(playerId)
    }

    private suspend fun processQueueItem(
        tiles: List<PlayerTileData>,
        item: PriorityQueueItem.BuildingItem
    ) {
        tiles.asSequence()
            .filter { it.tile != null }
            .filter { it.cityRange?.playerId == playerId }
            .filter { gameApi.canBuild(it.coordinates, playerId) }
            .filter { item.building.tileRequirement(it.tile.require()) }
            .forEach { tile ->
                buildIfPossible(tile.coordinates, item.building)?.onSuccess {
                    item.onExecuted()
                    if (!item.canExecute) {
                        return
                    }
                }
            }
    }

    private suspend fun processQueueItem(
        tiles: List<PlayerTileData>,
        cities: List<City>,
        item: PriorityQueueItem.UnitItem
    ) {
        cities.map { city ->
            tiles.first { city.coordinates == it.coordinates }.tile.require()
        }.forEach { tile ->
            if (tile.isBusy || !item.unitType.buildingRequirement(tile.buildings)) {
                return@forEach
            }

            recruitIfPossible(tile.coords, item.unitType)?.onSuccess {
                item.onExecuted()
                if (!item.canExecute) {
                    return
                }
            }
        }
    }
}


//todo
// ai activate/deactive + end turn
// better ais
// save + restore
// scoreboard?,
// simple icons for units
