import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import ListItems from "../ListItems/ListItems";

describe("ListItems", () => {
  let items = [{ "id": "MLA841208815", "title": " Google Chromecast 3rd Generation Full Hd Carbón Con Memoria Ram De 512mb", "price": { "currency": "ARS", "amount": 746.38, "decimals": 63.77 }, "address": { "stateName": "Capital Federal" }, "picture": "http://mla-s2-p.mlstatic.com/620605-MLA32691559317_102019-I.jpg", "condition": "new", "freeShipping": true }, { "id": "MLA832082627", "title": " Google Chromecast 2nd Generation Full Hd 256mb Negro Con Memoria Ram De 512mb", "price": { "currency": "ARS", "amount": 1023.43, "decimals": 63.77 }, "address": { "stateName": "Capital Federal" }, "picture": "http://mla-s2-p.mlstatic.com/673013-MLA32691559312_102019-I.jpg", "condition": "new", "freeShipping": true }, { "id": "MLA834785291", "title": " Xiaomi Mi Box S De Voz 4k 8gb Negro Con Memoria Ram De 2gb", "price": { "currency": "ARS", "amount": 1310.02, "decimals": 63.77 }, "address": { "stateName": "Capital Federal" }, "picture": "http://mla-s2-p.mlstatic.com/850458-MLA32691548486_102019-I.jpg", "condition": "new", "freeShipping": true }, { "id": "MLA859866067", "title": " Google Chromecast Ultra 4k Negro Con Memoria Ram De 1gb", "price": { "currency": "ARS", "amount": 4400, "decimals": 0 }, "address": { "stateName": "Buenos Aires" }, "picture": "http://mla-s2-p.mlstatic.com/758955-MLA32691404974_102019-I.jpg", "condition": "new", "freeShipping": true }];

  const initialState = {
    items: null,
    item: null,
    loading: true,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ListItems
          items={items}
        />,
      </Provider>
    );
  });

  it("should render 4 items", () => {
    const { getAllByTestId } = component;

    expect(getAllByTestId("item")).toHaveLength(4);
  });

  it("should render 4 items images", () => {
    const { getAllByAltText } = component;

    expect(getAllByAltText("Product item image")).toHaveLength(4);
  });
});

describe("ListItems no items", () => {
  const initialState = {
    items: null,
    item: null,
    loading: true,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("should not render any item if items is null", () => {
    const componentWithNoItems = render(
      <Provider store={store}>
        <ListItems
          items={null}
        />,
      </Provider>
    );

    const { queryByTestId } = componentWithNoItems;
    const item = queryByTestId("item");

    expect(item).toBeNull();
  });
});