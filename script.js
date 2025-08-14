const box = document.getElementById("colorBox");
const button = document.getElementById("changeBtn");

const colors = ["lightblue", "lightcoral", "lightgreen", "lightpink", "gold", "lightsalmon", "lightseagreen"];
let index = 0;

button.addEventListener("click", () => {
  index = (index + 1) % colors.length;
  box.style.backgroundColor = colors[index];
  box.textContent = colors[index]
    .replace("light", "")
    .trim()
    .toUpperCase();
});
