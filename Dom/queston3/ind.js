var form = document.querySelector("form") ;
var inp1 = document.querySelector("#one") ;
var inp2 = document.querySelector("#two") ;


form.addEventListener("submit" ,function(event){
    event.preventDefault() ;

    if(inp1.value === ' ' ||  inp2.value === ' '){
      console.log("blank");
       
    }

})