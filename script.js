var i = 0;
var txt = "c:/user/ploypiti> start portfolio.exe";
var spd = 80;

function type() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, spd);
  }
}

window.onload = type;
