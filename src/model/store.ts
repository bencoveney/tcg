import { createStore, Store, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { AnyAction } from "./actions";
import { State } from "./state";
import { createLogger } from "redux-logger";

let store: Store<State, AnyAction>;

if (process && process.env && process.env.NODE_ENV === "development") {
  const logger = createLogger({});
  store = createStore(rootReducer, applyMiddleware(logger));
} else {
  store = createStore(rootReducer);
}

export default store;
