package civ.model

import civ.hex.Coordinates
import kotlinx.serialization.Serializable
import kotlin.uuid.Uuid
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class CityLevel(
    val borderRange: Int,
    val visionRange: Int,
    val attack: Int,
    val attackRange: Int,
    val occupationTime: Int,
) {
    VILLAGE(
        borderRange = 1,
        visionRange = 2,
        attack = 1,
        attackRange = 1,
        occupationTime = 1,
    ),

    TOWN(
        borderRange = 1,
        visionRange = 3,
        attack = 2,
        attackRange = 2,
        occupationTime = 2,
    ),

    CITY(
        borderRange = 1, //todo 2, need to implement handling border range overlaps
        visionRange = 4,
        attack = 4,
        attackRange = 3,
        occupationTime = 3,
    ),
}

@OptIn(ExperimentalJsExport::class)
@JsExport
@Serializable
data class City(
    val cityId: String = Uuid.random().toHexString(),
    val playerId: String,
    val coordinates: Coordinates,
    val level: CityLevel = CityLevel.VILLAGE,
) {
    val borderRange: Int
        get() = level.borderRange
    val visionRange: Int
        get() = level.visionRange
}
