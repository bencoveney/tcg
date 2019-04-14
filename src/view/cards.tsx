import React from "react";
import { Card as CardModel } from "../model/state";
import Card from "./card";
import { Action } from "./actionButton";

export type CardAction = (card: CardModel) => Action;

type Props = { cards: CardModel[]; actions: CardAction[] };

const Cards = ({ cards, actions }: Props) => (
  <ul>
    {cards.map(card => (
      <li key={card.id}>
        <Card card={card} actions={actions.map(action => action(card))} />
      </li>
    ))}
  </ul>
);

export default Cards;
