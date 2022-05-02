var vote_n = 0;
function redirect_a() {
  window.location = "https://searingraptor32.github.io/travel-agency/";
}
function redirect_b() {
  window.location = "https://searingraptor32.github.io/travel-agency/about.html";
}
function redirect_c() {
  window.location = "https://searingraptor32.github.io/travel-agency/contact.html";
}
function upvote() {
  vote_n = vote_n + 1;
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}
function downvote() {
  if (vote_n>0) {vote_n = vote_n - 1}
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}

var elements = document.getElementsByClassName("column");

var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "20%";  // IE10
    elements[i].style.flex = "20%";
}
