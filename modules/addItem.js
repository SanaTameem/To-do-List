import { addTask } from './displayItem.js';

// const toDoInput = document.querySelector('.todo-input');
const enterBtn = document.querySelector('.enter-btn');

// Event listener
enterBtn.addEventListener('click', addTask);
