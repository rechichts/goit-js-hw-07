"use strict";
const gallery = document.querySelector("#gallery");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const createdItems = images
  .map(({ url, alt }) => `<li> <img src="${url}" alt="${alt}"> </li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", createdItems);

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";

const listItems = gallery.querySelectorAll("li");

listItems.forEach(e => {
  e.style.listStyle = "none";
  e.style.flexBasis = "400px";
  e.style.padding = "20px";
});

const imagesList = gallery.querySelectorAll("img");

imagesList.forEach(e => (e.style.width = "100%"));