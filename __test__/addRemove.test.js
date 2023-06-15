import { addTask, addTask2 } from '../src/modules/mockFunctions/addTask.js';
import { deleteTask, deleteTask2 } from '../src/modules/mockFunctions/deleteTask.js';

describe('Add Task functions', () => {
  const array = [
    { description: 'Task number 1', completed: false, index: 1 },
    { description: 'Task number 2', completed: false, index: 2 },
  ];
  test(('This function is adding an item to updatedArr'), () => {
    const newTask = { description: 'Task number 3', completed: false, index: 3 };
    const updatedArr = addTask(array, newTask);
    expect(updatedArr).toHaveLength(3);
    expect(updatedArr[2]).toEqual(newTask);
  });

  test('This function is adding a div to the DOM list', () => {
    document.body.innerHTML = `
        <h1 class="main-title">TO DO LIST</h1>
        <div class="title-reload">
            <p>Today's To DO</p>
            <i class="fas fa-refresh recycle_icon"></i> 
        </div>
        <form class="todo-form">
            <div class="input-container">
                <input type="text" class="todo-input" placeholder="Add to your list...">
                <button type="button" class="enter-btn"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></button>
            </div>
        </form>
        <div class="todolist-container">
            <div class="todo-list">
                <!--to do item here-->
            </div>
            <div class="clear-container">
                <button class="clear-btn">Clear All Completed</button>
            </div>
            
        </div>`;
    const toDoInput = document.querySelector('.todo-input');
    const toDoList = document.querySelector('.todo-list');
    toDoInput.value = 'Reading Novel';
    addTask2();
    expect(toDoList.children).toHaveLength(1);
  });
});
describe('DeleteTask', () => {
  const array = [
    { description: 'Task number 1', completed: false, index: 1 },
    { description: 'Task number 2', completed: false, index: 2 },
  ];
  test('Delete task', () => {
    const updatedArr = deleteTask(array, 1);
    expect(updatedArr).toHaveLength(1);
    expect(updatedArr).not.toContain(array[1]);
  });
  test('This function is removing an item form DOM', () => {
    document.body.innerHTML = `
        <h1 class="main-title">TO DO LIST</h1>
        <div class="title-reload">
            <p>Today's To DO</p>
            <i class="fas fa-refresh recycle_icon"></i>
        </div>
        <form class="todo-form">
            <div class="input-container">
                <input type="text" class="todo-input" placeholder="Add to your list...">
                <button type="button" class="enter-btn"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></button>
            </div>
        </form>
        <div class="todolist-container">
            <div class="todo-list">
                <!--to do item here-->
            </div>
            <div class="clear-container">
                <button class="clear-btn">Clear All Completed</button>
            </div>
        </div>`;
    deleteTask2(1);
    const toDoList = document.querySelector('.todo-list');
    expect(toDoList.children).toHaveLength(0);
  });
});
