gsap.from(".nav img,.nav .nav2,.nav .nav3",{
    y:-100,
    scale:0,
    delay:0.5,
    duration:1,
    opacity:0,
    stagger:1,
})
gsap.from(".p1 h1",{
    x:-1300,
    stagger:1,
    scale:0,
    delay:0.5,
    duration:1,
    opacity:0


})

gsap.from(".page2 .box",{
    scale:0,
    delay:0.5,
    duration: 1,
    stagger:.5,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        top:"60%",
        bottom:"40%",
        

    }
})