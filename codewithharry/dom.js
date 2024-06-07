//const thisone = "dev";
//console.log(document.getElementById("thisone"));
const arr = [3,4,6,8,10];
const result = arr.every((value,index) =>{
    return value > 2;
});
console.log(result);


for (const element of arr) {
    console.log(element);
}
