





let password;

while (!password) {
  let userInput = prompt("Enter a password (at least 6 characters):");

  if (userInput.length >= 6) {
    password = userInput;
    alert("Password accepted!");
  } else {
    alert("Password too short. Try again.");
  }
}

alert("Your password is:", password);
