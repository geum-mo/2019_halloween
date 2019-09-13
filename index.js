const video = document.querySelector("#mainVideoPlay");
const button = document.querySelector("#unmuteButton");
const circles = document.querySelector("#pulser");

function unmuteVideo(event) {
  event.preventDefault();
  video.muted = false;
}

function init() {
  button.addEventListener("click", unmuteVideo);
}

init();
