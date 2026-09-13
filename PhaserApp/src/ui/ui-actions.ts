

export const UiActionEvent = "UiActionEvent"

export enum UiAction {

    END_TURN,
    SETTLE,
    BUILD,  // arg: Building
    RECRUIT,// arg: UnitType
    CONQUER,
    DISBAND,

    LOAD_GAME_STATE, //arg: GameState
}