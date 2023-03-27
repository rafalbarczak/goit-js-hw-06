const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.getElementById("value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterEl.textContent = counterValue;
});
