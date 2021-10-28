import { Dispatch } from "redux";
// import { GetPosts } from "../../services";
import { ActionType, ActionTypes } from "../ActionTypes";
import { PostObject } from "./Post.action";

type ActivityType = "LIKE" | "COMMENT" | "FOLLOW" | "TAG" | "SUGESTION"

export type ActivityData = {
    activityType: ActivityType,
    username: string,
    userId: string,
    profilePic: string,
    timestamp: string | number,
    data: any
}
// ---------------------------------action-interfaces---------------------------
export interface ActivityAction {
    type: ActionType.ACTIVITY,
    payload: ActivityData[]
}

// -----------------------------------action-creators--------------------------

export type QueryParam = {
    page?: number
}
export const getActivityData = (query: QueryParam) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        // const response = await GetPosts(query);
        const result: ActivityData[] = activityData
        dispatch({
            type: ActionType.ACTIVITY,
            payload: result
        })
    }
}

const activityData: ActivityData[] = [
    {
        activityType: "LIKE",
        username: "Jshon.ben",
        userId: "P3E98WERJ9CN83874KD982",
        profilePic: "/images/profile.png",
        timestamp: "1631037241115",
        data: {
            postId: "POSTID",
            url: "https://jagan.cf/jagan.png"
        }
    },
    {
        activityType: "FOLLOW",
        username: "devin.nm",
        userId: "EIWU892398UR923422ED32",
        profilePic: "https://jagan.cf/jagan.png",
        timestamp: "1631037381115",
        data: {

        }
    },
    {
        activityType: "TAG",
        username: "robin_jong",
        userId: "EIWU892398UR92342234242",
        profilePic: "https://jagan.cf/jagan.png",
        timestamp: "1631017381115",
        data: {
            postId: "POSTID",
            url: "/banner_image.jpg"
        }
    },
    {
        activityType: "COMMENT",
        username: "aere.den",
        userId: "9U9UE992389E8YYRYW",
        profilePic: "https://jagan.cf/jagan.png",
        timestamp: "1631014381115",
        data: {
            postId: "POSTID",
            comment: "some comment",
            url: "/banner_image.jpg"
        }
    }
]
