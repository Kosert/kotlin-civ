package civ.ai

import civ.action.Action
import civ.action.ActionResult
import civ.action.Build
import civ.action.Recruit
import civ.core.GameApi
import civ.hex.Coordinates
import civ.model.Building
import civ.model.Stockpiles
import civ.model.UnitType
import kotlinx.coroutines.delay
import kotlin.time.Duration
import kotlin.time.Duration.Companion.seconds

abstract class Ai(
    protected val gameApi: GameApi,
    protected val playerId: String,
) {
    private val actionDelay: Duration = 1.seconds

    protected suspend fun execute(action: Action): ActionResult {
        val result = gameApi.execute(playerId, action)
        if (result.isSuccess) {
//            delay(actionDelay)
        }
        return result
    }

    protected fun canAfford(cost: Stockpiles): Boolean {
        return this.gameApi.stocksFor(playerId).canSubstract(cost)
    }

    protected suspend fun buildIfPossible(coordinates: Coordinates, building: Building): ActionResult? {
        return if (canAfford(building.cost)) {
            execute(Build(coordinates, building))
        } else null
    }

    protected suspend fun recruitIfPossible(coordinates: Coordinates, unit: UnitType): ActionResult? {
        return if (canAfford(unit.cost)) {
            execute(Recruit(coordinates, unit))
        } else null
    }

    abstract suspend fun takeTurn()
}