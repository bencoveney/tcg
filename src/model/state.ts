/*
	Structure of the state model.
*/

export type Id = {
  id: string;
};

export type Card = {
  title: string;
  health: number;
  attack: number;
} & Id;

export type Player = {
  name: string;
  hand: Card[];
  library: Card[];
  discard: Card[];
  battlefield: Card[];
  health: number;
} & Id;

export type State = {
  players: Player[];
};
