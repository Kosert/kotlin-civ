import { civ } from "kotlin-civ";

export class Texts {

    // Glyphs:
    // { - food
    // } - wood
    // $ - gold
    // @ - attack
    // | - defense
    // % - range
    // ^ - health
    // § - speed

    static tileDescription(income?: civ.model.Stockpiles): string {
        if (!income)
            return ""
        const production = [
            (income.food > 0 ? `${income.food}{` : ""),
            (income.wood > 0 ? `${income.wood}}` : ""),
            (income.gold > 0 ? `${income.gold}$` : "")
        ].filter(it => it != "").join(", ")

        if (production.length > 0) 
            return "This tile produces " + production + " each turn."
        else
            return "This tile doesn't produce resources."
    }

    static buildingName(building: civ.model.Building) {
        switch (building) {
            case civ.model.Building.VILLAGE_HALL:
                return "Village Hall"
            case civ.model.Building.TOWN_HALL:
                return "Town Hall"
            case civ.model.Building.CASTLE:
                return "Castle"
            case civ.model.Building.ROAD:
                return "Road"
            case civ.model.Building.MARKET:
                return "Market"
            case civ.model.Building.FISHING_SHIP:
                return "Fishing Ship"
            case civ.model.Building.FISHING_HUT:
                return "Fishing Hut"
            case civ.model.Building.PORT:
                return "Port"
            case civ.model.Building.LUMBERCAMP:
                return "Lumber camp"
            case civ.model.Building.SAWMILL:
                return "Sawmill"
            case civ.model.Building.FARM:
                return "Farm"
            case civ.model.Building.WINDMILL:
                return "Windmill"
            case civ.model.Building.RIVERLAND_FARM:
                return "Riverland farm"
            case civ.model.Building.WATERMILL:
                return "Watermill"
            case civ.model.Building.HUNTERS_CAMP:
                return "Hunters' camp"
            case civ.model.Building.BUTCHERY:
                return "Butchery"
            case civ.model.Building.MINE:
                return "Mine"
            case civ.model.Building.BARRACKS:
                return "Barracks"
            case civ.model.Building.STABLE:
                return "Stable"
            case civ.model.Building.ARCHERY_RANGE:
                return "Archery Range"
            case civ.model.Building.GUARD_TOWERS:
                return "Guard Towers"
            case civ.model.Building.WALLS:
                return "City Walls"
            case civ.model.Building.BLACKSMITH:
                return "Blacksmith"
            case civ.model.Building.ARMORERS_WORKSHOP:
                return "Armorer's Workshop"
            case civ.model.Building.SIEGE_WORKSHOP:
                return "Siege Workshop"
            default:
                throw new Error(`Unhandled building: ${building.name}`);
        }
    }

    static buildingDescription(building: civ.model.Building): string {
        switch (building) {
            case civ.model.Building.VILLAGE_HALL:
                return "Main building of a village."
            case civ.model.Building.TOWN_HALL:
                return "Town Hall"
            case civ.model.Building.CASTLE:
                return "Castle"
            case civ.model.Building.ROAD:
                return "Units move faster through tiles with roads."
            case civ.model.Building.MARKET:
                return "Produces 3$ each turn."
            case civ.model.Building.FISHING_SHIP:
                return "Produces 3{ each turn."
            case civ.model.Building.FISHING_HUT:
                return "Produces 2{ each turn."
            case civ.model.Building.PORT:
                return "Produces 2{ and 3$ each turn.\nRequires Fishing Hut."
            case civ.model.Building.LUMBERCAMP:
                return "Produces 2} each turn."
            case civ.model.Building.SAWMILL:
                return "Produces 3} each turn.\nRequires Lumber camp."
            case civ.model.Building.FARM:
                return "Produces 2{ each turn."
            case civ.model.Building.WINDMILL:
                return "Produces 3{ each turn.\nRequires Farm."
            case civ.model.Building.RIVERLAND_FARM:
                return "Produces 3{ each turn."
            case civ.model.Building.WATERMILL:
                return "Produces 4{ each turn.\nRequires Riverland Farm."
             case civ.model.Building.HUNTERS_CAMP:
                return "Produces 2{ and 1$ each turn."
            case civ.model.Building.BUTCHERY:
                return "Produces 3{ and 1$ each turn.\nRequires Hunters' Camp."
            case civ.model.Building.MINE:
                return "Produces 5$ each turn. Can only be built on a mountain with gold."
            case civ.model.Building.BARRACKS:
                return "Barracks"
            case civ.model.Building.STABLE:
                return "Stable"
            case civ.model.Building.ARCHERY_RANGE:
                return "Archery Range"
            case civ.model.Building.GUARD_TOWERS:
                return "Guard Towers"
            case civ.model.Building.WALLS:
                return "City Walls"
            case civ.model.Building.BLACKSMITH:
                return "Blacksmith"
            case civ.model.Building.ARMORERS_WORKSHOP:
                return "Armorer's Workshop"
            case civ.model.Building.SIEGE_WORKSHOP:
                return "Siege Workshop"
            default:
                throw new Error(`Unhandled building: ${building.name}`);
        }
    }

    static unitName(unitType: civ.model.UnitType): string {
        switch (unitType) {
            case civ.model.UnitType.SETTLERS:
                return "Settlers"
            case civ.model.UnitType.SCOUT:
                return "Scout"
            case civ.model.UnitType.WARRIOR:
                return "Warrior"
            case civ.model.UnitType.ARCHER:
                return "Archer"
            case civ.model.UnitType.SWORDSMAN:
                return "Swordsman"
            case civ.model.UnitType.KNIGHT:
                return "Knight"
            case civ.model.UnitType.HEAVY_PIKEMAN:
                return "Heavy Pikeman"
            case civ.model.UnitType.HEAVY_SWORDSMAN:
                return "Heavy Swordsman"
            case civ.model.UnitType.TREBUCHET:
                return "Trebuchet"
            default:
                throw new Error(`Unhandled unit type: ${unitType.value}`);
        }
    }

    static unitStats(unitType: civ.model.UnitType): string {
        return [
            `^ ${unitType.maxHp}`,
            unitType.attack > 0 ? ((unitType.range > 1 ? "%" : "@") + ` ${unitType.attack}`) : "",
            unitType.defense > 0 ? `| ${unitType.defense}` : "",
            unitType.speed > 0 ? `§ ${unitType.speed}` : "",
        ].filter(it => it).join("\n")
    }

    static selectedUnitStats(unit: civ.model.CivUnit): string {
        return [
            `^ ${unit.hp}/${unit.maxHp}`,
            unit.attack > 0 ? ((unit.attackRange > 1 ? "%" : "@") + ` ${unit.attack}`) : "",
            unit.defense > 0 ? `| ${unit.defense}` : "",
            "Movement left: " + (unit.movementLeft / 10).toPrecision(2),
            "Action points: " + (unit.actionPoint ? "1" : "0")
            //todo action points
        ].filter(it => it).join("\n")
    }

    static unitDescription(unitType: civ.model.UnitType): string {
        switch (unitType) {
            case civ.model.UnitType.SETTLERS:
                return "Can found new cities.\n" + this.unitStats(unitType)
            case civ.model.UnitType.SCOUT:
                return "Fast reconnaissance unit with good vision range.\n" + this.unitStats(unitType)
            case civ.model.UnitType.WARRIOR:
                return "Basic melee combat unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.ARCHER:
                return "Ranged combat unit that can attack from distance.\n" + this.unitStats(unitType)
            case civ.model.UnitType.SWORDSMAN:
                return "Advanced melee unit with iron weapons.\n" + this.unitStats(unitType)
            case civ.model.UnitType.KNIGHT:
                return "Fast heavy cavalry unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.HEAVY_PIKEMAN:
                return "Heavily armored defensive unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.HEAVY_SWORDSMAN:
                return "Elite heavily armored melee unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.TREBUCHET:
                return "Powerful siege weapon with long range.\n" + this.unitStats(unitType)
            default:
                throw new Error(`Unhandled unit type: ${unitType.value}`);
        }
    }

}