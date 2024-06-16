"use strict";

// const windowWidth = window.innerWidth;
// console.log(`Ширина в'юпорт: ${windowWidth}`);
// const windowHeight = window.innerHeight;
// console.log(`Висота в'юпорта: ${windowHeight}`);

// console.log(navigator.userAgent);

// if (navigator.userAgent.includes("Chrome")) {
//   console.log("Browser Chrome");
// } else {
//   console.log("It's not Chrome");
// }

// console.log(navigator.userAgentData);
// console.log(navigator.userAgentData.platform);

// console.log(location);
// console.log(location.href);
// console.log(location.hash);

// const cleanHash = location.hash.replace("#", "");
// console.log(cleanHash);

// if (cleanHash === "spoiler") {
//   console.log("Spoiler is open");
// }

// location.href += "contacts.html";

// const htmlEl = document.documentElement;
// console.log(htmlEl);
// const body = document.body;
// console.log(body);


//першій та останній вузол
// console.log(body.firstChild);
// console.log(body.lastChild);

// console.log(body.lastElementChild);

// children - повертає html-колекцію
// const childrenElements = document.body.children;
// console.log(childrenElements);

// for (let item of childrenElements) {
//   console.log(item);
// }

// const body = document.body;
// const head = document.head;
// const previousSibling = body.previousElementSibling;
// const nextSibling = head.nextElementSibling;
// console.log(previousSibling);
// console.log(nextSibling);


// const listItem = document.querySelector("li");
// console.log(listItem);

// if (listItem) {
//   console.log(listItem.parentElement);
// }

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// listItems.forEach((el) => {
//   console.log(el);
// });

// if (listItems.length) {
//   listItems.forEach((el, index) => {
//     console.log(el, index);
//   });
// }

// const items = document.querySelectorAll(".skills__item");
// console.log(items);

// const title = document.querySelector(".about__title");
// console.log(title);
// const parentEl = title.parentElement;
// console.log(parentEl);

// const text = document.querySelector(".about__text");
// console.log(text);
// const closestText = text.closest(".page");
// console.log(closestText);

// let aboutTitle = document.querySelector(".about__title");
// console.log(aboutTitle.innerHTML);
// aboutTitle.innerHTML = "This is section title";

// const newElement = document.createElement("article");
// newElement.innerHTML = `<div>It's a block</div>`;
// console.log(newElement);
// const aboutHeader = document.querySelector(".about__header"); 
// aboutHeader.append(newElement);

// const header = document.querySelector('.about__header');
// console.log(header);

// let newElement = `<div class="about__block">Lorem ipsum dolor sit amet`;

// if(header) {
//   newElement += `<a href="#" class="about__link">Link</a>`;
// }
// newElement +=`/div`;

// console.log(newElement);

// header.insertAdjacentHTML("afterbegin", newElement);

/*
let newTitle = document.createElement("h2");
newTitle.innerHTML = `<span>Created title</span>`;
console.log(newTitle);

const sectionHeader = document.querySelector(".about__title");

sectionHeader.insertAdjacentElement("beforebegin", newTitle);
*/

// const aboutText = document.querySelector(".about__text");
// const header = document.querySelector(".header__container");

// header.insertAdjacentElement("afterbegin", aboutText);

// const header = document.querySelector(".about__header");
// const cloneTitle = header.cloneNode(true);

// console.log(cloneTitle);

// const title = document.querySelector(".about__title");
// title.className = "title";

// const title = document.querySelector(".about__title");
// title.classList.add("red");
// title.classList.remove("red");
// title.classList.toggle("red");
// title.classList.contains("red");

// if (title.classList.contains("red")) {
//   console.log("Red");
// }

/*
title.style.fontSize = `85px`;
title.style.color = `green`;
*/

// const titleStyle = getComputedStyle(title);
// const titleStyleFontSize = parseFloat(titleStyle.fontSize);
// console.log(titleStyleFontSize);

// const title = document.querySelector(".about__title");

// title.hasAttribute("href");
// console.log(title.getAttribute("class"));
// console.log(title.setAttribute("name", "new"));
// title.removeAttribute("name");

// data attrib повертає рядок, задля переводу рядка в число
// краще використовувати parseFloat;
// const title = document.querySelector(".about__title");
// const speed = parseFloat(title.dataset.speed);
// const speed = parseFloat(title.dataset.speed) || 1000;
// console.log(speed);

// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// const body = document.body; 
// const bodyWidth = body.clientWidth; 
// const bodyHeight = body.clientHeight;
// console.log(viewportWidth); 
// console.log(viewportHeight); 

// const horizontalScroll = window.scrollX;
// const verticalScroll = window.scrollY;
// console.log(horizontalScroll, verticalScroll);

// const listItem = document.querySelector('.skills__item');
// console.log(listItem.offsetWidth);
// console.log(listItem.offsetHeight);

// const list = document.querySelector('.skills__list');
// const staticItems = document.querySelectorAll('.skills__item');
// console.log(staticItems);

// const listItems = list.children;
// console.log(listItems);

// list.insertAdjacentHTML('beforeend', `<li class='skills__item'>New item</li>`);
// console.log(listItems)

// listItems.forEach(el => {
//   console.log(item);
// });
// listItems.forEach(el => {
//   console.log(el);
// });


// !================== TASK 1 ==================
/*Задача №1
Отримати в константу елемент <body>*/

// const bodyElement = document.body;
// console.log(bodyElement); 

// !================== TASK 2 ==================
/*Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)*/


// function addList(listItem = 1) {
//   const bodyElement = document.querySelector('body');
//   bodyElement.insertAdjacentHTML('afterbegin', `<ul class="list"></ul>`)
//   if (typeof listItem === "number") {
//     for(let i = 1; i <= listItem; i++) {
//       const item = document.querySelector('.list');
//       item.insertAdjacentHTML('beforeend',`<li class="item">Item №${i}</li>`)
//     }
//   } else {
//     console.log("Error");
//     return "Error";
//   }
// }

// addList(3);
// addList(5);
// addList(10);
// addList("dsf");

// !================== TASK 3 ==================
/*Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.*/

// const bodyElement = document.body;
// bodyElement.classList.add("loaded");

// if(bodyElement.classList.contains("loaded")) {
//   bodyElement.style.color = `green`;
// }

// !================== TASK 4 ==================
/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".*/
// const listItems = document.querySelectorAll(".homework__item");
// listItems.forEach((el,index)=> {
//   el.classList.add('active');
//   el.innerHTML = `Елемент №${index+1}`;
// })

// !================== TASK 5 ==================
/*Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки*/

// const button = document.querySelector('.homework__button');
// button.style.cssText = `
//   margin-block: 50px;
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 1.5;
//   padding: 10px 25px;
//   background-color: #fff;
//   color: #2400ff;
//   border-radius: 5px;
// `
// function scrollToBlock(eleme) {
//   button.scrollIntoView({
//     block: "start",
//     inline: "center",
//     behavior: "smooth",
//   })
// }
// scrollToBlock(button);


// !================== TASK 6 ==================

/*Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний*/

// const link = document.querySelector('.homework__link');
// link.setAttribute("data-duration", 100);
// const linkAttrValue = parseFloat(link.dataset.duration);

// linkAttrValue < 200 ? link.style.color = `red` : console.log(linkAttrValue);
