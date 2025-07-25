package civ

import civ.core.CombatCalculator
import civ.hex.Coordinates
import civ.model.CivUnit
import civ.model.UnitType
import kotlin.test.Test

class CombatTest {

    private val calculator = CombatCalculator()

    private fun createUnit(unitType: UnitType, hp: Int = unitType.maxHp): CivUnit {
        return CivUnit(unitType = unitType, coordinates = Coordinates(0, 0), playerId = "", hp = hp)
    }

    fun fullFight(attacker1: CivUnit, defender1: CivUnit) {
        var attacker = attacker1
        var defender = defender1
        println(
            "Beforemath:\n" +
                "Attacker: ${attacker.unitType} HP: ${attacker.hp}/${attacker.maxHp}, attack: ${attacker.attack}\n" +
                "Defender: ${defender.unitType} HP: ${defender.hp}/${defender.maxHp}, defense: ${defender.defense}"
        )

        while (attacker.hp > 0 && defender.hp > 0) {
            calculator.calculate3(attacker, defender).let {
                attacker = it.first
                defender = it.second
            }
        }

        println(
            "Aftermath:\n" +
                "Attacker: ${attacker.unitType} HP: ${attacker.hp}/${attacker.maxHp}, attack: ${attacker.attack}\n" +
                "Defender: ${defender.unitType} HP: ${defender.hp}/${defender.maxHp}, defense: ${defender.defense}"
        )
    }

    @Test
    fun test() {
        val scout = createUnit(UnitType.SCOUT)
        val settlers = createUnit(UnitType.SETTLERS)
        val warrior = createUnit(UnitType.WARRIOR)
        val archer = createUnit(UnitType.ARCHER)
        val swordsman = createUnit(UnitType.SWORDSMAN)
        val heavyPikeman = createUnit(UnitType.HEAVY_PIKEMAN)

        calculator.calculate3(scout, settlers)
//        fullFight(scout, settlers)
//        fullFight(warrior, settlers)
//        fullFight(scout, warrior)
//        fullFight(warrior, scout)
//        fullFight(warrior, warrior)
//        fullFight(swordsman, scout)
//        fullFight(swordsman, heavyPikeman)
//        fullFight(heavyPikeman, swordsman)
    }



}