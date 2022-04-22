import { createSlice } from "@reduxjs/toolkit";
import { msg, objArr, objectType } from "../type";

const initialState: objArr = {
  cartItems: {
    items: [],
    message: 0,
    grandTotal: 0,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newItem: (state, action) => {
      if (state.cartItems.items.some((item) => item.id === action.payload.id)) {
        state.cartItems.message = msg.in;
        state.cartItems.items.push({
          ...action.payload,
          count: action.payload.count,
          total: action.payload.price * action.payload.count,
        });
      } else {
        state.cartItems.items.push({
          ...action.payload,
          total: action.payload.price * action.payload.count,
        });
        state.cartItems.message = msg.added;
      }
    },
    deleteItems: (state, action) => {
      console.log(state.cartItems, action.payload);
      console.log(state.cartItems.items.indexOf(action.payload[0]))

      let i = 0; /*
      action.payload.map((item:objectType) => {
        const index = state.cartItems.items.indexOf(item)
        state.cart.items.splice(index, 1) 
      })  */
    },
    clearCart: (state, action) => {
      //state.cartItems.push(action.payload)
    },
  },
});

export const cart = (state: any) => state.cart.cartItems;
export const { newItem, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
