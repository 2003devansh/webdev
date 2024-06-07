var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y + "px"

   
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
     
        start: "top -10%",
        scrub: 1
    }
    
})

gsap.to("#main",{
    backgroundColor :  "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        markers: true,
        start: "top -50%",
        end: "top -100%",
        scrub:2
    }
})

