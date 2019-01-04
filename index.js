var document;

function go() {
  "use strict";
  var n = Math.floor(Math.random() * 100) + 1;

  if (n === 100) {
    document.querySelector(".p1").innerHTML = "You are " + n + "% matched.";
    document.querySelector(".p2").innerHTML = "You have found your soul mate.";
  } else if (n === 50) {
    document.querySelector(".p1").innerHTML = "You are " + n + "% matched.";
    document.querySelector(".p2").innerHTML = "Even I'm not sure....";
  } else if (n === 1) {
    document.querySelector(".p1").innerHTML = "You are " + n + "% matched.";
    document.querySelector(".p2").innerHTML = "Worth possible person. EVER!";
  } else if (n < 50) {
    document.querySelector(".p1").innerHTML = "You are " + n + "% matched.";
    document.querySelector(".p2").innerHTML = "You are better with someone else.";
  } else {
    document.querySelector(".p1").innerHTML = "You are " + n + "% matched.";
    document.querySelector(".p2").innerHTML = "At least this is worth a try.";
  }
}
