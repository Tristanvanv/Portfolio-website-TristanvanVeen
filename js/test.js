gsap.registerPlugins(SplitText, ScrollTrigger, ScrollSmoother);


window.addEventListener("load", () => {

    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar-menu");

    if (menu && menuLinks) {
        menu.addEventListener("click", function (){
            menu.classList.toggle("is-active");
            menuLinks.classList.toggle("active");
        });
    }

    const smoother = ScrollSmoother.create({

        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
    });

const profileImage = document.querySelector(".section_pic img");
const textEl = document.querySelector("#animatedText");
const buttons = document.querySelector(".btn-container");
const icons = document.querySelector("#socials_container .icon");

if (!textEl) return;

document.fonts.ready.then (()=> {
    // word animation
    gsap.from(textEl, {
        scrollTrigger: {
            trigger: "#profile",
            start: "top 60%",
            toggleActions: "restart reverse restart reverse",
            markers: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.05,
    });
    // profile image animation
    gsap.from(profileImage, {
        scrollTrigger :{
            trigger: "#profile",
            start: "top 60%",
            toggleActions: "restart reverse restart reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "back.inOut",
    });
    //animate buttons
    gsap.from(buttons, {
        scrollTrigger :{
            trigger: "#profile",
            start: "top 65%",
            toggleActions: "restart reverse restart reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.inOut",
    });
    // animate icons 
    gsap.from(icons, {
        scrollTrigger: {
            trigger: "#profile",
            start: "top 65%",
            toggleActions: "restart reverse restart reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.inOut",
    });
});
});
