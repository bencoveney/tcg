import { Phases } from "./constants";

/*
	Structure of the state model.
*/

export interface Id {
  id: string;
};

export interface Card extends Id {
  title: string;
  health: number;
  attack: number;
};

export interface Player extends Id {
  name: string;
  hand: Card[];
  library: Card[];
  discard: Card[];
  battlefield: Card[];
  health: number;
};

export interface State {
  players: Player[];
  currentPhase?: {
    phase: Phases;
    playerId: string;
  }
};
