import store from "./model/store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./view/app";
import { init } from "./game/init";

console.log("State: ", store.getState());
store.subscribe((...args) => console.log("Subscription: ", ...args));
init(store);
console.log("State: ", store.getState());

const root = document.createElement("div");
root.classList.add("root");
document.body.append(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
