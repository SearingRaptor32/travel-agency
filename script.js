var vote_n = 0;
function redirect_a() {
  window.location = "https://searingraptor32.github.io/ocean_resort/index.html";
}
function redirect_b() {
  window.location = "https://searingraptor32.github.io/ocean_resort/about.html";
}
function upvote() {
  vote_n = vote_n + 1;
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}
function downvote() {
  if (vote_n>0) {vote_n = vote_n - 1}
  document.getElementById("likes").innerHTML = vote_n + " likes!"
}