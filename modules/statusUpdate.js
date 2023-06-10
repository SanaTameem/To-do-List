const statusUpdate = (array, input, checkbox, element, task) => {
  if (checkbox.checked) {
    input.classList.toggle('line-through');
    element.classList.toggle('completed');
    task.completed = true;
  } else {
    input.classList.toggle('line-through');
    element.classList.toggle('completed');
    task.completed = false;
  }
  localStorage.setItem('arrayOfTasks', JSON.stringify(array));
};
export default statusUpdate;