function shoppingList(shoppingList) {
   let content = document.querySelector("#content");
   //create our ul outside of loop
   let ul = document.createElement("ul");
   
   shoppingList.forEach(item => {
      // create list item 
      let shoppingItem = document.createElement("li");
      //assigned shopping items to li 
      shoppingItem.innerText = item;
      //append our list items to ul
      ul.appendChild(shoppingItem);
});
   //append our ul to content div
   content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
