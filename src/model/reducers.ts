import { ActionTypes } from "./constants";
import { Reducer, Action } from "redux";
import { State } from "./state";
import { AllActions } from "./actions";

const initialState: State = { cards: [] };

/*
	Takes a state + action, and creates a new state.
*/

const rootReducer: Reducer<State, AllActions> = (state = initialState, action) => {
	if (action.type === ActionTypes.AddCard) {
		return {
			...state,
			cards: state.cards.concat(action.card)
		}
	}
  return state;
};

export default rootReducer;