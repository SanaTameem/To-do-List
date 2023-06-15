const addTask = (array, newTask) => {
  const updatedArr = [...array];
  return updatedArr.push(newTask);
};
export default addTask;