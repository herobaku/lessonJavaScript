// Button click plus and minus
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
// Count Value
const count = document.querySelector(".count")
count.innerText = 0;
// Assignment
let assignment = 0;

const zero = () => {
  if (assignment === 0) {
    count.style.color = "white"
  }
}

decrement.addEventListener("click", () => {
  assignment--
  count.innerHTML = assignment
  if (assignment < 0) {
    count.style.color = "red"
  } else {
    zero();
  }
})

increment.addEventListener("click", () => {
  assignment++
  count.innerHTML = assignment
  if (assignment > 0) {
    count.style.color = "green"
  } else {
    zero();
  }
})