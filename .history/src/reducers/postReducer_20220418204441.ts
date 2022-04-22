import { NEW_POSTS, FETCH_POSTS } from "../actions/types";

const initialState = {
    items: [],
    item : {}
}

export default function (state = initialState, action:any){
    switch (action.type){
        default:
            return state
    }
}