let firstOperand;
let operator;
let secondOperand;

function operate(firstOperand, operator, secondOperand) {
    let result
    switch (operator) {
        case "+":
            result = add(firstOperand, secondOperand);
            break;
        case "-":
            result = subtract(firstOperand, secondOperand);
            break;
        case "/":
            result = divide(firstOperand, secondOperand);
            break;
        case "*":
            result = multiply(firstOperand, secondOperand);
            break;
        default:
            console.log("Somehow you entered an invalid operation");
            break;
    }
}



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

