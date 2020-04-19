import React from "react";

export default function TaskCounter(props) {
	return (
		<div className="counter">
			<h3>Total Tasks: {props.count} </h3>
		</div>
	);
}
