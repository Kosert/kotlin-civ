@file:OptIn(ExperimentalJsExport::class)

package civ

import hexcore.Coordinates
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
sealed interface Action

@JsExport
data class Move(
    val unitId: String,
    val destination: Coordinates,
): Action

@JsExport
data class Attack(
    val unitId: String,
    val targetUnitId: String,
): Action

@JsExport
data class Settle(
    val settlersId: String
): Action


