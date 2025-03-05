function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case '%': return num2 !== 0 ? num1 % num2 : 'Error: Modulo by zero';
        default: return 'Invalid operator';
    }
}

function startCalculator() {
    do {
        let num1 = parseFloat(prompt('Enter the first number:'));
        let num2 = parseFloat(prompt('Enter the second number:'));
        let operator = prompt('Choose an operation (+, -, *, /, %):');

        if (isNaN(num1) || isNaN(num2)) {
            alert('Error: Please enter valid numbers!');
            console.log('Invalid number input');
            continue;
        }

        let result = calculate(num1, num2, operator);
        alert(`Result: ${result}`);
        console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);
    } while (confirm('Do you want to perform another calculation?'));
}

startCalculator();
