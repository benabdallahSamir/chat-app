"use client";
import { Provider } from "react-redux";
import store from "./store";
import InitData from "./InitData";

const ReduxContainer = ({ children }) => {
  return (
    <Provider store={store}>
      <InitData />
      {children}
    </Provider>
  );
};

export default ReduxContainer;
