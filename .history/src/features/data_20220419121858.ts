import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useRef } from "react";


const arr = useRef<any | null>()
useEffect(
    () => {
        fetch('https://fakestoreapi.com/products')//here
                    .then(res=>res.json())
                    .then(json=>{
                    arr.current = json
                    })
}, []
)
const initialState = {
    data: arr.current? arr.current : [],
    expandedItem: {}
}

console.log('slice data')
export const dataSlice = createSlice({
    name: 'data', 
    initialState,
    reducers : {
        setItems: (state, action) => {
            state.expandedItem = action.payload;
        }
    }
})

export const { setItems } = dataSlice.actions
export default dataSlice.reducer;