function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

    arrayOfPeople.forEach(People =>{
      //first we need to create our element and assigned it to variable.
      let header1 = document.createElement("h1");
      let header2 = document.createElement("h2");

      //here we assign our values to our elements to be shown on the page.
      header1.innerText = People.name;
      header2.innerText = People.job;

      //we then append our headers to our content div
      content.appendChild(header1);
      content.appendChild(header2);
    })

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];




listOfNames(people);
