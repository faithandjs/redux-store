import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/add/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})