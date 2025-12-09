@file:OptIn(ExperimentalJsExport::class)

package civ.core

import civ.LongWrapper
import civ.hex.Coordinates
import civ.model.City
import civ.model.CivUnit
import civ.model.Player
import civ.model.Stockpiles
import civ.tile.Tile
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@Serializable
data class GameState(
    val players: List<Player>,
    val tileList: Set<Tile>,
    val cities: Set<City>,
    val units: Set<CivUnit>,
    val stock: Map<String, Stockpiles>,
    val mapSeed: LongWrapper,
    val visionData: Map<String, GameStateVisionData>? = null,
    val statistics: Map<String, GameStatistics>? = null,
    val gameVersion: String = "0.1",
) {
    fun toJson(): String = Json.encodeToString(this)

    companion object {
        fun fromJson(json: String): GameState? = runCatching {
            Json.decodeFromString<GameState>(json)
        }.onFailure { println("Failed to load game state: $it") }
            .getOrNull()
    }
}

@JsExport
@Serializable
data class GameStateVisionData(
    val visible: Set<Coordinates>,
    val discovered: Set<Coordinates>,
)
