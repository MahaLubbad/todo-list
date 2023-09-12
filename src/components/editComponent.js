const editComponent = (item) => {
    const paragraph = item.querySelector('p'); 
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = paragraph.textContent;
    inputField.classList.add('editing');
    
    item.replaceChild(inputField, paragraph);
    inputField.focus();

    inputField.addEventListener('blur', () => {
        const updatedValue = inputField.value.trim();
        if (updatedValue !== "") {
            paragraph.textContent = updatedValue;
        }
        item.replaceChild(paragraph, inputField);
    });
};

export default editComponent;