function collapsingNavButton() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
      nav.className += " responsive";
    } else {
      nav.className = "nav";
    }
  }