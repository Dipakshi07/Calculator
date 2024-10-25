let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let resultDisplayed = false;

// Function to append number to the display
function appendNumber(number) {
    if (resultDisplayed) {
        display.innerText = '';
        resultDisplayed = false;
    }
    
    if (currentOperator === '') {
        firstOperand += number;
    } else {
        secondOperand += number;
    }

    display.innerText += number;  // Update the display
}
function setOperator(operator) {
    if (firstOperand !== '') {
        currentOperator = operator;
        display.innerText = firstOperand + ' ' + currentOperator + ' ';
    }
}
//calculation and display result
function calculate() {
    if (firstOperand !== '' && secondOperand !== '' && currentOperator !== '') {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
                if (parseFloat(secondOperand) === 0) {
                    result = 'Error';
                } else {
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                }
                break;
        }
        display.innerText = firstOperand + ' ' + currentOperator + ' ' + secondOperand + ' = ' + result;
        firstOperand = result;  // Store the result as the new firstOperand
        secondOperand = '';     // Clear the secondOperand
        currentOperator = '';   // Reset the operator
        resultDisplayed = true; // Mark that a result has been displayed
    }
}
function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    display.innerText = '0';
    resultDisplayed = false;
}
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendNumber(key);   //input
    } else if (key === '.') {
        appendNumber(key);   //Decimal input
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperator(key);  //operator
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key === 'Backspace') {
        removeLastCharacter();
    }
});
function removeLastCharacter() {
    if (resultDisplayed) {
        clearDisplay();
        return;
    }
    if (secondOperand !== '') {
        secondOperand = secondOperand.slice(0, -1);
        display.innerText = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
    } else if (currentOperator !== '') {
        currentOperator = '';
        display.innerText = firstOperand;
    } else if (firstOperand !== '') {
        firstOperand = firstOperand.slice(0, -1);
        display.innerText = firstOperand || '0';
    }
}
