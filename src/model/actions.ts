import { ActionTypes } from "./constants";
import { Card } from "./state";
import { Action } from "redux";

/*
Factory functions for creating actions.
*/

type ActionPlus<Extra = {}> = Action<ActionTypes> & Extra;

type AddCardAction = ActionPlus<{ card: Card }>
export const addCard = (card: Card): AddCardAction => {
	return { type: ActionTypes.AddCard, card };
};

export type AllActions = AddCardAction
