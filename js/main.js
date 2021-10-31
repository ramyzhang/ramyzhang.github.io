const heart = document.querySelector('.heart_icon');
const share = document.querySelector('#share');
const songs = document.getElementsByClassName('song');
const songLinks = document.getElementsByClassName('song_link');
var heartFill = false;

// defining a function for playing the pop_animate css animation on a given object
popAnimate = function(poppingItem) {
  poppingItem.classList.add("pop_animate");
  setTimeout(function () {
    poppingItem.classList.remove("pop_animate");
  }, 500);
}

// executes animation to make the heart icon become red and make it pop onClick
heart.onclick = function() {
  if (heartFill) {
    this.style.fill = "transparent";
    popAnimate(heart);
    heartFill = false;
  } else {
    this.style.fill = "red";
    popAnimate(heart);
    heartFill = true;
  }
};

// executes animation to make share button pop onClick
share.onclick = function() {
  popAnimate(share);
}

// adds individual event listeners to each song in the playlist area
for (var i = 0; i < songs.length; i++) {
    songs[i].addEventListener('click', handleSongClick);
}

// handle click events on each song and directs user to the link associated with the song
function handleSongClick(event) {
  console.log(this);
  songLinks[this.id].click();
}
