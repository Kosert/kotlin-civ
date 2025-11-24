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

    fun oneSidedFight(attacker1: CivUnit, defender1: CivUnit, defBonus: Int = 0) {
        var attacker = attacker1
        var defender = defender1
        println(
            "Beforemath:\n" +
                "Attacker: ${attacker.unitType} HP: ${attacker.hp}/${attacker.maxHp}, attack: ${attacker.attack}\n" +
                "Defender: ${defender.unitType} HP: ${defender.hp}/${defender.maxHp}, defense: ${defender.defense}"
        )

        while (attacker.hp > 0 && defender.hp > 0) {
            calculator.calculate(attacker, defender, defBonus).let {
                attacker = it.first
                defender = it.second
            }
            println("Attacker HP: ${attacker.hp}/${attacker.maxHp}, Defender HP: ${defender.hp}/${defender.maxHp}")
        }
    }

    fun equalFight(attacker1: CivUnit, defender1: CivUnit) {
        var attacker = attacker1
        var defender = defender1
        println(
            "Beforemath:\n" +
                "Attacker: ${attacker.unitType} HP: ${attacker.hp}/${attacker.maxHp}, attack: ${attacker.attack}, defense: ${attacker.defense}\n" +
                "Defender: ${defender.unitType} HP: ${defender.hp}/${defender.maxHp}, attack: ${defender.attack}, defense: ${defender.defense}"
        )

        while (attacker.hp > 0 && defender.hp > 0) {
            calculator.calculate(attacker, defender).let {
                defender = if (it.first.attackRange > 1) attacker else it.first
                attacker = it.second
            }
            println("${attacker.unitType} HP: ${attacker.hp}/${attacker.maxHp}, ${defender.unitType} HP: ${defender.hp}/${defender.maxHp}")
        }
    }

    @Test
    fun simpleTest() {
        val warrior = createUnit(UnitType.WARRIOR)
        val defender = createUnit(UnitType.ARCHER)
        oneSidedFight(warrior, defender)
    }

    @Test
    fun test() {
        val scout = createUnit(UnitType.SCOUT)
        val settlers = createUnit(UnitType.SETTLERS)
        val warrior = createUnit(UnitType.WARRIOR)
        val archer = createUnit(UnitType.ARCHER)
        val swordsman = createUnit(UnitType.SWORDSMAN)
        val crossbowman = createUnit(UnitType.CROSSBOWMAN)
        val knight = createUnit(UnitType.KNIGHT)
        val heavySwordsman = createUnit(UnitType.HEAVY_SWORDSMAN)
        val trebuchet = createUnit(UnitType.TREBUCHET)

        oneSidedFight(scout, settlers)
        println("======================")
        oneSidedFight(warrior, settlers)
        println("======================")
        oneSidedFight(scout, warrior)
        println("======================")
        oneSidedFight(warrior, scout)
        println("======================")
        oneSidedFight(warrior, warrior)
        println("======================")
        oneSidedFight(swordsman, scout)
        println("======================")
        oneSidedFight(swordsman, crossbowman)
        println("======================")
        oneSidedFight(crossbowman, swordsman)
        println("======================")
        oneSidedFight(knight, crossbowman)
        println("======================")
        println("======================")
        println("======================")

        equalFight(scout, warrior)
        println("======================")
        equalFight(warrior, scout)
        println("======================")
        equalFight(warrior, warrior)
        println("======================")
        equalFight(swordsman, scout)
        println("======================")
        equalFight(swordsman, crossbowman)
        println("======================")
        equalFight(crossbowman, swordsman)
        println("======================")
        equalFight(knight, swordsman)
        println("======================")
        equalFight(crossbowman, knight)
        println("======================")
        equalFight(knight, heavySwordsman)
        println("======================")
        equalFight(crossbowman, heavySwordsman)
        println("======================")

        println("======================")
        oneSidedFight(archer, settlers)
        println("======================")
        equalFight(archer, scout)
        println("======================")
        equalFight(archer, warrior)
        println("======================")
        equalFight(archer, swordsman)
        println("======================")
        equalFight(archer, crossbowman)
        println("======================")
        equalFight(archer, knight)
        println("======================")
        equalFight(archer, heavySwordsman)

        println("======================")
        oneSidedFight(trebuchet, settlers)
        println("======================")
        equalFight(trebuchet, scout)
        println("======================")
        equalFight(trebuchet, warrior)
        println("======================")
        equalFight(trebuchet, swordsman)
        println("======================")
        equalFight(trebuchet, crossbowman)
        println("======================")
        equalFight(trebuchet, knight)
        println("======================")
        equalFight(trebuchet, heavySwordsman)
    }



}