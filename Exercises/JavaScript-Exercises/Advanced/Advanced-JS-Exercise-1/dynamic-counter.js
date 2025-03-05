document.addEventListener("DOMContentLoaded", function () {
    const counterText = document.getElementById("counter-text");
    const addButton = document.getElementById("button-add");
    const subtractButton = document.getElementById("button-subtract");

    let counterValue = 0;
    const maxLimit = 100; // Optional: Maximum limit for counter

    function updateCounter() {
        counterText.textContent = counterValue;
    }

    addButton.addEventListener("click", function () {
        if (counterValue < maxLimit) {
            counterValue++;
            updateCounter();
        } else {
            alert("Maximum limit reached!");
        }
    });

    subtractButton.addEventListener("click", function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });

    // Bonus: Keyboard support (ArrowUp to increase, ArrowDown to decrease)
    window.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp" && counterValue < maxLimit) {
            counterValue++;
            updateCounter();
        } else if (event.key === "ArrowDown" && counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    });

    updateCounter(); // Initialize display
});
