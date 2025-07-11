const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const body = document.getElementById("global");
const logo = document.getElementById("logo");

//functions
window.onload = function() {
  alert("Welcome to my portfolio page!")
}
darkMode.onclick = function() {
  body.className = "";
  logo.src="assets/Logo.png";
}
lightMode.onclick = function() {
  body.className = "lightmode";
  logo.src="assets/LogoDark.png";
}