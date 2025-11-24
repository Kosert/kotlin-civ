@file:OptIn(ExperimentalJsExport::class)

package civ.core

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

//TODO kotlin serialization json/protobuf?
// todo check if all types will serialize properly
@JsExport
@Serializable
data class GameState(
    val players: List<Player>,
    val tileList: Set<Tile>,
    val cities: Set<City>,
    val units: Set<CivUnit>,
    val stock: Map<String, Stockpiles>,
    val visionData: Map<String, GameStateVisionData>? = null,
) {
    fun toJson(): String {
        return Json.encodeToString(this)
    }
}

@JsExport
@Serializable
data class GameStateVisionData(
    val visible: Set<Coordinates>,
    val discovered: Set<Coordinates>,
)
