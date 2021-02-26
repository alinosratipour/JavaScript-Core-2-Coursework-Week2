   //When clicking **blue** it should change:
let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");

function changeBlue(){
 
 //change jumbotron color
let jum = document.querySelector(".jumbotron");
jum.style.background ="#588fbd";

// **Donate a bike** button background color to `#ffa500`
let btnDonate = document.querySelector(".buttons").getElementsByTagName("a")[0];
btnDonate.style.background ="#ffa500";

//- **Volunteer** button background color to `black` and text color to `white`
let btnVolunteer = document.querySelector(".buttons").getElementsByTagName("a")[1];
btnVolunteer.style.background ="black";
btnVolunteer.style.color ="#ffffff";
}

function changeOrange(){
 
 //change jumbotron color
let jum = document.querySelector(".jumbotron");
jum.style.background ="#f0ad4e";

// **Donate a bike** button background color to `#ffa500`
let btnDonate = document.querySelector(".buttons").getElementsByTagName("a")[0];
btnDonate.style.background ="#5751fd";

//- **Volunteer** button background color to `black` and text color to `white`
let btnVolunteer = document.querySelector(".buttons").getElementsByTagName("a")[1];
btnVolunteer.style.background ="#31b0d5";
btnVolunteer.style.color ="#ffffff";

}

function changeGreen(){

 //change jumbotron color
let jum = document.querySelector(".jumbotron");
jum.style.background ="#87ca8a";

// **Donate a bike** button background color to `#ffa500`
let btnDonate = document.querySelector(".buttons").getElementsByTagName("a")[0];
btnDonate.style.background ="black";

//- **Volunteer** button background color to `black` and text color to `white`
let btnVolunteer = document.querySelector(".buttons").getElementsByTagName("a")[1];
btnVolunteer.style.background ="#8c9c08";
btnVolunteer.style.color ="#ffffff";
}

blueBtn.addEventListener("click" ,changeBlue);
orangeBtn.addEventListener("click", changeOrange);
greenBtn.addEventListener("click", changeGreen);


//******************* Part Two **************************//

const sub = document.getElementsByTagName("button")[4];
    function checkValid(event) {
        event.preventDefault();
    
        const email = document.getElementsByTagName("input")[0] ;
        const userName = document.getElementsByTagName("input")[1];
        const describe = document.getElementsByTagName("textarea")[0];
        let validEmail = email.value.includes("@");
    
    if(email.value== "" ){
    email.style.background ="red";
    return false;
    }
        

    if(userName.value== ""){
    userName.style.background ="red";
    return false;  
    }

    if(describe.value== ""){
    describe.style.background ="red";
    return false;  
    }

    if(userName.value.length < 5){
        alert("user name must be at least 5 character long");
        return false;
    }

    if (!validEmail) {
        alert("Please enter correct email ID")
        return false;
        }

        alert("thank you for filling out the form");
        email.value = "";
        userName.value= "";
        describe.value="";
        userName.style.background ="none";
        email.style.background ="none";
        describe.style.background= "none";
    }
   sub.addEventListener("click", checkValid);