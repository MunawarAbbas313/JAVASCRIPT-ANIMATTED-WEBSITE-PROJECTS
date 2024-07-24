let cur = document.getElementById("cursor");
let Bgcur = document.getElementById("bgcursor");
document.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x+"px";
    cur.style.top = dets.y+"px";
})
document.addEventListener("mousemove", function(dets){
    Bgcur.style.left = dets.x-150+"px";
    Bgcur.style.top = dets.y-150+"px";
})
var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cur.style.scale = 1;
        cur.style.border = "1px solid white";
        cur.style.backgroundColor = "transparent"
        
    })
    elem.addEventListener("mouseleave", function(){
        cur.style.scale = 1;
        cur.style.border = "1px solid #95C11E";
        cur.style.backgroundColor = " #95C11E"
        
    })
})
// Get the arrow element
const arrow = document.querySelector('#page1 .arrow');

// Add an event listener to the arrow element
arrow.addEventListener('click', () => {
  // Get the page 2 element
  const page2 = document.querySelector('#page4');

  // Scroll to page 2
  page2.scrollIntoView({ behavior: 'smooth' });
});

gsap.to("#nav",{
    backgroundColor : "black",
    duration: 0.5,
    color:"white",
    height : "75px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})
gsap.to("#main",{
    backgroundColor :"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in ", {
    y:60,
    duration: 1.5, 
    opacity:0,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 70%", 
      end: "top 65%",
      opacity:1,
      scrub: 2
    }
  })
  gsap.from(".cards", {
   scale:0.8,
   opacity:0,
    duration: 1, 
 
    
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      start: "top 70%", 
      end: "top 65%",
     
      scrub: true
    }
  })
  gsap.from("#col-1", {
    y:-70,
    x:-70,
    opacity:1,
     duration: 1.5, 
     stagger:0.5,
     
     scrollTrigger: {
       trigger: "#col-1",
       scroller: "body",
       start: "top 50%", 
       end: "top 45%",
      
       scrub: 2
     }
   })
   gsap.from("#col-2", {
    y:70,
    x:70,
    opacity:1,
     duration: 1.5, 
     stagger:0.5,
     
     scrollTrigger: {
       trigger: "#col-1",
       scroller: "body",
       start: "top 50%", 
       end: "top 45%",
       scrub: 2
     }
   })
   gsap.to("#page4 h1", {
    y:-90,
    opacity:1,
     duration: 1.2,   
     scrollTrigger: {
       trigger: "#page4 h1",
       scroller: "body",
       start: "top 75%", 
       end: "top 70%",
      
       scrub: 3
     }
   })
   gsap.to("#footer", {
    y:-50,
    opacity:1,
     duration: 1.2,   
     scrollTrigger: {
       trigger: "#footer",
       scroller: "body",
       start: "top 75%", 
       end: "top 70%",
      
       scrub: 2
     }
   })
   