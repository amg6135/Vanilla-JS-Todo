//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//even listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck); //delete & check function
filterOption.addEventListener("click", filterTodo); //To filter out idfferent list items
//functions
function addTodo(event) {
  //prevents browser from refreshing entirely
    event.preventDefault();
  //todo div
    const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //adds class to the todo div created in line above.
  //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
  //checkmark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<li class="fa fa-check"></li>'; //.innerhtml allos for the <i> tag to be put in this
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
  //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<li class="fa fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
        todo.remove();
        });
    }
    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes; //due to nodeList we have access to .forEach todo
    todos.forEach(function (todo) { 
    switch (e.target.value) {  //will return the todos class from index.html. target=<option> tags and value="all"
        case "all":
            todo.style.display = "flex";
            break;

        case "completed":
            if (todo.classList.container("completed")) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        case "incompleted":
        if (todo.classList.container("completed")) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    }
});
}
