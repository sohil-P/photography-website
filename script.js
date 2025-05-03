window.addEventListener("load", () => {
  const startTime = performance.timing.navigationStart;
  const endTime = performance.timing.loadEventEnd || performance.now();
  const loadDuration = endTime - startTime;

  const delay = Math.min(Math.max(loadDuration, 1000), 4000);

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    AOS.init();
  }, delay);
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
