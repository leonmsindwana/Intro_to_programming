let secret = Math.floor(Math.random() * 20) + 1;
var guess = parseInt(prompt("Please guess the secret number (1-20)"));



if (guess == secret) {
    alert("Correct Guess!");
} else if ( guess > secret) {
    alert("Sorry, incorrect Guess!")
}

while (guess !== secret) {
    if (guess < secret) {
        alert("Incorrect, too low.");
    } else if (guess > secret) {
        alert("Incorrect, too high.");
    }
    guess = parseInt(prompt("Try again. Guess the secret number (1-20)"));
}

alert("Correct Guess! ");
