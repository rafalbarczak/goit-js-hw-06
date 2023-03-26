const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.getElementById("ingredients");

function makeLi(item) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  listEl.append(listItem);
}
ingredients.forEach(makeLi);
