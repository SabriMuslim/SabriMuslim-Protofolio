// add class activ to header
let header = document.querySelector("header");
window.onscroll = function () {
  if (this.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
let navLinks = document.getElementById("links");
let menu = document.getElementById("menu");

menu.onclick = function openClosMenu() {
  navLinks.classList.toggle("active");
};
