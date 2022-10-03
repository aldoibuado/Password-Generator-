// Assignment code here
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function generatePassword() {
  var password = "";
  var chosenCharacters = [];

  // window will prompt you to put in a number for the length and different options in regards to the password
  var passwordLength = window.prompt("How long of a password would you like");
  if (isNaN(passwordLength)) {
    alert("you must enter a number");
    return "";
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("you must enter an amount between 8 to 128");
    return "";
  }
  var includeSpecialChars = confirm(
    "Would you like to include special characters"
  );
  if (includeSpecialChars)
    chosenCharacters = [...chosenCharacters, ...specialCharacters];

  var includeUpperChars = confirm(
    "Would you like to include uppercase characters"
  );
  if (includeUpperChars)
    chosenCharacters = [...chosenCharacters, ...upperCasedCharacters];

  var includeLowerChars = confirm(
    "Would you like to include lowercase characters"
  );
  if (includeLowerChars)
    chosenCharacters = [...chosenCharacters, ...lowerCasedCharacters];

  var includeNumberChars = confirm(
    "Would you like to include numeric characters"
  );
  if (includeNumberChars)
    chosenCharacters = [...chosenCharacters, ...numericCharacters];

  if (
    !includeSpecialChars &&
    !includeUpperChars &&
    !includeLowerChars &&
    !includeNumberChars
  ) {
    alert("you have to have some characters");
    return "";
  }

  //   logic to modify 'password'
  for (let index = 0; index < passwordLength; index++) {
    var random = Math.floor(Math.random() * chosenCharacters.length);
    var randomCharacter = chosenCharacters[random];
    password += randomCharacter;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
