import { Dispatch } from "redux";
import { ActionType, ActionTypes } from "../ActionTypes";


// ---------------------------------action-interfaces---------------------------
export interface ConfitAction {
    type: ActionType.SET_CONFIG,
    payload: ConfigState
}

// -----------------------------------action-creators--------------------------

export type ConfigState = {
    isMobile?: boolean,
    lang?: string,
    height?: number,
    width?: number
}
export const setConfig = (payload: ConfigState) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        dispatch({
            type: ActionType.SET_CONFIG,
            payload: payload
        })
    }
}
