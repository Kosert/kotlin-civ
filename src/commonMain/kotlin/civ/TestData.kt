package civ

import civ.core.GameState
import civ.hex.Coordinates
import civ.tile.Grass
import civ.hex.HexLayouts
import civ.hex.neighbors
import civ.hex.toCoordinates
import civ.model.*
import civ.tile.Mountains
import civ.tile.Water
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
object TestData {

    val cityCoords = Coordinates(1, 1)

    val map1 = HexLayouts.rectangle(10,  10)
        .map {
            Grass(it, buildings = if (it == cityCoords) setOf(Building.VILLAGE_HALL) else setOf())
        }
        .toSet()

    val differentTerrainsMap by lazy {
        val base = HexLayouts.rectangle(10,  10)
        base.map { coords ->
            if (coords.neighbors().count { base.contains(it) } != 6)
                return@map Water(coords)

            if (coords in arrayOf(5 to 1, 5 to 2, 4 to 2).map { it.toCoordinates() }) {
                return@map Grass(coords, forest = true)
            }

            if (coords in arrayOf(5 to 4).map { it.toCoordinates() }) {
                return@map Grass(coords, forest = true, animals = true)
            }

            if (coords in arrayOf(6 to 4).map { it.toCoordinates() }) {
                return@map Grass(coords, forest = false, animals = true)
            }

            if (coords in arrayOf(2 to 6).map { it.toCoordinates() }) {
                return@map Mountains(coords, gold = false)
            }

            if (coords in arrayOf(3 to 6).map { it.toCoordinates() }) {
                return@map Mountains(coords, gold = true)
            }

            Grass(coords, buildings = if (coords == cityCoords) setOf(Building.VILLAGE_HALL) else setOf())
        }
        .toSet()
    }

    val gameState1 by lazy {
        val playerList = listOf(
            Player(name = "Pierwszy", color = PlayerColor.BLUE),
            Player(name = "Drugi", color = PlayerColor.RED),
        )

        val randomCoords = mutableListOf(
            Coordinates(1, 2),
            Coordinates(2, 1),
            Coordinates(3, 3),
            Coordinates(4, 4),
        )//map1.toMutableList().also { it.shuffle() }

        GameState(
            players = playerList,
            tileList = map1,
            cities = setOf(
                City(
                    coordinates = cityCoords,
                    playerId = playerList[0].playerId,
                )
            ),
            units = playerList.flatMapTo(mutableSetOf()) {
                listOf(
                    CivUnit(
                        unitType = UnitType.SETTLERS,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst(),
                    ),
                    CivUnit(
                        unitType = UnitType.SCOUT,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst(),
                    )
                )
            },
            stock = playerList.associate { it.playerId to Stockpiles(0, 0, 0) },
        )
    }


    val gameState2 by lazy {
        val playerList = listOf(
            Player(name = "Pierwszy", color = PlayerColor.BLUE),
            Player(name = "Drugi", color = PlayerColor.RED),
        )

        val randomCoords = mutableListOf(
            Coordinates(1, 2),
            Coordinates(2, 1),
            Coordinates(3, 3),
            Coordinates(4, 4),
        )

        GameState(
            players = playerList,
            tileList = differentTerrainsMap,
            cities = setOf(
                City(
                    coordinates = cityCoords,
                    playerId = playerList[0].playerId,
                )
            ),
            units = playerList.flatMapTo(mutableSetOf()) {
                listOf(
                    CivUnit(
                        unitType = UnitType.SETTLERS,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst(),
                    ),
                    CivUnit(
                        unitType = UnitType.SCOUT,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst(),
                    )
                )
            },
            stock = playerList.associate { it.playerId to Stockpiles(0, 0, 0) },
        )
    }

}
