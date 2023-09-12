import completedHandler from '../handlers/completedHandler.js';
import {tasks} from '../data.js';

// mark item as completed
    tasks.addEventListener('click', (e) => {
	completedHandler(e);
})


