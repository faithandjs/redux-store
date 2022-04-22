import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    expandedItem: {}
}

console.log('slice data')
export const dataSlice = createSlice({
    name: 'data', 
    initialState,
    reducers : {
        setData: state => {
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    state.data = json
                })
        },
        setItems: (state, action) => {
            state.expandedItem = action.payload;
        }
    }
})

export const { setData, setItems } = dataSlice.actions
export default dataSlice.reducer;