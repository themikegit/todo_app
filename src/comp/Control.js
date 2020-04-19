import React, { useState } from "react";
import "./Style.css";
import add from "./assets/add.svg";

export default function Control(props) {
	console.log(props.by);

	return (
		<div className="control">
			<div className="control-data">
				<div className="user-info">
					<div className="user-name">
						<input
							name="by"
							value={props.by}
							onChange={props.changer}
							type="text"
							placeholder="Your name..."
						/>
					</div>
					<div className="user-select">
						<select name="importance" onChange={props.changer} id="slc">
							<option value="" disabled selected>
								{" "}
								Select importance{" "}
							</option>
							<option value="high"> high </option>
							<option value="medium"> medium </option>
							<option value="low"> low</option>
						</select>
					</div>
				</div>
				<div className="user-task">
					<textarea
						value={props.task}
						name="task"
						onChange={props.changer}
						type="text-area"
						placeholder="Type your task..."
					/>
				</div>
			</div>
			<div onClick={props.submit} className="control-btn">
				<div>
					<img src={add} alt="" /> ADD{" "}
				</div>
			</div>
		</div>
	);
}
