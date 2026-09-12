import { civ } from "kotlin-civ";
import "../util/util"

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
            case civ.model.Building.WATCH_TOWER:
                return "Watch Tower"
            case civ.model.Building.FISH_TRAP:
                return "Fish trap"
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
                return "Irrigated farm"
            case civ.model.Building.WATERMILL:
                return "Watermill"
            case civ.model.Building.HUNTERS_CAMP:
                return "Hunters' camp"
            case civ.model.Building.BUTCHERY:
                return "Butchery"
            case civ.model.Building.MINE:
                return "Mine"
            case civ.model.Building.MARKET:
                return "Market"
            case civ.model.Building.GUARD_TOWERS:
                return "Guard Towers"
            case civ.model.Building.WALLS:
                return "City Walls"
            case civ.model.Building.BARRACKS:
                return "Barracks"
            case civ.model.Building.BLACKSMITH:
                return "Blacksmith"
            case civ.model.Building.ARMORERS_WORKSHOP:
                return "Armorer's Workshop"
            case civ.model.Building.STABLE:
                return "Stable"
            case civ.model.Building.WARHORSE_STABLES:
                return "Warhorse Stables"
            case civ.model.Building.KNIGHTS_HALL:
                return "Knights Hall"
            case civ.model.Building.ARCHERY_RANGE:
                return "Archery Range"
            case civ.model.Building.ARBALEST_GUILD:
                return "Arbalest Guild"
            case civ.model.Building.SIEGE_WORKSHOP:
                return "Siege Workshop"
            default:
                throw new Error(`Unhandled building: ${building.name}`);
        }
    }

    static buildDescription(building: civ.model.Building): string {
        const requiredBuildings = [...building.buildingRequirements.asJsReadonlySetView().values()]
            .map(it => this.buildingName(it))
            .join(", ")
        if (requiredBuildings.length == 0) {
            return this.buildingDescription(building)
        } else {
            return this.buildingDescription(building) + "\nRequires " + requiredBuildings
        }
    }

    static bonusDescription(building: civ.model.Building): string {
        const income = building.production()
        const production = [
            (income.food > 0 ? `${income.food}{` : ""),
            (income.wood > 0 ? `${income.wood}}` : ""),
            (income.gold > 0 ? `${income.gold}$` : "")
        ].filter(it => it != "").join(", ")
        const productionString = production.length > 0 ? `Produces ${production} each turn.` : ""
        const defString = building.defenseBonus() > 0 ? `Ally units have +${building.defenseBonus()} defense.` : ""
        return [productionString, defString].filter(it => it != "").join("\n")
    }

    static buildingDescription(building: civ.model.Building): string {
        let base: string
        switch (building) {
            case civ.model.Building.VILLAGE_HALL:
                base = "Main building of a village."
                break
            case civ.model.Building.TOWN_HALL:
                base = "Town Hall"
                break
            case civ.model.Building.CASTLE:
                base = "Castle"
                break
            case civ.model.Building.ROAD:
                base = "Units move faster through tiles with roads."
                break
            case civ.model.Building.WATCH_TOWER:
                base = "Units can see 3 tiles away from tiles with a Watch Tower."
                break
            case civ.model.Building.MINE:
                base = "Can only be built on a mountain with gold."
                break
            case civ.model.Building.BARRACKS:
                base = "Barracks"
                break
            case civ.model.Building.BLACKSMITH:
                base = "Blacksmith"
                break
            case civ.model.Building.ARMORERS_WORKSHOP:
                base = "Armorer's Workshop"
                break
            case civ.model.Building.STABLE:
                base = "Stable"
                break
            case civ.model.Building.WARHORSE_STABLES:
                base = "Warhorse Stables"
                break
            case civ.model.Building.KNIGHTS_HALL:
                base = "Knights Hall"
                break
            case civ.model.Building.ARCHERY_RANGE:
                base = "Archery Range"
                break
            case civ.model.Building.ARBALEST_GUILD:
                base = "Arbalest Guild"
                break
            case civ.model.Building.SIEGE_WORKSHOP:
                base = "Siege Workshop"
                break
            default:
                base = ""
                break
        }
        return [base, this.bonusDescription(building)].filter(it => it != "").join("\n")
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
            case civ.model.UnitType.RIDER:
                return "Rider"        
            case civ.model.UnitType.SWORDSMAN:
                return "Swordsman"
            case civ.model.UnitType.KNIGHT:
                return "Knight"
            case civ.model.UnitType.CROSSBOWMAN:
                return "Crossbowman"
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
            "Movement left: " + (unit.movementLeft / 10).coerceAtLeast(0).toPrecision(2),
            "Action points: " + (unit.actionPoint ? "1" : "0")
            //todo action points
        ].filter(it => it).join("\n")
    }

    static recruitDescription(unitType: civ.model.UnitType): string {
        const requiredBuildings = [...unitType.requiredBuildings.asJsReadonlySetView().values()]
            .map(it => this.buildingName(it))
            .join(", ")
        if (requiredBuildings.length == 0) {
            return this.unitDescription(unitType)
        } else {
            return this.unitDescription(unitType) + "\nRequires " + requiredBuildings
        }
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
            case civ.model.UnitType.RIDER:
                return "Fast mounted offensive unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.SWORDSMAN:
                return "Advanced melee unit with iron weapons.\n" + this.unitStats(unitType)
            case civ.model.UnitType.CROSSBOWMAN:
                return "Advanced ranged unit with a crossbow.\n" + this.unitStats(unitType)
            case civ.model.UnitType.KNIGHT:
                return "Fast heavy cavalry unit.\n" + this.unitStats(unitType)            
            case civ.model.UnitType.HEAVY_SWORDSMAN:
                return "Elite heavily armored melee unit.\n" + this.unitStats(unitType)
            case civ.model.UnitType.TREBUCHET:
                return "Powerful siege weapon with long range.\n" + this.unitStats(unitType)
            default:
                throw new Error(`Unhandled unit type: ${unitType.value}`);
        }
    }

}