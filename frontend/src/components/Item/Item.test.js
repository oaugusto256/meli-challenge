import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

import Item from "../Item/Item";

describe("Item", () => {
  let item = { "id": "MLA841208815", "title": " Google Chromecast 3rd Generation Full Hd Carbón Con Memoria Ram De 512mb", "price": { "currency": "ARS", "amount": 746.38, "decimals": 63.77 }, "address": { "stateName": "Capital Federal" }, "picture": "http://mla-s2-p.mlstatic.com/620605-MLA32691559317_102019-I.jpg", "condition": "new", "freeShipping": true };

  const initialState = {
    items: null,
    item: null,
    loading: true,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);
  const mockHandler = jest.fn();

  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Item
          item={item}
          onClickItem={mockHandler}
        />,
      </Provider>
    );
  });

  it("should render item", () => {
    const { getAllByTestId } = component;

    expect(getAllByTestId("item")).toHaveLength(1);
  });

  it("should call onClick when item is clicked", () => {
    const { getByTestId } = component;
    const item = getByTestId("item");

    fireEvent.click(item);

    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});