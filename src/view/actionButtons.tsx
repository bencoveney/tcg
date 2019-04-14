import React from "react";
import ActionButton, { Action } from "./actionButton";

type Props = { actions: Action[] };

const ActionButtons = ({ actions }: Props) => (
	<div>
		{actions.map(action => <ActionButton {...action}/>)}
	</div>
);

export default ActionButtons;
