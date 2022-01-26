import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import { persistedStore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />,
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
