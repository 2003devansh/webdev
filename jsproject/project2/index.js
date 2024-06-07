const inputBox = document.getElementById("input-box")
const listConatiner = document.getElementById("list-container")

function Addtask(){
    if(inputBox.value === ''){
        alert("you must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        }

    inputBox.value = "";
} 

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") 
      }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
      }
},false)