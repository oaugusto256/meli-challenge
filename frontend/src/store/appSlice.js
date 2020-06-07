/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import itemsService from "../services/item";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    items: null,
    item: null,
    loading: true,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.items = null;
      state.item = null;
      state.notification = "Buscando...";
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
      state.item = null;
      state.items = null;
      state.loading = false;
      state.error = true;
      state.notification = "Ocurrió un error!";
    },
    hasNotFound: (state) => {
      state.loading = false;
      state.error = false;
      state.items = null;
      state.item = null;
      state.notification = "No se encontró nada.";
    },
    resetItem: (state) => {
      state.item = null;
    },
  },
});

const {
  loading, successFetchItems, successFetchItem, serviceError, hasNotFound, resetItem,
} = appSlice.actions;

export const searchItems = (query) => async (dispatch) => {
  dispatch(loading());

  try {
    const result = await itemsService.searchItems(query);

    if (!result.items) {
      return dispatch(serviceError());
    }

    if (result.items.length === 0) {
      return dispatch(hasNotFound());
    }

    if (result.items) {
      return dispatch(successFetchItems(result.items));
    }
  } catch (error) {
    return dispatch(serviceError());
  }
};

export const getItem = (id) => async (dispatch) => {
  dispatch(loading());

  try {
    const result = await itemsService.getItem(id);

    if (!result.item) {
      return dispatch(hasNotFound());
    }

    if (result) {
      return dispatch(successFetchItem(result.item));
    }
  } catch (error) {
    return dispatch(serviceError());
  }
};

export const cleanItem = () => (dispatch) => {
  dispatch(resetItem());
};

export default appSlice.reducer;
