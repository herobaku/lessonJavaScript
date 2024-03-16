const submit = document.querySelector(".submit");
const stateSubmit = document.querySelector(".state-submit");
const stateThanks = document.querySelector(".state-thanks");
const ratingValue = document.querySelector("#rating");
const rating = document.querySelectorAll(".rating-item");

let activeItemFound = false;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  rating.forEach(item => {
    if (item.classList.contains("active")) {
      stateSubmit.style.display = "none"
      stateThanks.style.display = "block"
      ratingValue.innerHTML = item.textContent
      activeItemFound = true
    }
  })
  if (!activeItemFound) {
    const al = alert("Select rating")
    return al
  }
})

const clickEl = () => {
  const activateButton = (button) => {
    rating.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeItemFound = true
  };

  rating.forEach(button => {
    button.addEventListener('click', () => {
      activateButton(button);
    });
  });
}

clickEl()