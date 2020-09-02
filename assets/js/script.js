// Assignment Code
var generateBtn = document.querySelector("#generate");

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function generatePassword() {
  var lettersPrompt = confirm("Do you want letters?");
  var numbersPrompt = confirm("Do you want numbers?");
  var specialCharactersPrompt = confirm("Do you want special characters?");
  var password = [];
  var shuffledpassword = [];

  if (lettersPrompt === true) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
  }

  if (numbersPrompt === true) {
    //for (var i = 0; i < 10; i++) {
    //  password += Math.floor(Math.random() * 10);
    //}
    var numbers = new Uint32Array(1);
    window.crypto.getRandomValues(numbers);

    for (var i = 0; i < numbers.length; i++) {
      password += numbers[i];
    }
  }

  if (specialCharactersPrompt === true) {
    var characters =
      "!@#$%^&*()+~`:?><";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
  }

  for (var i = password.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = password[i];
    password[i] = password[j];
    password[j] = temp;
    shuffledpassword += temp;
}

  return shuffledpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
