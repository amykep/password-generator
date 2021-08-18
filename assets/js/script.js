// Assignment code here
let generatePassword = function ()
{
  window.alert("Welcome! We are going to start generating your secure password.");

  //funs to get password criteria

  let getprefLength = function ()
  {
    value = window.confirm("Would you like to set a preffered length for your password?");
    if (value)
    {
      do
      {
        passwordCharacterPrompt = prompt("Enter preffered password length, The length is at least 8 characters and no more than 128 characters");
        prefLength = parseInt(passwordCharacterPrompt);
        if (prefLength < 8 || prefLength > 128)
        {
          window.alert("Error: Password length must be between 8 and 128 Character")
        }

      } while (prefLength < 8 || prefLength > 128)

      console.log("Preffered password length: " + prefLength);
      localStorage.setItem("Password Length", prefLength);
      return prefLength;
    }
    else
    {
      window.alert("Your password length will randomly be set betwee 8 and 128 character");
      prefLength = Math.floor(Math.random() * 9 + 8);
      console.log("Preffered password length: " + prefLength);
      return prefLength;
    }
  };

  let getlowercaseLetter = function ()
  {
    let lowercaseLetter =
      window.confirm("Would you like to include lowercase characters in your password?");
    console.log("password lowercase letters: " + lowercaseLetter);
    return lowercaseLetter;
  };

  let getuppercaseLetter = function ()
  {
    let uppercaseLetter =
      window.confirm("Would you like to include uppercase characters in your password?");
    console.log("password uppercase letters: " + uppercaseLetter);
    return uppercaseLetter;
  };

  let getnumericNumber = function ()
  {
    let numericNumber =
      window.confirm("Would you like to include numeric characters in your password?");
    console.log("password numeric characters: " + numericNumber);
    return numericNumber;
  };

  let getspecialCharacter = function ()
  {
    let specialCharacter =
      window.confirm("Would you like to include special characters in your password?");
    console.log("password special characters: " + specialCharacter);
    return specialCharacter;
  };

  let passwordCriteria = {
    prefLength: getprefLength(),
    lowercaseLetter: getlowercaseLetter(),
    uppercaseLetter: getuppercaseLetter(),
    numericNumber: getnumericNumber(),
    specialCharacter: getspecialCharacter()
  };
  console.log("passwordCriteria.lowercaseLetter: " + passwordCriteria.lowercaseLetter);

  //validation
  let passwordCriteriaValidation = function ()
  {
    if (passwordCriteria.lowercaseLetter === false && passwordCriteria.uppercaseLetter === false && passwordCriteria.numericNumber === false && passwordCriteria.specialCharacter === false)
    {
      // ask user what they'd like to do
      let passwordCharacterPrompt = window.prompt(
        'At least one character type should be selected, please try again.? Please enter 1 for lowercase characters, 2 for uppercase characters, 3 for numeric characters, or 4 for special characters.'
      );

      // use switch case to carry out action
      passwordCharacterPrompt = parseInt(passwordCharacterPrompt);
      switch (passwordCharacterPrompt)
      {
        case 1:
          window.alert("Your password will include only lowercase characters")
          passwordCriteria.lowercaseLetter = true
          console.log("passwordCriteria.lowercaseLetter: " + passwordCriteria.lowercaseLetter)
          break;

        case 2:
          window.alert("Your password will include only uppercase characters")
          passwordCriteria.uppercaseLetter = true
          console.log("passwordCriteria.uppercaseLetter: " + passwordCriteria.uppercaseLetter)
          break;

        case 3:
          window.alert("Your password will include only numeric characters")
          passwordCriteria.numericNumber = true
          console.log("passwordCriteria.numericNumber: " + passwordCriteria.numericNumber)
          break;

        case 4:
          window.alert("Your password will include only special characters")
          passwordCriteria.specialCharacter = true
          console.log("passwordCriteria.specialCharacter: " + passwordCriteria.specialCharacter)
          break;

        default:
          window.alert('You did not pick a valid option. Try again.');

          // call shop() again to force player to pick a valid option
          passwordCriteriaValidation();
          break;
      }
    }
    else
    {
      console.log("passwordCriteria.lowercaseLetter:", passwordCriteria.lowercaseLetter, "passwordCriteria.uppercaseLetter:", passwordCriteria.uppercaseLetter, "passwordCriteria.numericNumber:", passwordCriteria.numericNumber, "passwordCriteria.specialCharacter:", passwordCriteria.specialCharacter)
    }

  }

  passwordCriteriaValidation();


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  let minimumCount = 0;
  let minimumNumbers = "";
  let minimumLowerCases = "";
  let minimumUpperCases = "";
  let minimumSpecialCharacters = "";
  const specialCharacters = "!@#$%^&*()";


  // Generator functions**
  let functionArray = {
    getNumbers: function ()
    {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function ()
    {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function ()
    {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function ()
    {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

  // empty string for loop below
  let randomPasswordGenerated = "";

  // loop getting random characters
  while (minimumCount < prefLength)
  {
    let randomNumberPicked = Math.floor(Math.random() * 4);

    // randomPasswordGenerated += randomNumberPicked;
    if (passwordCriteria.numericNumber === true && randomNumberPicked === 0)
    {
      randomPasswordGenerated += functionArray.getNumbers();
      minimumCount++;
    }

    if (passwordCriteria.lowercaseLetter === true && randomNumberPicked === 1)
    {
      randomPasswordGenerated += functionArray.getLowerCases();
      minimumCount++;

    }

    if (passwordCriteria.uppercaseLetter === true && randomNumberPicked === 2)
    {
      randomPasswordGenerated += functionArray.getUpperCases();
      minimumCount++;

    }

    if (passwordCriteria.specialCharacter === true && randomNumberPicked === 3)
    {
      randomPasswordGenerated += functionArray.getSpecialCharacters();
      minimumCount++;

    }
  }

  console.log("randomPasswordGenerated: " + randomPasswordGenerated)
  return randomPasswordGenerated;

}


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
