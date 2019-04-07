import { createStore, Store, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { AllActions } from "./actions";
import { State } from "./state";import { createLogger } from "redux-logger";

let store: Store<State, AllActions>;

if (process && process.env && process.env.NODE_ENV === "development") {
	const logger = createLogger({});
	store = createStore(rootReducer, applyMiddleware(logger));
} else {
	store = createStore(rootReducer);
}

export default store;