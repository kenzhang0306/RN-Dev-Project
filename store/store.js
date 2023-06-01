import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice";
import headerTitleReducer from "./slices/HeaderTitleSlice";
import mealsReducer from "./slices/MealsSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    headerTitle: headerTitleReducer,
    meals: mealsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([logger]),
});

export default store;
