import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/Store";
import "default-passive-events";
import ThemeSelector from "./app/ThemeSelector";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSelector />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
