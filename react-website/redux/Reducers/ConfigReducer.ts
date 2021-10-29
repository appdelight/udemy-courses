import { ConfigState } from "../Actions/Config.action";
import { ActionType, ActionTypes } from "../ActionTypes"


const initialState: ConfigState = {
    isMobile: true,
    lang: "en",
    height: 0,
    width: 0
}

const ConfigReducer = (state: ConfigState = initialState, action: ActionTypes): ConfigState => 
{
    switch(action.type)
    {
        case ActionType.SET_CONFIG:
            return {...state, ...action.payload};

        default:
            return state;
    }
}

export default ConfigReducer