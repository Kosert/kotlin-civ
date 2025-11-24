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

    actual fun createStringFunction(name: String, declaration: (String) -> Unit) {
        window.asDynamic()[name] = { argument: String ->
            declaration(argument)
        }
    }

    actual fun createFunctionString(name: String, declaration: () -> String) {
        window.asDynamic()[name] = declaration
    }
}