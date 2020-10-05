document.querySelector("#generate").addEventListener("click", writePassword);

// Character Options
var lowerChar = "acdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]~";
var characters = "";

// Variable Declaration
var passwordLength = "";
var specialCharacter;
var numericCharacer;
var uppercase;
var lowercase;

function generatePassword() {
  // length of the password
  var passwordLength = window.prompt("How long do you want your password to be? Choose a length between 8 and 128 characters.");
  while(8 > passwordLength || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert("Number must be between 8 and 128. Please try again.");
    return generatePassword();
  }
  console.log(passwordLength);

  // lowercase
  var lowercase = window.prompt("Do you want lowercase letters in your password? Type 'YES' or 'NO' to choose.");
  if (lowercase === "yes" || lowercase === "YES") {
    characters = characters + lowerChar;
  } else {
    uppercase;
    numbericCharacter;
    specialCharacter;
  };
  console.log(lowercase);

  // uppsercase
  var uppercase = window.prompt("Do you want uppercase letters in your password? Type 'YES' or 'NO' to choose.");
  if (uppercase === "yes" || uppercase === "YES") {
    characters = characters + upperChar;
  } else {
    numbericCharacter;
    specialCharacter;
  };
  console.log(uppercase);

  // numbers
  var numbericCharacter = window.prompt("Do you want numbers in your password? Type 'YES' or 'NO' to choose.");
  if (numbericCharacter === "yes" || numbericCharacter === "YES") {
    characters = characters + numChar;
  } else {
    specialCharacter;
  };
  console.log(numbericCharacter);

  // symbols
  var specialCharacter = window.prompt("Do you want special characters in your password? Type 'YES' or 'NO' to choose.");
  if (specialCharacter === "yes" || specialCharacter === "YES") {
    characters = characters + specialChar;
  } else {};
  console.log(specialCharacter);

  // loop if no parameters chosen
    while(uppercase === false && lowercase === false && numericCharacter === falce && specialCharacter === false) {
      alert("You must choose at least one parameter");
      return generatePassword;
    }

  // final password
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password = password + characters[Math.floor(Math.random() * characters.length)];
    console.log(password)
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

document.getElementById("generatePassword").addEventListener("click", function() {
  randomPass = writePassword;
  document.getElementById("password").value = password;
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
