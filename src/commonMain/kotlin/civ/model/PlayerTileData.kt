@file:OptIn(ExperimentalJsExport::class)

package civ.model

import civ.core.CityRange
import civ.hex.Coordinates
import civ.tile.Tile
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
data class PlayerTileData(
    val coordinates: Coordinates,
    val isVisible: Boolean,

    /**
     * null means Tile is not yet discovered
     */
    val tile: Tile?,
    val unit: CivUnit?,
    val city: City?,
    val cityRange: CityRange?,
)