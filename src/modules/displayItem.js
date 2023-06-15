// eslint-disable-next-line
import { createTaskElement } from './createItem.js';
const toDoInput = document.querySelector('.todo-input');
export const toDoList = document.querySelector('.todo-list');
const enterBtn = document.querySelector('.enter-btn');
// eslint-disable-next-line
export let arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
// Function to display tasks
export const displayTasks = () => {
  toDoList.innerHTML = '';
  arrayOfTasks.forEach((todo) => {
    const element = createTaskElement(todo);
    toDoList.appendChild(element);
  });
  toDoInput.value = '';
};

// Function to add a task
export const addTask = () => {
  if (toDoInput.value !== '') {
    const task = {
      description: toDoInput.value,
      completed: false,
      index: arrayOfTasks.length + 1,
    };
    arrayOfTasks.push(task);
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    displayTasks();
  }
};

// clearAll
export const clearAll = () => {
  arrayOfTasks = arrayOfTasks.filter((abc) => abc.completed === false);
  arrayOfTasks = arrayOfTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayTasks();
};

// Function to delete a task
export const deleteTask = (indexVal) => {
  arrayOfTasks = arrayOfTasks.filter((task) => task.index !== indexVal);
  arrayOfTasks = arrayOfTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayTasks();
};
// Event listener
enterBtn.addEventListener('click', addTask);
toDoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
  }
});