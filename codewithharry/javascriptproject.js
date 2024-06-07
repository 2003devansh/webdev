const input = document.getElementById("numofwords");
const container = document.querySelector(".container");

const generateword = (n) => {
    let text = "";
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i = 0;i<n;++i){
        const random =  (Math.random()*10).toFixed(0);
        text += letter[random];

    }
    return text;
}
console.log(generateword(10));

let numofwords;
const generatepara = () => {
    numofwords = Number(input.value);

    const para = document.createElement("p");
    para.innerText = "sample para";
    para.setAttribute("class","paras");
    container.append(para)
}
