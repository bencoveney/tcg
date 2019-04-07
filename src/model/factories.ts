import { Player, Card } from "./state";

const ids: { [name: string]: number } = {};
function getId(name: string) {
  const currentId = ids[name] || 0;
  ids[name] = currentId + 1;
  return `${name}-${currentId}`;
}

export function playerFactory(name: string): Player {
  return {
    id: getId("player"),
    name,
    battlefield: [],
    discard: [],
    hand: [],
    library: []
  };
}

export function cardFactory(title: string): Card {
  return {
    id: getId("card"),
    title
  };
}
