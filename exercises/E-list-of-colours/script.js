function listOfColours(colours) {
 let content = document.querySelector("#content");
 let p = document.createElement("p");
 let menu = document.createElement("select");

colours.forEach(color => {
let menuItem = document.createElement("option");

// function to get which color was chosen
function getColor(){
    if(menuItem.value == color){
        p.style.background = this.value;
        p.style.width = "30%";
        p.style.padding = "30px";
        p.innerText = `You selected a: ${menu.value}  `;
    }
}

menu.appendChild(menuItem);
menu.addEventListener('change', getColor);

// get menu items and their values
menuItem.innerText =color;
menuItem.value = color;


});

content.appendChild(menu);
content.appendChild(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
