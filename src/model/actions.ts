import { ActionTypes } from "./constants";
import { Card, Player } from "./state";
import { Action } from "redux";

/*
Factory functions for creating actions.
*/

export type AllActions =
  | AddPlayerAction
  | AddCardAction
  | DrawCardAction
  | PlayCardAction
  | DiscardCardAction
  | KillCardAction
  | ShuffleLibaryAction;

interface ActionOfType<ActionType extends ActionTypes>
  extends Action<ActionTypes> {
  type: ActionType;
}

interface AddPlayerAction extends ActionOfType<ActionTypes.AddPlayer> {
  player: Player;
}

export const addPlayer = (player: Player): AddPlayerAction => {
  return {
    type: ActionTypes.AddPlayer, player
  }
};

interface AddCardAction extends ActionOfType<ActionTypes.AddCard> {
  player: Player;
  card: Card;
}


export const addCard = (player: Player, card: Card): AddCardAction => {
  return { type: ActionTypes.AddCard, player, card };
};

interface DrawCardAction extends ActionOfType<ActionTypes.DrawCard> {
  player: Player;
}

export const drawCard = (player: Player): DrawCardAction => {
  return { type: ActionTypes.DrawCard, player };
};

interface PlayCardAction extends ActionOfType<ActionTypes.PlayCard> {
  player: Player;
  card: Card;
}

export const playCard = (player: Player, card: Card): PlayCardAction => {
  return { type: ActionTypes.PlayCard, player, card };
};

interface DiscardCardAction extends ActionOfType<ActionTypes.DiscardCard> {
  player: Player;
  card: Card;
}

export const discardCard = (player: Player, card: Card): DiscardCardAction => {
  return { type: ActionTypes.DiscardCard, player, card };
};

interface KillCardAction extends ActionOfType<ActionTypes.KillCard> {
  player: Player;
  card: Card;
}

export const killCard = (player: Player, card: Card): KillCardAction => {
  return { type: ActionTypes.KillCard, player, card };
};

interface ShuffleLibaryAction extends ActionOfType<ActionTypes.ShuffleLibrary> {
  player: Player;
}

export const shuffleLibrary = (player: Player): ShuffleLibaryAction => {
  return { type: ActionTypes.ShuffleLibrary, player };
};
