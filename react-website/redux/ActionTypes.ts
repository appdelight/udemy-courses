import { ActivityAction } from "./Actions/Activity.action";
import { ConfitAction } from "./Actions/Config.action";
import { AddNewPostAction, GetPostAction, LikePostAction } from "./Actions/Post.action";
import { ProfilePostAction } from "./Actions/Profile.action";
import { ProfileAction, UsersAction } from "./Actions/Users.action";
import { SearchPostAction } from './Actions/Search.action';

export enum ActionType {
    GET_POSTS = "GET_POSTS",
    UPDATE_POST = "UPDATE_POST",
    ADD_NEW_POST = "ADD_NEW_POST",
    LIKE_POST = "LIKE_POST",
    USERS = "USERS",
    PROFILE = "PROFILE",
    PROFILE_POSTS = "PROFILE_POSTS",
    SET_CONFIG = "SET_CONFIG",
    ACTIVITY = "ACTIVITY",
    SEARCH_POST = "SEARCH_POST"
}

export type ActionTypes = 
    GetPostAction |
    AddNewPostAction |
    LikePostAction |
    UsersAction |
    ProfileAction |
    ProfilePostAction |
    ConfitAction |
    ActivityAction |
    SearchPostAction;