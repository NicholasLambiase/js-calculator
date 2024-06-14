let firstOperand = "";
let operator = "";
let operator_selected = false;
let secondOperand = "";

let display_cnt = 0;
let result;

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

function operate(firstOperand, operator, secondOperand) {
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


let num_btns = document.querySelectorAll(".num-btn");
num_btns.forEach(num => {
    num.addEventListener("click", () => {
        if (display_cnt < 8) {
            let entered_num = num.textContent;
            
            firstOperand = firstOperand + entered_num;
            
            let display_num = document.createElement("p");
            display_num.classList = "result-txt"
            display_num.textContent = entered_num;
            
            let display_area = document.querySelector("#display-area");
            display_area.appendChild(display_num);

            display_cnt += 1;
        }
    });
});

// Switch Easter Egg Functionality
const switchToggle = document.getElementById('switch-toggle');

switchToggle.addEventListener('change', function() {
  const isChecked = this.checked;
  console.log(`Switch is ${isChecked ? 'on' : 'off'}`);
});