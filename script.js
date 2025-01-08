const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

//******Fremhævning af menupunkt *******/

const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
