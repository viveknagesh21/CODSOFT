let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function appendOperator(value) {
  if (currentInput !== '') {
    operator = value;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculateResult() {
  if (currentInput !== '' && previousInput !== '' && operator !== '') {
    switch (operator) {
      case '+':
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
        break;
      case '-':
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
        break;
      case '*':
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
        break;
      case '/':
        currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        break;
      case '%':
        currentInput = (parseFloat(previousInput) % parseFloat(currentInput)).toString();
        break;
    }
    operator = '';
    previousInput = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || '0';
}
