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
    OTP_WARRIOR("otp_warrior"),
    OTP_ARCHER("otp_archer"),
    OTP_SCOUT("otp_scout"),

    ;
}


fun AiType.create(gameApi: GameApi, playerId: String): Ai = when (this) {
    AiType.IDLE -> IdleAi(gameApi, playerId)
    AiType.OTP_WARRIOR -> WarriorAi(gameApi, playerId)
    AiType.OTP_ARCHER -> ArcherAi(gameApi, playerId)
    AiType.OTP_SCOUT -> ScoutAi(gameApi, playerId)
}