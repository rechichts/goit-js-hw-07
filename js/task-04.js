"use strict";

const counter = {
  body: document.querySelector("#counter"),
  outputValue: document.querySelector("#value"),
  value: 0,
  increment() {
    this.value = this.value + 1;
    this.outputValue.textContent = this.value;
  },
  decrement() {
    this.value = this.value - 1;
    this.outputValue.textContent = this.value;
  }
};

function eventHandler({ target }) {
  counter[target.dataset.action]();
}

counter.body.addEventListener("click", eventHandler);