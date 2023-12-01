function videoURL(link) {
    document.getElementById("slider").src = link;
}

var video = document.getElementById("videoBack");
var btn = document.getElementById("myBtn");

function pause() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause Background";
    } else {
      video.pause();
      btn.innerHTML = "Play Background";
    }
  }