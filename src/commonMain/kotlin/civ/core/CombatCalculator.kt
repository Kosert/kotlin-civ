package civ.core

import civ.model.CivUnit
import kotlin.math.roundToInt

class CombatCalculator {

    fun calculate(
        attacker: CivUnit,
        defender: CivUnit,
        defenseBonus: Int = 0
    ): Pair<CivUnit, CivUnit> {
        val totalDefense = (defender.defense + defenseBonus)

        val attackForce = attacker.attack
        val defenseForce = totalDefense

        val totalNumbers = attacker.hp + defender.hp
        val attackerNumbersRatio = attacker.hp / totalNumbers.toDouble() * 2
        val defenderNumbersRatio = defender.hp / totalNumbers.toDouble() * 2
        //println("numbers ratio: -> $attackerNumbersRatio vs ${defenderNumbersRatio} -> ${attackerNumbersRatio.coerceIn(0.5, 2.0)} vs ${(defenderNumbersRatio).coerceIn(0.5, 2.0)}")

        val attackerDamage = attackForce * attackerNumbersRatio.coerceIn(0.5, 2.0)
        val defenderDamage = defenseForce * defenderNumbersRatio.coerceIn(0.5, 2.0)

        //println("${attacker.unitType} deals $attackerDamage, ${defender.unitType} deals $defenderDamage")
        val updatedAttacker = attacker.copy(hp = attacker.hp - defenderDamage.roundToInt())
        val updatedDefender = defender.copy(hp = defender.hp - attackerDamage.roundToInt())

        return updatedAttacker to updatedDefender
    }
}