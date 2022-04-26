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
      } else {
        state.cartItems.items.push({
          ...action.payload,
        });
        state.cartItems.message = msg.added;
      }
    },
    deleteItems: (state, action) => {
      action.payload.map((item: objectType) => {
        let item1 = item.id;
        state.cartItems.items.map((item: objectType, index) => {
          if (item1 === item.id) {
            state.cartItems.items.splice(index, 1);
          }
        });
      });
    },
    clearCart: (state) => {
      state.cartItems.items = [];
    },
    calculateTotal: (state, action) => {
      console.log(state.cartItems.items.length);
      if (state.cartItems.items.length > 0) {
        let n = 0;
        state.cartItems.items.map((item) => {
          n += item.total;
          /*if (action.payload === "+") {
            state.cartItems.grandTotal += item.total;
          }
          if(action.payload === '-') {state.cartItems.grandTotal -= item.total;}*/
          console.log(item.total, state.cartItems.grandTotal);
        });
        state.cartItems.grandTotal = n
      } else {
        state.cartItems.grandTotal = 0;
        console.log("0", state.cartItems.grandTotal);
      }
    },
  },
});

export const cart = (state: any) => state.cart.cartItems;
export const { newItem, deleteItems, clearCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
