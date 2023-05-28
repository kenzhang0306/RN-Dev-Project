import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state, action) => {
      console.log(action.payload);
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const getMode = (state) => state.theme.mode;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
