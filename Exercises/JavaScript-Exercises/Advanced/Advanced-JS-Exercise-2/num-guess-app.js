document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guess-input");
    const guessBtn = document.getElementById("guess-btn");
    const resultDiv = document.getElementById("result-div");
    const guessContainer = document.getElementById("guess-container");
    const newGameBtn = document.querySelector("#new-game-div button");
    
    let randomNumber = generateRandomNumber();
    let attemptsLeft = 5;
    let guessHistory = [];
    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    function updateGuessHistory(guess, status) {
        const guessElement = document.createElement("p");
        guessElement.textContent = `Guess: ${guess}`;
        guessElement.style.color = status === "correct" ? "darkorchid" : status === "high" ? "red" : "green";
        guessContainer.appendChild(guessElement);
    }
    
    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultDiv.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }
        
        if (guessHistory.includes(userGuess)) {
            resultDiv.textContent = "You already guessed that number! Try a different one.";
            return;
        }
        
        guessHistory.push(userGuess);
        attemptsLeft--;
        
        if (userGuess === randomNumber) {
            resultDiv.textContent = `Congratulations! The number was ${randomNumber}.`;
            updateGuessHistory(userGuess, "correct");
            endGame();
            return;
        } else if (userGuess > randomNumber) {
            resultDiv.textContent = "Too high! Try again.";
            updateGuessHistory(userGuess, "high");
        } else {
            resultDiv.textContent = "Too low! Try again.";
            updateGuessHistory(userGuess, "low");
        }
        
        if (attemptsLeft === 0) {
            resultDiv.textContent = `Game Over! The number was ${randomNumber}.`;
            endGame();
        }
    }
    
    function endGame() {
        guessInput.disabled = true;
        guessBtn.disabled = true;
        newGameBtn.style.display = "block";
    }
    
    function resetGame() {
        randomNumber = generateRandomNumber();
        attemptsLeft = 5;
        guessHistory = [];
        resultDiv.textContent = "";
        guessContainer.innerHTML = "";
        guessInput.value = "";
        guessInput.disabled = false;
        guessBtn.disabled = false;
        newGameBtn.style.display = "none";
    }
    
    guessBtn.addEventListener("click", checkGuess);
    newGameBtn.addEventListener("click", resetGame);
    newGameBtn.style.display = "none";
});
