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
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //Here are the prompts and confirms for the user choices for the password.
  var upperCasedCharactersPrompt = confirm("Do you want uppercase letters?");
  var lowerCasedCharactersPrompt = confirm("Do you want lowercase letters?");
  var numericCharactersPrompt = confirm("Do you want numbers?");
  var specialCharactersPrompt = confirm("Do you want special characters?");
  var passwordLengthInput = prompt("Enter a numeric length for the password between 8 and 128 characters.");
  var passwordLength = parseInt(passwordLengthInput);

  //If the password is shorter than 8 characters or longer than 128, the user is prompted to enter a correct length.
  if (passwordLength < 8) {
    alert("Please enter a value greater than 8.");
    return '';
  } else if (passwordLength > 128) {
    alert("Please enter a value less than 128.");
    return '';
  }

  // if(!upperCasedCharactersPrompt && !lowerCasedCharactersPrompt && !numericCharactersPrompt && !specialCharactersPrompt){
  if (
    !(
      upperCasedCharactersPrompt ||
      lowerCasedCharactersPrompt ||
      numericCharactersPrompt ||
      specialCharactersPrompt
    )
  ) {
    alert("Please select atleast one criteria!");
    return "";
  }

  //The if statements concat the appopriate array into totalArray
  var totalArray = [];
  //The statements push one random character from each choice into password array
  var password = [];
  //If user chooses to include uppercased characters, the upperCasedCharacters array is push into totalArray
  if (upperCasedCharactersPrompt) {
    totalArray = totalArray.concat(upperCasedCharacters);
    password.push(randomElement(upperCasedCharacters));
  }

  //If user chooses lowercased characters, the lowerCasedCharacters array is pushed into totalArray
  if (lowerCasedCharactersPrompt) {
    totalArray = totalArray.concat(lowerCasedCharacters);
    password.push(randomElement(lowerCasedCharacters));
  }

  //If user chooses numeric characters, the numericCharacters array is pushed into totalArray
  if (numericCharactersPrompt === true) {
    totalArray = totalArray.concat(numericCharacters);
    password.push(randomElement(numericCharacters));
  }

  //If user chooses special characters, the specialCharacters array is pushed into totalArray
  if (specialCharactersPrompt === true) {
    totalArray = totalArray.concat(specialCharacters);
    password.push(randomElement(specialCharacters));
  }

  //This for statement uses the random element function to scramble totalArray and push the scrambled results into password.
  for (var i = password.length; i < passwordLength; i++) {
    var scrambled = randomElement(totalArray);
    password.push(scrambled);
  }

  //The password is shuffled again with the shuffle array
  return shuffle(password).join("");
}


// JSDoc3
/**
 * 
 * @param {any[]} arr Any array
 */
//function shuffle uses the shuffle algorythm 
function shuffle(arr = []) {
  for (var i = 0; i < arr.length; i++) {
    var rand = Math.floor(Math.random() * arr.length);

    var temp1 = arr[i];
    var temp2 = arr[rand];

    arr[i] = temp2;
    arr[rand] = temp1;
  }

  return arr;
}

//function randomElement takes in an array as a parameter and returns a random element of the array using the index position.
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
