function readingList(books) {
      //create our elements
      let content = document.querySelector("#content");
      let ul = document.createElement("ul");
      let title = document.createElement("h1");
      
      //append title to content div
      content.appendChild(title);
      title.innerText = "Book List";
     
      books.forEach(book => {
      // declare variables to create elements
      let li = document.createElement("li");
      let p = document.createElement("p");
      let bookImg = document.createElement("img");
      bookImg.src = book.src;

      p.innerText = `${book.title}  - ${book.author} `;
      
      // append values to our elements
      li.appendChild(p);
      li.appendChild(bookImg);
      ul.appendChild(li);
      
      // assign our style to elements
      ul.style.display ="flex";
      li.style.padding ="20px";
      li.style.marginLeft="10px";
      li.style.background="red";
      li.style.listStyle ="none";

      // check to see if book already red or not
      book.alreadyRead == true ? li.style.background ="green" : li.style.background == "red"
    });

    content.appendChild(ul);
   
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    src: "./img/1.jpg"
    
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    src :"./img/2.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    src :"./img/3.jpg"
  }
];

readingList(books);