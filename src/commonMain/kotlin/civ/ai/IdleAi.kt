package civ.ai

import civ.core.GameApi

class IdleAi(
    gameApi: GameApi, playerId: String
) : Ai(gameApi, playerId) {

    override suspend fun takeTurn() {
        gameApi.endTurn(playerId)
    }
}