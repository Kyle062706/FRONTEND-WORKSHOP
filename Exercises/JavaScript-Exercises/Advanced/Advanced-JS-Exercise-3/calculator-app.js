document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("calc-screen");
    let currentInput = "";
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateScreen(value) {
        screen.textContent = value;
    }

    function handleNumber(num) {
        if (waitingForSecondOperand) {
            currentInput = num;
            waitingForSecondOperand = false;
        } else {
            currentInput = currentInput === "0" ? num : currentInput + num;
        }
        updateScreen(currentInput);
    }

    function handleOperator(op) {
        if (operator && !waitingForSecondOperand) {
            firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
            updateScreen(firstOperand);
        } else {
            firstOperand = parseFloat(currentInput);
        }
        operator = op;
        waitingForSecondOperand = true;
    }

    function calculate(a, b, op) {
        switch (op) {
            case "+": return a + b;
            case "−": return a - b;
            case "×": return a * b;
            case "÷": return b !== 0 ? a / b : "Error";
            default: return b;
        }
    }

    function handleEquals() {
        if (operator && firstOperand !== null) {
            currentInput = calculate(firstOperand, parseFloat(currentInput), operator);
            operator = null;
            waitingForSecondOperand = false;
            firstOperand = null;
            updateScreen(currentInput);
        }
    }

    function handleDecimal() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateScreen(currentInput);
        }
    }

    function handleClear() {
        currentInput = "0";
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateScreen(currentInput);
    }

    function handleDelete() {
        currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
        updateScreen(currentInput);
    }

    function handleSign() {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateScreen(currentInput);
    }

    function handlePercent() {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateScreen(currentInput);
    }

    document.querySelectorAll(".numberKeys").forEach(button => {
        button.addEventListener("click", () => handleNumber(button.textContent.trim()));
    });

    document.querySelectorAll(".arithmeticKeys").forEach(button => {
        button.addEventListener("click", () => handleOperator(button.textContent.trim()));
    });

    document.getElementById("equalsBtn").addEventListener("click", handleEquals);
    document.getElementById("decimalBtn").addEventListener("click", handleDecimal);
    document.getElementById("clearBtn").addEventListener("click", handleClear);
    document.getElementById("deleteBtn").addEventListener("click", handleDelete);
    document.getElementById("signBtn").addEventListener("click", handleSign);
    document.getElementById("percentBtn").addEventListener("click", handlePercent);

    document.addEventListener("keydown", (e) => {
        if (!isNaN(e.key)) handleNumber(e.key);
        if (["+", "-", "*", "/"].includes(e.key)) handleOperator(e.key.replace("*", "×").replace("/", "÷"));
        if (e.key === "Enter" || e.key === "=") handleEquals();
        if (e.key === ".") handleDecimal();
        if (e.key === "Backspace") handleDelete();
        if (e.key === "Escape") handleClear();
    });

    updateScreen("0");
});
