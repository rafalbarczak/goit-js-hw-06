const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const text = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnEl.addEventListener("click", () => {
  text.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = text.textContent;
});
