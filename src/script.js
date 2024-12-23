document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded");

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

  window.addEventListener("resize", function (e) {
    const frameWidth = window.innerWidth;
    const frameHeight = window.innerHeight;

    const newPhotoHeight = (frameHeight / fixedFrameHeight) * fixedPhotoHeight;
    const newPhotoWidth = (frameWidth / fixedFrameWidth) * fixedPhotoWidth;
    const newIntroFont = (frameWidth / fixedFrameWidth) * fixedIntroFont + 1;
    if (frameWidth <= 1024) {
      if (frameWidth < frameHeight) {
        document.querySelector("#intro-ss").style.fontSize =
          String(newIntroFont / 1.2) + "rem";
        document.querySelector("#skill-desc").style.fontSize =
          String(newIntroFont / 1.8) + "rem";
        document.querySelector("#prev-experience").style.fontSize =
          String(newIntroFont / 2.5) + "rem";
      } else {
        document.querySelector("#intro-ss").style.fontSize =
          String(newIntroFont) + "rem";
        document.querySelector("#skill-desc").style.fontSize =
          String(newIntroFont / 2) + "rem";
        document.querySelector("#prev-experience").style.fontSize =
          String(newIntroFont / 3) + "rem";
      }
    }
  });
});
