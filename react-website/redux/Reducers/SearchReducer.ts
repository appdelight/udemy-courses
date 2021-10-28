import { PostObject } from "../Actions/Post.action"
import { ActionType, ActionTypes } from "../ActionTypes"



export type SearchProps = {
    posts: PostObject[]
}
const initialState: SearchProps = {
    posts: []
}
const SearchReducer = (state: SearchProps = initialState, action: ActionTypes ): SearchProps => 
{
    switch(action.type){
        case ActionType.SEARCH_POST:
            return {
                ...state, 
                posts: [
                    ...state.posts,
                    ...action.payload
                ]
            };
        default:
            return state;
    }
}

export default SearchReducer