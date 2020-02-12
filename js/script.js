
// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetSmall = "abcdefghijklmnopqrstuvwxyz";
var bigAZArray = charSetBig.split("");
var smallAZArray = charSetSmall.split("");
var rndSym = "!@#$%^&*()_-+,/?".split("");
var numSet = "1234567890";
var rndNum = numSet.split("");

rndNum+=rndSym;
console.log("rndNum", rndNum);
// console.log("smallAZArray", smallAZArray);


// Write password to the #password input; create variable declare- console log it;

// var userMadeAValidChoice = false;
// var usersChoice;
// while (!userMadeAValidChoice){
//   // prompt the user, e.g.
//   usersChoice = prompt("relevant prompt");
//   if (someConditionIndicatingThatTheirChoiceWasValid){ //ex: if (usersChoice >= min && usersChoice <= max)
//     userMadeAValidChoice = true;
//   }
// }

function writePassword() {
    
  var parsedPasswordLength;
  // not returning prompt when 8 >input> 128...can't figure out why...
  while(!parsedPasswordLength) {
    var passwordLength = prompt("How many characters would you like your password to be?", "value must be from '8-128'");
    var parsedPasswordLength = parseInt(passwordLength);
    if (parsedPasswordLength <= 8 && parsedPasswordLength <= 128) {
      parsedPasswordLength =true;
    }
  }
  //  (parsedPasswordLength < 8 || parsedPasswordLength > 128) 
  //   //if is not a number reprompt; if no value is inputted = 'null'
  //   writePassword();
  
  var criteriaArray=[];
  var userUpperCase = confirm("Would you like to use Upper Case Letters?");
  if (userUpperCase) {
    var criteriaArray = criteriaArray.concat(bigAZArray);
    console.log("concat check",criteriaArray.concat(bigAZArray));
  } var userLowerCase = confirm("Would you like to use Lower Case Letters?");
  if (userLowerCase) {
    var criteriaArray = criteriaArray.concat(smallAZArray);
  } var userSym = confirm("Would you like to use Special Characters?");
  if (userSym) {
    var criteriaArray = criteriaArray.concat(rndSym);
  } var userNum = confirm("Would you like to use Numbers?");
  if (userNum) {
    var criteriaArray = criteriaArray.concat(rndNum);
    console.log(criteriaArray);
  }

  // var password = "";
  // for (var i = 1; i <= parsedPasswordLength; i++) {
  //   // var generatePW = Math.floor(Math.random(Math.floor(Math.random() * criteriaArray.length))* criteriaArray[]);
    
  //   // selects random number with range length of criteriaArray
  //   var rndIndex = Math.floor(Math.random() * criteriaArray.Length);
    
  //   // attempting to use passwordIndex to select a random number the length of specified index????
  //   var rndChar = criteriaArray[rndIndex]
  //   password += rndChar
  // }
  // console.log(password)
 
  
  
  
  
  //returning NaN...Why?
  
  
}





// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);