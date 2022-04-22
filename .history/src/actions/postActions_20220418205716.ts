import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts =() => (dispatch:any) => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then( json => {
    console.log(json)
    dispatch({ 
        type: FETCH_POSTS,
        payload: json
    })
    })
}