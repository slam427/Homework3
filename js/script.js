
// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSetBig = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charSetSmall = ("abcdefghijklmnopqrstuvwxyz");
var rndBigAZ = charSetBig.split(" ");
var rndSmallAZ = charSetSmall.split(" ");
var rndSym = ("!@#$%^&*()_-+,/?").split(" ");
var rndNum = (1234567890);
var criteriaArray = []

var charsetArray = rndBigAZ.concat(rndSmallAZ.concat(rndSym.concat(rndNum)));
console.log(charsetArray);

// Write password to the #password input; create variable declare- console log it;
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?", "value must be from '8-128'")
  var parsedPasswordLength = parseInt(passwordLength);
  if (parsedPasswordLength < 8 || parsedPasswordLength > 128) {
    passwordLength;
    //if is not a number reprompt; if no value is inputted = 'null'
    writePassword();
  }
  var userUpperCase = confirm("Would you like to use Upper Case Letters?");
  if (userUpperCase) {
    criteriaArray.push(rndBigAZ);
  } var userLowerCase = confirm("Would you like to use Lower Case Letters?");
  if (userLowerCase) {
    criteriaArray.push(rndSmallAZ);
  } var userSym = confirm("Would you like to use Special Characters?");
  if (userSym) {
    criteriaArray.push(rndSym);
  } var userNum = confirm("Would you like to use Numbers?");
  if (userNum) {
    criteriaArray.push(rndNum);
  }
  if (criteriaArray == []) {
    writePassword();
  }

  for (var i = 0; i < (parsedPasswordLength + 1); i++) {
    // var generatePW = Math.floor(Math.random(Math.floor(Math.random() * criteriaArray.length))* criteriaArray[]);

    // selects random number with range length of userChoices
    var passwordIndex = Math.floor(Math.random() * criteriaArray.Length);

    // attempting to use passwordIndex to select a random number the length of specified index????
    var passwordText = Math.floor(Math.random() * criteriaArray[passwordIndex]
    // document.getElementById("#password").innerHTML(passwordText)
  
  

}




  //returning NaN...Why?

  console.log(criteriaArray);







  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);