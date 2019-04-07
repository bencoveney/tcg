import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { State } from "../model/state";
import Cards from "./cards";
import Player from "./player";

const mapStateToProps: MapStateToProps<State, {}, State> = state => state;

const Game_ = ({ players }: State) => (
  <div>
    {players.map(player => (
      <div key={player.id}>
        <h2><Player player={player} /></h2>
        <h3>Battlefield</h3>
        <Cards cards={player.battlefield} />
        <h3>Hand</h3>
        <Cards cards={player.hand} />
        <h3>Discard</h3>
        <Cards cards={player.discard} />
        <h3>Library</h3>
        <Cards cards={player.library} />
      </div>
    ))}
  </div>
);

const Game = connect(mapStateToProps)(Game_);
export default Game;
