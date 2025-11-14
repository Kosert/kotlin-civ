package civ.ai

import civ.core.GameApi
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class AiType(
    val value: String,
) {

    IDLE("idle"),
    EASY("easy"),

    ;
}


fun AiType.create(gameApi: GameApi, playerId: String): Ai = when (this) {
    AiType.IDLE -> IdleAi(gameApi, playerId)
    AiType.EASY -> WarriorAi(gameApi, playerId)
}