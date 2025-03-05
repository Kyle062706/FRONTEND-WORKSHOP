// Number Guessing Game - num-guess.js

function playGame() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;

    alert("Welcome to the Number Guessing Game!\nGuess a number between 1 and 100. You have 5 attempts.");

    for (let attempts = 1; attempts <= 5; attempts++) {
        let userGuess = prompt(`Attempt ${attempts}/5: Enter your guess:`);
        
        // Convert input to number
        userGuess = Number(userGuess);
        
        // Validate input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Invalid input! Please enter a number between 1 and 100.");
            attempts--; // Do not count invalid attempts
            continue;
        }
        
        console.log(`Attempt ${attempts}: User guessed ${userGuess}`);

        if (userGuess === randomNum) {
            alert(`🎉 Congratulations! You guessed the correct number (${randomNum}) in ${attempts} attempts!`);
            guessedCorrectly = true;
            break;
        } else if (userGuess < randomNum) {
            alert("Too low! Try a higher number.");
        } else {
            alert("Too high! Try a lower number.");
        }
    }

    if (!guessedCorrectly) {
        alert(`Game Over! The correct number was ${randomNum}.`);
    }
    
    if (confirm("Do you want to play again?")) {
        playGame();
    }
}

// Start the game
playGame();
