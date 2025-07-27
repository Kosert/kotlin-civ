package civ.action

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
data class ActionResult(
    val isSuccess: Boolean,
    val errorAlert: String?,
    val exception: Throwable?,
) {

    companion object {
        fun success() = ActionResult(true, null, null)

        fun fail(errorAlert: String? = null, exception: String? = null) = ActionResult(
            false,
            errorAlert,
            IllegalArgumentException(exception)
        )

        fun exception(exception: String) = ActionResult(
            false,
            null,
            IllegalArgumentException(exception)
        )
    }
}