import { Profile } from "../Actions/Users.action";
import { ActionType, ActionTypes } from "../ActionTypes";


const users: Profile[] = [];

const UsersReducer = (state: Profile[] = users, action: ActionTypes): Profile[] => 
{
    switch(action.type){
        case ActionType.USERS:
            return [...state]

        default:
            return state;

    }
}

export default UsersReducer;