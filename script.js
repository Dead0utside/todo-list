// Script goes here
class Task {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.done = false;
	}
}

// class ToDoList {
// 	constructor(id, name) {
// 		this.id = id;
// 		this.name = name;
// 		this.tasks = [];
// 	}
// 	color;
// }

const todoList1 = document.getElementById("todolist-1");
const taskInputForm1 = document.getElementById("input-1");
const addTaskButton1 = document.getElementById("submit-1");
const taskList1 = document.getElementById("task-list-1");

let tasks = [];
let taskId = 0;

addTaskButton1.addEventListener("click", () =>
	addTask(tasks, taskId, taskInputForm1)
);

function addTask(tasks, taskId, taskInputForm) {
	const taskName = taskInputForm.value;

	let task = new Task(taskId);

	const newLi = document.createElement("li");

	let newTaskElement = document.createElement("section");
	newTaskElement.className = "task-container";

	const checkboxElement = document.createElement("input");
	checkboxElement.className = "checkbox";
	checkboxElement.type = "checkbox";

	const taskNameElement = document.createElement("p");
	taskNameElement.className = "task-name";
	taskNameElement.textContent = taskName;
	taskInputForm1.value = "";

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete-btn";
	deleteBtn.id = "delete-btn";

	newTaskElement.appendChild(checkboxElement);
	newTaskElement.appendChild(taskNameElement);
	newTaskElement.appendChild(deleteBtn);

	newLi.appendChild(newTaskElement);

	taskList1.appendChild(newLi);

	tasks.push();
}
