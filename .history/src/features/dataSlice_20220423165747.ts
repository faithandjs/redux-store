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
      count: 0,
      total: 0,
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
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.expandedItem.status = status.succeeded;
      state.expandedItem.item = action.payload;
    },
    restExpandedStatus: (state) => {
      state.expandedItem.status = status.postSuccess;
    },/*
    add: (state, action) => {
      if (state.data.items[action.payload.n].count) {
        state.data.items[action.payload.n].count++;
        state.data.items[action.payload.n].total =
          state.data.items[action.payload.n].count *
          state.data.items[action.payload.n].price;
      }
      console.log(
        "count",
        state.data.items[action.payload.n].count,
        "total",
        state.data.items[action.payload.n].total
      );
    },
    subtract: (state, action) => {
      if (state.data.items[action.payload.n].count !== 1) {
        state.data.items[action.payload.n].count--;
        state.data.items[action.payload.n].total =
          state.data.items[action.payload.n].count *
          state.data.items[action.payload.n].price;
      }
      console.log(
        "count",
        state.data.items[action.payload.n].count,
        "total",
        state.data.items[action.payload.n].total
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(storeItems.pending, (state) => {
        state.data.status = status.loading;
      })
      .addCase(storeItems.fulfilled, (state, action) => {
        state.data.status = status.succeeded;
        const loaded = action.payload.map((item: objectType) => {
          item.count = 1;
          item.total = item.price
          return item;
        });
        state.data.items = state.data.items.concat(loaded);
      })
      .addCase(storeItems.rejected, (state) => {
        state.data.status = status.failed;
      });
  },
});
export const storeData = (state: any) => state.data;
export const { setItems, restExpandedStatus, add, subtract } =
  dataSlice.actions;
export default dataSlice.reducer;
