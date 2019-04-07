/*
	Structure of the state model.
*/

export type Id = {
  id: string;
};

export type Card = {
  title: string;
} & Id;

export type Player = {
  name: string;
  hand: Card[];
  library: Card[];
  discard: Card[];
  battlefield: Card[];
} & Id;

export type State = {
  players: Player[];
};
