// eslint-disable-next-line
import { deleteTask, arrayOfTasks } from './displayItem.js';
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

  const checkTextDiv = document.createElement('div');
  checkTextDiv.classList.add('check-text');

  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.classList.add('item-text');
  inputText.value = todo.description;
  inputText.addEventListener('blur', (e) => {
    const newInputValue = e.target.value;
    todo.description = newInputValue;
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  });

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('larger');

  checkTextDiv.appendChild(checkbox);
  checkTextDiv.appendChild(inputText);

  const icon = createFontAwesomeIcon('fa-trash-can');
  icon.addEventListener('click', () => {
    deleteTask(todo.index);
  });

  element.appendChild(checkTextDiv);
  element.appendChild(icon);

  return element;
};
