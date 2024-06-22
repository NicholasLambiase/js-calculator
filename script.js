let firstOperand = "";
let operator = "";
let operator_selected = false;
let secondOperand = "";
let result;


let display_area = document.querySelector("#display-area");
let result_displayed = false;
let display_cnt = 0;

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
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    console.log(`${firstOperand} ${secondOperand}`);

    switch (operator) {
        case "+":
            result = add(firstOperand, secondOperand).toString();
            break;
        case "-":
            result = subtract(firstOperand, secondOperand).toString();
            break;
        case "÷":
            result = divide(firstOperand, secondOperand).toString();
            break;
        case "×":
            result = multiply(firstOperand, secondOperand).toString();
            break;
        default:
            console.log("Somehow you entered an invalid operation");
            break;
    }
}

// Given an input of a single character this will create and add it to the display
function displayMsg(msg) {
    let length;
    msg.length < 8 ? length = msg.length : length = 8;
    
    for (let index = 0; index < length; index++) {
        let display_char = document.createElement("p");
        display_char.classList = "result-txt"
        msg[index] == "." ? display_char.textContent = "_" : display_char.textContent = msg[index];
        display_area.prepend(display_char);
        display_cnt += 1;
    }
}

// If the user performs an invalid action this message will display
function displayError() {
    displayMsg("Error");
    result_displayed = true;
}

// Clears all paragraph elements with the class result-txt from the display
function clearDisplay() {
    let display_nums = document.querySelectorAll(".result-txt");
    if (display_nums){
        display_nums.forEach(num => {
            num.remove();
        });
    }
    display_cnt = 0;
}

// Resets the calculators stored values
function clearMemory() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    operator_selected = false;
    result = "";
    result_displayed = false;
}

// Event handler for number buttons
// When clicked the digit is added to the first or second operand
const num_btns = document.querySelectorAll(".num-btn");
num_btns.forEach(num => {
    num.addEventListener("click", () => {
        if (result_displayed && !operator) {
            clearDisplay();
            clearMemory();
        }


        if (display_cnt < 8) {
            let entered_num = num.textContent;
            
            if (!operator_selected)
                firstOperand = firstOperand + entered_num;
            else
                secondOperand = secondOperand + entered_num;
            
            displayMsg(entered_num);
        }
    });
});

// Operator btns
// When clicked need to clear the screen, set the operator, switch operand
const operator_btns = document.querySelectorAll(".operator-btn");
operator_btns.forEach(op_btn => {
    op_btn.addEventListener("click", () => {
        if (firstOperand) {
            clearDisplay();
            operator_selected = true;
            operator = op_btn.textContent;
        } else {
            displayError();
        }
    });
});


// Equals btn
// When clicked should either calculate or throw an error
// If calculated set this to the display and set firstOperand = result
const equals_btn = document.querySelector("#equals-btn");
equals_btn.addEventListener("click", () => {
    clearDisplay();
    if (firstOperand && operator) {
        if (secondOperand)
            operate(firstOperand, operator, secondOperand);
        else
            operate(firstOperand, operator, firstOperand);
            
            displayMsg(result);
            result_displayed = true;

        firstOperand = result;
        operator = "";
        operator_selected = false;
        secondOperand = "";
    } else
        displayError();
});


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
    clearMemory();
});

const switchToggle = document.getElementById('switch-toggle');
switchToggle.addEventListener('change', function() {
  const isChecked = this.checked;
  console.log(`Switch is ${isChecked ? 'on' : 'off'}`);
});