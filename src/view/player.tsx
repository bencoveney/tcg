import React from "react";
import { Player as PlayerModel } from "../model/state";

type Props = { player: PlayerModel };

const Player = ({ player }: Props) => (
  <span>{player.name} - {player.health} health</span>
);

export default Player;
