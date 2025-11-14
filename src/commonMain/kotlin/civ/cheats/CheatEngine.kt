package civ.cheats

import civ.WindowHelper
import civ.model.Player

class CheatEngine(
    private val players: List<Player>
) {

    private val humanPlayers = players.filter { it.aiType == null }
    private val activeCheats = mutableSetOf<Cheat>()

    init {
        Cheat.entries.forEach {
            WindowHelper.createBoolFunction(it.cheatName, { enabled ->
                if (enabled) {
                    activeCheats.add(it)
                } else {
                    activeCheats.remove(it)
                }
            })
        }
    }

    fun getFor(playerId: String): Set<Cheat> {
        return activeCheats.takeIf { humanPlayers.any { it.playerId == playerId } } ?: emptySet()
    }
}