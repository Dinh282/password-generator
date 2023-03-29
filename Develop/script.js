// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password = the function generatePassword(), so we must define it and add instructions to the function
function generatePassword() {

  //confirm method calls forth browser to display  a dialog with optional message. If user confirms by clicking out, the corresponding variable will be set to true
  var lowerCaseChars = confirm("Would you like to include lowercase characters in your password?");
  var upperCaseChars = confirm("would you like to include uppercase characters in your password?");
  var numbers = confirm("Would you like to include number characters in your password?");
  var specialChars = confirm("Would you like to include special characters?");
  // similar to confirm, prompt displays a dialog, but also ask for user's input. Input will be set equal to variable.
  var passLength = prompt("How many characters would you want your password to include? *Note: Pick between 8 and 128 characters*");
  
  
  // isNan() is a function that determins if the value (passLength) is Nan(Not-A-Number).
  // this while condition is stating that if user's input is a NaN OR number less than 8 OR number greater than 128. then to prompt user again
  while (isNan(passLength) || passLength < 8 || passLength > 128) {
      passLength = prompt("Input not accepted. Please enter a number between 8 and 128!");
  } 

  // set up an empty array to push characters into depending on user's selection
  var userSelection = [];

   if (lowerCaseChars) {
     userSelection.push("abcdefghijklmnopqrstuvwxyz");
   }

   if (upperCaseChars) {
     userSelection.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   }

   if (numbers) {
     userSelection.push("0123456789");
   }

   // the list of special chars is !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~, but we must use the two extra \ \ to escape the string for the " marks.  
   if (specialChars) {
    userSelection.push("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
   }

  //if the array is equal to 0. then that means the user did not select anything, so we prompt them to select at least one option.
   if (userSelection.length === 0) {
     alert("You must choose at least one character type.");
     return;
   }

    var password = ' ';


    // TODO: Look up how to select chars from userSelections "randomly" and add to password variable.

   }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
