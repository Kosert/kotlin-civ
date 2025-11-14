package civ.ai

import civ.model.Building
import civ.model.UnitType

sealed class PriorityQueueItem(
    private val condition: Condition
) {
    class UnitItem(val unitType: UnitType, condition: Condition) : PriorityQueueItem(condition)
    class BuildingItem(val building: Building, condition: Condition) : PriorityQueueItem(condition)

    val canExecute
        get() = condition.canExecute

    fun onExecuted() { condition.onExecuted() }
}

sealed class Condition {
    abstract val canExecute: Boolean
    open fun onExecuted() = Unit

    data object None : Condition() {
        override val canExecute: Boolean = true
    }

    data class Limit(private var limit: Int) : Condition() {
        override val canExecute: Boolean
            get() = limit == 0

        override fun onExecuted() { limit-- }
    }

    class Predicate(val predicate: () -> Boolean) : Condition() {
        override val canExecute: Boolean
            get() = predicate()
    }
}

class PriorityQueueBuilder {
    private val list = mutableListOf<PriorityQueueItem>()

    fun item(unitType: UnitType, condition: Condition = Condition.None) = list.add(PriorityQueueItem.UnitItem(unitType, condition))
    fun item(building: Building, condition: Condition = Condition.None) = list.add(PriorityQueueItem.BuildingItem(building, condition))

    companion object {
        fun build(builder: PriorityQueueBuilder.() -> Unit): List<PriorityQueueItem> {
            return PriorityQueueBuilder().apply(builder).list.toList()
        }
    }
}