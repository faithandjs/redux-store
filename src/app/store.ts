import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice'
import dataReducer from '../features/dataSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        data: dataReducer,
        cart: cartReducer
    }
})