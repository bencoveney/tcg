import React, { Dispatch } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import {
  State,
  Player as PlayerModel,
  Card as CardModel
} from "../model/state";
import Cards from "./cards";
import Player from "./player";
import {
  DrawCardAction,
  PlayCardAction,
  DiscardCardAction,
  KillCardAction,
  AdvancePhaseAction,
  AnyAction
} from "../model/actions";
import ActionButton from "./actionButton";
import { ActionTypes } from "../model/constants";

type OwnProps = {};
type StateProps = State;
type DispatchProps = {
  drawCard: (player: PlayerModel) => void;
  playCard: (player: PlayerModel, card: CardModel) => void;
  discardCard: (player: PlayerModel, card: CardModel) => void;
  killCard: (player: PlayerModel, card: CardModel) => void;
  advancePhase: () => void;
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = state =>
  state;

const mapDispatchToProps: MapDispatchToProps<
  DispatchProps,
  OwnProps
> = (dispatch: Dispatch<AnyAction>) => {
  return {
    drawCard: (player: PlayerModel) => dispatch({ type: ActionTypes.DrawCard, player }),
    playCard: (player: PlayerModel, card: CardModel) =>
      dispatch({ type: ActionTypes.PlayCard, player, card }),
    discardCard: (player: PlayerModel, card: CardModel) =>
      dispatch({ type: ActionTypes.DiscardCard, player, card}),
    killCard: (player: PlayerModel, card: CardModel) =>
      dispatch({ type: ActionTypes.KillCard, player, card }),
    advancePhase: () => dispatch({ type: ActionTypes.AdvancePhase })
  };
};

type AllProps = OwnProps & StateProps & DispatchProps;

const Game_ = ({
  players,
  currentPhase,
  drawCard,
  playCard,
  discardCard,
  killCard,
  advancePhase
}: AllProps) => (
  <div>
    <span>Current Phase: {currentPhase && currentPhase.phase || "None"}</span>
    <ActionButton text={"Advance Phase"} action={() => advancePhase()} />
    {players.map(player => {
      const playerPlayCard = (card: CardModel) => playCard(player, card);
      const playerDiscardCard = (card: CardModel) => discardCard(player, card);
      const playerKillCard = (card: CardModel) => killCard(player, card);
      return (
        <div key={player.id}>
          <h2>
            <Player player={player} />
          </h2>
          <ActionButton text={"Draw"} action={() => drawCard(player)} />
          <h3>Battlefield</h3>
          <Cards
            cards={player.battlefield}
            actions={[
              (card: CardModel) => ({
                text: "Kill",
                action: () => playerKillCard(card)
              })
            ]}
          />
          <h3>Hand</h3>
          <Cards
            cards={player.hand}
            actions={[
              (card: CardModel) => ({
                text: "Play",
                action: () => playerPlayCard(card)
              }),
              (card: CardModel) => ({
                text: "Discard",
                action: () => playerDiscardCard(card)
              })
            ]}
          />
          <h3>Discard</h3>
          <Cards cards={player.discard} actions={[]} />
          <h3>Library</h3>
          <Cards cards={player.library} actions={[]} />
        </div>
      );
    })}
  </div>
);

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game_);
export default Game;
