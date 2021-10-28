import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { GetPosts } from "../../services";
import { ActionType, ActionTypes } from "../ActionTypes";

export interface PostObject {
    alt: string,
    urls: PostUrls,
    id: string,
    likes: number,
    user: PostUser
}

export type PostUrls = {
    full: string,
    raw?: string,
    regular: string,
    small: string,
    thumb: string
}
export type PostUser = {
    name: string,
    id: string,
    username: string,
    bio: string,
    profilePic: string
}


export type LikePostPayload = {
    postId: string,
    userId: string,
    liked: boolean
}

export type PostPayload = {

}


// ---------------------------------action-interfaces---------------------------
export interface GetPostAction {
    type: ActionType.GET_POSTS,
    payload: PostObject[]
}

export interface AddNewPostAction {
    type: ActionType.ADD_NEW_POST,
    payload: PostPayload
}


export interface LikePostAction {
    type: ActionType.LIKE_POST,
    payload: LikePostPayload
}


// -----------------------------------action-creators--------------------------


export const addNewPost = (data: PostPayload) => {
    return function (dispatch: Dispatch<ActionTypes>) {
        dispatch({
            type: ActionType.ADD_NEW_POST,
            payload: data
        })
    }
}

export type PostQuery = {
    page?: number,
    search?: string
}
export const getPostList = (query: PostQuery) => {
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
            type: ActionType.GET_POSTS,
            payload: result
        })
    }
}
