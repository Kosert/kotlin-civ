package civ

import hexcore.Tile


//TODO kotlin serialization json/protobuf?
// todo check if all types will serialize properly
@OptIn(ExperimentalJsExport::class)
@JsExport
data class GameState(
    val players: List<Player>,
    val tileList: Set<Tile>,
    val cities: Set<City>,
    val units: Set<CivUnit>,
    val stock: Map<String, Stockpiles>,
)
