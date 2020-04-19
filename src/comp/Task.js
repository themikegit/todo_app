import React from "react";
import check from "./assets/check.svg";
import close from "./assets/close.svg";
import restore from "./assets/restore.svg";

export default function Task(props) {
	return (
		<div className="task">
			<div onClick={() => props.delete(props.date)} className="close">
				<img src={close} alt="" />
			</div>
			<div
				style={props.isComplete ? { opacity: "0.2" } : { opacity: "2" }}
				className="task-content"
			>
				<div className="task-text">
					<h4> {props.task} </h4>
				</div>
				<hr className="divider" />
				<div className="task-info">
					<span> imp: {props.importance} </span> <span>by: {props.by} </span>
					<span> added: {props.date} </span>
				</div>
			</div>
			<div onClick={() => props.complete(props.index)} className="task-button">
				<img src={props.isComplete ? restore : check} alt="" />
			</div>
		</div>
	);
}
