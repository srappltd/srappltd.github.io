Locomotive("#main")
SwiperJs()
// Menubar()
// Gsap()

Shery.mouseFollower();

// Shery.imageEffect("#back",{style:5,config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"aspect":{"value":2.171945663867352},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true})

Shery.imageEffect(".back", {
  style: 4,
  config:{"uColor":{"value":false},"uSpeed":{"value":3.89,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.44,"range":[0,5]},"uFrequency":{"value":9.01,"range":[0,10]},"geoVertex":{"range":[1,64],"value":51.5},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9935606544617711},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.032258064516129004,"y":-0.010752688172043001}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.13,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // debug: true,
});
Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});



function Locomotive(main){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(main),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(main, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function SwiperJs(){
    new Swiper(".website .mySwiper", {
        direction: 'horizontal',
        loop: true,
      pagination: {
        el: ".website .swiper-pagination",
        clickable: true,
        
      },
      navigation: {
        nextEl: ".website .swiper-button-next",
        prevEl: ".website .swiper-button-prev",
      },
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
    new Swiper(".application .mySwiper", {
      pagination: {
        el: ".application .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".application .swiper-button-next",
        prevEl: ".application .swiper-button-prev",
      },
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
    
}

function Gsap(){
  const tl = gsap.timeline()
tl.from(".nav",{
    opacity:"0",
    delay:".2",
  duration:"1"
}).from(".nav2",{
  top:"-100%",
  opacity:"0",
  duration:"2"
}).from(".nav",{
  top:"-100%",
  duration:"1"
})
.from(".page-1",{
    opacity:"0",
    delay:".1"
}).from(".page-2",{
    opacity:"0",
    delay:".1"
})

document.querySelectorAll(".card").forEach(elem=>{
    gsap.from(elem,{
        scrollTrigger:{
            trigger:elem,
            scroller:"#main",
            scrub:true,
            start:"top 85%",
            end:"top 60%",
        },
        opacity:"0"
    })
})
}

function Menubar(){
  document.querySelector(".menu-btn").addEventListener("click",()=>{
          document.querySelector(".menu-btn i").classList.replace("ri-menu-4-line","ri-close-line")
          document.querySelector(".menu-box").classList.replace("left-[-100%]","left-[0%]")
          document.querySelector(".menu-box").classList.replace("opacity-0","opacity-1")
          // document.querySelector("body").classList.add("fixed")
          setTimeout(()=>{
            document.querySelector(".menu-box").classList.add("bg-[#0000002f]")
          },500)
  })
  document.querySelector(".close-btn").addEventListener("click",()=>{
          document.querySelector(".menu-box").classList.remove("bg-[#0000002f]")
          setTimeout(()=>{
            document.querySelector(".menu-btn i").classList.replace("ri-close-line","ri-menu-4-line")
            document.querySelector(".menu-box").classList.replace("left-[0%]","left-[-100%]")
            document.querySelector(".menu-box").classList.replace("opacity-1","opacity-0")
            document.querySelector("body").classList.remove("reletive")
          },300)
  })
}




