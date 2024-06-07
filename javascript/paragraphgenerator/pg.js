const input = document.getElementById("numofword");
const container = document.querySelector(".container");


const generateword = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    

     for(let i= 0 ; i < n;++i){
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text += letters[random];
     }

     return text;
  };
let numofword;
 const getdata = () => {
    
    numofword =  Number(input.value);

    const para = document.createElement("p");
    // it will create element paragraph
    para.innerText = "sample para";
    para.setAttribute("class", "paras");
    container.append(para);
 }



