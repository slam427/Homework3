// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSetAZ   = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var rndBigAZ    = charSetAZ.split();
var rndSmallAZ  = charSetAZ.toLowerCase();
var rndNum      = Math.floor(Math.random() * 10);

console.log(rndSmallAZ);
console.log(rndBigAZ);
console.log(rndNum);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword
