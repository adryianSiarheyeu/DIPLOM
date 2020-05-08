import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { Routes } from "./routes/Routes";
import MainLayout from "./components/MainLayout/MainLayout";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
