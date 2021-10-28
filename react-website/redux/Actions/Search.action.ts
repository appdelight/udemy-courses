import { Dispatch } from "redux";
import { GetPosts } from "../../services";
import { ActionType, ActionTypes } from "../ActionTypes";
import { PostObject } from "./Post.action";


// ---------------------------------action-interfaces---------------------------
export interface SearchPostAction {
    type: ActionType.SEARCH_POST,
    payload: PostObject[]
}

// -----------------------------------action-creators--------------------------

export type PostQuery = {
    page?: number,
    search?: string
}
export const getSearchPostList = (query: PostQuery) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        const response = await GetPosts(query);
        const result: PostObject[] = response.data.map((post: any) => {
            const stripedResult = {
                alt: post.alt_description,
                urls: post.urls,
                id: post.id,
                likes: post.likes,
                user: {
                    name: post.user?.name,
                    id: post.user?.id,
                    username: post.user?.username,
                    bio: post.user?.bio,
                    profilePic: post.user?.profile_image?.small
                },
            }
            return stripedResult
        })
        dispatch({
            type: ActionType.SEARCH_POST,
            payload: result
        })
    }
}
