import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/add/counterSlice'
export const store = configureStore({
    reducer: {
        couner: counterReducer,
    }
})
console.log('store')