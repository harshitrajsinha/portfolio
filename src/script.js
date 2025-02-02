document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openVideo");
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("closeVideo");
  const video = document.getElementById("videoPlayer");

  // Close Modal on Click Outside Video
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      video.pause();
    }
  });

  // Open Modal & Play Video
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    video.currentTime = 0;
    video.play();
  });

  // Close Modal & Pause Video
  closeBtn.addEventListener("click", () => {
    video.pause();
    modal.style.display = "none";
  });
});
