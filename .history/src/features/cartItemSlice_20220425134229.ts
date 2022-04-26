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
        state.cartItem.content = msg.ADDED;
      }
      if (action.payload === msg.ALREADYIN) {
        state.cartItem.styles = "grey";
        state.cartItem.content = msg.ALREADYIN;
      }
      console.log('content: ', state.cartItem.content, "styles: ", state.cartItem.styles)
    },
  },
});
export const cartItemTextState = (state: any) => state.cartItemText;
export const { setState } = CartItemSlice.actions;
export default CartItemSlice.reducer;
