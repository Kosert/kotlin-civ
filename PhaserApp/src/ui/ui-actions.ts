

export const UiActionEvent = "UiActionEvent"

export enum UiAction {

    END_TURN,
    SETTLE,
    BUILD,  // arg: Building
    RECRUIT,
    CONQUER,// arg: UnitType
    DISBAND,

    LOAD_GAME_STATE, //arg: GameState
}