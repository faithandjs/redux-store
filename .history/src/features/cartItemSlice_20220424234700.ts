import { createSlice } from "@reduxjs/toolkit";
import { cartItemProps, textProp } from "../type";

const initialState:cartItemProps = {
 cartItem:  { styles: '',
    content: ''}
}

export const CartItemSlice = createSlice({
    name: 'Item', 
    initialState,
    reducers : {
        setState: (state , action)=> {
            state.cartItem.styles = action.payload.s 
            state.cartItem.styles = action.payload.c 
        },
    }
})
export const cartItemTextState = (state: textProp) => state
export const { setState } = CartItemSlice.actions
export default CartItemSlice.reducer;