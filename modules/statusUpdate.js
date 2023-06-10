const statusUpdate = (input, checkbox, element, task) => {
  if (checkbox.checked) {
    input.classList.toggle('line-through');
    element.classList.toggle('completed');
    task.completed = true;
  } else {
    input.classList.toggle('line-through');
    element.classList.toggle('completed');
    task.completed = false;
  }
};
export default statusUpdate;