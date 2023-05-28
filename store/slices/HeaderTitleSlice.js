import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Categories",
};

const headerTitleSlice = createSlice({
  name: "headerTitle",
  initialState,
  reducers: {
    setHeaderTitle: (state, action) => {
      state.title = action.payload;
      console.log(state.headerTitle);
    },
  },
});

export const getHeaderTitle = (state) => state.headerTitle.title;
export const { setHeaderTitle } = headerTitleSlice.actions;
export default headerTitleSlice.reducer;
