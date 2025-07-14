import civ.CivUnit
import civ.GameState
import civ.Player
import civ.PlayerColor
import civ.Stockpiles
import civ.UnitType
import hexcore.Grass
import hexcore.HexLayouts

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

        val randomCoords = map1.toMutableList().also { it.shuffle() }

        GameState(
            players = playerList,
            tileList = map1,
            cities = setOf(),
            units = playerList.flatMapTo(mutableSetOf()) {
                listOf(
                    CivUnit(
                        unitType = UnitType.SETTLERS,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst().coords,
                    ),
                    CivUnit(
                        unitType = UnitType.SCOUT,
                        playerId = it.playerId,
                        coordinates = randomCoords.removeFirst().coords,
                    )
                )
            },
            stock = playerList.associate { it.playerId to Stockpiles(0, 0, 0) },
        )
    }

}
