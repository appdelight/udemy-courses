import { combineReducers } from "redux";
import { ActivityData } from "../Actions/Activity.action";
import { ConfigState } from "../Actions/Config.action";
import { PostObject } from "../Actions/Post.action";
import { Profile, UsersAction } from "../Actions/Users.action";
import ActivityReducer from "./ActivityReducer";
import ConfigReducer from "./ConfigReducer";
import PostReducers from "./PostReducers";
import ProfileReducer, { ProfileType } from "./ProfileReducer";
import SearchReducer, { SearchProps } from "./SearchReducer";
import UsersReducer from "./UserReducer";

export type StateTypes = {
    config: ConfigState,
    posts: PostObject[],
    profile: ProfileType,
    users: Profile[],
    activity: ActivityData[],
    search: SearchProps

}
const reducers = combineReducers<StateTypes>({
    config: ConfigReducer,
    posts: PostReducers,
    profile: ProfileReducer,
    users: UsersReducer,
    activity: ActivityReducer,
    search: SearchReducer
})

export default reducers;