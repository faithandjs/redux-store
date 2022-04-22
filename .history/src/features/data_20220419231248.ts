import { createSlice,  createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { dataState, status } from "../type";

const api = 'https://fakestoreapi.com/products'
const initialState:dataState = {
    data: {
        items: [],
        status: status.idle
    },
    expandedItem: {}
}

export const storeItems:any = createAsyncThunk('data/storeItems', async () => {
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
    },
    extraReducers(builder){
        builder
        .addCase(storeItems.fulfilled, (state, action) => {
            state.data.status = status.succeeded
            state.data.items = action.payload
        })
    }
})

export const storeData = (state:dataState) => state.data
export const { setItems } = dataSlice.actions
export default dataSlice.reducer;