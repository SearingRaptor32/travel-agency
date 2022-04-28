var vote_n = 0;
function redirect_a() {
  window.location = "https://searingraptor32.github.io/travel-agency/index.html";
}
function redirect_b() {
  window.location = "https://searingraptor32.github.io/travel-agency/about.html";
}
function upvote() {
  vote_n = vote_n + 1;
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}
function downvote() {
  if (vote_n>0) {vote_n = vote_n - 1}
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}