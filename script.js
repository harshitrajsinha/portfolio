document.addEventListener("DOMContentLoaded", function () {
  const fixedImgHeight = 518.4;
  const fixedImgWidth = 407.35;

  const fixedFrameWidth = 1024;
  const fixedFrameHeight = 1366;

  const prevHeight = window.getComputedStyle(
    document.querySelector(".my-photo")
  ).height;
  const prevWidth = window.getComputedStyle(
    document.querySelector(".my-photo")
  ).width;

  // ResizeObserver to notify change in window
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const frameWidth = window.innerWidth;
      const frameHeight = window.innerHeight;

      const newImgHeight = (frameHeight / fixedFrameHeight) * fixedImgHeight;
      const newImgWidth = (frameWidth / fixedFrameWidth) * fixedImgWidth;
      if (
        frameWidth === Math.floor(entry.contentRect.width) &&
        frameWidth <= 1024
      ) {
        document.querySelector(".exclamation").style.display = "none";
        document.querySelector(".intro").textContent = "Harshit Raj Sinha";
        if (frameWidth < frameHeight) {
          document.querySelector(".my-photo").style.width =
            String(newImgWidth) + "px";
          document.querySelector(".my-photo").style.height =
            String(newImgHeight) + "px";
        } else {
          document.querySelector(".my-photo").style.width = prevWidth;
          document.querySelector(".my-photo").style.height = prevHeight;
        }
      } else if (
        frameWidth === Math.floor(entry.contentRect.width) &&
        frameWidth > 1024
      ) {
        document.querySelector(".exclamation").style.display = "block";
        document.querySelector(".intro").textContent = "I'm Harshit";
      }
    }
  });

  observer.observe(document.body);
});
