import { PostObject } from "../Actions/Post.action";
import { Profile } from "../Actions/Users.action";
import { ActionType, ActionTypes } from "../ActionTypes";

export type ProfileType = {
    profile: Profile,
    posts: PostObject[]
}
const initialState: ProfileType = {
    profile: {
        userId: "",
        name: "",
        username: "",
        profilePic: "",
        firstName: "",
        lastName: "",
        bio: ""
    },
    posts: []
};

const ProfileReducer = (state: ProfileType = initialState, action: ActionTypes): ProfileType => 
{
    switch(action.type){
        case ActionType.PROFILE:
            return {...state, profile: action.payload};

        case ActionType.PROFILE_POSTS:
            return {...state, posts: action.payload};

        default:
            return state;
    }
}

export default ProfileReducer;