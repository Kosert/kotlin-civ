package civ.core

actual class ConsoleLog : GameLogListener {
    override fun onMessage(message: LogMessage) {
        console.log(*message.tokens)
    }
}