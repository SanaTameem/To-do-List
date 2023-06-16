// const editTask = (array, description, index) => {
//   const updatedTask = [...array];
//   updatedTask[index] = { ...updatedTask[index], description };
//   return updatedTask;
// };
const editTaskDesctiption = (todo, newInputValue, array) => {
  todo.description = newInputValue;
  localStorage.setItem('arrayOfTasksTest', JSON.stringify(array));
  return array;
};

const editTaskDesctiption2 = (newDescription) => {
  const editInput = document.querySelector('.todo-list');
  editInput.children.innerHTML = newDescription;
};
export { editTaskDesctiption, editTaskDesctiption2 };