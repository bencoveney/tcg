import React from "react";
import { Card as CardModel } from "../model/state";
import Card from "./card";

type Props = { cards: CardModel[] };

const Cards = ({ cards }: Props) => (
  <ul>
    {cards.map(card => (
      <li key={card.id}><Card card={card} /></li>
    ))}
  </ul>
);

export default Cards;
