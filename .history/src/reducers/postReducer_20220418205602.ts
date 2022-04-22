import { NEW_POSTS, FETCH_POSTS } from "../actions/types";

const initialState = {
    items: [],
    item : {}
}

export default function (state = initialState, action:any){
    switch (action.type){
        case(action.type):
            return{
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}