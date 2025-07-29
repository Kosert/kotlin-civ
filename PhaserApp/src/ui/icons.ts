import { civ } from "kotlin-civ";

export class BuildingIcons {

    static get(building: civ.model.Building) {
        switch (building) {
            case civ.model.Building.VILLAGE_HALL:
                return "village_hall"
            case civ.model.Building.TOWN_HALL:
                return "town_hall"
            case civ.model.Building.CASTLE:
                return "castle"
            case civ.model.Building.ROAD:
                return "road"
            case civ.model.Building.MARKET:
                return "market"
            case civ.model.Building.FISHING_HUT:
                return "fishing_hut"
            case civ.model.Building.PORT:
                return "port"
            case civ.model.Building.LUMBERCAMP:
                return "lumbercamp"
            case civ.model.Building.SAWMILL:
                return "sawmill"
            case civ.model.Building.FARM:
                return "farm"
            case civ.model.Building.WINDMILL:
                return "windmill"
            case civ.model.Building.RIVERLAND_FARM:
                return "riverland_farm"
            case civ.model.Building.WATERMILL:
                return "watermill"
            case civ.model.Building.HUNTERS_CAMP:
                return "hunters_camp"
            case civ.model.Building.BUTCHERY:
                return "butchery"
            case civ.model.Building.MINE:
                return "mine"
            case civ.model.Building.BARRACKS:
                return "barracks"
            case civ.model.Building.STABLE:
                return "stable"
            case civ.model.Building.ARCHERY_RANGE:
                return "archery_range"
            case civ.model.Building.GUARD_TOWERS:
                return "guard_towers"
            case civ.model.Building.WALLS:
                return "walls"
            case civ.model.Building.BLACKSMITH:
                return "blacksmith"
            case civ.model.Building.ARMORERS_WORKSHOP:
                return "armorers_workshop"
            case civ.model.Building.SIEGE_WORKSHOP:
                return "siege_workshop"
            default:
                return "placeholder"
        }
    }
}

export class UnitIcons {

    static get(unit: civ.model.UnitType) {
        switch (unit) {
            case civ.model.UnitType.SETTLERS:
                return "settlers"
            case civ.model.UnitType.SCOUT:
                return "scout"
            case civ.model.UnitType.WARRIOR:
                return "warrior"
            case civ.model.UnitType.ARCHER:
                return "archer"
            case civ.model.UnitType.RIDER:
                return "rider"
            case civ.model.UnitType.SWORDSMAN:
                return "swordsman"
            case civ.model.UnitType.KNIGHT:
                return "knight"
            // case civ.model.UnitType.HEAVY_PIKEMAN:
            //     return "heavy_pikeman"
            case civ.model.UnitType.HEAVY_SWORDSMAN:
                return "heavy_swordsman"
            case civ.model.UnitType.TREBUCHET:
                return "trebuchet"
            default:
                return "placeholder"
        }
    }
}