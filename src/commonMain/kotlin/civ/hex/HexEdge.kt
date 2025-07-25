package civ.hex

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class HexEdge(
    val q: Int,
    val r: Int,
) {
    TOP_RIGHT(1, -1),
    RIGHT(1, 0),
    BOTTOM_RIGHT(0, 1),
    BOTTOM_LEFT(-1, 1),
    LEFT(-1, 0),
    TOP_LEFT(0, -1),
}