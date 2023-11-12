let display = document.getElementById("display");
let currentOperator = "";
let firstOperand = "";
let waitingForSecondOperand = false;
let lastOperatorButton = null;

function appendToDisplay(value) {
  if (waitingForSecondOperand) {
    display.value = value;
    waitingForSecondOperand = false;
  } else {
    const currentInput = display.value;
    const decimalPosition = currentInput.indexOf(".");
    if (decimalPosition !== -1 && currentInput.length - decimalPosition > 5) {
      return;
    }
    display.value += value;
  }
  if (lastOperatorButton) {
    lastOperatorButton.style.backgroundColor = "#e0e0e0";
    lastOperatorButton.style.color = "black";
  }
}

function setOperator(button, operator) {
  if (currentOperator && waitingForSecondOperand) {
    currentOperator = operator;
  } else {
    if (currentOperator) {
      calculateResult();
    }
    firstOperand = display.value;
    currentOperator = operator;
    waitingForSecondOperand = true;
    lastOperatorButton = button;
    button.style.backgroundColor = "white";
    button.style.color = "orange";
  }
}

function clearDisplay() {
  display.value = "";
  currentOperator = "";
  firstOperand = "";
  waitingForSecondOperand = false;
}

function calculateResult() {
  if (currentOperator && firstOperand) {
    const secondOperand = display.value;
    display.value = evaluateExpression(
      firstOperand,
      currentOperator,
      secondOperand
    );
    currentOperator = "";
    waitingForSecondOperand = true;
  }
}

function evaluateExpression(operand1, operator, operand2) {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);
  switch (operator) {
    case "+":
      return (operand1 + operand2);
    case "-":
      return (operand1 - operand2);
    case "*":
      return (operand1 * operand2);
    case "/":
      if (operand2 === 0) {
        return "Error: Division by zero";
      }
      return (operand1 / operand2);
    default:
      return operand2;
  }
}

function resetOperatorButtonColor() {
  const operatorButtons = document.querySelectorAll(".orange");
  operatorButtons.forEach((btn) => {btn.style.backgroundColor = "orange";btn.style.color = "white"});
}

const numberButtons = document.querySelectorAll(".black");
numberButtons.forEach((btn) => {
  btn.addEventListener("click", resetOperatorButtonColor);
});
