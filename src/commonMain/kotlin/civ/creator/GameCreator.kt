package civ.creator

import civ.LongWrapper
import civ.core.GameState
import civ.core.GameStatistics
import civ.hex.MapGenerator
import civ.model.CivUnit
import civ.model.Player
import civ.model.Stockpiles
import civ.model.UnitType
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.random.Random

@OptIn(ExperimentalJsExport::class)
@JsExport
object GameCreator {

    fun createNewGame(
        players: List<Player>,
        mapSize: CreatorMapSize,
        startingUnits: List<UnitType>,
        startingStock: Stockpiles,
        seed: LongWrapper = LongWrapper.fromLong(Random.nextLong()),
    ): GameState {
        val mapGenerator = MapGenerator(seed.toLong())
        val mapData = mapGenerator.generate(
            width = mapSize.width,
            height = mapSize.height,
            players = players,
            startingUnits = startingUnits
        )

        return GameState(
            players = players,
            tileList = mapData.tiles,
            cities = setOf(),
            units = mapData.units.mapTo(mutableSetOf()) { entry ->
                CivUnit(
                    coordinates = entry.key,
                    playerId = entry.value.first,
                    unitType = entry.value.second,
                )
            },
            stock = players.associate { it.playerId to startingStock },
            mapSeed = seed,
            statistics = players.associate { it.playerId to GameStatistics() }
        )
    }
}