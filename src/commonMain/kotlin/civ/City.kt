package civ

import hexcore.Coordinates
import kotlin.uuid.Uuid

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class CityLevel(
    val borderRange: Int,
    val visionRange: Int,
    val attack: Int,
    val attackRange: Int,
) {
    VILLAGE(
        borderRange = 1,
        visionRange = 2,
        attack = 1,
        attackRange = 1,
    ),

    TOWN(
        borderRange = 1,
        visionRange = 3,
        attack = 2,
        attackRange = 2,
    ),

    CITY(
        borderRange = 2,
        visionRange = 4,
        attack = 4,
        attackRange = 3,
    ),
}

@OptIn(ExperimentalJsExport::class)
@JsExport
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
