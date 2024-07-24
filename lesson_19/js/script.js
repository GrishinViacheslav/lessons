"use strict"
const header = document.querySelector(".header");
window.addEventListener("scroll", scrollPage);

function scrollPage(e) {
  const verticalScroll = window.scrollY;
  if (verticalScroll > 0) {
    header.classList.add("_scroll");
  } else {
    header.classList.remove("_scroll");
  }
}

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".burger-menu")) {
    document.documentElement.classList.toggle("_menu-open");
  }
});

const searchButton = document.querySelector(".top-header__search-button");

searchButton.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".header")) {
    header.classList.toggle("_open-search");
  }
});
