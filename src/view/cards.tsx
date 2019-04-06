import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { Card, State } from "../model/state";

type Props = { cards: Card[] }

const mapStateToProps: MapStateToProps<Props, {}, State> = state => state;

const ConnectedList = ({ cards }: Props) => (
  <ul className="list-group list-group-flush">
    {cards.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const Cards = connect(mapStateToProps)(ConnectedList);
export default Cards;