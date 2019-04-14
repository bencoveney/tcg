import React from "react";

export type Action = { text: string, action: () => void };

const ActionButton = ({ text, action }: Action) => (
  <button onClick={action}>{text}</button>
);

export default ActionButton;
