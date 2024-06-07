var tl = gsap.timeline();


tl.from("#page1 #box",{
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360
   
}) 
tl.from("#page2 #box",{
    scale: 0,
   
    duration: 1,
    rotate: 360,
    scrollTrigger: "#page2 #box"
   
}) 