const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const body = document.body

btn.forEach(item => {
  item.addEventListener("click", () => {
    body.classList.add("modal-open")
    modal.classList.add("active")
  })
})

close.addEventListener("click", () => {
  body.classList.remove("modal-open")
  modal.classList.remove("active")
})