
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
let btn = document.createElement("button");
btn.innerText = "Delete All Only finished to Does ";
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
  li.className= "list-group-item d-flex justify-content-between align-items-center  ";

li.appendChild(span);
li.appendChild(p);
span.appendChild(iconTrash);
span.appendChild(check);

p.innerText =input.value
todos.push( { task: input.value, completed: false });

list.appendChild(li);
console.log(todos)
list.appendChild(btn);
btn.style.padding = "10px";

function removeElement() {
  li.remove();
}


function finishedToDo(){
    if(li.style.textDecoration == "line-through"){
          li.style.textDecoration = "none";
        }else{
          li.style.textDecoration = "line-through"
      }
}


iconTrash.addEventListener("click" ,removeElement);
check.addEventListener("click", finishedToDo);   
btn.addEventListener("click", deleteAllCompletedTodos);


}


function deleteAllCompletedTodos() {

 const listItems = document.querySelectorAll("li");
  const todoText = document.querySelectorAll("p"); 


 for(i of listItems){

       for(todo of todoText){
          if(i.style.textDecoration === "line-through" ){
          i.remove();
            
          }
      }

 }
     

      


  }
  
   





// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
    
let input = document.querySelector("#todoInput");

if(input.value== ""){
    alert("please write some value");
    return false;
    }else{
    populateTodoList(todos); 
    input.value ="";
    }
return true;
   
}

