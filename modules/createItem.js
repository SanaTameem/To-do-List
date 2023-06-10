// eslint-disable-next-line
import { deleteTask, arrayOfTasks, clearAll } from './displayItem.js';
import statusUpdate from './statusUpdate.js';

const clearAllBtn = document.querySelector('.clear-btn');

// Function to create a Font Awesome icon
export const createFontAwesomeIcon = (iconClass) => {
  const icon = document.createElement('i');
  icon.classList.add('fa-regular');
  icon.classList.add(iconClass);
  return icon;
};
// Function to create a task element
export const createTaskElement = (todo) => {
  const element = document.createElement('div');
  element.classList.add('todo-item');
  const attr = document.createAttribute('data-id');
  attr.value = todo.index;
  element.setAttributeNode(attr);
  // div for checkbox and text input
  const checkTextDiv = document.createElement('div');
  checkTextDiv.classList.add('check-text');
  // input for text
  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.classList.add('item-text');
  inputText.value = todo.description;
  // event listener for editing item
  inputText.addEventListener('blur', (e) => {
    const newInputValue = e.target.value;
    todo.description = newInputValue;
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  });
  // creating checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('larger');
  //   event listener on checkbox
  checkbox.addEventListener('change', () => {
    statusUpdate(arrayOfTasks, inputText, checkbox, element, todo);
  });
  // keeping the state of checkbox and input as it is:
  if (todo.completed) {
    inputText.classList.toggle('completed');
    inputText.classList.toggle('line-through');
    checkbox.checked = true;
  }

  // clear all event listener
  clearAllBtn.addEventListener('click', clearAll);
  // appending checkbox and text input to sub div
  checkTextDiv.appendChild(checkbox);
  checkTextDiv.appendChild(inputText);
  // calling icon function for trash icon
  const icon = createFontAwesomeIcon('fa-trash-can');
  // event listener for delete icon
  icon.addEventListener('click', () => {
    deleteTask(todo.index);
  });
  // appending sub div to main div of item
  element.appendChild(checkTextDiv);
  element.appendChild(icon);
  return element;
};
