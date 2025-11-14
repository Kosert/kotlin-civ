package civ.ai

import civ.model.Building
import civ.model.UnitType
import civ.tile.Tile

sealed class PriorityQueueItem(
    private val condition: Condition
) {
    class UnitItem(val unitType: UnitType, condition: Condition) : PriorityQueueItem(condition)
    class BuildingItem(val building: Building, condition: Condition) : PriorityQueueItem(condition)

    fun canExecute(tile: Tile): Boolean = condition.canExecute(tile)
    fun executionPriority(tile: Tile): Int = condition.executionPriority(tile)

    fun onExecuted() { condition.onExecuted() }
}

sealed class Condition {
    abstract fun canExecute(tile: Tile): Boolean
    open fun executionPriority(tile: Tile) = 0
    open fun onExecuted() = Unit

    data object None : Condition() {
        override fun canExecute(tile: Tile): Boolean = true
    }

    data class Limit(private var limit: Int) : Condition() {
        override fun canExecute(tile: Tile): Boolean = limit != 0
        override fun onExecuted() { limit-- }
    }

    class Predicate(
        val predicate: (Tile) -> Boolean,
        val priority: (Tile) -> Int = { 0 }
    ) : Condition() {
        override fun canExecute(tile: Tile): Boolean = predicate(tile)
        override fun executionPriority(tile: Tile): Int = priority(tile)
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