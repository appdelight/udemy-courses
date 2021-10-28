import { PostObject } from "../Actions/Post.action";
import { ActionType, ActionTypes } from "../ActionTypes"


const posts: PostObject[] = []

const PostReducers = (state: PostObject[] = posts, action: ActionTypes): PostObject[] => 
{
    switch(action.type)
    {
        case ActionType.GET_POSTS:
            return [...state, ...action.payload];

        default:
            return state;
    }
}

export default PostReducers