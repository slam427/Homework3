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

//Attempted to get length of all Characters:
var charSetLength = allCharSet.length;  

//returned 152...?! 26 uppercase + 26 lowercase + 10 + 17 symbols !==152
//Perhaps they are counting the ","
//Added a 'space' between " " and my problem was fixed
console.log(charSetLength);

//Checks to ensure functionality
console.log(allCharSet);
// console.log(rndSym);
// console.log(rndSmallAZ);
// console.log(rndBigAZ);
// console.log(rndNum);

// Write password to the #password input
function writePassword ( 

) {



}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword())

