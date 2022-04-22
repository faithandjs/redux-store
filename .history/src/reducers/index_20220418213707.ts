import { combineReducers } from "redux";
import postReducer from './postReducer'

console.log('reducer index')
export default combineReducers({
    posts: postReducer
})