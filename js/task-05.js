"use strict";

const defs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output")
};

function changeInput({ target }) {
  if (target.value.length === 0) {
    defs.output.textContent = "незнакомец";
  } else defs.output.textContent = target.value;
}

defs.input.addEventListener("input", changeInput);