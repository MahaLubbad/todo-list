import {tasks} from '../data.js';
import editHandler from "../handlers/editHandler.js";

//const tasks = document.querySelector('.tasks');
tasks.addEventListener('click', (e) => {
    editHandler(e);
});