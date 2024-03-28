"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Password
const passwordEl = document.querySelector(".password");
// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(
  ".generator__length-counter button"
);
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");

// Functionality
let counter = 6;
let myPassword = "";

counterEl.textContent = counter;


decreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter > 6) counter--
  counterEl.textContent = counter;
})

increaseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter < 20) counter++
  counterEl.textContent = counter;
})

// GetRandomPassword
const getRandomPassword = () => {
  // An empty array has been created here in order to store our data
  let pass = []

  // If the checkbox button is clicked, then each data element will be recorded in an empty pass array
  upperInput.checked ? pass.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]) : "";
  lowerInput.checked ? pass.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]) : "";
  numbersInput.checked ? pass.push(numbers[Math.floor(Math.random() * numbers.length)]) : "";
  symbolsInput.checked ? pass.push(special[Math.floor(Math.random() * special.length)]) : "";

  // If the length of our empty array is zero, it will return nothing
  // if (pass.length === 0) return " ";

  // Each length of data that has been added to an empty array will be multiplied by the length of the pass
  // return pass[Math.floor(Math.random() * pass.length)]

  // This is a shortened version
  return pass.length === 0 ? " " : pass[Math.floor(Math.random() * pass.length)];
}

// Функция для 
const setRandomPassword = () => {
  myPassword = ""
  for (let i = 0; i < counter; i++) {
    myPassword += getRandomPassword();
  }
  passwordEl.textContent = myPassword;
}

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setRandomPassword();
})