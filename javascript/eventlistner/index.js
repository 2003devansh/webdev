/*
alert("hi");

let icecream = prompt("type a number");

 if(icecream == 10){
    console.log("ice cream is bluelagon");
 }
 else{
    console.log("it is cone");
 } 

 let myfunc = function printthevalue(a,b,c,d) {
           let result = (a + b + c + d)/10;   
            return result;
        }

      let ans =  myfunc(10.101,10,10,10);

      console.log(  ans);


       function intro(name = "sample",channel = "youtube"){
         console.log(`hi my name is ${name} . please subscribe my channel what are you waiting for my channel is ${channel}`);
       }
      intro("devansh","faujdar");


      function totalofarr(arr=[]) {

        let total = 0;
        for (let i = 0; i < arr.length; ++i) {
            total = total + arr[i];
            
        }
        return total;
      }

      const arr = [1,2,3,4];
     console.log(totalofarr(arr));;
      */
     

     //EVENTLISTERNERS

     const heading= document.getElementById("heading");
     const btn = document.getElementById("mybtn");
     const box1= document.getElementById("box1");
     
     btn.addEventListener("click",() =>{
      box1.classList.add("classfordiv");
     });

     box1.addEventListener("mouseover",() =>{
      btn.style.transform = "scale(1.1)";
     });

     addEventListener("contextmenu",(e) => {
      e.preventDefault();
      btn.style.filter = "blur(10px)";
     })