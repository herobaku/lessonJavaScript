const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.forEach(item => {
  item.addEventListener("click", () => {
    if (!false) {
      modal.classList.add("active")
    }
  })
})

close.addEventListener("click", (e) => {
  modal.classList.remove("active")
})