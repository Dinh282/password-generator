// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  


function generatePassword() {

  var lowerCaseChars = confirm("Would you like to include lowercase characters in your password?");
  var upperCaseChars = confirm("would you like to include uppercase characters in your password?");
  var numbers = confirm("Would you like to include number characters in your password?");
  var specialChars = confirm("Would you like to include special characters?");
  var passLength = prompt("How many characters would you want your password to include? *Note: Pick between 8 and 128 characters");
  
  
  while (isNan(passLength) || passLength < 8 || passLength > 128) {
     passLength = prompt("Input not accepted. Please enter a number between 8 and 128!");
  } 

  var userSelection = [];

   if (lowerCaseChars) {
     userSelection.push("abcdefghijklmnopqrstuvwxyz");
   };

   if (upperCaseChars) {
     userSelection.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   }

  if (numbers) {
     userSelection.push("0123456789");
  }

   // the list of special chars is !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~, but we must use the two extra \ \ to escape the string for the " marks.  
   if (specialChars) {
    userSelection.push("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
   }

   if (userSelection.length === 0) {
     userSelection.alert("You must choose at least one character type.");
     return;
   }


}

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
