console.log(document.getElementById("thisone"));
const  thisone = document.getElementsByTagName("span");

thisone[0].innerHTML = `<span class="myclass">nice<span>`
thisone[0].style.backgroundColor="yellow";
console.log(thisone[0]);

const mybtn = document.getElementById("mybtn");
mybtn.style.color="blue";
mybtn.style.padding="2vmax 4vmax";
mybtn.style.cursor="pointer";
mybtn.style.backgroundColor = "grey"

const animal = document.getElementById("animal");
animal.style.color = "red";
animal.style.backgroundColor = "blue"


const btn = document.querySelector("#hemlo")
// can select all the query mention with in the colon
// that and the property will apply for all the query name above
// can be anchor tag , id, class etc
// if class is selecting then put . first ex:- .myclass and for the id = #myid

btn.innerHTML = `<div> hii this is writtrn by DOM </div>`