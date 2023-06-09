import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const toDoInput = document.querySelector('.todo-input');
const toDoList = document.querySelector('.todo-list');
const enterBtn = document.querySelector('.enter-btn');
let arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];

// function display Tasks:
const display = () => {
  arrayOfTasks.forEach((todo) => {
    const element = document.createElement('div');
    element.classList.add('todo-item');
    const attr = document.createAttribute('data-id');
    attr.value = todo.index;
    element.setAttributeNode(attr);
    // div of checkbox and text input
    const checkTextDiv = document.createElement('div');
    checkTextDiv.classList.add('check-text');
    // input for todo text
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.classList.add('item-text');
    inputText.value = todo.description;
    // event listener for input text of each to do task
    inputText.addEventListener('blur', (e) => {
      const newInputValue = e.target.value;
      todo.description = newInputValue;
      localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    });
    // input for checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('larger');
    // adding checkbox and text to div
    checkTextDiv.appendChild(checkbox);
    checkTextDiv.appendChild(inputText);

    // creating font-awesome icon
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-ellipsis-vertical');
    if (icon.classList.contains('fa-ellipsis-vertical')) {
      icon.addEventListener('click', (e) => {
        const targetIcon = e.target;
        targetIcon.classList.remove('fa-solid');
        targetIcon.classList.remove('fa-ellipsis-vertical');
        targetIcon.classList.toggle('fa-regular');
        targetIcon.classList.toggle('fa-trash-can');
        // Event listener for delete icon
        if (icon.classList.contains('fa-trash-can')) {
          const deleteIcons = element.querySelectorAll('.fa-trash-can');
          deleteIcons.forEach((deleteIcon) => {
            deleteIcon.addEventListener('click', () => {
              const item = deleteIcon.parentElement;
              const itemId = item.getAttribute('data-id');
              toDoList.removeChild(item);

              arrayOfTasks = arrayOfTasks.filter((obj) => obj.index !== parseInt(itemId, 10));

              arrayOfTasks.forEach((task, index) => {
                task.index = index + 1;
              });

              localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
            });
          });
        }
      });
    }

    // adding div and icon to main div
    element.appendChild(checkTextDiv);
    element.appendChild(icon);
    toDoList.appendChild(element);
    toDoInput.value = '';
  });
};

// function addTask
const addTask = () => {
  if (toDoInput.value !== '') {
    const task = {
      description: toDoInput.value,
      completed: false,
      index: arrayOfTasks.length + 1,
    };
    toDoList.innerHTML = '';
    arrayOfTasks.push(task);
    display();
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  }
};
// event listeners
enterBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', display);