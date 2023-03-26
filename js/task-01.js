const listEl = document.getElementById("categories");
const categories = Array.from(listEl.children);

console.log(`Number of categories: ${categories.length}`);

function logMessage(item) {
  console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`);
}

categories.forEach(logMessage);
