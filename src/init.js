
import '../src/listeners/addBtn.js';
import '../src/listeners/completedBtn.js';
import '../src/listeners/removeBtn.js';
import '../src/listeners/editBtn.js';

// let input = document.querySelector('.entered-list');
// let addBtn = document.querySelector('.add-list');
// let tasks = document.querySelector('.tasks');

// // add btn disabled
// input.addEventListener('keyup', () => {
// 	if(input.value.trim() != 0){
// 		addBtn.classList.add('active');
// 	}else {
// 		addBtn.classList.remove('active');
// 	}
// })

// // add new items to list

// addBtn.addEventListener('click', () => {
// 	if (input.value.trim() != 0) {
// 		let newItem = document.createElement('div');
// 		newItem.classList.add('item');
// 		newItem.innerHTML = 
// 		`
// 		<p> ${input.value} </p>
// 				<div class="item-btn">
// 				<i class="fa-solid fa-check"></i>
// 					<i class="fa-solid fa-pen-to-square"></i>
// 					<i class="fa-solid fa-xmark"></i>
// 				</div>
// 		`
// 		tasks.appendChild(newItem);
// 		input.value = '';
// 	} else {
// 		alert('Please enter a task');
// 	}
// } )

// // delete item from list 

// tasks.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('fa-xmark')){
// 		e.target.parentElement.parentElement.remove();
// 	}
// })


// // mark item as completed

// tasks.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('fa-check')) {
// 		e.target.parentElement.parentElement.classList.toggle('completed');
// 	}
// })


// // edit item
// tasks.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('fa-pen-to-square')){
// 		const item = e.target.parentElement.parentElement;
//         const paragraph = item.querySelector('p');

//         // Create an input field to replace the paragraph
//         const inputField = document.createElement('input');
//         inputField.type = 'text';
//         inputField.value = paragraph.textContent;
        
//         // Replace the paragraph with the input field
//         item.replaceChild(inputField, paragraph);
// 		inputField.classList.add('editing');
//         inputField.focus();

//         // Handle editing when input field loses focus
//         inputField.addEventListener('blur', () => {
//             const updatedValue = inputField.value.trim();
//             if (updatedValue !== "") {
//                 paragraph.textContent = updatedValue;
//             }
//             item.replaceChild(paragraph, inputField);
//         });
// 	}
// })
