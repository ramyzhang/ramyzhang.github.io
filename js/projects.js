const playerButton = document.getElementById('player_button');

function pausePlay(playerButton) {
  if (playerButton.className == "far fa-play-circle fa-2x") {
    playerButton.className = "far fa-pause-circle fa-2x";
  } else {
    playerButton.className = "far fa-play-circle fa-2x";
  }
}
