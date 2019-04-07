import React from "react";
import { Card as CardModel } from "../model/state";

type Props = { card: CardModel };

const Card = ({ card }: Props) => (
  <span>{card.title} - {card.health} health, {card.attack} attack</span>
);

export default Card;
