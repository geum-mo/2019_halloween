const video = document.querySelector("#mainVideoPlay");
const button = document.querySelector("#unmuteButton");
const circles = document.querySelector("#pulser");

const NOTSHOWING_CN = "notShowing";

function unmuteVideo(event) {
  event.preventDefault();
  video.muted = false;
}

function muteVideo(event) {
  event.preventDefault();
  video.muted = true;
}

function loadBtn() {
  if (video.muted === true) {
    button.addEventListener("click", unmuteVideo);
  } else {
    button.addEventListener("click", muteVideo);
  }
  console.log(video.muted);
}

function init() {
  loadBtn();
  setTimeout(() => {
    circles.classList.add(NOTSHOWING_CN);
  }, 6000);
}

init();
