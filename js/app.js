gsap.registerPlugin(SplitText, ScrollSmoother);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('js/particles-js', 'json/particles.json', function() {
  console.log('callback - js/particles.js config loaded');
}); */

window.addEventListener("load", () => {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar-menu");

  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
  });

  const profileItem = document.querySelectorAll(".profile-item");
  const aboutItem = document.querySelectorAll(".about-item");
  const projectItem = document.querySelectorAll(".projects-item");

  if (!profileItem.length) return;

  document.fonts.ready.then(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 961px)": function () {
        gsap.from(profileItem, {
          scrollTrigger: {
            trigger: "#profile",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 40,
          opacity: 0.3,
          duration: 0.7,
          ease: "back.inOut(1.8)",
          stagger: 0.08,
        });

        gsap.from(aboutItem, {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 50,
          opacity: 0.3,
          duration: 0.7,
          ease: "back.inOut(1.8)",
          stagger: 0.08,
        });

        gsap.from(projectItem, {
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 50,
          opacity: 0.3,
          duration: 1.3,
          ease: "back.inOut(1.8)",
          stagger: 0.02,
        });
      },

      "(max-width: 960px)": function () {
        gsap.from(profileItem, {
          scrollTrigger: {
            trigger: "#profile",
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 20,
          opacity: 0.3,
          duration: 0.6,
          ease: "back.inOut(1.8)",
          stagger: 0.1,
        });

        gsap.from(aboutItem, {
          scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 30,
          opacity: 0.3,
          duration: 0.6,
          ease: "back.inOut(1.8)",
          stagger: 0.1,
        });

        gsap.from(projectItem, {
          scrollTrigger: {
            trigger: "#projects",
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "restart reverse restart reverse",
            //markers: true,
          },
          y: 40,
          opacity: 0.3,
          duration: 1,
          ease: "back.inOut(1.8)",
          stagger: 0.02,
        });
      },
    });
  });
});
