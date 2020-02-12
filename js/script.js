
// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetSmall = "abcdefghijklmnopqrstuvwxyz";
var numSet = "1234567890";



        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);




// Write password to the #password input; create variable declare- console log it;

function writePassword() {

  var keepLooping = true;

  // not returning prompt when 8 >input> 128...can't figure out why...
  //While statement does not work 
  console.log("console log");
  //while not equal to parsedPasswordLength continue to perform the following...
  while (keepLooping) {
  console.log("inside loop")
    //My intentions: User is prompted to input a value between 8-128
    var passwordLength = prompt("How many characters would you like your password to be?", "value must be from '8-128'");
    
    // console.log("passwordLength check", passwordLength);===================================================***ISSUE*** Expected to be str. Returns 'undefined'?!
    //User input of number value is interpreted by JS as str; Must parseInt to convert into an integer
    var parsedPasswordLength = parseInt(passwordLength);

    console.log({passwordLength})
    console.log({parsedPasswordLength})

    //Conditional statement: if the input meets conditions...
      if (parsedPasswordLength >= 8 && parsedPasswordLength <=128) {
        console.log("condition true")
        //parsedPasswordLength is set to true and exits 'while loop'
        keepLooping = false;
    }
  }


  var smallAZArray = charSetSmall.split("");
  var rndSym = "!@#$%^&*()_-+/?".split("");
  var rndNum = numSet.split("");
  var bigAZArray = charSetBig.split("");
  
  var criteriaArray = [];


            //Adds Upper Case letters to criteriaArray
    var userUpperCase = confirm("Would you like to use Upper Case Letters?");
            if (userUpperCase) {
            var criteriaArray = criteriaArray.concat(bigAZArray);

            //Adds Lower Case letters to criteriaArray
  } var userLowerCase = confirm("Would you like to use Lower Case Letters?");
            if (userLowerCase) {
            var criteriaArray = criteriaArray.concat(smallAZArray);

            //Adds Special Characters to criteriaArray
  } var userSym = confirm("Would you like to use Special Characters?");
            if (userSym) {
            var criteriaArray = criteriaArray.concat(rndSym);

            //*** Adds Numbers to criteriaArray
  } var userNum = confirm("Would you like to use Numbers?");
            if (userNum) {
              // criteriaArray +=rndNum;
            var criteriaArray = criteriaArray.concat(rndNum);
              console.log("criteriaArray", criteriaArray);

  }


    //Storage for generated password
    var password = "";

    //Loop runs block 'i' times = to user password length choice; Repeat until 'i' is less than or equal to password length
    for (var i = 0; i <= parsedPasswordLength; i++) {

    //Pick a random number with range 0 - #of characters in total chosen character sets; round down to closest integer
    var rndIndex = Math.floor(Math.random() * criteriaArray.length);

    //assign rndChar to the character value associated w/ generated pseudo-random index of criteriaArray
    var rndChar = criteriaArray[rndIndex]

    //Add each value obtained from rndChar as string to var password
    var password = password.concat(rndChar);
  }
  

  document.querySelector("#password").textContent = password;

}
