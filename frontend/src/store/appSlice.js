/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/item";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    loadingItems: (state) => {
      state.loading = true;
    },
    successFetchItems: (state, action) => {
      state.loading = false;
      state.error = false;
      state.items = action.payload;
    },
    errorFetchItems: (state) => {
      state.items = [];
      state.loading = false;
      state.error = true;
    },
  },
});

const { successFetchItems } = appSlice.actions;

export const searchItems = (query) => async (dispatch) => {
  const result = await itemsService.searchItems(query);

  dispatch(successFetchItems(result.items));
};

export default appSlice.reducer;
