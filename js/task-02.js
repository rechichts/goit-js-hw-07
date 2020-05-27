"use strict";

let ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const parent = document.querySelector("#ingredients");

const ingredientsList = ingredients.map(e => {
  const listItem = document.createElement("li");
  listItem.textContent = e;
  return listItem;
});

parent.append(...ingredientsList);