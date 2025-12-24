package civ.ai

import civ.action.*
import civ.allMaxBy
import civ.allMinBy
import civ.core.GameApi
import civ.core.require
import civ.hex.Coordinates
import civ.hex.dijkstra
import civ.hex.distanceTo
import civ.hex.getAllInRange
import civ.hex.neighbors
import civ.model.*
import civ.onFailure
import civ.onSuccess
import civ.tile.Grass
import civ.tile.IMPASSABLE_COST
import kotlinx.coroutines.delay

sealed class OneTrickPonyAi(
    gameApi: GameApi,
    playerId: String,
    private val otpUnitType: UnitType,
) : Ai(gameApi, playerId) {

    private val targetCityCount = 3
    //fixme
    private val unitLimit = 10

    private fun shouldFocusOnArmy(): Boolean {
        var ownUnits = 0
        var enemyUnits = 0
        gameApi.tilesForPlayer(playerId).forEach {
            when {
                it.unit == null -> Unit
                it.unit.unitType == UnitType.SETTLERS -> Unit
                it.unit.playerId == playerId -> ownUnits++
                else -> enemyUnits++
            }
        }

        return enemyUnits > ownUnits || ownUnits == 0
    }

    private fun isUnitLimitReached(): Boolean {
        return myUnits.filter { it.unitType == otpUnitType }.size >= unitLimit
    }

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

        otpUnitType.requiredBuildings.forEach { item(it) }

        item(Building.WATERMILL)
        item(Building.RIVERLAND_FARM)

        item(Building.BUTCHERY)
        item(Building.HUNTERS_CAMP)

        item(Building.WINDMILL)
        item(Building.FARM)

        item(Building.FISHING_HUT)
        item(Building.PORT)

        item(otpUnitType, Condition.Predicate({
            if (isUnitLimitReached())
                return@Predicate false

            if (shouldFocusOnArmy())
                return@Predicate true

            if (!isCityLimitReached())
                return@Predicate false

            return@Predicate true
        }))
        item(UnitType.SETTLERS, Condition.Predicate({ !isCityLimitReached() }))
    }

    private val myCities
        get() = gameApi.citiesFor(playerId)

    val myUnits
        get() = gameApi.unitsFor(playerId)


    private fun findPossibleTargets(tiles: List<PlayerTileData>, targets: List<Coordinates>): List<Coordinates> {
        targets.filter { target -> tiles.find { it.coordinates == target }?.tile?.movementCost() != IMPASSABLE_COST }
            .takeIf { it.isNotEmpty() }
            ?.let { return it }

        println("Valid targets not found for ${targets.joinToString()}")

        return findPossibleTargets(
            tiles,
            targets.flatMap { it.neighbors() }.distinct()
        )
    }

    //fixme only for debugging
    var aiActive = true

    override suspend fun takeTurn() {
        delay(500)

        if (!aiActive)
            return

        // Settlers - try to settle > move away from cities
        val (cityTiles, cityRangeTiles) = gameApi.tilesForPlayer(playerId)
            .filter { it.city != null || it.cityRange != null }
            .partition { it.city != null }
            .toList()
            .map { list -> list.map { it.coordinates } }
        val cityAndRangeTiles = (cityTiles + cityRangeTiles).toSet()

        myUnits.filter { it.unitType == UnitType.SETTLERS }
            .forEach { unit ->
                execute(Settle(unit.unitId)).onFailure {
                    val tiles = gameApi.tilesForPlayer(playerId)

                    //todo od wszystkich miast + od przeciwników?
                    //todo find target prioritized by nearby resources
                    val target = tiles.allMaxBy { tile ->
                        when {
                            tile.tile != null && tile.tile !is Grass -> -1
                            tile.coordinates.getAllInRange(3).any { cityAndRangeTiles.contains(it) } -> -1
                            else -> cityTiles.sumOf { it.distanceTo(tile.coordinates) }
                        }
                    }.allMinBy { unit.coordinates.distanceTo(it.coordinates) }
                        .randomOrNull() ?: return@onFailure

                    val preferredPath = runCatching {
                        findPreferredPath(tiles, unit.coordinates, target.coordinates)
                    }.onFailure {
                        println("Pathing timed out after 1s")
                        println("from ${unit.coordinates} to: $target")
                        println("Unit: " + unit)
                        println("Target tile" + target)
                        return@forEach
                    }.getOrNull()

                    if (preferredPath.isNullOrEmpty()) {
                        println("Preferred path is null or empty")
                        aiActive = false
                        return@forEach
                    }

                    val indexedPath = preferredPath.withIndex()
                    val actions = gameApi.actionsForUnit(playerId, unit.unitId)
                    actions.moveTargets.maxByOrNull { moveTarget ->
                        indexedPath.find { it.value == moveTarget }?.index ?: -1
                    }?.let {
                        execute(Move(unit.unitId, it))
                        execute(Settle(unit.unitId))
                    }
                }
            }

        fun closestEnemyCity(tiles: List<PlayerTileData>, coordinates: Coordinates) = tiles
            .filter {
                (it.city != null && it.city.playerId != playerId) ||
                    (it.cityRange != null && it.cityRange.playerId != playerId)
            }
            .minByOrNull {
                val distance = it.coordinates.distanceTo(coordinates)
                //looks for cities and borders, but cities are the real target
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
                if (unit.conquerState == ConquerState.CanConquer) {
                    execute(Conquer(unit.coordinates))
                }

                val actions = gameApi.actionsForUnit(playerId, unit.unitId)
                val tiles = gameApi.tilesForPlayer(playerId)

                val attackTarget = actions.attackTargets.asSequence()
                    .map { target -> tiles.first { it.coordinates == target.key }.unit }
                    .minByOrNull {
                        if (it?.conquerState is ConquerState.Occupying)
                            -1
                        else
                            it?.hp ?: Int.MAX_VALUE
                    }

                //fixme extract as archer-line algorithm - if neighbor is enemy -> move away, then attack
                if (unit.unitType.range > 1 && attackTarget != null) {
                    if (attackTarget.coordinates.distanceTo(unit.coordinates) == 1) {
                        val moveTargets = actions.moveTargets - attackTarget.coordinates.neighbors().toSet()
                        moveTargets.randomOrNull()?.let {
                            execute(Move(unit.unitId, it))
                            execute(Attack(unit.unitId, attackTarget.coordinates))
                        }
                    } else {
                        execute(Attack(unit.unitId, attackTarget.coordinates))
                    }
                    return@forEach
                }
                else if (attackTarget != null) {
                    execute(Attack(unit.unitId, attackTarget.coordinates))
                    println("Attacking executed - returning (${unit.unitId}")
                    return@forEach
                }

                println("Looking for move target for (${unit.unitId})")
                val closestEnemyCity = closestEnemyCity(tiles, unit.coordinates)?.coordinates
                val closestEnemy = closestEnemy(tiles, unit.coordinates)?.coordinates

                val target = if (closestEnemy != null && closestEnemyCity != null) {
                    val distanceToEnemy = unit.coordinates.distanceTo(closestEnemy)
                    val distanceToCity = unit.coordinates.distanceTo(closestEnemyCity)
                    if (distanceToEnemy <= distanceToCity)
                        closestEnemy
                    else
                        closestEnemyCity
                } else {
                    closestEnemy
                        ?: closestEnemyCity
                        ?: closestUndiscovered(tiles, unit.coordinates)?.coordinates
                        ?: unit.coordinates //todo enemy somewhere in the fog of war, what now? select random not visible tile?
                }

                if (unit.coordinates == target) {
                    return@forEach
                }

                val possibleTargets = findPossibleTargets(tiles, listOf(target))

                val preferredPath = runCatching {
                    findPreferredPath(tiles, unit.coordinates, target)
                }.onFailure {
                    println("Pathing timed out after 1s")
                    println("from ${unit.coordinates} to: $possibleTargets")
                    println("Unit: " + unit)
                    println("Target tile" + possibleTargets)
                    return@forEach
                }.getOrNull()

                if (preferredPath.isNullOrEmpty()) {
                    aiActive = false
                    println("Preferred path is null or empty")
                    return@forEach
                }

                val indexedPath = preferredPath.withIndex()
                actions.moveTargets.maxByOrNull { moveTarget ->
                    indexedPath.find { it.value == moveTarget }?.index ?: -1
                }?.let {
                    execute(Move(unit.unitId, it))
                }
            }

        priorityQueue.forEach { item ->
            val tiles = gameApi.tilesForPlayer(playerId)

            when (item) {
                is PriorityQueueItem.BuildingItem -> processQueueItem(tiles, item)
                is PriorityQueueItem.UnitItem -> processQueueItem(tiles, myCities, item)
            }
        }

        println("AI done")
        gameApi.endTurn(playerId)
    }

    private fun findPreferredPath(
        tiles: List<PlayerTileData>,
        start: Coordinates,
        target: Coordinates,
    ): List<Coordinates> {
        val possibleTargets = findPossibleTargets(tiles, listOf(target))
        println("Dijkstring for ${possibleTargets.joinToString()}")
        return dijkstra(start, possibleTargets, cost = {
            tiles.find { it.coordinates == this }?.tile?.movementCost() ?: 10
        })
    }

    private suspend fun processQueueItem(
        tiles: List<PlayerTileData>,
        item: PriorityQueueItem.BuildingItem
    ) {
        tiles.asSequence()
            .filter { it.tile != null }
            .filter { it.cityRange?.playerId == playerId }
            .filter { gameApi.canBuild(it.coordinates, playerId) }
            .map { it.tile.require() }
            .filter { item.building.tileRequirement(it) }
            .sortedByDescending { item.executionPriority(it) }
            .forEach { tile ->
                if (!item.canExecute(tile)) return@forEach

                buildIfPossible(tile.coords, item.building)
                    ?.onSuccess { item.onExecuted() }
            }
    }

    private suspend fun processQueueItem(
        tiles: List<PlayerTileData>,
        cities: List<City>,
        item: PriorityQueueItem.UnitItem
    ) {
        cities.map { city ->
            tiles.first { city.coordinates == it.coordinates }.tile.require()
        }.sortedByDescending { item.executionPriority(it) }
            .forEach { tile ->
                if (tile.isBusy || !item.unitType.buildingRequirement(tile.buildings) || !item.canExecute(tile)) {
                    return@forEach
                }

                recruitIfPossible(tile.coords, item.unitType)
                    ?.onSuccess { item.onExecuted() }
            }
    }
}

class WarriorAi(gameApi: GameApi, playerId: String) : OneTrickPonyAi(gameApi, playerId, UnitType.WARRIOR)
class ArcherAi(gameApi: GameApi, playerId: String) : OneTrickPonyAi(gameApi, playerId, UnitType.ARCHER)
class ScoutAi(gameApi: GameApi, playerId: String) : OneTrickPonyAi(gameApi, playerId, UnitType.SCOUT)


//todo
// log filter recipients
// ai activate/deactive
// better ais
// stats - scoreboard? turn counter
// victory/lose - endgame conditions
// replays

//todo ui improvements:
// unit move/action available indicator
// dont show attack move for ranged units?
// button states: not unlocked yet, unlocked but tile is busy/not enough res, can be bought