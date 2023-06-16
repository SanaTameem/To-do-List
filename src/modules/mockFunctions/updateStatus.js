const task = {
  description: 'Task number 1',
  completed: false,
  index: 1,
};

const updateStatus = () => {
  task.completed = true;
  return task.completed;
};
export default updateStatus;
