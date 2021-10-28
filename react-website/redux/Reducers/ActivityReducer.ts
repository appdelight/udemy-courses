import { ActionType, ActionTypes } from "../ActionTypes"
import { ActivityData } from '../Actions/Activity.action';


const initialState: ActivityData[] = []

const ActivityReducer = (state: ActivityData[] = initialState, action: ActionTypes): ActivityData[] => 
{
    switch(action.type)
    {
        case ActionType.ACTIVITY:
            return [...state, ...action.payload];

        default:
            return state;
    }
}

export default ActivityReducer