/*
function getarray() {
    return [1,2];
}

const [x,y,z] = getarray();
console.log(x);
console.log(y);
console.log(z);


var myarray = [1,2,3];
const newArray = myarray.map((e) => (e+1));
console.log(newArray)
console.log(myarray);


function hello(name) {
    if(name)
    console.log("hello" +name);
    else
    console.log("hello worls")
}
hello("devansh")


//we can directly provide the default value 
//in the syntax to  if(name)
//console.log("hello" +name);
//else
//console.log("hello worls")
//to avoid this


function hello(name = "world"){
    console.log("hello " + name);
}
hell0("devansh")
//if hello is not given as a default value world will be  assign


//ES 6
//template litreals
console.log("apple\ngrapes\nbanana\nmango");
console.log("-------");
console.log(`
apple
banana
grapes
mango
`)

*/
//ES6 scoping
function outer() {
    var name1 = "xyz";
    let name2 = "pqr";

    function inner() {
        var name1 = "xxyyzz";
        console.log(name1);
    }
    inner() ;
    console.log(name1);

}
outer();


