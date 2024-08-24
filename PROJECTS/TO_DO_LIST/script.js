// Step 1: Select DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Step 2: Add Event Listener to the "Add Task" Button
addTaskBtn.addEventListener('click', addTask);

// Step 3: Load Saved Tasks from Local Storage
document.addEventListener('DOMContentLoaded', loadTasks);

// Step 4: Function to Add a New Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    createTaskElement(taskText);
    saveTask(taskText);
    taskInput.value = '';
  }
}

// Function to Create a Task Element
function createTaskElement(taskText) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
    removeTask(taskText);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Function to Save Task to Local Storage
function saveTask(taskText) {
  let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to Load Tasks from Local Storage
function loadTasks() {
  let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  tasks.forEach(taskText => createTaskElement(taskText));
}

// Function to Remove Task from Local Storage
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
