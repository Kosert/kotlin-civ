@file:OptIn(ExperimentalJsExport::class)

package civ

import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
data class Player(
    val playerId: String = Uuid.random().toHexString(),
    val name: String,
    val color: PlayerColor,
    //todo civ? ai?
)

@JsExport
enum class PlayerColor {
    BLUE,
    RED,
    GREEN,
}
