import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

console.log('slice')
export const counterSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers : {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count = state.count === 1? state.count : state.count - 1;
        }
    }
})
export const countState = (state:any) => state.counter.count
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer;