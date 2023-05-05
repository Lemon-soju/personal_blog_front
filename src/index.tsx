import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-utilities.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import JwtExpiration from "./components/JwtExpiration";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <JwtExpiration />
    </BrowserRouter>
  </Provider>
);
