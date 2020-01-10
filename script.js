// Toggles show/hide menu on small viewports
function menuReveal() {
  let menu = document.getElementById("nav");

  if (menu.className === "navi") {
    menu.className += "show";
  } else {
    menu.className = "navi";
  }
}

// Returns user back to the top of the page
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
