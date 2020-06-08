import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./styles/tailwind.scss";

import store from "./store";

import Router from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
