import React from "react";
import { Card as CardModel } from "../model/state";
import { Action } from "./actionButton";
import ActionButtons from "./actionButtons";

type Props = { card: CardModel; actions: Action[] };

const Card = ({ card, actions }: Props) => (
  <div>
    <span>{card.title}</span>
    <br />
    <span>{card.health} health</span>
    <br />
    <span>{card.attack} attack</span>
    <br />
    <ActionButtons actions={actions} />
  </div>
);

export default Card;
