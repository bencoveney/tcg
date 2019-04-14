# TCG

Aim of this project is to try and make a system that can handle the rulesets of different card games. It should be possible to simulate a game of Magic or Hearthstone by giving the system a different initial configuration for:
- Attributes of the cards (e.g. mana cost, HP)
- Attributes of the player (e.g. cards in deck, life points)
- Actions that can take place during different turns (e.g. play a card, attack)
- Conditions that need to be met for an action to be triggered (e.g. requires 10 mana, can only target players).
- User input required (e.g. to trigger optional actions, select targets)

I am using React and Redux to learn about the libraries and how they interact. Also card games are effectively large state machines which should map well to Redux.