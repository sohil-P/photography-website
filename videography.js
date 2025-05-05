// home text ----------
const text = "Videography - AI Digital Studio!";
let i = 0;
let isDeleting = false;
const speed = 100;
const delay = 1500;

function typeWriterLoop() {
  const heading = document.getElementById("video-heading");
  if (!isDeleting) {
    heading.innerHTML = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      isDeleting = true;
      setTimeout(typeWriterLoop, delay);
      return;
    }
  } else {
    heading.innerHTML = text.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeWriterLoop, speed);
}
window.addEventListener("DOMContentLoaded", typeWriterLoop);

// video pop up ----------
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const thumbs = document.querySelectorAll(".myVideo");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    modal.style.display = "flex";
    modalVideo.src = thumb.querySelector("source").src;
    modalVideo.play();
  });
});

function closeModal() {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}
