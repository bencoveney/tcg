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
  drawCard,
  playCard,
  discardCard,
  killCard,
  DrawCardAction,
  PlayCardAction,
  DiscardCardAction,
  KillCardAction,
  advancePhase,
  AdvancePhaseAction
} from "../model/actions";
import ActionButton from "./actionButton";

type OwnProps = {};
type StateProps = State;
type DispatchProps = {
  drawCard: (player: PlayerModel) => DrawCardAction;
  playCard: (player: PlayerModel, card: CardModel) => PlayCardAction;
  discardCard: (player: PlayerModel, card: CardModel) => DiscardCardAction;
  killCard: (player: PlayerModel, card: CardModel) => KillCardAction;
  advancePhase: () => AdvancePhaseAction;
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = state =>
  state;
const mapDispatchToProps: MapDispatchToProps<
  DispatchProps,
  OwnProps
> = dispatch => {
  return {
    drawCard: (player: PlayerModel) => dispatch(drawCard(player)),
    playCard: (player: PlayerModel, card: CardModel) =>
      dispatch(playCard(player, card)),
    discardCard: (player: PlayerModel, card: CardModel) =>
      dispatch(discardCard(player, card)),
    killCard: (player: PlayerModel, card: CardModel) =>
      dispatch(killCard(player, card)),
    advancePhase: () => dispatch(advancePhase())
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
