// Script goes here
class Task {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.done = false;
	}
}

class ToDoList {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.tasks = [];
	}
	color;
}

const todoList1 = document.getElementById("todolist-1");
const taskInputForm1 = document.getElementById("input-1");
const addTaskButton1 = document.getElementById("submit-1");

addTaskButton1.addEventListener("click", (taskInputForm1) =>
	addTask(taskInputForm1)
);

function addTask(taskInputForm) {
	let newTask = document.createElement("section");
	newTask.className = "task-container";

	const taskName = document.createElement("p");
	taskName.className = "task-name"; // Set the class
	taskName.textContent = taskInputForm1.value;

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	newTask.appendChild(taskName);
	newTask.appendChild(checkbox);

	todoList1.appendChild(newTask);
}
