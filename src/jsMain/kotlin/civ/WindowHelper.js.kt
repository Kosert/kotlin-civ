package civ

import kotlinx.browser.window

actual object WindowHelper {

    actual fun createFunction(
        name: String,
        declaration: () -> Unit
    ) {
        window.asDynamic()[name] = {
            declaration()
        }
    }

    actual fun createBoolFunction(
        name: String,
        declaration: (Boolean) -> Unit
    ) {
        window.asDynamic()[name] = { argument: Boolean ->
            declaration(argument)
        }
    }
}