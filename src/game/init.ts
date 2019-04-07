import { Store } from "redux";
import { State } from "../model/state";
import { AllActions, addPlayer, addCard, shuffleLibrary, drawCard } from "../model/actions";
import { playerFactory, cardFactory } from "../model/factories";

export function init(store: Store<State, AllActions>) {
	["Player 1", "Player 2"].forEach(playerName => {
		// Create player.
		const player = playerFactory(playerName);
		store.dispatch(addPlayer(player));

		// Add library.
		for( let i = 0; i < 60; i++) {
			const card = cardFactory(`Card #${i}`);
			store.dispatch(addCard(player, card));
		}

		// Shuffle.
		store.dispatch(shuffleLibrary(player));

		// Draw.
		for( let i = 0; i < 7; i++) {
			store.dispatch(drawCard(player));
		}
	});
}