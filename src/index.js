import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { displayTasks, addTask } from '../modules/displayItem.js';

const enterBtn = document.querySelector('.enter-btn');

// Event listeners
enterBtn.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', displayTasks);
// export { toDoInput };
