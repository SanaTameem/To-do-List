import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
class TaskList{
    constructor(){
        this.toDoInput = document.querySelector('.todo-input');
        this.toDoList = document.querySelector('.todo-list');
        this.enterBtn = document.querySelector('.enter-btn');
        this.arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
        this.enterBtn.addEventListener('click', this.addTask.bind(this));
    }
    // functions

// function display Tasks:
display = () => {
  this.arrayOfTasks.forEach((todo) => {
    //div for to do item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('todo-item');
    const attr = document.createAttribute('data-id');
    attr.value = todo.index;
    itemDiv.setAttributeNode(attr);
    //div for checkbox and text
    const checkTextDiv = document.createElement('div');
    checkTextDiv.classList.add('check-text');
    //checbox
    const checkbox = document.createElement('input');
    checkbox.classList.add('larger');
    checkbox.type = 'checkbox';
    //input for text
    const inputText = document.createElement('input');
    inputText.classList.add('item-text');
    inputText.type = 'text';
    //adding inputs to the div
    checkTextDiv.appendChild(checkbox);
    checkTextDiv.appendChild(inputText);
    inputText.value = todo.description;
    //adding the check div to main div
    itemDiv.appendChild(checkTextDiv);
    //creat icon:
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-ellipsis-vertical');
    //adding icon to div 
    itemDiv.appendChild(icon);
    this.toDoList.appendChild(itemDiv);
  });
}

addTask = () => {
  const inputValue = this.toDoInput.value;
  const completed = false;
  const index = new Date().getTime().toString();

  if (inputValue !== '') {
    const task = {
      description: inputValue,
      completed,
      index,
    };
    this.toDoList.innerHTML = '';
    this.arrayOfTasks.push(task);
    // display
    this.display();
    this.toDoInput.value = '';
    localStorage.setItem('arrayOfTasks', JSON.stringify(this.arrayOfTasks));
  }
}
};


// event listeners
const list = new TaskList();
document.addEventListener('DOMContentLoaded', list.display);