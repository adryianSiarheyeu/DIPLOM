import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./styles/index.scss";
import { Routes } from "./routes/Routes";
import MainLayout from "./components/MainLayout/MainLayout";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
