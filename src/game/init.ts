import { Store } from "redux";
import { State } from "../model/state";
import { AnyAction } from "../model/actions";
import { playerFactory, cardFactory } from "../model/factories";
import { ActionTypes } from "../model/constants";

const cardsPerDeck = 60;
const initialHandSize = 7;
const initialPlayerHealth = 20;
const cardMinimumHealth = 1;
const cardMaximumHealth = 8;
const cardMinimumAttack = 0;
const cardMaximumAttack = 8;

export function init(store: Store<State, AnyAction>) {
  ["Player 1", "Player 2"].forEach(playerName => {
    // Create player.
    const player = playerFactory(playerName, initialPlayerHealth);
    store.dispatch({ type: ActionTypes.AddPlayer, player });

    // Add library.
    for (let i = 0; i < cardsPerDeck; i++) {
      const card = cardFactory(
        `Card #${i}`,
        getRandom(cardMinimumHealth, cardMaximumHealth),
        getRandom(cardMinimumAttack, cardMaximumAttack)
      );
      store.dispatch({ type: ActionTypes.AddCard, player, card });
    }

    // Shuffle.
    store.dispatch({ type: ActionTypes.ShuffleLibrary, player });

    // Draw.
    for (let i = 0; i < initialHandSize; i++) {
      store.dispatch({ type: ActionTypes.DrawCard, player });
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
