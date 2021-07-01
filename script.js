var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = [".","\\", ":", ";"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "0"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordOptions (){
var length = parseInt(window.prompt("Pick a Password length btw 8-128 charaters"));
  console.log (length);
  
  if  (length > 8) {
      console.log("Valid Choice");
    } else if  (length < 128) {
      
    }else { 
      window.prompt("Pick a Password length btw 8-128 charaters")
  };

var specialCharacters = window.confirm("Would you like to add Special Characters?")
var numeric = window.confirm("Would you like to add Numbers?")
var lowercaseCharacters = window.confirm("Would you like to add  Lowercase Characters?")
var uppercaseCharacters = window.confirm("Would you like to add  Uppercase Characters?")

  if (specialCharacters === false && numeric === false && uppercaseCharacters === false && lowercaseCharacters === false){
  window.alert("Please enter one Character type")
  }

var UserAnswers = {
 length : length,
  specialCharacters : specialCharacters,
  numeric : numeric,
  lowercaseCharacters : lowercaseCharacters,
  uppercaseCharacters : uppercaseCharacters,
}
return UserAnswers;
}

// gets random element in an array
function getRandom(array) {
  var randomItem = Math.floor(Math.random()* array.length);
  var randomElement = array[randomItem]
    return randomElement;
 }

function generatePassword() {
  var options = passwordOptions()
  // result of mega array
  var results = []  
  // types of characters that could be used
  var characterTypes = []
  // characters chose for PW
  var chosenCharacters = []

  if (options.numeric) {
    characterTypes = characterTypes.concat(numbers)
    chosenCharacters.push(getRandom(numbers));
  } 
  if (options.specialCharacters) {
    characterTypes = characterTypes.concat(specialChar)
    chosenCharacters.push(getRandom(specialChar));
  } 
  if (options.lowercaseCharacters) {
    characterTypes = characterTypes.concat(lowerCase)
    chosenCharacters.push(getRandom(lowerCase));
  } 
  if (options.uppercaseCharacters) {
    characterTypes = characterTypes.concat(upperCase)
    chosenCharacters.push(getRandom(upperCase));
  } 

  for (var index = 0; index < options.length; index++) {
    var possibleCharacter=getRandom(characterTypes)

    results.push(possibleCharacter)
    
  }

  for (var index = 0; index < chosenCharacters.length; index++) {
   results[index] = chosenCharacters[index]
    
  }

  return results.join('')
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
