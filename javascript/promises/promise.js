const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})
// resolve connect to then
promise1.then(function(){
    console.log("promise consumed");
})