package civ

actual object WindowHelper {

    actual fun createFunction(name: String, declaration: () -> Unit) {
    }

    actual fun createBoolFunction(name: String, declaration: (arg: Boolean) -> Unit) {
    }

    actual fun createStringFunction(name: String, declaration: (String) -> Unit) {
    }

    actual fun createFunctionString(name: String, declaration: () -> String) {
    }
}