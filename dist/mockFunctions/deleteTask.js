const deleteTask = (array, index) => {
  const updatedArr = [...array];
  return updatedArr.splice(index, 1);
};
export default deleteTask;