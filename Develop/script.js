// Assignment Code
var generateButton = document.getElementById("generate");

// Special characters for the function created
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
  var userInput = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
var passwordLength = parseInt(userInput)
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var specialCharacters = confirm("Do you want special characters in your password?");


  // Generator functions using the Chartcode

    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    }

   function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }

    function getUpperCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }

    function getSpecialCharacters() {
      // Special characters for the function created
      const specialCharacters = "!@#$%^&*()";
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

// Choices to include
var functionArray = [getNumbers, getLowerCases, getUpperCases, getSpecialCharacters];
  const numberTrue = (numbers === true)
  const lowerTrue = (lowerCases === true)
  const upperTrue = (upperCases === true)
  const specialTrue = (specialCharacters === true)
let password = "";
   const areTrue = numberTrue + lowerTrue + upperTrue + specialTrue;
   console.log("are true: ", areTrue);
   const areTrueArr = [{numberTrue}, {lowerTrue}, {upperTrue}, {specialTrue}].filter
   (
     item => Object.values(item)[0]
   );
   console.log("areTrueArr: ", areTrueArr);
     // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // loop getting random characters
  for (let i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * areTrue);
    var functionArray = [];
    if (numbers === true) {
      functionArray.push(getNumbers)
    }
    if (lowerCases === true) {
        functionArray.push(getLowerCases)
    }
    if (upperCases === true) {
        functionArray.push(getUpperCases)
    }
      if (specialCharacters === true) {
        functionArray.push(getSpecialCharacters)
   }
    randomPasswordGenerated += functionArray[randomNumberPicked]();
     //console.log(randomPasswordGenerated)
   }
      return randomPasswordGenerated;
}


