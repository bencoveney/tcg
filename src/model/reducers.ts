import { ActionTypes, phaseOrder, Phases } from "./constants";
import { Reducer, Action } from "redux";
import { State, Card, Player } from "./state";
import { AllActions } from "./actions";

const initialState: State = { players: [] };

/*
	Takes a state + action, and creates a new state.
*/

const rootReducer: Reducer<State, AllActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.AddPlayer:
      return {
        players: state.players.concat(action.player)
      };

    case ActionTypes.AddCard:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          return {
            ...action.player,
            library: player.library.concat(action.card)
          };
        })
      };

    case ActionTypes.DrawCard:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          const newLibrary = [...player.library];
          const drawn = newLibrary.pop();
          const newHand = drawn ? player.hand.concat(drawn) : player.hand;

          return {
            ...player,
            library: newLibrary,
            hand: newHand
          };
        })
      };

    case ActionTypes.PlayCard:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          const newHand = player.hand.filter(
            card => card.id !== action.card.id
          );
          const newBattlefield = player.battlefield.concat(action.card);

          return {
            ...player,
            battlefield: newBattlefield,
            hand: newHand
          };
        })
      };

    case ActionTypes.DiscardCard:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          const newHand = player.hand.filter(
            card => card.id !== action.card.id
          );
          const newDiscard = player.discard.concat(action.card);

          return {
            ...player,
            hand: newHand,
            discard: newDiscard
          };
        })
      };

    case ActionTypes.KillCard:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          const newBattlefield = player.battlefield.filter(
            card => card.id !== action.card.id
          );
          const newDiscard = player.discard.concat(action.card);

          return {
            ...player,
            battlefield: newBattlefield,
            discard: newDiscard
          };
        })
      };

    case ActionTypes.ShuffleLibrary:
      return {
        players: state.players.map(player => {
          if (player.id !== action.player.id) {
            return player;
          }

          const newLibrary = [...player.library];

          for (let i = newLibrary.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newLibrary[i], newLibrary[j]] = [newLibrary[j], newLibrary[i]];
          }

          return {
            ...player,
            library: newLibrary
          };
        })
      };

    case ActionTypes.AdvancePhase:
      if (state.players.length == 0) {
        console.warn("Tried to advance phase with no players");
        return state;
      }

      if (!state.currentPhase) {
        return {
          ...state,
          currentPhase: {
            phase: phaseOrder[0],
            playerId: state.players[0].id
          }
        };
      } else {
        return {
          ...state,
          currentPhase: {
            phase: getNextPhase(state.currentPhase.phase),
            playerId: getNextPlayer(state.currentPhase.playerId, state.players)
          }
        };
      }

    default:
      return state;
  }
};

function getNextPhase(phase: Phases): Phases {
  const currentIndex = phaseOrder.indexOf(phase);
  const nextIndex = (currentIndex + 1) % phaseOrder.length;
  return phaseOrder[nextIndex];
}

function getNextPlayer(playerId: string, players: Player[]): string {
  const currentIndex = players.findIndex(player => player.id === playerId);
  const nextIndex = (currentIndex + 1) % players.length;
  return players[nextIndex].id;
}

export default rootReducer;
