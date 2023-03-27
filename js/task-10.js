const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = controls.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; width:${
        30 + i * 10
      }px; height:${30 + i * 10}px"></div>`
    );
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  let amount = inputEl.value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
