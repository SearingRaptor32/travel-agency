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

var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}