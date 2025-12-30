const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todolist");

const addTask = () => {

    const taskText = todoInput.value;

    if( taskText.trim() === '' ) {
        alert("enter the todo please");
        return;
    }

    // creating the list items..

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

     const complete = document.createElement('input');
    complete.type = 'checkbox';

    complete.addEventListener('change', function() {
        if(this.checked) {
            listItem.style.textDecoration = 'line-through'
        } else {
            listItem.style.textDecoration= "none"
        }
    })

    //delete button..

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent= 'remove';

    deleteBtn.addEventListener( 'click', function() {
        listItem.remove();

    });

    listItem.appendChild(deleteBtn);
    listItem.appendChild(complete);

    todoList.appendChild(listItem);

    todoInput.value = '';

}

addButton.addEventListener( 'click' , addTask );