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
          window.alert("Your password will include lowercase characters");
          break;

        case 2:
          window.alert("Your password will include uppercase characters")
          break;

        case 3:
          window.alert("Your password will include numeric characters")
          break;

        case 4:
          window.alert("Your password will include special characters")
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
};

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

