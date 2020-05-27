"use strict";

const defs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("input[type='number']"),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  output: document.querySelector("#boxes")
};

const BASE = 30;
// const STEP = 10;

function createRandomColor() {
  return Math.floor(Math.random() * 256);
}

function createRandomRGB() {
  return `rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`;
}

function createBoxes() {
  const elements = Array(Number(defs.input.value))
    .fill(0)
    .map((e, i) => {
      const div = document.createElement("div");
      div.style.cssText = `background-color: ${createRandomRGB()}; width: ${BASE +
        i * 10}px; height: ${BASE + i * 10}px;`;
      return div;
    });
  defs.output.append(...elements);
}

function destroyBoxes() {
  defs.output.innerHTML = "";
  defs.input.value = "";
}

defs.render.addEventListener("click", createBoxes);
defs.destroy.addEventListener("click", destroyBoxes);