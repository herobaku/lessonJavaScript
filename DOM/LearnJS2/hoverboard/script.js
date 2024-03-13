const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

let squareCount = 500;

const squareCountAdd = (e) => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  e.style.backgroundColor = color
  e.style.boxShadow = `0px 0px 5px ${color}`
}

const squareCountRemove = (e) => {
  e.style.backgroundColor = "#1d1d1d"
  e.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < squareCount; i++) {
  const div = document.createElement("div")
  div.classList.add("square")
  div.addEventListener("mouseover", () => squareCountAdd(div))
  div.addEventListener("mouseleave", () => squareCountRemove(div))
  container.appendChild(div)
}