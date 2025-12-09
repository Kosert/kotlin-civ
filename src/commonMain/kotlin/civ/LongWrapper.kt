package civ

import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
@Serializable
class LongWrapper private constructor(
    private val value: String
) {
    @JsExport.Ignore
    fun toLong() = value.toLong()
    override fun toString() = value

    companion object {
        @JsExport.Ignore
        fun fromLong(value: Long) = LongWrapper(value.toString())
        fun fromString(value: String) = LongWrapper(value)
    }
}