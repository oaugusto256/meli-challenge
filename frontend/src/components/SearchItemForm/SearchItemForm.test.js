import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import SearchItemForm from "../SearchItemForm/SearchItemForm";

describe("SearchItemForm", () => {
  const initialState = {
    items: null,
    item: null,
    loading: true,
    error: false,
    notification: "¡Obtén lo que necesitas ahora!",
  };

  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);

  let component;
  const mockHandler = jest.fn();

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <SearchItemForm
          searchItem={mockHandler}
        />,
      </Provider>
    );
  });

  it("should have logo, form and button", () => {
    expect(component.container.querySelector("#search-form")).not.toBeNull();
    expect(component.container.querySelector("#search-input")).not.toBeNull();
    expect(component.container.querySelector("#search-button")).not.toBeNull();
  });

  it("clicking the search button should call search", () => {
    const button = component.container.querySelector("#search-button");
    fireEvent.click(button);

    expect(mockHandler.mock.calls).toHaveLength(1);
  });

  it("input should change value when type", () => {
    const input = component.container.querySelector("#search-input");

    fireEvent.change(input, {
      target: { value: "iPhone 11" }
    });

    expect(input.value).toBe("iPhone 11");
  });
});
