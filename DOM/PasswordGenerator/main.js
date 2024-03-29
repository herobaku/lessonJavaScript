"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Input
const displayShowGenerate = document.getElementById("generate");

// Input show value character
const output = document.getElementById("value");

// Range input 20 sybmol generate
const rangeSlider = document.getElementById("range");

// Input Elements
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const numbersInput = document.getElementById("number");
const symbolsInput = document.getElementById("symbol");

// Button return Generate all character
const button = document.querySelector(".btn");

// Click Copy
const switchEl = document.querySelector(".switch")

// Default the value
output.innerText = 6

const copy = document.querySelector(".copy");

rangeSlider.addEventListener("input", (e) => {
  let x = e.target.value;
  // AI
  let percentage = (x - rangeSlider.min) / (rangeSlider.max - rangeSlider.min) * 100;
  rangeSlider.style.background = `linear-gradient( 90deg, rgb(164, 255, 175) ${percentage}%, rgb(17, 16, 22) ${percentage}%)`
  output.innerText = x
})

rangeSlider.addEventListener("mousedown", () => {
  rangeSlider.classList.add("active")
})

rangeSlider.addEventListener("mouseup", () => {
  rangeSlider.classList.remove("active")
})

const getRandomPassword = () => {
  let password = [];

  if (upperInput.checked) {
    password.push(
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    )
  }
  if (lowerInput.checked) {
    password.push(
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    )
  }
  if (numbersInput.checked) {
    password.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    )
  }
  if (symbolsInput.checked) {
    password.push(
      special[Math.floor(Math.random() * special.length)]
    )
  }

  if (password.length === 0) {
    return "";
  } else {
    return password[Math.floor(Math.random() * password.length)]
  }
}

const setRandomPassword = () => {
  let passwordData = ""
  for (let i = 0; i < rangeSlider.value; i++) {
    passwordData += getRandomPassword();
  }
  displayShowGenerate.value = passwordData;
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  setRandomPassword();
})

copy.addEventListener("click", () => {
  if (window.navigator.clipboard.writeText(displayShowGenerate.value)) {
    switchEl.innerHTML = `<i class='bx bx-check-double'></i>`
  }
})