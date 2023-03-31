// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// the var password is equal to the function generatePassword(), so we must define it.
function generatePassword() {

  //confirm method calls forth the browser to display a dialog with optional message. If user confirms by clicking "okay", the corresponding variable will be set to true
  var lowerCaseChars = confirm("Would you like to include lowercase characters in your password?");
  var upperCaseChars = confirm("would you like to include uppercase characters in your password?");
  var numbers = confirm("Would you like to include number characters in your password?");
  var specialChars = confirm("Would you like to include special characters?");
  // similar to confirm, prompt also displays a dialog, but also ask for user's input. User's input will be set equal to variable passLength.
  var passLength = prompt("How many characters would you want your password to include? *Note: Pick between 8 and 128 characters*");
  
  
  // isNan() is a function that determins if the value (passLength) is Nan(Not-A-Number).
  // this while condition is stating that if user's input is a NaN OR number less than 8 OR number greater than 128. then to prompt user again
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
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

    //The var password will store the string of the new password.
    var password = ' ';
   
   //For loop will iterate until the password length is equal to passLength value of which user selected.
   for (var i = 0; i < passLength; i++) {
    //Crucial that the following vars are declared each time within the for loop. You want each character of new password to be randomly generated.
    //Math.random() randomly generates a decimal number between 0 and 1, then we have it multipled to the length of users selection. This becomes the random index that we use in the userSelection. We store this 
    // in our chars variable. We then generate another random number to use as the index of the string of char. So, one number is randomly generated to choose what type of character to use, and another number to choose randomly 
    //which specific character within that type. 
   var randomTypeIndex = Math.floor(Math.random() * userSelection.length);
   var chars = userSelection[randomTypeIndex];
   var randomCharIndex = [Math.floor(Math.random() * chars.length)]

    //With every iteration of the loop, we at the character to the pass;
    password += chars[randomCharIndex];
   }

   //Once our new password has been completely generated, the loop will exit and we must return the password. Without the return the password variable outside of this function won't get updated.
    return password;
   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
