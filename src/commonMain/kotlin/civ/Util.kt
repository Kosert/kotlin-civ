package civ

import civ.action.ActionResult

fun <T> Collection<T>.contains(vararg elements: T) = elements.all { it in this }

fun Int.addIf(condition: Boolean, value: Int) = if (condition) this + value else this

inline fun ActionResult.onSuccess(block: () -> Unit) {
    if (this.isSuccess) {
        block()
    }
}

inline fun ActionResult.onFailure(block: () -> Unit) {
    if (!this.isSuccess) {
        block()
    }
}

inline fun <T, R : Comparable<R>> Iterable<T>.allMinBy(selector: (T) -> R): List<T> {
    val iterator = iterator()
    if (!iterator.hasNext())
        return emptyList()

    val minElements = mutableListOf<T>(iterator.next())
    if (!iterator.hasNext())
        return minElements

    var minValue = selector(minElements.single())
    do {
        val item = iterator.next()
        val value = selector(item)
        if (minValue == value) {
            minElements.add(item)
        } else if (minValue > value) {
            minElements.clear()
            minElements.add(item)
            minValue = value
        }
    } while (iterator.hasNext())
    return minElements
}

inline fun <T, R : Comparable<R>> Iterable<T>.allMaxBy(selector: (T) -> R): List<T> {
    val iterator = iterator()
    if (!iterator.hasNext())
        return emptyList()

    val maxElements = mutableListOf<T>(iterator.next())
    if (!iterator.hasNext())
        return maxElements

    var maxValue = selector(maxElements.single())
    do {
        val item = iterator.next()
        val value = selector(item)
        if (maxValue == value) {
            maxElements.add(item)
        } else if (value > maxValue) {
            maxElements.clear()
            maxElements.add(item)
            maxValue = value
        }
    } while (iterator.hasNext())
    return maxElements
}