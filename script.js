// Get references to the #generate element

var characterLength = 8;
var choiceArray = [];
var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
}

function generatePrompts() { 
  //I would generate password based on the prompts//

  var length = window.prompt("Enter password length between 8 and 128 characters");
  // // if (!length) {
  // //   return;
  // // }

  var lowerCase = window.confirm("Click to include lowercase letters.");
  // // if (!lowercase) {
  // //   password = (!lowercase);
  // // }

  var uppercase = window.confirm("Click to include uppercase letters.");
  // // if (!uppercase) {
  // //   password = (!uppercase);
  // // }

  var numeric = window.confirm("Click to include numeric characters?");
  // // if (!numeric) {
  // //   password = (!numeric);
  // // }

  var specialchar = window.confirm("Click to include special characters?");
  // // if (!specialchar) {
  // //   password = (!specialchar);
  // // }

 passwordGenerator(length, lowerCase, uppercase, numeric, specialchar)

}

function passwordGenerator(pwLength, isLowercase, isUppercase, isNumeric, isSpecialchar) {
console.log(pwLength, isLowercase, isUppercase, isNumeric, isSpecialchar)

}

// function getPrompts() {

//   characterLength = parseInt(prompt("how many characters do you want your password to be? (8 - 128 characters")); //NaN 

//   if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
//     alert("Character length has to be a number, 8 - 128 digits. Please try again.");
//     return false;
//   }
//   if (confirm("would you like lower case letters in your password?")) {
//     choiceArr = choiceArr.concat(lowerCassArr);
//   }

//   if (confirm("would you like upper case letters in your password?")) {
//     choiceArr = choiceArr.concat(upperCassArr);
//   }

//   if (confirm("would you like special case letters in your password?")) {
//     choiceArr = choiceArr.concat(specialCharArr);

//     if (confirm("would you like upper case letters in your password?")) {
//       choiceArr = choiceArr.concat(numberArr);
//     }

//     return true;

//   }
// }



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
















