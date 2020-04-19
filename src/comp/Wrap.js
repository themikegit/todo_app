import React, { useState } from "react";
import Task from "./Task";
import TaskCounter from "./TaskCounter";
import Control from "./Control";
import "./Style.css";

export default function Wrap() {
	const today = new Date();
	const time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	//render state
	const [data, setData] = useState([]);

	//virtual middle state
	const [newData, setNewData] = useState({ by: "", task: "", date: "" });

	//catch input changes
	const changer = (e) => {
		setNewData({
			...newData,
			[e.target.name]: e.target.value,
			date: time,
			completed: false,
		});
	};

	//add new task
	const submit = () => {
		newData.task ? setData([...data, newData]) : alert("add task");
		//empty fileds
		setNewData({ by: "", task: "" });
	};

	//delete task
	const deleter = (dte) => {
		const newDt = data.filter((item) => item.date !== dte);
		console.log(newDt);
		setData(newDt);
	};

	//complete task
	const completer = (index) => {
		const arr = [...data];
		if (arr[index].completed) {
			arr[index].completed = false;
		} else {
			arr[index].completed = true;
		}
		console.log(arr);
		setData(arr);
	};

	return (
		<div className="warp">
			<TaskCounter count={data.length} />

			{data.map((item, index) => (
				<Task
					index={index}
					isComplete={item.completed}
					complete={completer}
					delete={deleter}
					key={item.date}
					date={item.date}
					by={item.by}
					task={item.task}
					importance={item.importance}
				/>
			))}

			<Control
				task={newData.task}
				by={newData.by}
				submit={submit}
				changer={changer}
			/>
		</div>
	);
}
