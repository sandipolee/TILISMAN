function menue() {
    var x = document.querySelector("#navbar");
    if (x.className === "main-navs") {
      x.className += "responsive";
    } else {
      x.className = "main-navs";
    }
  }