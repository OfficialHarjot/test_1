gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // Set the initial z-index to bring the image in front
  gsap.set(".scroll-image", { zIndex: 0 }); // Ensure it's in front initially

  // Create a timeline for the scroll effect
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "bottom+=200 top", // Adjust the end value for smoother scroll
      scrub: 1, // Adjust scrub for smoother effect
      markers: true // Remove this in production
    }
  });

  // Scale the image on scroll
  tl.to(".scroll-image", {
    scale: 1000, // Scale up during scroll
    ease: "power1.inOut"
  })
  .to(".scroll-image", {
    scale: 1000, // Keep it at 1000 after scroll ends
    ease: "power1.inOut",
    duration: 0.5 // Duration for the final scale
  }, "<"); // "<" means it starts at the same time as the previous tween

  // Set a timeout to allow interaction with other elements after the scroll
  tl.eventCallback("onComplete", () => {
    gsap.set(".scroll-image", { zIndex: 0 }); // Set to 0 to allow interaction
  });
});