"use strict";

// // Data
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

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
})