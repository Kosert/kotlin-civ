package civ

fun <T> Collection<T>.contains(vararg elements: T) = elements.all { it in this }

fun Int.addIf(condition: Boolean, value: Int) = if (condition) this + value else this
