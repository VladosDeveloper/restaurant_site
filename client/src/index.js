import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BasketProvider } from "./useStateValue";
import reducer, { initialState } from "./Reducer";

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider reducer={reducer} initialState={initialState}>
      <App />
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
