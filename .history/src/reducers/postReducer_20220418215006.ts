import { NEW_POSTS, FETCH_POSTS } from "../actions/types";

const initialState = {
    items: []
}

export default function (state = initialState, action:any){
    console.log('reducer')
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