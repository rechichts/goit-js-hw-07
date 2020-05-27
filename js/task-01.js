"use strict";

const items = document.querySelector("#categories").children;
console.log(`В списке ${items.length} категории.`);

const header = [...items].reduce(
  (acc, e) =>
    acc +
    `Категория: ${e.firstElementChild.textContent}` +
    `\n` +
    `Количество элементов: ${e.lastElementChild.children.length}` +
    `\n`,
  ``
);

console.log(header);