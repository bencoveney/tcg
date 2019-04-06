import store from "./model/store";
import {addCard} from "./model/actions";

console.log(store.getState());
store.subscribe((...args) => console.log("store sub", ...args));
store.dispatch(addCard({ title: "buh", id: "1" }));
console.log(store.getState());

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./view/app";

const root = document.createElement("div");
root.classList.add("root");
document.body.append(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
