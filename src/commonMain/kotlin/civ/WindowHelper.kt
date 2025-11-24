package civ

expect object WindowHelper {
    fun createFunction(name: String, declaration: () -> Unit)
    fun createStringFunction(name: String, declaration: (String) -> Unit)
    fun createBoolFunction(name: String, declaration: (arg: Boolean) -> Unit)

    fun createFunctionString(name: String, declaration: () -> String)
}