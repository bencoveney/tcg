import { ActionTypes } from "./constants";
import { Card, Player } from "./state";

type Action<Type extends ActionTypes> = {
  type: Type;
};

export interface AddPlayerAction extends Action<ActionTypes.AddPlayer> {
  player: Player;
}

export interface IncreasePlayerHealthAction
  extends Action<ActionTypes.IncreasePlayerHealth> {
  player: Player;
  amount: number;
}

export interface DecreasePlayerHealthAction
  extends Action<ActionTypes.DecreasePlayerHealth> {
  player: Player;
  amount: number;
}

export interface IncreaseCardHealthAction
  extends Action<ActionTypes.IncreaseCardHealth> {
  card: Card;
  amount: number;
}

export interface DecreaseCardHealthAction
  extends Action<ActionTypes.DecreaseCardHealth> {
  card: Card;
  amount: number;
}

export interface AttackPlayerAction extends Action<ActionTypes.AttackPlayer> {
  player: Player;
  card: Card;
}

export interface AddCardAction extends Action<ActionTypes.AddCard> {
  player: Player;
  card: Card;
}

export interface DrawCardAction extends Action<ActionTypes.DrawCard> {
  player: Player;
}

export interface PlayCardAction extends Action<ActionTypes.PlayCard> {
  player: Player;
  card: Card;
}

export interface DiscardCardAction extends Action<ActionTypes.DiscardCard> {
  player: Player;
  card: Card;
}

export interface KillCardAction extends Action<ActionTypes.KillCard> {
  player: Player;
  card: Card;
}

export interface ShuffleLibraryAction extends Action<ActionTypes.ShuffleLibrary> {
  player: Player;
}

export interface AdvancePhaseAction extends Action<ActionTypes.AdvancePhase> {}

export type AnyAction =
  | AddPlayerAction
  | IncreasePlayerHealthAction
  | DecreasePlayerHealthAction
  | IncreaseCardHealthAction
  | DecreaseCardHealthAction
  | AttackPlayerAction
  | AddCardAction
  | DrawCardAction
  | PlayCardAction
  | DiscardCardAction
  | KillCardAction
  | ShuffleLibraryAction
  | AdvancePhaseAction;
