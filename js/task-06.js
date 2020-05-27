"use strict";

const defs = {
  input: document.querySelector("#validation-input")
};

function checkForSym({ target }) {
  if (+target.value.length === +target.dataset.length) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
}

defs.input.addEventListener("blur", checkForSym);