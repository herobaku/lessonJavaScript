const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionFooter = document.querySelectorAll(".accordion-footer");
const paragraph = document.querySelectorAll(".accordion-footer p");

accordionHeader.forEach((item, index) => {

  item.addEventListener("click", () => {
    const footer = accordionFooter[index];
    const p = paragraph[index];
    footer.classList.toggle("active")
    if (footer.classList.contains("active")) {
      p.classList.add("active")
    } else {
      p.classList.remove("active")
    }
  })

})