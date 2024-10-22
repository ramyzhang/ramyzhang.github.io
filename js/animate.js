const body = document.getElementsByTagName("body")[0];
const songButtons = document.getElementsByClassName("song");
const playlistButtons = Array.prototype.map.call(document.getElementsByClassName("player_button"), x => x.firstElementChild);
const backLink = document.getElementById("go_back").getAttribute("href");
const forwardLink = document.getElementById("go_forward").getAttribute("href");
const playlistLinks = ["aboutme.html", "projects.html", "/blog", "links.html"]

playlistButtons.forEach(button => {
    button.removeAttribute("href");
}); // prevent the links from navigating right away

if (songButtons.length > 1) { // if we're in index.html
    for (const button of songButtons) {
        button.addEventListener("click", navigatePlaylist.bind(this, button.id));
    }
}

function navigate(isForward) {
    var link = isForward ? forwardLink : backLink;

    // trigger fadeout animation
    body.classList.remove("animate-out");
    void body.offsetWidth;
    body.classList.add("animate-out");

    // open new tab
    setTimeout(function() {
       window.open(link, "_self").focus();
    }, 500);
}

function navigateHome() {
    // trigger fadeout animation
    body.classList.remove("animate-out");
    void body.offsetWidth;
    body.classList.add("animate-out");

    // open new tab
    setTimeout(function() {
       window.open("index.html", "_self").focus();
    }, 500);
}

function navigatePlaylist(id) {
    var i = parseInt(id);

    body.classList.remove("animate-out");
    void body.offsetWidth;
    body.classList.add("animate-out");

    // open new tab
    setTimeout(function() {
       window.open(playlistLinks[i], "_self").focus();
    }, 500);
}