import { ActionType } from "../ActionTypes";


export type Profile = {
    userId: string,
    name: string,
    username: string,
    profilePic: string,
    firstName?: string,
    lastName?: string,
    bio?: string
}

// ---------------------------------action-interfaces---------------------------
export interface UsersAction {
    type: ActionType.USERS,
    payload: Profile[]
}

export interface ProfileAction {
    type: ActionType.PROFILE,
    payload: Profile
}


// -----------------------------------action-creators--------------------------