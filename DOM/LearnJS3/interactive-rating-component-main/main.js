const submit = document.querySelector("form");
const stateSubmit = document.querySelector(".state-submit");
const stateThanks = document.querySelector(".state-thanks");
const ratingValue = document.querySelector("#rating");
const rating = document.querySelectorAll(".rating-item");

let rate = 0

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  stateSubmit.style.display = "none"
  stateThanks.style.display = "block"
})

// const ratingNext = () => {
//   rating.forEach((element, index) => {
//     element.addEventListener("click", (e) => {
//       const i = index + 1
//       if (e.target.checked) {
//         element.classList.add("active")
//         ratingValue.innerHTML = i;
//       } else {
//         element.classList.remove("active")
//       }
//     })
//   });
// }

ratingNext();