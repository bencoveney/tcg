/*
	Structure of the state model.
*/

export type Card = {
	title: string;
	id: string;
}

export type State = {
	cards: Card[]
}