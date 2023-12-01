function videoURL(link) {
    document.getElementById("slider").src = link;
};

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
  };

  document.getElementById('mobile-menu').addEventListener('click', function() {
    var navItems = document.querySelector('.nav-items');
    navItems.style.display = (navItems.style.display === 'flex' || navItems.style.display === '') ? 'none' : 'flex';
  });
