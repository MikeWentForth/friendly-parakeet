// Get references to the #generate element

var characterLength = 8;
var choiceArray = [];
var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0']

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

} 

function generatePassword() {
  //I would generate password based on the prompts//
}
  function getPrompts(){
    characterLength = parseInt(prompt("how many characters do you want your password to be? (8 - 128 characters")); //NaN 
 
if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false; 
  } 
if (confirm("would you like lower case letters in your password?")){
  choiceArr = choiceArr.concat(lowerCassArr);
}

if (confirm("would you like upper case letters in your password?")){
  choiceArr = choiceArr.concat(upperCassArr);
}

if (confirm("would you like special case letters in your password?")){
  choiceArr = choiceArr.concat(specialCharArr);

  if (confirm("would you like upper case letters in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }

  return true;
  
}
  }

  console.log(generatePassword)



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);













