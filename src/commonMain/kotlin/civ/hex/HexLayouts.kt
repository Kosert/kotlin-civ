package civ.hex

object HexLayouts {

    fun rectangle(
        width: Int,
        height: Int,
        offset: Int = 0,
    ): List<Coordinates> = buildList {
        repeat(width) { q ->
            repeat(height) { r ->
                add(Coordinates( q - r/2 - offset, r - offset))
            }
        }
    }


}
