alert("OK")
let display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let selectedOperator = "";

function inputNumber(number) {
    if (selectedOperator === "") {
        firstNumber += number;
        display.innerText = firstNumber;
    } else {
        secondNumber += number;
        display.innerText = secondNumber;
    }
}

function chooseOperator(operator) {
    selectedOperator = operator;
}

let symbol = currentOperator;

if (currentOperator === "*") {
    symbol = "×";
}

if (currentOperator === "/") {
    symbol = "÷";
}

if (currentOperator === "-") {
    symbol = "−";
}

expression.textContent =
    firstNumber + " " +
    symbol + " " +
    secondNumber + " =";
function calculate() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    if (selectedOperator === "+") {
        result = num1 + num2;
    }

    if (selectedOperator === "-") {
        result = num1 - num2;
    }

    if (selectedOperator === "*") {
        result = num1 * num2;
    }

    if (selectedOperator === "/") {
        result = num1 / num2;
    }

    display.innerText = result;

    firstNumber = String(result);
    secondNumber = "";
    selectedOperator = "";
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    selectedOperator = "";

    display.innerText = "0";
}

function plusMinus() {
    if (selectedOperator === "") {
        firstNumber = String(Number(firstNumber) * -1);
        display.innerText = firstNumber;
    } else {
        secondNumber = String(Number(secondNumber) * -1);
        display.innerText = secondNumber;
    }
}

function percent() {
    if (selectedOperator === "") {
        firstNumber = String(Number(firstNumber) / 100);
        display.innerText = firstNumber;
    } else {
        secondNumber = String(Number(secondNumber) / 100);
        display.innerText = secondNumber;
    }
}

function inputDecimal() {
    if (selectedOperator === "") {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            display.innerText = firstNumber;
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            display.innerText = secondNumber;
        }
    }
}