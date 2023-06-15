const addTask = (array, newTask) => {
  const updatedArr = [...array];
  updatedArr.push(newTask);
  return updatedArr;
};

const addTask2 = () => {
  const toDoInput = document.querySelector('.todo-input');
  const arrayOfTasksTest = JSON.parse(localStorage.getItem('arrayOfTasksTest')) || [];
  const toDoList = document.querySelector('.todo-list');
  const newTask = {
    description: toDoInput.value,
    completed: false,
    index: arrayOfTasksTest.length + 1,
  };
  if (toDoInput.value) {
    arrayOfTasksTest.push(newTask);
    localStorage.setItem('arrayOfTasksTest', JSON.stringify(arrayOfTasksTest));
  }
  toDoList.innerHTML = '';
  toDoList.innerHTML = `
    <div class="todo-item" data-id="${newTask.index}">
        <div class="check-text">
            <input class="item-text" type="text" value="${newTask.description}">
        </div>
        <input type="checkbox" class="larger">
        <i class="fa-solid fa-trash delete"></i>
    </div>
    `;
  return newTask;
};
export { addTask, addTask2 };