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

	addTask(task) {
		let newTaskElement = document.createElement("section");
		newTaskElement.className = "task-container";

		const taskName = document.createElement("p");
		taskName.className = "task-name"; // Set the class
		taskName.textContent = taskInputForm1.value;

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		newTaskElement.appendChild(taskName);
		newTaskElement.appendChild(checkbox);

		todoList1.appendChild(newTaskElement);
	}
}

todoLists = [];
workspace = document.querySelector(".workspace");

function addToDoList(id, name) {
	const toDoList = document.createElement("article");
	toDoList.className = "todo-list";
	toDoList.id = `todolist-${id}`;

	const taskInput = document.createElement("input");
	taskInput.id = `input-${id}`;
	taskInput.className = "task-input";
	taskInput.type = "text";
	taskInput.placeholder = "New task";

	const submitInput = document.createElement("input");
	submitInput.id = `submit-${id}`;
	submitInput.className = "task-submit-btn";
	submitInput.type = "submit";
	submitInput.value = "+";

	const taskList = document.createElement("ul");
	taskList.class = "task-list";

	toDoList.appendChild(taskInput);
	toDoList.appendChild(submitInput);
	toDoList.appendChild(taskList);

	document.workspace.appendChild(toDoList);
}

// const todoList1 = document.getElementById("todolist-1");
// const taskInputForm1 = document.getElementById("input-1");
// const addTaskButton1 = document.getElementById("submit-1");

// addTaskButton1.addEventListener("click", () => addTask());
