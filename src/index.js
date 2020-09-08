import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducer, initialState } from "./reducers/reducer";
import { createStore } from "redux";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(() => initialState);
console.log("index store", store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
