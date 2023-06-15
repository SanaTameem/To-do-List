const deleteTask = (array, index) => {
  const updatedArr = [...array];
  updatedArr.splice(index, 1);
  return updatedArr;
};

const deleteTask2 = (index) => {
  const toDoList = document.querySelector('.todo-list');
  const arrayOfTasksTest = JSON.parse(localStorage.getItem('arrayOfTasksTest')) || [];
  arrayOfTasksTest.splice(index, 1);
  arrayOfTasksTest.forEach((item, i) => {
    item.index = i + 1;
  });
  toDoList.innerHTML = '';
  localStorage.setItem('arrayOfTasksTest', JSON.stringify(arrayOfTasksTest));
};
export { deleteTask, deleteTask2 };