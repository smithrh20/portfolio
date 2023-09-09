gsap.registerPlugin(ScrollTrigger);

gsap.set("#about", {
    opacity: 0,
});
gsap.set("#about h1", {
    opacity: 0,
});
gsap.set("#about h3", {
    opacity: 0,
});
gsap.set("#about p", {
    opacity: 0,
});
gsap.to("#about", {
    opacity: 1,
    delay: .5,
    duration: .25,
    scrollTrigger: "#intro",
});
gsap.to("#about h3", {
    delay: 1,
    opacity: 1,
    y: -10,
    duration: .5,
    scrollTrigger: "#intro",
});
gsap.to("#about h1", {
    delay: 1.5,
    opacity: 1,
    y: -20,
    duration: .5,
    scrollTrigger: "#intro",
});
gsap.to("#about p", {
    delay: 2,
    opacity: 1,
    duration: .5,
    scrollTrigger: "#intro",
});

gsap.set("#myWork a", {
    opacity: 0,
    y: 20,
});
gsap.set("#myWork a img", {
    opacity: 0,
    y: 10,
});
gsap.set("#myWork a h5", {
    opacity: 0,
    y: 10,
});
gsap.set("#myWork a p", {
    opacity: 0,
    y: 10,
});
gsap.to("#myWork a", {
    opacity: 1,
    y: -20,
    delay: .5,
    duration: .50,
    scrollTrigger: "#myWork",
});
gsap.to("#myWork a img", {
    opacity: 1,
    y: -10,
    delay: .75,
    duration: .50,
    scrollTrigger: "#myWork",
});
gsap.to("#myWork a h5", {
    opacity: 1,
    y: -10,
    delay: 1,
    duration: .50,
    scrollTrigger: "#myWork",
});
gsap.to("#myWork a p", {
    opacity: 1,
    y: -10,
    delay: 1.25,
    duration: .50,
    scrollTrigger: "#myWork",
});
gsap.set("#form", {
    opacity: 0,
    y: 20,
});
gsap.set("#form form", {
    opacity: 0,
    y: 10,
});
gsap.to("#form ", {
    opacity: 1,
    y: -20,
    delay: .5,
    duration: .50,
    scrollTrigger: "#form",
});
gsap.to("#form form", {
    opacity: 1,
    y: -10,
    delay: 1,
    duration: .50,
    scrollTrigger: "#form",
});