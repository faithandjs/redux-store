import { createSlice } from "@reduxjs/toolkit";
import { cartItemProps, msg, textProp } from "../type";

const initialState: cartItemProps = {
  cartItem: { styles: "", content: "" },
};

export const CartItemSlice = createSlice({
  name: "Item",
  initialState,
  reducers: {
    setState: (state, action) => {
      if (action.payload === msg.ADDED) {
        state.cartItem.styles = "green";
        state.cartItem.styles = msg.ADDED;
      }
      if (action.payload === msg.ALREADYIN) {
        state.cartItem.styles = "grey";
        state.cartItem.styles = msg.ALREADYIN;
      }
      console.log('content: ', state.cartItem.content, "styles: ", state.cartItem.styles)
    },
  },
});
export const cartItemTextState = (state: textProp) => state;
export const { setState } = CartItemSlice.actions;
export default CartItemSlice.reducer;
