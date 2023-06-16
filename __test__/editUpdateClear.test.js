import { editTaskDesctiption, editTaskDesctiption2 } from '../src/modules/mockFunctions/editTask.js';
import updateStatus from '../src/modules/mockFunctions/updateStatus.js';
import clearAll from '../src/modules/mockFunctions/clearAll.js';

describe('Edit Task functions', () => {
  const array = [
    { description: 'Task number 1', completed: false, index: 1 },
    { description: 'Task number 2', completed: false, index: 2 },
  ];
  const oldDescription = array[1].description;
  const newDescription = 'This is a new Task';
  test('This function is editing the description of object in the array', () => {
    const updatedArr = editTaskDesctiption(array[1], newDescription, array);
    expect(updatedArr[1].description).toBe(newDescription);
    expect(updatedArr[1]).not.toBe(oldDescription);
  });

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
  test('This function is editing the DOM input text', () => {
    editTaskDesctiption2(newDescription);
    const editedItem = document.querySelector('.todo-list').children.innerHTML;
    expect(editedItem).toBe(newDescription);
    expect(editedItem).not.toBe(oldDescription);
  });
});
describe('Update completed status', () => {
  test('Updating the status to completed', () => {
    const updateTask = updateStatus();
    expect(updateTask).toBeTruthy();
  });
});