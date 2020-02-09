// Assignment Code
var generateBtn  = document.querySelector("#generate");
var charSetBig   = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charSetSmall = ("abcdefghijklmnopqrstuvwxyz");
var rndBigAZ     = charSetBig.split(" ");
var rndSmallAZ   = charSetSmall.split(" ");
var rndSym       = ("!@#$%^&*()_-+,/?").split(" ");
var rndNum       = ("1234567890").split(" ");

//Combined all string into one variable
// var allCharSet = rndBigAZ + rndSmallAZ + rndSym + rndNum;
// console.log(allCharSet);

var charsetArray = rndBigAZ.concat(rndSmallAZ.concat(rndSym.concat(rndNum)));

console.log(charsetArray);

//Attempted to get length of all Characters:
// var charSetLength = allCharSet.length;

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?", "value must be from '8-128' ");
  if (passwordLength >7 || passwordLength < 128) {
    
  } else passwordLength.bold();

      var bigAZYes   = confirm("Would you like to include Upper Case Letters?")
      var smallAZYes = confirm("Would you like to include Lower Case Letters?")
      var symYes     = confirm("Would you like to include Special Characters?")
      var numYes     = confirm("Would you like to include Numbers?")
    
  var password = generatePassword(); {
    while(password !== passwordLength) {
  Math.floor.Math.random() * charsetArray.length();
  console.log(password);
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}