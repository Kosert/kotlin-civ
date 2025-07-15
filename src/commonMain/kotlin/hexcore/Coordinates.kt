package hexcore

import kotlin.math.abs
import kotlin.math.roundToInt
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class Coordinates(
    val q: Int,
    val r: Int,
) {
    val s
        get() = -q - r

    companion object {

        fun fromDoubles(q: Double, r: Double, s: Double): Coordinates {
            val roundedQ = q.roundToInt()
            val roundedR = r.roundToInt()
            val roundedS = s.roundToInt()

            val qDiff = abs(roundedQ - q)
            val rDiff = abs(roundedR - r)
            val sDiff = abs(roundedS - s)

            if (qDiff > rDiff && qDiff > sDiff) {
                return Coordinates(
                    q = -roundedR - roundedS,
                    r = roundedR,
                )
            }

            if (rDiff > sDiff) {
                return Coordinates(
                    q = roundedQ, r = -roundedQ - roundedS
                )
            }

            return Coordinates(q = roundedQ, r = roundedR)
        }
    }

    override fun toString(): String = "(q=$q, r=$r)"
}
