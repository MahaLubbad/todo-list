const createItem = (taskText) => {
    // new item 
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            const taskParagraph = document.createElement('p');
            taskParagraph.textContent = taskText ;
     
      // buttons 
            const itemBtn = document.createElement('div');
            itemBtn.classList.add('item-btn');

            const checkIcon = document.createElement('i');
            checkIcon.classList.add('fa-solid', 'fa-check');

            const penIcon = document.createElement('i');
            penIcon.classList.add('fa-solid', 'fa-pen-to-square');
            
            const xmarkIcon = document.createElement('i');
            xmarkIcon.classList.add('fa-solid' , 'fa-xmark');

            itemBtn.append(checkIcon, penIcon, xmarkIcon);
            newItem.append(taskParagraph, itemBtn);

      return newItem ;
      }
      export default createItem;

