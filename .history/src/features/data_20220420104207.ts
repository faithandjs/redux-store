import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataState, status, objectType } from "../type";

const api = "https://fakestoreapi.com/products";
const initialState: dataState = {
  data: {
    items: [],
    status: status.idle,
  },
  expandedItem: {
    item: {
      category: "",
      description: "",
      id: 0,
      image: "",
      price: 0,
      rating: {
        rate: 0,
        count: 0,
      },
      title: "",
    },
    status: status.idle,
  },
};

export const storeItems: any = createAsyncThunk("data/storeItems", async () => {
  const response = await axios.get(api);
  return response.data;
});
//const newState = { ...initialState.data.items, modalOpen: true }
//console.log(newState)
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.expandedItem.status = status.succeeded;
      state.expandedItem.item = action.payload;
    },
    restExpandedStatus: (state) => {
      state.expandedItem.status = status.idle
    }
  },
  extraReducers(builder) {
    builder.addCase(storeItems.fulfilled, (state, action) => {
      state.data.status = status.succeeded;
      state.data.items = [...action.payload];
      console.log(state.data.items);
    });
  },
});
export const storeData = (state: any) => state.data;
export const { setItems, restExpandedStatus } = dataSlice.actions;
export default dataSlice.reducer;
