import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducer from "../store/appSlice";

const INITIAL_STATE = {
  items: null,
  item: null,
  loading: true,
  error: false,
  notification: "¡Obtén lo que necesitas ahora!",
};

export function renderWithRedux(ui, { initialState = INITIAL_STATE } = {}) {
  const actions = [];
  const observerMiddleware = () => next => action => {
    actions.push(action);
    return next(action);
  };
  const store = createStore(reducer, initialState, applyMiddleware(observerMiddleware));
  const utils = {
    dispatch(action) {
      return store.dispatch(action);
    },
    getDispatchedActions() {
      return actions;
    },
    getState() {
      return store.getState();
    },
  };
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    ...utils,
  };
}