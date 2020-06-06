/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/item";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
    item: {},
    loading: false,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.notification = "Buscando productos...";
    },
    successFetchItems: (state, action) => {
      state.loading = false;
      state.error = false;
      state.items = action.payload;
      state.notification = null;
    },
    successFetchItem: (state, action) => {
      state.loading = false;
      state.error = false;
      state.item = action.payload;
      state.notification = null;
    },
    serviceError: (state) => {
      state.items = [];
      state.item = {};
      state.loading = false;
      state.error = true;
      state.notification = "Ocurrió un error!";
    },
    hasNotFound: (state) => {
      state.loading = false;
      state.error = false;
      state.items = [];
      state.item = null;
      state.notification = "No se encontró nada.";
    },
  },
});

const {
  loading, successFetchItems, successFetchItem, serviceError, hasNotFound,
} = appSlice.actions;

export const searchItems = (query) => async (dispatch) => {
  dispatch(loading());

  const result = await itemsService.searchItems(query);

  if (result.items.length === 0) {
    return dispatch(hasNotFound());
  }

  if (result.items) {
    return dispatch(successFetchItems(result.items));
  }

  dispatch(serviceError());
};

export const getItem = (id) => async (dispatch) => {
  dispatch(loading());

  const result = await itemsService.getItem(id);

  if (result) {
    return dispatch(successFetchItem(result.item));
  }

  dispatch(serviceError());
};

export default appSlice.reducer;
