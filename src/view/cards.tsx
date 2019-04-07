import React from "react";
import { Card } from "../model/state";

type Props = { cards: Card[] };

const Cards = ({ cards }: Props) => (
  <ul>
    {cards.map(card => (
      <li key={card.id}>{card.title}</li>
    ))}
  </ul>
);

export default Cards;
