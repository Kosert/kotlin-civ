package civ.creator

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
enum class CreatorMapSize(val width: Int, val height: Int) {
    //todo refine sizes
    SMALL(20, 20),
    MEDIUM(30, 30),
    LARGE(50, 50),
}