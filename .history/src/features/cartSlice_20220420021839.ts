import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        newItem: (state, action) => {
            state.cartItems.push(action.payload)
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