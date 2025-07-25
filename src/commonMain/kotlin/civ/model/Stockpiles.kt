package civ.model

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class Stockpiles(
    val food: Int = 0,
    val wood: Int = 0,
    val gold: Int = 0,
) {
    operator fun plus(other: Stockpiles) = Stockpiles(
        food = food + other.food,
        wood = wood + other.wood,
        gold = gold + other.gold,
    )
    operator fun minus(other: Stockpiles) = Stockpiles(
        food = food - other.food,
        wood = wood - other.wood,
        gold = gold - other.gold,
    )

    fun canSubstract(other: Stockpiles): Boolean {
        val result = this - other
        return result.food >= 0 && result.wood >= 0 && result.gold >= 0
    }
}