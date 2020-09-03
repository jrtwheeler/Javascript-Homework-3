// Assignment Code
// Array of special characters to be included in password
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
//Array of total random items
var totalArray = [];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCasedCharactersPrompt = confirm("Do you want uppercase letters?");
  var lowerCasedCharactersPrompt = confirm("Do you want lowercase letters?");
  var numericCharactersPrompt = confirm("Do you want numbers?");
  var specialCharactersPrompt = confirm("Do you want special characters?");

  //If user chooses to include uppercased characters, the upperCasedCharacters array is push into totalArray
  if (upperCasedCharactersPrompt) {
    totalArray.push(upperCasedCharacters);
  }

  //If user chooses lowercased characters, the lowerCasedCharacters array is pushed into totalArray
  if (lowerCasedCharactersPrompt) {
    totalArray.push(lowerCasedCharacters);
  }

  //If user chooses numeric characters, the numericCharacters array is pushed into totalArray
  if (numericCharactersPrompt === true) {
    totalArray.push(numericCharacters);
  }

  //If user chooses special characters, the specialCharacters array is pushed into totalArray
  if (specialCharactersPrompt === true) {
    totalArray.push(specialCharacters);
  }

  var merged = [].concat.apply([], totalArray);
  var scrambledpassword = [];
  for (i = 0; i < 10; i++) {
    var scrambled = merged[Math.floor(Math.random() * merged.length)];
    scrambledpassword.push(scrambled);
  }

  var almostpasword = scrambledpassword.toString();
  var password = almostpasword.replace(/,/g, "");
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
