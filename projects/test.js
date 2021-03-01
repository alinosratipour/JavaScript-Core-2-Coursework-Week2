const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];


greekGods.forEach((val ,index)=>{
if(index == 2){
  setTimeout(()=>{
     console.log(index,val);
    },2000)
}else{
 console.log(index,val);
}


})
