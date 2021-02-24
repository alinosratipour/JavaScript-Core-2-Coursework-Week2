function todoList(todos) {
    let content = document.querySelector('#content');
    let ul   = document.createElement('ul');

 todos.forEach( bj =>{
    let li = document.createElement('li');

    //toggles line-through when clicked
function toggleToDo(){
  if(li.style.textDecoration == "line-through"){
          li.style.textDecoration = "none";
        }else{
          li.style.textDecoration = "line-through"
      }
}
    //assigned todos to elements
    li.innerText = `${bj.todo}`;
    // add event listener to call 
    li.addEventListener("click" , toggleToDo);
    ul.appendChild(li);
});

content.appendChild(ul);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);