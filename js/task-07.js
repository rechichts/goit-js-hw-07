"use strict";

const defs = {
  input: document.querySelector("#font-size-control"),
  output: document.querySelector("#text")
};

function handlerFontSize({ target }) {
  defs.output.style.fontSize = `${target.value}px`;
}

defs.input.addEventListener("input", handlerFontSize);