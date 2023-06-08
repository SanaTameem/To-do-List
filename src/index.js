import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
const toDoInput = document.querySelector('.todo-input');
const toDoListContainer = document.querySelector('.todolist-container');
const toDoList = document.querySelector('.todo-list');
const enterBtn = document.querySelector('.enter-btn');
const arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [
    {description:' Cleaning', completed:false, index:1},
    {description:'Reading', completed:false, index:2},
    {description:'Walking', completed:false, index:3}
];  

//function display Tasks:
const display = () =>{
     arrayOfTasks.forEach(todo => {
        
        const element = document.createElement('div');
        element.classList.add('todo-item');
        const attr = document.createAttribute('data-id');
        attr.value = todo.index;
        element.setAttributeNode(attr);
        element.innerHTML = `
                    <div class="check-text">
                        <input type="checkbox" class="larger">
                        <p class="item-text">${todo.description}</p>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                `;
        toDoList.appendChild(element);
        toDoInput.value = '';
        localStorage.setItem('arrayOfTasks',JSON.stringify(arrayOfTasks));
    });
};
//event listeners
document.addEventListener('DOMContentLoaded',display);