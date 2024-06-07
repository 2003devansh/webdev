

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnimation(){
    var t1  = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 2,
        ease : Expo.easeInOut
    })
    .to(".boundinglem",{
        y: 0,
        ease : Expo.easeInOut,
        duration: 2,
        delay : -1,
        stagger: .2
        
    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}



function mousefollower(){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px,${details.clientY}px)`;

    })
}

mousefollower();
firstpageAnimation();