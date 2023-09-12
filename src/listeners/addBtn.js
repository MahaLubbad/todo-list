import createItem from '../components/createItem.js';
import addItemList from '../handlers/addItemList.js';
import {input , addBtn} from '../data.js'

//  add btn disabled
   input.addEventListener('keyup', () => {

	if(input.value.trim() !== ''){
	   addBtn.classList.add('active');
	}else {
		addBtn.classList.remove('active');
	}
})

// add new items to list
addBtn.addEventListener('click', () => {
    const newItem = createItem(input.value);
    addItemList(newItem );
	input.value = '';
	
});
