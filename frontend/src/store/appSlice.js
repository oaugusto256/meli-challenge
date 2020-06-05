/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/item";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
    loading: false,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  },
  reducers: {
    loadingItems: (state) => {
      state.loading = true;
      state.notification = "Buscando productos...";
    },
    successFetchItems: (state, action) => {
      state.loading = false;
      state.error = false;
      state.items = action.payload;
      state.notification = null;
    },
    errorFetchItems: (state) => {
      state.items = [];
      state.loading = false;
      state.error = true;
      state.notification = "Ocurrió un error!";
    },
    hasNotFoundItems: (state) => {
      state.loading = false;
      state.error = false;
      state.items = [];
      state.notification = "No se encontró nada.";
    },
  },
});

const {
  loadingItems, successFetchItems, errorFetchItems, hasNotFoundItems,
} = appSlice.actions;

export const searchItems = (query) => async (dispatch) => {
  dispatch(loadingItems());

  const result = await itemsService.searchItems(query);

  if (result.items.length === 0) {
    return dispatch(hasNotFoundItems());
  }

  if (result.items) {
    return dispatch(successFetchItems(result.items));
  }

  dispatch(errorFetchItems());
};

export default appSlice.reducer;
