document.addEventListener("DOMContentLoaded", function () {
  const fixedPhotoHeight = 518.4;
  const fixedPhotoWidth = 407.35;
  const fixedIntroFont = 5;

  const fixedFrameWidth = 1024;
  const fixedFrameHeight = 1366;

  const prevPhotoHeight = window.getComputedStyle(
    document.querySelector(".my-photo")
  ).height;
  const prevPhotoWidth = window.getComputedStyle(
    document.querySelector(".my-photo")
  ).width;

  const prevIntroFont = window.getComputedStyle(
    document.querySelector(".intro")
  ).fontSize;

  // ResizeObserver to notify change in window
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const frameWidth = window.innerWidth;
      const frameHeight = window.innerHeight;

      const newPhotoHeight =
        (frameHeight / fixedFrameHeight) * fixedPhotoHeight;
      const newPhotoWidth = (frameWidth / fixedFrameWidth) * fixedPhotoWidth;
      const newIntroFont = (frameWidth / fixedFrameWidth) * fixedIntroFont + 1;
      if (
        frameWidth === Math.floor(entry.contentRect.width) &&
        frameWidth <= 1024
      ) {
        document.querySelector(".exclamation").style.display = "none";
        document.querySelector(".intro").textContent = "Harshit Raj Sinha";
        if (frameWidth < frameHeight) {
          document.querySelector(".intro").style.fontSize =
            String(newIntroFont / 1.5) + "rem";
          document.querySelector(".skill-desc").style.fontSize =
            String(newIntroFont / 1.8) + "rem";
          document.querySelector(".prev-experience").style.fontSize =
            String(newIntroFont / 2.5) + "rem";
          if (frameWidth <= 540) {
            document.querySelector(".my-photo").style.width =
              String(newPhotoWidth + 60) + "px";
          } else {
            document.querySelector(".my-photo").style.width =
              String(newPhotoWidth + 0) + "px";
          }
          document.querySelector(".my-photo").style.height =
            String(newPhotoHeight) + "px";
        } else {
          document.querySelector(".intro").style.fontSize =
            String(newIntroFont) + "rem";
          document.querySelector(".skill-desc").style.fontSize =
            String(newIntroFont / 2) + "rem";
          document.querySelector(".prev-experience").style.fontSize =
            String(newIntroFont / 3) + "rem";
          document.querySelector(".my-photo").style.width = prevPhotoWidth;
          document.querySelector(".my-photo").style.height = prevPhotoHeight;
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
