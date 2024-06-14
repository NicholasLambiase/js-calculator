let firstOperand = "";
let operator = "";
let operator_selected = false;
let secondOperand = "";

let display_area = document.querySelector("#display-area");
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

function clearDisplay() {
    let display_nums = document.querySelectorAll(".result-txt");
    if (display_nums){
        display_nums.forEach(num => {
            num.remove();
        });
    }
    display_cnt = 0;
}

const num_btns = document.querySelectorAll(".num-btn");
num_btns.forEach(num => {
    num.addEventListener("click", () => {
        if (display_cnt < 8) {
            let entered_num = num.textContent;
            
            if (!operator_selected)
                firstOperand = firstOperand + entered_num;
            else
                secondOperand = secondOperand + entered_num;
            
            let display_num = document.createElement("p");
            display_num.classList = "result-txt"
            display_num.textContent = entered_num;
            
            display_area.prepend(display_num);

            display_cnt += 1;
        }
    });
});


// Operator btns
// When clicked need to clear the screen, set the operand


// Equals btn
// When clicked should either calculate or throw an error
// If calculated set this to the display and set firstOperand = result


// Clear Entry Button
// If the operator boolean is false clear the first operand
// else clear the second operand
// Regardless: clear the display
const clear_entry_btn = document.querySelector("#clear-entry");
clear_entry_btn.addEventListener("click", () => {
    clearDisplay();

    if (!operator_selected)
        firstOperand = "";
    else
        secondOperand = "";
});


// Clear Button
// Clear the first and second operand. Reset operator boolean
// Regardless: clear the display
const clear_btn = document.querySelector("#clear-all");
clear_btn.addEventListener("click", () => {
    clearDisplay();

    firstOperand = "";
    secondOperand = "";
    operator = "";
    operator_selected = false;
});

const switchToggle = document.getElementById('switch-toggle');
switchToggle.addEventListener('change', function() {
  const isChecked = this.checked;
  console.log(`Switch is ${isChecked ? 'on' : 'off'}`);
});