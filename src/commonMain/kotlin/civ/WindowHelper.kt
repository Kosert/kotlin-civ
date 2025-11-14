package civ

expect object WindowHelper {
    fun createFunction(name: String, declaration: () -> Unit)
    fun createBoolFunction(name: String, declaration: (arg: Boolean) -> Unit)
}