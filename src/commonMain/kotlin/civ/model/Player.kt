@file:OptIn(ExperimentalJsExport::class)

package civ.model

import civ.ai.AiType
import kotlinx.serialization.Serializable
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@Serializable
data class Player(
    val playerId: String = Uuid.random().toHexString(),
    val name: String,
    val color: PlayerColor,
    val aiType: AiType? = null,
)

@JsExport
enum class PlayerColor {
    BLUE,
    RED,
    GREEN,
    YELLOW,
}
