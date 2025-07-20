@file:OptIn(ExperimentalJsExport::class)

package civ.resources

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
enum class Text {

    GRASS,
    FOREST,
    WATER,
    MOUNTAINS,

    VILLAGE_HALL,
    VILLAGE_HALL_DESCRIPTION,

    ;

    override fun toString(): String = Res.get(this)
}

@JsExport
object Res {

    fun get(text: Text): String = when (text) {
        Text.GRASS -> "Plains"
        Text.FOREST -> "Forest"
        Text.WATER -> "Water"
        Text.MOUNTAINS -> "Mountains"
        Text.VILLAGE_HALL -> TODO()
        Text.VILLAGE_HALL_DESCRIPTION -> TODO()
    }
}