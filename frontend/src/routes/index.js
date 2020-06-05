import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SearchProduct from "../screens/SearchProduct";
import ResultSearch from "../screens/ResultSearch";
import ProductDetails from "../screens/ProductDetails";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/items/:id">
        <ProductDetails />
      </Route>
      <Route path="/items">
        <ResultSearch />
      </Route>
      <Route exact path="/">
        <SearchProduct />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
