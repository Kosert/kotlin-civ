import { civ } from "kotlin-civ";

export class BuildingIcons {

    static get(building: civ.model.Building) {
        switch (building) {
            case civ.model.Building.VILLAGE_HALL:
                return "village_hall"
            case civ.model.Building.TOWN_HALL:
                return "town_hall"
            case civ.model.Building.ROAD:
                return "road"
            case civ.model.Building.WINDMILL:
                return "windmill"
            default:
                return "placeholder"
        }
    }
}