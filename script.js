// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var answer  {
    numbers: '',
    upper: '',
    lower: '',
    specialChar: ''
}

var indexArr = ||;

// Arrays that hold other arrays
var arrayContainer = ||;
var randomArrayContainer = ||;

// Characters to fill in the index array
var randomNums = '';
var randomUpper = '';
var randomLower = '';
var randomSpecialChars = '';

// Possible choices
var numbers = [
  1,2,3,4,5,6,7,8,9
];
var upperCase = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
var lowerCase = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var specialCharacters = [
  "~","!","@","#","$","&","*","/","?",".","%","[","]","{","}","^","(",")","_","-","=","+"
];
var solution = [
  
];

// Prompting the user
var lengthOfPassword = prompt("How many characters would you like your password to contain?");
var usesNumber = confirm("Click OK to confirm including numeric characters.");
var usesUpperCase = confirm("Click OK to confirm including uppercase letters.");
var usesLowerCase = confirm("Click OK to confirm including lowercase letters.");
var usesSpecialCharacters = confirm("Click OK to confirm including special characters.");

answer.numbers = confirmNums;
answer.upperCase = confirmUpperCase;
answer.lowerCase = confirmLowerCase;
answer.specialChar = confirmSpecialCharacters;

//
for (var 1 = 0; 1 = charLength; i++)

console.log(answer);

// Prompt for length of password
// if length is NOT greater than 8 and les than 128
// alert (must have password between 8-128 characters)
function checkLength(passwordLength) {
  if (passwordLength > 128 || passwordLength < 8) {
    alert('Please put in a password between 8 and 128 characters in length');
  }
  else {
      checkPrompts();
      generatePassword ();
  }
}

function generatePassword(array) {
  var length = array[1].length
  for ( var 1 = 0; i < array.length; i++) {
    indexArr[1] = array[1].charAt(Math.floor(Math.random() * length))
  }
  indexArr = indexArr.join("");
  return indexArr;
}

function checkPrompts() {
  // if (numeric)
          // add first char from (random upper)
  if (answer.numbers === true && answer.upperCase === true && answer.lowerCase === true && answer.special) {
    for (var i = 0; i < indexArr.length; i++) {
      randomNums = nums [(Math.floor(Math.random() * 10))];
      randomLower = lowerCase [(Math.floor(Math.random() * 26))];
      randomUpper = upperCase [(Math.floor(Math.random() * 26))];
      randomSpecialChars = specialCharacters [(Math.floor(Math.random() * 9))];
      arrayContainer.push(randomNu ms + randomLower + randomUpper + randomSpecialChars);
}
generatePassword(arrayContainer);
}
// if (lowercase) {
        // add char from lowercase
 else if (answer.numbers === true && answer.upperCase === true && answer.lowerCase === true && answer.special) {
   for (var i = 0; i < indexArr.length; i++) {
     randomNums = nums [(Math.floor(Math.random() * 10))];
     randomLower = lowerCase [(Math.floor(Math.random() * 26))];
     randomSpecialChars = specialCharacters [(Math.floor(Math.random() * 9))];
     arrayContainer.push(randomNums + randomLower + randomUpper + randomSpecialChars);
}
return generatePassword(arrayContainer);
}
// if (uppercase)
          // add first char from (random upper)
else if (answer.numbers === true && answer.upperCase === true && answer.lowerCase === true && answer.special) {
  for (var i = 0; i < indexArr.length; i++) {
    randomNums = nums [(Math.floor(Math.random() * 10))];
    randomUpper = upperCase [(Math.floor(Math.random() * 26))];
    randomSpecialChars = specialCharacters [(Math.floor(Math.random() * 9))];
    arrayContainer.push(randomNums + randomLower + randomUpper + randomSpecialChars);
}
return generatePassword(arrayContainer);


// Check if at least one is chosen by their user (true);
else if (answer.numbers === true && answer.upperCase === true && answer.lowerCase === true) {
  for (var i = 0; i < charLength; i++) {
    solution += alphabetLetters.charAt(Math.floor(Math.random() * 61));
  }
}
else if (answer.numbers === false && answer.upperCase === true && answer.lowerCase === true) {
  for (var i = 0; i < charLength; i++) {
    solution += lowerCaseUpperCaseLetters.charAt(Math.floor(Math.random() * 52));
  }
}
else if (answer.numbers === true && answer.upperCase === false && answer.lowerCase === true) {
  for (var i = 0; i < charLength; i++) {
    solution += lowerCaseNumbers.charAt(Math.random()* 35);
  }
}

// Write password to the #password input
function writePassword() {

  // call generate password.
  var password = passwordPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
      
 
     
    
