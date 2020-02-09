// Assignment Code
var generateBtn   = document.querySelector("#generate");
var charSetBig    = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charSetSmall  =("abcdefghijklmnopqrstuvwxyz")
var rndBigAZ      = charSetBig.split(" ");
var rndSmallAZ    = charSetSmall.split(" ");
var rndSym        = ("!@#$%^&*()_-+,/?").split(" ");
var rndNum        = ("1234567890").split(" ");

//Combined all string into one variable
var allCharSet   = rndBigAZ + rndSmallAZ + rndSym + rndNum;
var charsetArray = Array.from(allCharSet);

console.log(charsetArray);

//Attempted to get length of all Characters:
var charSetLength = allCharSet.length;  
console.log(charSetLength);

//Checks to ensure functionality
console.log(allCharSet);
// console.log(rndSym);
// console.log(rndSmallAZ);
// console.log(rndBigAZ);
// console.log(rndNum);

// Write password to the #password input
function writePassword (){

}


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

