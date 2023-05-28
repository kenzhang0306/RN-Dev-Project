import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

const ThemeProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ThemeProvider;
