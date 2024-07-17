const prompt = require('prompt-sync')();

let todos = [];

function clamp (num, min, max) {
    num = Math.min(num, max);
    num = Math.max(num, min);
    return num;
}

function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    };
    todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) {
    let task = null;
    for (let t of todos) {
        if (t.id == id) {
            task = t;
        }
    }
    if (task) {
        task.name = newTaskName;
        task.urgency = newUrgency;
    } else {
        console.log("Task is not found");
    }
}

function deleteTask(todos, id) {
    let indexToDelete = null;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete !== null) { // why !== but above == not ===?
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found");
    }
}

function showMenu() {
    console.log("===== Todo List Menu =====");
    console.log("1. Show all tasks");
    console.log("2. Add a new task");
    console.log("3. Modify an existing task");
    console.log("4. Delete a task");
    console.log("5. Exit");
}

function getUserInput() {
    return prompt("Enter your choice: ");
}

function showAllTasks() {
    if(todos.length === 0) {
        console.log("There are no tasks to display.");
        return;
    }
    console.log("===== Tasks =====");
    for(let task of todos) {
        console.log(
            `ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`);
    }
}

function addNewTask() {
    let name = prompt("Enter the name of the task: ");
    let urgency = clamp(parseInt(prompt("Enter the urgency(1-5): ")),1, 5);
    addTodo(todos, name, urgency);
    console.log("Task added successfully!");
}

function modifyExistingTask() {
    let id = parseInt(prompt("Enter the task ID to modify: "));
    let newTaskName = prompt("Enter the new name for the task: ");
    let newUrgency = clamp(parseInt(prompt("Enter the new urgency (1-5): ")));
    modifyTask(todos, id, newTaskName, newUrgency);
    console.log("Task modified successfully!");
}

function deleteTask() {
    let id = parseInt(prompt("Enter the task ID to delete: "));
    deleteTask(todos, id);
    console.log("Task deleted successfully!");
}

function App() {
    let running = true;
    while (running) {
        showMenu();
        const userChoice = getUserInput();

        switch (userChoice) {
            case 1:
                console.log("Showing all tasks...");
                showAllTasks();
                break;
            case 2:
                console.log("Adding new task...");
                addNewTask()
                break;
            case 3:
                console.log("Modifying an existing task...");
                modifyExistingTask();
                break;
            case 4:
                console.log("Deleting a task...");
                deleteTask();
                break;
            case 5:
                console.log("Exiting...");
                running = false;
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

App();