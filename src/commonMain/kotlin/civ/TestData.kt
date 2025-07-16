package civ

import civ.core.GameState
import civ.hex.Coordinates
import civ.tile.Grass
import civ.hex.HexLayouts
import civ.model.*
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
object TestData {

    val map1 = HexLayouts.rectangle(10,  10)
        .map { Grass(it) }
        .toSet()

    val gameState1 by lazy {
        val playerList = listOf(
            Player(name = "Pierwszy", color = PlayerColor.BLUE),
            Player(name = "Drugi", color = PlayerColor.RED),
        )

        val randomCoords = mutableListOf(
            Coordinates(0, 0),
            Coordinates(2, 1),
            Coordinates(3, 3),
            Coordinates(4, 4),
        )//map1.toMutableList().also { it.shuffle() }

        GameState(
            players = playerList,
            tileList = map1,
            cities = setOf(),
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
