// Assignment code here
let generatePassword = function ()
{
    window.alert("Welcome! We are going to start generating your secure password.");
    //funs to get password criteria choices


    //funs to get password criteria
    let getminLength = function ()
    {
        let minLength =
            window.confirm("Would you like to set a minimum length for your password?");
        if (minLength)
        {
            minLength = prompt("Enter minimum password length:");
        }
        console.log("password min length: " + minLength);
        return minLength;
    };

    let getmaxLength = function ()
    {
        let maxLength =
            window.confirm("Would you like to set a maximum length for your password?");
        if (maxLength)
        {
            maxLength = prompt("Enter maximum password length:");
        }
        console.log("password max length: " + maxLength);
        return maxLength;
    };

    let getprefLength = function ()
    {
        let prefLength =
            window.confirm("Would you like to set a preffered length for your password?");
        if (prefLength)
        {
            prefLength = prompt("Enter preffered password length:");
        }
        console.log("Preffered password length: " + prefLength);
        localStorage.setItem("Password Length", prefLength);
        return prefLength;
    };

    let getlowercaseLetter = function ()
    {
        let lowercaseLetter =
            window.confirm("Would you like to include lowercase characters in your password?");
        if (lowercaseLetter)
        {
            lowercaseLetter = prompt("Enter lowercase letters:");
        }
        console.log("password lowercase letters: " + lowercaseLetter);
        localStorage.setItem("Lowercase Letters", lowercaseLetter);
        return lowercaseLetter;
    };

    let getuppercaseLetter = function ()
    {
        let uppercaseLetter =
            window.confirm("Would you like to include uppercase characters in your password?");
        if (uppercaseLetter)
        {
            uppercaseLetter = prompt("Enter Uppercase letters:");
        }
        console.log("password uppercase letters: " + uppercaseLetter);
        localStorage.setItem("Uppercase Letters", uppercaseLetter);
        return uppercaseLetter;
    };

    let getnumericNumber = function ()
    {
        let numericNumber =
            window.confirm("Would you like to include numeric characters in your password?");
        if (numericNumber)
        {
            numericNumber = prompt("Enter numeric characters:");
        }
        console.log("password numeric characters: " + numericNumber);
        localStorage.setItem("Numeric Numbers", numericNumber);
        return numericNumber;
    };

    let getspecialCharacter = function ()
    {
        let specialCharacter =
            window.confirm("Would you like to include special characters in your password?");
        if (specialCharacter)
        {
            specialCharacter = prompt("Enter special Characters:");
        }
        console.log("password special characters: " + specialCharacter);
        localStorage.setItem("Special Character", specialCharacter);
        return specialCharacter;
    };

    let passwordCriteria = {
        minLength: getminLength(),
        maxLength: getmaxLength(),
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
        if (passwordCriteria.lowercaseLetter === false || passwordCriteria.lowercaseLetter === "" || passwordCriteria.lowercaseLetter === null)
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
                    getlowercaseLetter();
                    break;

                case 2:
                    getuppercaseLetter();
                    break;

                case 3:
                    getnumericNumber();
                    break;

                case 4:
                    getspecialCharacter();
                    break;

                default:
                    window.alert('You did not pick a valid option. Try again.');

                    // call shop() again to force player to pick a valid option
                    passwordCriteriaValidation();
                    break;
            }
        };

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

do
{
    passwordCharacterPrompt = prompt("Enter preffered password length, The length is at least 8 characters and no more than 128 characters");
    prefLength = parseInt(passwordCharacterPrompt);
} while (prefLength < 8 || prefLength > 128)

