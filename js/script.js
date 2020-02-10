// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSetBig = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charSetSmall = ("abcdefghijklmnopqrstuvwxyz");
var rndBigAZ = charSetBig.split(" ");
var rndSmallAZ = charSetSmall.split(" ");
var rndSym = ("!@#$%^&*()_-+,/?").split(" ");
var rndNum = (123456789);
var criteriaArray = []

var charsetArray = rndBigAZ.concat(rndSmallAZ.concat(rndSym.concat(rndNum)));
console.log(charsetArray);

// Write password to the #password input
  function writePassword() {
    var parsedPasswordLength = parseInt(passwordLength);
    var passwordLength = prompt("How many characters would you like your password to be?", "value must be from '8-128'")
    

    //Attempting to reprompt if password is < 8 || greater than 128 or cancel button is clicked;
    //not working...
    if ((parsedPasswordLength) < 8 || (parsedPasswordLength > 128) || (passwordLength === false)) {
      writePassword();
    } else {
    //storing values to push character set into criteriaArray array...
    if (confirm("Would you like to include Upper Case Letters?") === true) {
      criteriaArray.push(rndBigAZ);
    }
    if (confirm("Would you like to include Lower Case Letters?") === true) {
      criteriaArray.push(rndSmallAZ);
    }
    if (confirm("Would you like to include Special Characters?") === true) {
      criteriaArray.push(rndSym);
    }
    if (confirm("Would you like to include Numbers?") === true) {
      criteriaArray.push(rndSym);
    }
  }


  //Initial thoughts on how to solve problem but abandoned

    // var password = generatePassword();
    //     if (bigAZYes === false && smallAZYes === false && symYes === false && numYes === false) {
    //       alert("You must select at least 1 criteria!");
    //       criteria();
    // }
    // if (bigAZYes === true && smallAZyes === true && symYes === true && numYes === true) {
    // password[Math.floor(Math.random() * charsetArray.length)];
    // console.log(password);


    // if (bigAZYes === true && smallAZyes === false && symYes === false && numYes === false) {
    // password = Math.floor(Math.random() * 

    // if (bigAZYes === false && smallAZyes === false && symYes === true && numYes === false) {
    //     password = Math.floor(Math.random() * rndSym.length);

    //     if (bigAZYes === false && smallAZyes === false && symYes === false && numYes === true) {
    //       password = Math.floor(Math.random() * rndNum.length)
    //       }
    //       }
    //       console.log(password);
    //       }
    //     }
    //   }
    // }
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);