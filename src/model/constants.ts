/*
	Constants for switching between actions.
*/

export const enum ActionTypes {
  AddPlayer = "ADD_PLAYER",
  IncreasePlayerHealth = "INCREASE_PLAYER_HEALTH",
  DecreasePlayerHealth = "DECREASE_PLAYER_HEALTH",
  IncreaseCardHealth = "INCREASE_CARD_HEALTH",
  DecreaseCardHealth = "DECREASE_CARD_HEALTH",
  AttackPlayer = "ATTACK_PLAYER",
  AddCard = "ADD_CARD",
  DrawCard = "DRAW_CARD",
  PlayCard = "PLAY_CARD",
  DiscardCard = "DISCARD_CARD",
  KillCard = "KILL_CARD",
  ShuffleLibrary = "SHUFFLE_LIBRARY"
}
