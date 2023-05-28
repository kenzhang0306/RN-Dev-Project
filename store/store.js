import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice";
import headerTitleReducer from "./slices/HeaderTitleSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    headerTitle: headerTitleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([logger]),
});

export default store;
