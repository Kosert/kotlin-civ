package civ

interface GameLog {

    fun addMessageListener(listener: (String) -> Unit)
    fun removeMessageListener(listener: (String) -> Unit)
}

//todo formatting?
class GameLogImpl : GameLog {

    private val records = mutableListOf<String>()
    private val listeners = mutableListOf<(String) -> Unit>()

    fun write(message: String) {
        records.add(message)
    }

    override fun addMessageListener(listener: (String) -> Unit) {
        listeners.add(listener)
    }

    override fun removeMessageListener(listener: (String) -> Unit) {
        listeners.remove(listener)
    }
}
