package civ.hex

import civ.addIf
import civ.model.Player
import civ.model.UnitType
import civ.tile.Grass
import civ.tile.Mountains
import civ.tile.Tile
import civ.tile.Water
import kotlin.math.roundToInt
import kotlin.random.Random

class MapGenerator(
    val seed: Long,
) {
    val random = Random(seed)

    val forestsPercent = 0.35
    val mountainsPercent = 0.09
    val goldPercent = 0.5
    val lakesPercent = 0.1
    val animalsPercent = 0.05
    val minRiverPercent = 0.1

    private fun generateGroup(
        freeTiles: MutableSet<Coordinates>,
        desiredCount: Int,
    ): Set<Coordinates> {
        val resultTiles = mutableSetOf<Coordinates>()
        while (resultTiles.size < desiredCount) {
            val desiredSize = random.nextInt(2, 6).coerceAtMost(desiredCount - resultTiles.size)
            val current = mutableSetOf(freeTiles.random(random))

            while (current.size < desiredSize) {
                val remaining = desiredSize - current.size
                val toAdd = current.flatMapTo(mutableSetOf()) { it.neighbors() }
                    .filter { it !in current && it in freeTiles}
                    .shuffled(random)
                    .take(random.nextInt(1, 3).coerceAtMost(remaining))

                current += toAdd
                if (toAdd.isEmpty())
                    break
            }

            resultTiles.addAll(current)
            freeTiles.removeAll(current)
        }
        return resultTiles
    }

    @Suppress("CANDIDATE_CHOSEN_USING_OVERLOAD_RESOLUTION_BY_LAMBDA_ANNOTATION")
    fun generate(
        width: Int = 50,
        height: Int = 50,
        players: List<Player>,
    ): MapData {
        val layout = HexLayouts.rectangle(width, height)

        val borderWaterTiles = mutableSetOf<Coordinates>()
        val freeTiles = layout.toMutableSet()

        //water borders
        freeTiles.removeAll { tile ->
            (tile.neighbors().count { layout.contains(it) } < 6).also {
                if (it) borderWaterTiles.add(tile)
            }
        }

        val lakes = (freeTiles.size * lakesPercent).roundToInt()
        val forests = (freeTiles.size * forestsPercent).roundToInt()
        val animals = (freeTiles.size * animalsPercent).roundToInt()
        val mountains = (freeTiles.size * mountainsPercent).roundToInt()
        val golds = (mountains * goldPercent).roundToInt()
        val rivers = (freeTiles.size * minRiverPercent).roundToInt()
        println("Free tiles: ${freeTiles.size}, generating: $lakes lakes, $forests forests, $animals animals, " +
            "$mountains mountains, at least $rivers rivers")

        //generate lakes
        val lakeTiles = generateGroup(freeTiles, lakes)
        println("Lakes generated")

        val units = mutableMapOf<Coordinates, Pair<String, UnitType>>()

        //todo safeguard for too many players on too little map?
        val distanceBetweenPlayers = 5
        val playerSafeZone = borderWaterTiles.flatMap { it.getAllInRange(2) }.toMutableSet()
        players.forEach { player ->
            val settlersPosition = (freeTiles - playerSafeZone).random(random)
            val scoutPosition = settlersPosition.neighbors().filter { it in freeTiles }.random(random)
            units[settlersPosition] = player.playerId to UnitType.SETTLERS
            units[scoutPosition] = player.playerId to UnitType.SCOUT
            playerSafeZone.addAll(settlersPosition.getAllInRange(distanceBetweenPlayers))
            freeTiles.remove(settlersPosition)
            freeTiles.remove(scoutPosition)
        }

        val forestTiles = generateGroup(freeTiles, forests)
        println("Forests generated")

        val mountainTiles = generateGroup(freeTiles, mountains)
        println("Mountains generated")

        val goldTiles = mountainTiles.shuffled(random).take(golds)
        println("Gold generated")

        val riverTiles = mutableSetOf<Coordinates>()
        val riverOrigins = mutableSetOf<Coordinates>()
        println("Rivers = $rivers")

        //todo fixed amount of rivers?
        while (riverTiles.size < rivers) {
            val origin = if (riverOrigins.isEmpty())
                borderWaterTiles.random(random)
            else {
                (borderWaterTiles - riverOrigins).maxBy { borderTile ->
                    riverOrigins.minOf { borderTile.distanceTo(it) }
                }
            }
            val end = borderWaterTiles.maxBy { it.distanceTo(origin) }

            println("Plotting: $origin -> $end")

            val river = dijkstra(origin, end, cost = {
                when (this) {
                    end -> 0
                    !in layout -> 100_000
                    in mountainTiles -> 100_000
                    in borderWaterTiles -> 100_000
                    in riverTiles -> 3
                    in forestTiles -> 10
                    else -> 5
                }
            }).filter { it !in borderWaterTiles && it !in lakeTiles }

            println("Plotted, path size: ${river.size}, total: ${riverTiles.size}")

            riverOrigins.add(origin)
            riverOrigins.add(end)
            riverTiles.addAll(river)
        }

        println("Total river tiles: ${riverTiles.size}")

        val allWaterTiles = lakeTiles + borderWaterTiles

        val riverConnectingTiles = allWaterTiles + riverTiles
        val riverEdgesMap = riverTiles.associateWith {
            HexEdge.entries.filter { edge -> it.movedBy(edge) in riverConnectingTiles }
        }

        val animalTiles = mutableSetOf<Coordinates>()
        val animalFreeZone = mutableSetOf<Coordinates>()
        (forestTiles + freeTiles).sortedByDescending {
            it.neighbors().sumOf {
                when (it) {
                    in mountainTiles -> 0
                    in riverTiles -> 8
                    in forestTiles -> 5
                    else -> 2
                }
            }.addIf(it in freeTiles, 8)
        }.forEach { candidate ->
            if (animalTiles.size < animals && candidate !in animalFreeZone) {
                animalTiles.add(candidate)
                animalFreeZone.addAll(candidate.getAllInRange(2))
            }
        }

        return MapData(
            seed = seed,
            tiles = layout.mapTo(mutableSetOf()) {
                when (it) {
                    in allWaterTiles -> Water(it)
                    in mountainTiles -> Mountains(it, gold = it in goldTiles)
                    else -> Grass(
                        it,
                        forest = it in forestTiles,
                        riverEdges = riverEdgesMap[it].orEmpty(),
                        animals = it in animalTiles,
                        coast = it.neighbors().any { it in allWaterTiles },
                        isBusy = units.containsKey(it)
                    )
                }
            },
            units = units
        )
    }

    data class MapData(
        val seed: Long,
        val tiles: Set<Tile>,
        val units: Map<Coordinates, Pair<String, UnitType>>
    )
}