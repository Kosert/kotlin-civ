@file:OptIn(ExperimentalJsExport::class)

import kotlin.uuid.Uuid


@JsExport
interface Character {
    val str: Int
    val name: String
}

@JsExport
class CharacterImpl(
    override val name: String
) : Character {

    override val str: Int = 5
}

private fun somePrivateImplementation(): Int {
    return 3 + 5
}

@JsExport
interface ObservableState<T> {
    val value: T
    fun observe(listener: (T) -> Unit)
    fun removeObserver(listener: (T) -> Unit)
}

@JsExport
class MutableState<T>(
    initialValue: T,
) : ObservableState<T> {

    private val observers = mutableListOf<(T) -> Unit>()

    override var value: T = initialValue
        set(value) {
            field = value
            observers.forEach { observer ->
                observer(value)
            }
        }

    override fun observe(listener: (T) -> Unit) {
        observers.add(listener)
    }

    override fun removeObserver(listener: (T) -> Unit) {
        observers.remove(listener)
    }
}

@JsExport
val state: MutableState<String> = MutableState<String>("jeden")

@JsExport
fun main() {
    val character = CharacterImpl("chuj")

    val customChar = object : Character {
        override val str: Int
            get() = somePrivateImplementation()
        override val name: String
            get() = "sa"
    }

    println("Hello, ${character.name} and ${customChar.name} ${customChar.str}!")
    state.observe {
        println("State changed: $it")
    }
}