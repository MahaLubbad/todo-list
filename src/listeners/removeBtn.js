import remoeHandler from '../handlers/removeHandler.js';
import {tasks} from '../data.js';

// delete item from list 
tasks.addEventListener('click', (e) => {
	remoeHandler(e);
})