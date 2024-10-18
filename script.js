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

addTaskButton1.addEventListener("click", () => addTask());

function addTask() {
	let newTaskElement = document.createElement("section");
	newTaskElement.className = "task-container";

	const taskName = document.createElement("p");
	taskName.className = "task-name";
	taskName.textContent = taskInputForm1.value;

	const checkbox = document.createElement("input");
	checkbox.className = "checkbox";
	checkbox.type = "checkbox";

	newTaskElement.appendChild(taskName);
	newTaskElement.appendChild(checkbox);

	todoList1.appendChild(newTaskElement);
}
