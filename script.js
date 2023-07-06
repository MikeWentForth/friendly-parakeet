// Get references to the #generate element

var characterLength = 8;
// --> we are creating a temp dataset
var choiceArray = [];
// --> HERE we have DATA || our DATASET(S)
var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


var generateBtn = document.querySelector("#generate");


function generatePrompts() {

  // here we are requesting data from the USER
  var length = window.prompt("Enter password length between 8 and 128 characters");
  // now we VALIDATE the USER input
  console.log('length' + length)
  if (length > 128 || length < 8) {  // --> '10' > 128   --> 10 > 128 --> true || false
    alert("Password must be greater than 8 and less than 128 characters");
    return;  // anytime we see a RETURN statment we ExIT the function!!
  }

  var lowercase = window.confirm("Click to include lowercase letters.");  // --> return either TRUE or FALSE 
  if (lowercase) {


    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  var uppercase = window.confirm("Click to include uppercase letters.");
  if (uppercase) {

    choiceArray = choiceArray.concat(upperCaseArray);

  }

  var numeric = window.confirm("Click to include numeric characters?");
  if (numeric) {

    choiceArray = choiceArray.concat(numberArray);

  }

  var specialchar = window.confirm("Click to include special characters?");
  if (specialchar) {

    choiceArray = choiceArray.concat(specialCharArray);
  }

  console.log("Dataset: ", choiceArray)



 return passwordGenerator(choiceArray, length);

}



function passwordGenerator(possibleOptions, passwordLength) {

  var userPassword = '';






  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * possibleOptions.length);

    console.log('index; ' + index);

    userPassword += possibleOptions[index]; userPassword
    console.log('userPassword: ' + userPassword);
    console.log('iteration ' + i)
  }

  console.log(userPassword)

  return userPassword;



}

function writePassword() {
var password = generatePrompts();
var PasswordText = document.querySelector("#password");

PasswordText.value = password;


}

generateBtn.addEventListener("click", writePassword);  


// (password)(pwLength, isLowercase, isUppercase, isNumeric, isSpecialchar)







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





// generatePrompts();

