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
        //console.log(state.cartItems.items, )
        if(state.cartItems.items.some((item) => item.id === action.payload.id)){
            alert("Object found inside the array.");
        } else{
            alert("Object not found.");
        }
        state.cartItems.items.push({ ...action.payload, count: 1 });
      /*if (!state.cartItems.items.includes({ ...action.payload, count: 1 })) {
        console.log('here')
      }*/
      console.log(action.payload, state.cartItems.items.includes(action.payload))
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
