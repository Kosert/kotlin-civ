package civ.core

actual class ConsoleLog : GameLogListener {
    override fun onMessage(message: LogMessage) {
        System.out.println(message.tokens)
    }
}