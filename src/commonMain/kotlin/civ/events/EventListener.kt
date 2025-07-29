package civ.events

class EventListener(
    val playerId: String,
    val listener: (GameEvent) -> Unit
)