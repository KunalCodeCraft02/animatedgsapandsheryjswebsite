var Navbtn = document.getElementById("navbtn");
var scrolldiv = document.querySelector(".ResponsiveNavDiv");

let flag = 0;

function ResponsiveNavbar() {
    Navbtn.addEventListener("click", () => {
        if (flag == 0) {
            scrolldiv.style.top = "0%";
            Navbtn.style.color = "#fff";

            gsap.from(".full h4", {
                x: 100,
                opacity: 0,
                duration: 0.5,
                stagger: 0.3
            });

            flag = 1;
        } else {
            scrolldiv.style.top = "-100%";
            Navbtn.style.color = "#000";
            flag = 0;
        }
    });
};

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#nav a", {
    y: 30,
    stagger: 0.1, // Reduce the stagger value
    opacity: 0,
    duration: 2,
    ease: Power2
});

Shery.textAnimate("#heading h1", {
    // Parameters are optional.
    style: 2,
    y: 10,
    duration: 2,
    delay: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 30,
    opacity: 0,
    duration: 2,
    ease: Expo
});

Shery.imageEffect("#imgntext img", {
    style: 4,
    debug: true
});



let btn = document.getElementById("btn");
let Video = document.querySelector("#video");


btn.addEventListener("click",()=>{
    Video.style.opacity = 1
})























ResponsiveNavbar();