import { input , tasks} from "../data.js";

const addItemList = ( newItem) => {
    if (input.value.trim() !== ''){
        tasks.appendChild(newItem);
    } else {
        alert('Please enter a task');
    }
}
export default addItemList ;