package civ

actual object WindowHelper {

    actual fun createFunction(name: String, declaration: () -> Unit) {
    }

    actual fun createBoolFunction(name: String, declaration: (arg: Boolean) -> Unit) {
    }
}