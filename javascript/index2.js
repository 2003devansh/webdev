const input = document.getElementById("numberofwords");
const container = document.querySelector(".container");

const generatewords = (n) =>  {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0;i<n;i++){
       text += letters[i];
    }
    return text;
}
console.log(generatewords(10));

let numofwords;
 const generatepara = () => {
   numofwords  =  Number(input.value);

   const para = document.createElement("p");

   para.innerText = "sample para";

   para.setAttribute("class","paras");
   container.append(para);
 }