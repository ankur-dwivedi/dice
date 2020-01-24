var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
var m = Math.random();
m = m * 6;
m = Math.floor(m) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + n + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + m + ".png");

if(n>m)
document.querySelector("h1").textContent="Player 1 wins";
if(n<m)
document.querySelector("h1").textContent="Player 2 wins";
