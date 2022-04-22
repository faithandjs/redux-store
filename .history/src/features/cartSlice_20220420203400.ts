import { createSlice } from "@reduxjs/toolkit";
import {objArr} from '../type'

const initialState:objArr = {
    cartItems: {
        items: [],
        msg: 'already in cart'
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        newItem: (state, action) => {
            state.cartItems.items.push({...action.payload, count: 1})
            console.log(state.cartItems.items)
        },
        deleteItems: (state, action) => {
            //state.cartItems.push(action.payload)
        },
        clearCart: (state, action) => {
            //state.cartItems.push(action.payload)
        }
    }
})

export const cart = (state:any) => state.cart.cartItems
export const { newItem, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;