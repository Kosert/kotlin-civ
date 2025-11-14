@file:OptIn(ExperimentalJsExport::class)

package civ.action

import civ.hex.Coordinates
import civ.model.Building
import civ.model.UnitType
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
sealed interface Action

//todo disband

@JsExport
data class Move(
    val unitId: String,
    val destination: Coordinates,
): Action

@JsExport
data class Attack(
    val unitId: String,
    val targetCoordinates: Coordinates,
    val moveAttackDelay: Int = 0
): Action

@JsExport
data class Settle(
    val settlersId: String
): Action

@JsExport
data class Build(
    val coordinates: Coordinates,
    val building: Building
): Action

@JsExport
data class Recruit(
    val coordinates: Coordinates,
    val unitType: UnitType
): Action

@JsExport
data class Conquer(
    val coordinates: Coordinates,
): Action

