const dark = document.querySelector(".group-dark");
const footer = document.querySelector("footer");
const card = document.querySelectorAll(".card");
let trust = false

dark.addEventListener("click", () => {
  if (!trust) {
    document.body.style.backgroundColor = "black";
    footer.classList.add("active");
    card.forEach((item) => {
      item.classList.add("active");
    });
    dark.classList.add("active");
    trust = true;
  } else {
    document.body.style.backgroundColor = "white"
    dark.classList.remove("active")
    footer.classList.remove("active")
    card.forEach((item) => {
      item.classList.remove("active");
    });
    trust = false
  }
})