import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import App from "./App";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/* const store = createStore(mapReducer, composeEnhancers());

export type AppDispatch = typeof store.dispatch; */

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
