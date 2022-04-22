import { createSlice } from "@reduxjs/toolkit";
import { objArr } from "../type";

const initialState: objArr = {
  cartItems: {
    items: [],
    msg: "already in cart",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newItem: (state, action) => {
        if(!state.cartItems.items.includes(action.payload)){
      state.cartItems.items.push({ ...action.payload, count: 1 });

        }
     
    },
    deleteItems: (state, action) => {
      //state.cartItems.push(action.payload)
    },
    clearCart: (state, action) => {
      //state.cartItems.push(action.payload)
    },
  },
});

export const cart = (state: any) => state.cart.cartItems;
export const { newItem, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
