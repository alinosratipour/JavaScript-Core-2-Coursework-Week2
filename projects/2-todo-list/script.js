

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


function populateTodoList(todos){




    // Write your code here... and remember to reset the input field to be blank after creating a todo!
    let li = document.createElement("li");
    let list = document.getElementById("todo-list");
    let input = document.querySelector("#todoInput");
  let span = document.createElement("span");
    let iconTrash = document.createElement("i");
    let check = document.createElement("i");
    let p = document.createElement("p");
    iconTrash.className = "fa fa-trash";
    check.className =     "fa fa-check";
   span.className ="badge bg-primary rounded-pill";

     li.style.listStyle = "none";
     li.className= "list-group-item d-flex justify-content-between align-items-center";
     
     li.appendChild(span);
  p.innerText =input.value
    li.appendChild(p);
    span.appendChild(iconTrash);
    span.appendChild(check);
    todos.push( { task: input.value, completed: false });
    list.appendChild(li);
    console.log(todos)




function removeElement() {
   const e = document.querySelector("li:last-child");
   e.parentElement.removeChild(e);
}

function finishedToDo(){
    if(p.style.textDecoration == "line-through"){
          p.style.textDecoration = "none";
        }else{
          p.style.textDecoration = "line-through"
      }

  
}


iconTrash.addEventListener("click" ,removeElement);
check.addEventListener("click", finishedToDo);   

}



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
    
      let input = document.querySelector("#todoInput");

if(input.value== ""){
  alert("please write somthing");
  return false;
}else{
populateTodoList(todos);  
}

    return true;
 input.value ="";
  
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

     
}
//populateTodoList(todos);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
