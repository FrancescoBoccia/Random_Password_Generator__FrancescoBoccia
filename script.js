"use script";

const passwordLength = document.querySelector(".password__choosenLength");
const passwordInputRange = document.querySelector('input[type="range"]');

const passwordUppercase = document.getElementById("setting__upperCase");
const passwordLowercase = document.getElementById("setting__lowercase");
const passwordNumbers = document.getElementById("setting__numbers");
const passwordSymbols = document.getElementById("setting__symbols");

const passwordContainer = document.querySelector(".container__button");
const generateButton = document.querySelector(".generate__button");

// Background Input Follow The Slider Thumb

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type === "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  passwordLength.textContent = val;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

// Generate Password

function generateRandomPassword() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()";

  let characters = "";
  let password = "";
  let passwordLengthContent = passwordLength.textContent;

  if (passwordUppercase.checked === true) {
    characters += upperCase;
  }
  if (passwordLowercase.checked === true) {
    characters += lowerCase;
  }
  if (passwordNumbers.checked === true) {
    characters += numbers;
  }
  if (passwordSymbols.checked === true) {
    characters += symbols;
  }

  for (let i = 0; i <= passwordLengthContent; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }

  passwordContainer.textContent = password;
}

// Event Listener

passwordInputRange.addEventListener("input", handleInputChange);
generateButton.addEventListener("click", generateRandomPassword);
