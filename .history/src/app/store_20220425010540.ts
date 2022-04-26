import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from '../features/cartItemSlice'
import dataReducer from '../features/dataSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer: {
        cartItem: cartItemReducer,
        data: dataReducer,
        cart: cartReducer
    }
})