
function generatePassword() {

    let passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));
  
 
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
    }
  
 
    let useLowercase = confirm("Include lowercase characters?");
    let useUppercase = confirm("Include uppercase characters?");
    let useNumeric = confirm("Include numeric characters?");
    let useSpecial = confirm("Include special characters?");
  
    
    if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
      alert("You must select at least one character type.");
      return "";
    }
  

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";
  
   
    let characterPool = "";
    if (useLowercase) characterPool += lowercaseChars;
    if (useUppercase) characterPool += uppercaseChars;
    if (useNumeric) characterPool += numericChars;
    if (useSpecial) characterPool += specialChars;
  

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool.charAt(randomIndex);
    }
  
    return password;
  }
  
  
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    if (password) {
      passwordText.value = password;
    }
  }
  
  
  let generateBtn = document.querySelector("#generate");
  
  generateBtn.addEventListener("click", writePassword);
  