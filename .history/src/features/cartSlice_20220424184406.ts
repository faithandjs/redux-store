import { createSlice } from "@reduxjs/toolkit";
import { msg, objArr, objectType } from "../type";

const initialState: objArr = {
  cartItems: {
    items: [],
    grandTotal: 0,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newItem: (state, action) => {
      if (state.cartItems.items.some((item) => item.id === action.payload.id)) {
        action.payload = { ...action.payload, message: msg.in };
        console.log(action.payload);
      } else {
        const newCart = {
          ...action.payload,
          message: msg.added,
        };
        state.cartItems.items.push(newCart);
        console.log( state.cartItems.items, newCart);
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

    add: (state, action) => {
      if (state.cartItems.items[action.payload.n].count) {
        state.cartItems.items[action.payload.n].count++;
        state.cartItems.items[action.payload.n].total =
          state.cartItems.items[action.payload.n].count *
          state.cartItems.items[action.payload.n].price;
      }
    },
    subtract: (state, action) => {
      if (state.cartItems.items[action.payload.n].count !== 1) {
        state.cartItems.items[action.payload.n].count--;
        state.cartItems.items[action.payload.n].total =
          state.cartItems.items[action.payload.n].count *
          state.cartItems.items[action.payload.n].price;
      }
    },

    calculateTotal: (state) => {
      if (state.cartItems.items.length > 0) {
        let n = 0;
        state.cartItems.items.map((item) => {
          n += item.total;
        });
        state.cartItems.grandTotal = n;
      } else {
        state.cartItems.grandTotal = 0;
      }
    },
  },
});

export const cart = (state: any) => state.cart;
export const {
  newItem,
  deleteItems,
  clearCart,
  add,
  subtract,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
