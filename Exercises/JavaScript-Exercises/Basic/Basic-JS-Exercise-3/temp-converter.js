document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector("button");
    const tempInput = document.getElementById("temp");
    const unitSelect = document.getElementById("unit");
    const resultText = document.getElementById("conversion-text");

    convertButton.addEventListener("click", function () {
        let tempValue = parseFloat(tempInput.value);
        let selectedUnit = unitSelect.value;

        // Validate input
        if (isNaN(tempValue)) {
            resultText.textContent = "Please enter a valid numeric temperature.";
            return;
        }

        if (!selectedUnit) {
            resultText.textContent = "Please select a unit to convert into.";
            return;
        }

        let convertedTemp;
        if (selectedUnit === "celsius") {
            convertedTemp = ((tempValue - 32) * 5) / 9;
            resultText.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °C`;
        } else if (selectedUnit === "fahrenheit") {
            convertedTemp = (tempValue * 9) / 5 + 32;
            resultText.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °F`;
        }
    });
});
