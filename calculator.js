const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numberButton");
const operators = document.querySelectorAll(".operatorButton");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let a = 0;
let b = 0;

let operator = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
            display.textContent += number.dataset.value;
            }
    )})

operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            a = +display.textContent;
            operator = operator.value;
            display.textContent += ` ${operator} `;
        })
});

equals.addEventListener('click', () => {
    b = +display.textContent.split(" ")[2];
    operate(a, b, operator);
})

clear.addEventListener('click', () => {
    a = 0;
    b = 0;
    operator = "";
    display.textContent = "";

})

let result = 0;

function operate(a, b, operator) {
    if (operator = "/") {
        result = (a / b).toFixed(2);
            display.textContent = result;
    } else if (operator = "*") {
            result = a * b;
                display.textContent = result;
        } else if (operator = "-") {
            result = a - b;
                display.textContent = result;
        } else if (operator = "+") {
                    result = a + b;
                        display.textContent = result;
        } else {
          display.textContent = "error"; 
        }}