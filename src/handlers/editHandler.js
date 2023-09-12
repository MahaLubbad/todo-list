import editComponent from "../components/editComponent.js";

const editHandler = (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        const item = e.target.parentElement.parentElement;
        editComponent(item);
    }
}

export default editHandler;