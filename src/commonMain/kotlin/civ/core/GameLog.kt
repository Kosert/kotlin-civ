package civ.core

interface GameLog {

    fun addMessageListener(listener: GameLogListener)
    fun removeMessageListener(listener: GameLogListener)
}

interface GameLogListener {
    fun onMessage(message: LogMessage)
}

class LogMessage(
    vararg val tokens: Any?,
)

//todo formatting?
class GameLogImpl : GameLog {

    private val records = mutableListOf<LogMessage>()
    private val listeners = mutableListOf<GameLogListener>()

    fun write(vararg tokens: Any?) {
        write(LogMessage(*tokens))
    }

    fun write(message: LogMessage) {
        records.add(message)
        listeners.forEach { it.onMessage(message) }
    }

    override fun addMessageListener(listener: GameLogListener) {
        listeners.add(listener)
    }

    override fun removeMessageListener(listener: GameLogListener) {
        listeners.remove(listener)
    }
}

expect class ConsoleLog() : GameLogListener