var rect =  document.querySelector("#centre");

rect.addEventListener("mousemove",function(details){
var reactagleloaction = rect.getBoundingClientRect();
// gives the loaction of the mouse in particular div

var insiderectval = details.clientX - reactagleloaction.left;


if(insiderectval < reactagleloaction.width / 2){
  
}else{
    
}

});

