"use strict";

window.addEventListener("scroll", scrollPage);

function scrollPage(e) {
  const verticalScroll = window.scrollY;
  const header = document.querySelector(".header");
  if (verticalScroll > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// const homeworkItem = document.querySelector(".item-homework");

// homeworkItem.addEventListener("mouseenter", changeContent);
// homeworkItem.addEventListener("mouseleave", changeContent);

// function changeContent(e) {
//   const targetElement = e.target;
//   const typeElement = e.type;
//   if (targetElement.closest(".item-homework"))
//     if (e.type === "mouseenter") {
//       homeworkItem.classList.add("_content");
//     } else if (e.type === "mouseleave") {
//       homeworkItem.classList.remove("_content");
//     }
// }

// window.addEventListener("scroll", windowScroll);

// function windowScroll(e) {
//   console.log(window.scrollY);
//   console.log(itemHomework.getBoundingClientRect().top - window.innerHeight);
// }

// const animElements = document.querySelectorAll("[class*='--anim']");
// animElements.forEach((animElement) => {
//   observer.observe(animElement);
// });
//! =====================================================================
/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас */

// document.addEventListener("click", documentAction);

function documentAction(e) {
  const currentItem = e.target;
  if (currentItem.closest(".item")) {
    currentItem.classList.toggle("active");
  }
}

// const items = document.querySelectorAll(".item");
// console.log(items);
// items.forEach((item) => item.addEventListener("click", () => item.classList.toggle("active")));

/*Задача №2 
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який 
прибирає прозорість.*/

window.addEventListener("load", siteLoad);

function siteLoad(e) {
  document.documentElement.classList.add("loaded");
}

/*Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.*/

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

header.addEventListener("mouseenter", hover);
header.addEventListener("mouseleave", hover);

function hover(e) {
  const targetElement = e.target;
  if (targetElement.closest(".header")) {
    if (e.type === "mouseenter") {
      footer.classList.add("_change-color");
    } else if (e.type === "mouseleave") {
      footer.classList.remove("_change-color");
    }
  }
}

/*Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що 
елемент з класом item за межами в'юпотрта. Створити функцію 
яка будує інтервал який буде змінювати контент в елементі item
виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати 
інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу 
item (його видно), і не запускатись повторно.*/
//

const content = document.querySelector(".item-homework__content");

const delay = parseFloat(content.dataset.delay);
const incrementFrom = parseFloat(content.dataset.from);

let i = 1;
let timer = setInterval(() => {
  content.innerHTML = `${i}`;
  i === incrementFrom ? clearInterval(timer) : null;
  i++;
}, delay);

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  treshold: 0,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    const currentElement = entry.target;
    entry.isIntersecting
      ? currentElement.classList.add("show")
      : currentElement.classList.remove("show");
  });
};
const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".item-homework");
observer.observe(target);
// observer.unobserve(target);
