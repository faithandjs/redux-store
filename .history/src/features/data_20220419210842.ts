import { createSlice,  createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useRef } from "react";
const api = 'https://fakestoreapi.com/products'
const initialState = {
    data: [],
    expandedItem: {}
}

export const storeItems = createAsyncThunk('data/storeItems', async () => {
    const response = await axios.get(api)
    return response.data
})

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