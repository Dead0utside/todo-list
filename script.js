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
const taskList1 = document.getElementById("task-list-1");

addTaskButton1.addEventListener("click", () => addTask());

function addTask() {
	const newLi = document.createElement("li");

	let newTaskElement = document.createElement("section");
	newTaskElement.className = "task-container";

	const checkbox = document.createElement("input");
	checkbox.className = "checkbox";
	checkbox.type = "checkbox";

	const taskName = document.createElement("p");
	taskName.className = "task-name";
	taskName.textContent = taskInputForm1.value;

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete-btn";
	deleteBtn.id = "delete-btn";

	newTaskElement.appendChild(checkbox);
	newTaskElement.appendChild(taskName);
	newTaskElement.appendChild(deleteBtn);

	newLi.appendChild(newTaskElement);

	taskList1.appendChild(newLi);
}
