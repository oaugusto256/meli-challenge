import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
  },
  reducers: {
    searchItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { searchItems } = appSlice.actions;

export const incrementAsync = (amount) => async (dispatch) => {
  dispatch(searchItems(amount));
};

export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;
