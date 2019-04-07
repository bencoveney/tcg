import { Store } from "redux";
import { State } from "../model/state";
import {
  AllActions,
  addPlayer,
  addCard,
  shuffleLibrary,
  drawCard
} from "../model/actions";
import { playerFactory, cardFactory } from "../model/factories";

const cardsPerDeck = 60;
const initialHandSize = 7;
const initialPlayerHealth = 20;
const cardMinimumHealth = 1;
const cardMaximumHealth = 8;
const cardMinimumAttack = 0;
const cardMaximumAttack = 8;

export function init(store: Store<State, AllActions>) {
  ["Player 1", "Player 2"].forEach(playerName => {
    // Create player.
    const player = playerFactory(playerName, initialPlayerHealth);
    store.dispatch(addPlayer(player));

    // Add library.
    for (let i = 0; i < 60; i++) {
      const card = cardFactory(`Card #${i}`, getRandom(cardMinimumHealth, cardMaximumHealth), getRandom(cardMinimumAttack, cardMaximumAttack));
      store.dispatch(addCard(player, card));
    }

    // Shuffle.
    store.dispatch(shuffleLibrary(player));

    // Draw.
    for (let i = 0; i < 7; i++) {
      store.dispatch(drawCard(player));
    }
  });
}

function getRandom(minimumInclusive: number, maximumInclusive: number): number {
  minimumInclusive = Math.ceil(minimumInclusive);
  maximumInclusive = Math.floor(maximumInclusive);
  return (
    Math.floor(Math.random() * (maximumInclusive - minimumInclusive + 1)) +
    minimumInclusive
  );
}
