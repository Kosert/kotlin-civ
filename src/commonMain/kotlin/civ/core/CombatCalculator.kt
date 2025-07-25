package civ.core

import civ.hex.HexMap
import civ.model.CivUnit
import kotlin.math.roundToInt

class CombatCalculator {

    val modifier = 3

    fun calculate(
        attacker: CivUnit,
        defender: CivUnit,
        defenseBonus: Int = 0
    ): Pair<CivUnit, CivUnit> {
        println("Beforemath:\nAttacker: $attacker\nDefender: $defender")

        val attackForce = attacker.attack * modifier * (attacker.hp / attacker.maxHp.toDouble()) + attacker.attack
        val defenseForce =
            (defender.defense + defenseBonus) * modifier * (defender.hp / defender.maxHp.toDouble()) + defender.defense

        val attackerDamage = attackForce.roundToInt()
        val defenderDamage = defenseForce.roundToInt()

        println("Attacker damage: $attackerDamage, Defender damage: $defenderDamage")

        val updatedAttacker = attacker.copy(hp = attacker.hp - defenderDamage)
        val updatedDefender = defender.copy(hp = defender.hp - attackerDamage)

        println("Aftermath:\nAttacker: $updatedAttacker\nDefender: $updatedDefender\n")

        return updatedAttacker to updatedDefender
    }

    fun calculate2(
        attacker: CivUnit,
        defender: CivUnit,
        defenseBonus: Int = 0
    ): Pair<CivUnit, CivUnit> {

        val attackForce = attacker.attack * (attacker.hp / attacker.maxHp.toDouble())// + attacker.attack
        val defenseForce =
            (defender.defense + defenseBonus) * (defender.hp / defender.maxHp.toDouble())// + defender.defense

        val attackRatio = attackForce / defenseForce
        val defendRatio = defenseForce / attackForce
        println("$attackForce / $defenseForce = $attackRatio")
        println("$defenseForce / $attackForce = $defendRatio")

        val baseDamage = 4
        val attackerDamage = (baseDamage * attackRatio).roundToInt()
        val defenderDamage = (baseDamage / attackRatio).roundToInt()


//        val attackerDamage = (attacker.attack * attackRatio).roundToInt()
//        val defenderDamage = (defender.defense * defendRatio).roundToInt()

        println("Attacker damage: $attackerDamage, Defender damage: $defenderDamage")

        val updatedAttacker = attacker.copy(hp = attacker.hp - defenderDamage)
        val updatedDefender = defender.copy(hp = defender.hp - attackerDamage)

        return updatedAttacker to updatedDefender
    }

    fun calculate3(
        attacker: CivUnit,
        defender: CivUnit,
        defenseBonus: Int = 0
    ): Pair<CivUnit, CivUnit> {
        // attack / defense ratio -> modifier
        // modifier coerce max 3?
        // base attack -> hp / 10 * attack (or some base?)
        // damage -> base attack * modifier

        val totalDefense = (defender.defense + defenseBonus)
        val ratio = attacker.attack.toDouble() / (totalDefense.takeIf { it > 0 } ?: 1)
        println("Ratio: $ratio | ${1/ratio}")

        val attackForce = (attacker.attack * attacker.hp / 10.0)
        val defenseForce = (totalDefense * defender.hp / 10.0)
        println("Attack force: $attackForce, Defense force: $defenseForce")

        val attackerDamage = (attackForce * ratio).roundToInt()
        val defenderDamage = (defenseForce / ratio).roundToInt()
        println("Attacker damage: $attackerDamage, Defender damage: $defenderDamage")

        val updatedAttacker = attacker.copy(hp = attacker.hp - defenderDamage)
        val updatedDefender = defender.copy(hp = defender.hp - attackerDamage)

        return updatedAttacker to updatedDefender
    }


}