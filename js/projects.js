const playerButton = document.getElementById('player_button');
const tabColours = ["#e8dff5", "#fce1e4", "#fcf4dd", "#ddedea", "#daeaf6"]

function pausePlay(playerButton) {
  if (playerButton.className == "far fa-play-circle fa-2x") {
    playerButton.className = "far fa-pause-circle fa-2x";
  } else {
    playerButton.className = "far fa-play-circle fa-2x";
  }
}

function openTab(tabName) {
  var i;
  var portfolios = document.getElementsByClassName("portfolio");
  var tabs = document.getElementsByClassName("portfolio_tab");
  var displayedPortfolio = document.getElementById(tabName);
  var colourIndex = 0;
  for (i = 0; i < portfolios.length; i++) {
    portfolios[i].style.display = "none";
    tabs[i].style.backgroundColor = "";
    if (portfolios[i] == document.getElementById(tabName)) {
      colourIndex = i;
    }
  }
  displayedPortfolio.style.display = "grid";
  displayedPortfolio.style.backgroundColor = tabColours[colourIndex];
  document.querySelector(`.${tabName}`).style.backgroundColor = tabColours[colourIndex];
}
