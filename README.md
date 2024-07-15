# CRUD App-ToDoList

## Setup Steps for Replit
1. **Sign Up or Log In**: Go to [replit.com](https://replit.com/) and sign up for an account or log in if you already have one.
2. **Create a New Repl**: Click on the "Create" button and select "Node.js" as the template for your new project.
3. **Name Your Project**: Give your project a name, such as "todo-list-app", and then click "Create Repl".
4. **Initialize the Project**: Once the project is created, you will see an online code editor where you can start writing your Node.js code.
5. **Install Dependencies**: In the shell at the bottom of the screen, install the `prompt-sync` package by running.
    
    ```bash
    npm install prompt-sync
    ```
    
6. **Create `index.js` File**: If not already created, make sure you have a file named `index.js` where you will write your application code.
7. **Write Your Code**: Copy and paste the provided CRUD application code into the `index.js` file.
8. **Run the Application**: Click the "Run" button at the top of the screen to start your application. The menu will appear, and you can begin interacting with the to-do list.
   
## Setup Steps for Visual Studio Code

1. **Install Node.js**: Ensure you have Node.js installed on your machine. You can download it from the official Node.js website.
2. **Create a Project Directory**: Create a new directory for your project. You can do this using the terminal or file explorer.
    
    ```bash
    mkdir todo-list-app
    cd todo-list-app
    
    ```
    
3. **Initialize a Node.js Project**: Inside your project directory, initialize a new Node.js project by running:
    
    ```bash
    npm init -y
    
    ```
    
4. **Install Required Dependencies**: Install the `prompt-sync` package, which is used for reading input from the user.
    
    ```bash
    npm install prompt-sync
    
    ```
    
5. **Create `index.js` File**: Create a new file named `index.js` in your project directory. This file will contain your application code.
6. **Copy the Application Code**: Copy the provided code for the CRUD application into the `index.js` file.
7. **Run the Application**: In the terminal, navigate to your project directory and run the application using Node.js.
    
    ```bash
    node index.js
    
    ```
    
    This will start the application and display the menu, allowing you to perform CRUD operations on the to-do list.

## 1. Create the Interface

In this lab, you'll build a simple Todo List application in JavaScript using Node.js. We'll break down the process into small, manageable steps. Follow along carefully and implement each step before moving to the next.

### Prerequisites

- Node.js installed on your computer
- Basic knowledge of JavaScript and Node.js

### Step 1: Set up the project

1. Create a new directory for your project.
2. Initialize a new Node.js project by running `npm init -y` in your terminal.
3. Install the `prompt-sync` package by running `npm install prompt-sync`.
4. Create a new file called `index.js` in your project directory.

### Step 2: Create the main App function

1. Open `index.js` in your code editor.
2. At the top of the file, add the following line to import the `prompt-sync` package:
    
    ```jsx
    const prompt = require('prompt-sync')();
    
    ```
    
3. Create an empty `App` function:
    
    ```jsx
    function App() {
      // We'll add code here later
    }
    
    ```
    
4. At the bottom of the file, call the `App` function:
    
    ```jsx
    App();
    
    ```
    

### Step 3: Implement the showMenu function

1. Create a `showMenu` function that displays the menu options:
    
    ```jsx
    function showMenu() {
      console.log("===== Todo List Menu =====");
      console.log("1. Show all tasks");
      console.log("2. Add a new task");
      console.log("3. Modify an existing task");
      console.log("4. Delete a task");
      console.log("5. Exit");
    }
    
    ```
    
2. Call `showMenu()` inside the `App` function:
    
    ```jsx
    function App() {
      showMenu();
    }
    
    ```
    

### Step 4: Implement the getUserInput function

1. Create a `getUserInput` function that prompts the user for input:
    
    ```jsx
    function getUserInput() {
      return prompt("Enter your choice: ");
    }
    
    ```
    
2. Call `getUserInput()` in the `App` function and store the result:
    
    ```jsx
    function App() {
      showMenu();
      const userChoice = getUserInput();
    }
    
    ```
    

### Step 5: Add conditional logic to App

1. Implement if/else statements in the `App` function to handle user choices:
    
    ```jsx
    function App() {
      showMenu();
      const userChoice = getUserInput();
    
      if (userChoice === "1") {
        console.log("Showing all tasks...");
      } else if (userChoice === "2") {
        console.log("Adding a new task...");
      } else if (userChoice === "3") {
        console.log("Modifying an existing task...");
      } else if (userChoice === "4") {
        console.log("Deleting a task...");
      } else if (userChoice === "5") {
        console.log("Exiting...");
      } else {
        console.log("Invalid choice. Please try again.");
      }
    }
    
    ```
    

### Step 6: Add a loop to make the app repeat

1. Modify the `App` function to include a while loop:
    
    ```jsx
    function App() {
      let running = true;
      while (running) {
        showMenu();
        const userChoice = getUserInput();
    
        if (userChoice === "1") {
          console.log("Showing all tasks...");
        } else if (userChoice === "2") {
          console.log("Adding a new task...");
        } else if (userChoice === "3") {
          console.log("Modifying an existing task...");
        } else if (userChoice === "4") {
          console.log("Deleting a task...");
        } else if (userChoice === "5") {
          console.log("Exiting...");
          running = false;
        } else {
          console.log("Invalid choice. Please try again.");
        }
      }
    }
    
    ```
    

### Step 7: Implement functions for each feature

1. Create empty functions for each feature:
    
    ```jsx
    function showAllTasks() {
      // We'll implement this later
    }
    
    function addNewTask() {
      // We'll implement this later
    }
    
    function modifyExistingTask() {
      // We'll implement this later
    }
    
    function deleteTask() {
      // We'll implement this later
    }
    
    ```
    
2. Update the `App` function to call these new functions:
    
    ```jsx
    function App() {
      let running = true;
      while (running) {
        showMenu();
        const userChoice = getUserInput();
    
        if (userChoice === "1") {
          showAllTasks();
        } else if (userChoice === "2") {
          addNewTask();
        } else if (userChoice === "3") {
          modifyExistingTask();
        } else if (userChoice === "4") {
          deleteTask();
        } else if (userChoice === "5") {
          console.log("Exiting...");
          running = false;
        } else {
          console.log("Invalid choice. Please try again.");
        }
      }
    }
    
    ```
    
Congratulations! You've now created the basic structure of your Todo List application. In the next part of this lab, we'll implement the data layer and flesh out the feature functions.

---

## 2. Creating the Data Model

Recall that a program usually consists of S,I,P and O:

- S is for the state
- I is for input
- P is for processing
- O is for output

The “model” part of a program is the **state** and **processing for the requirements**.  Let’s create that first.

1. Make sure you are writing the code in the `index.js` file
2. Create an array named `todos`, like so:

```jsx
let todos = [];
```

1. Take note that `todos` is in the global scope, so it can be accessed by all functions
2. Next, create a new function named `addTodo`, which will take in `todos` as an array in the first parameter, the name of the task and its urgency (a number from 1 to 5).

```jsx
function addTodo(todos, name, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
}

```

1. If we can add a new todo, we should be able to update it as well. Write the function to add in a new todo:

```jsx
function modifyTask(todos, id, newTaskName, newUrgency) {
  let task = null;
  for (let t of todos) {
    if (t.id == id) {
       task = t;
    }
  }
  if (task) {
     task.name = newTaskName);
  } else {
     console.log("Task is not found");
  }
}

```

1. We should also have a function to delete a task, given its id.

```jsx
function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found");
  }
}
```
---
## Part 3: Integrating the Model and the Interface

Now that we have created both our user interface and our data model, it's time to integrate them. We'll update our interface functions to use the data model functions we created in Part 2.

### Step 1: Update the showAllTasks function

1. Replace the empty `showAllTasks` function with the following:
This function now uses the `todos` array to display all tasks.
    
    ```jsx
    function showAllTasks() {
      if (todos.length === 0) {
        console.log("There are no tasks to display.");
        return;
      }
      console.log("===== Tasks =====");
      for (let task of todos) {
        console.log(`ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`);
      }
    }
    
    ```
    

### Step 2: Update the addNewTask function

1. Replace the empty `addNewTask` function with the following:
This function now uses the `addTodo` function from our data model.
    
    ```jsx
    function addNewTask() {
      let name = prompt("Enter the name of the task: ");
      let urgency = parseInt(prompt("Enter the urgency (1-5): "));
      addTodo(todos, name, urgency);
      console.log("Task added successfully!");
    }
    
    ```
    

### Step 3: Update the modifyExistingTask function

1. Replace the empty `modifyExistingTask` function with the following:
This function now uses the `modifyTask` function from our data model.
    
    ```jsx
    function modifyExistingTask() {
      let id = parseInt(prompt("Enter the task ID to modify: "));
      let newTaskName = prompt("Enter the new name for the task: ");
      let newUrgency = parseInt(prompt("Enter the new urgency (1-5): "));
      modifyTask(todos, id, newTaskName, newUrgency);
      console.log("Task modified successfully!");
    }
    
    ```
    

### Step 4: Update the deleteTask function in the interface

1. Rename the `deleteTask` function in the interface to `deleteTaskInterface` to avoid naming conflicts:
This function now uses the `deleteTask` function from our data model.
    
    ```jsx
    function deleteTaskInterface() {
      let id = parseInt(prompt("Enter the task ID to delete: "));
      deleteTask(todos, id);
      console.log("Task deleted successfully!");
    }
    
    ```
    

### Step 5: Update the App function

1. Modify the `App` function to use the new `deleteTaskInterface` function:
    
    ```jsx
    function App() {
      let running = true;
      while (running) {
        showMenu();
        const userChoice = getUserInput();
    
        if (userChoice === "1") {
          showAllTasks();
        } else if (userChoice === "2") {
          addNewTask();
        } else if (userChoice === "3") {
          modifyExistingTask();
        } else if (userChoice === "4") {
          deleteTaskInterface();
        } else if (userChoice === "5") {
          console.log("Exiting...");
          running = false;
        } else {
          console.log("Invalid choice. Please try again.");
        }
      }
    }
    
    ```
    

### Step 6: Test your application

1. Run your application by executing `node index.js` in your terminal.
2. Test all the features:
    - Add a few tasks
    - Display all tasks
    - Modify a task
    - Delete a task
    - Try to modify or delete a non-existent task

Congratulations! You have now created a fully functional Todo List application by integrating your user interface with your data model. This application demonstrates the basic principles of state management and CRUD (Create, Read, Update, Delete) operations.
