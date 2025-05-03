window.addEventListener("load", () => {
  const startTime = performance.timing.navigationStart;
  const endTime = performance.timing.loadEventEnd || performance.now();
  const loadDuration = endTime - startTime;

  const delay = Math.min(Math.max(loadDuration, 1000), 4000);

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.classList.remove("loading");

    AOS.init();
  }, delay);
});

// Add this at start of body tag
document.body.classList.add("loading");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
