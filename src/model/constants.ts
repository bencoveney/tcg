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
  ShuffleLibrary = "SHUFFLE_LIBRARY",
  AdvancePhase = "ADVANCE_PHASE"
}

export const enum Phases {
  Untap = "UNTAP",
  Draw = "DRAW",
  Main1 = "MAIN_1",
  Attackers = "ATTACKERS",
  Blockers = "BLOCKERS",
  Damage = "DAMAGE",
  Main2 = "MAIN_2"
}

export const phaseOrder = [
  Phases.Untap,
  Phases.Draw,
  Phases.Main1,
  Phases.Attackers,
  Phases.Blockers,
  Phases.Damage,
  Phases.Main2
]
