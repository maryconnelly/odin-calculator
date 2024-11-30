const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numberButton");
const operators = document.querySelectorAll(".operatorButton");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

let a = 0;
let b = 0;

let operator = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
            display.textContent += number.value;
            }
    )})

operators.forEach((localOperator) => {
    localOperator.addEventListener('click', () => {
            a = +display.textContent;
            operator = localOperator.value;
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

   backspace.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
   })



function operate(a, b, operator) {   

    if (operator === "*") {
        display.textContent = (a * b).toFixed(2);

    } else if (operator === "/") {
        display.textContent = (a / b).toFixed(2);

    } else if (operator === "-") {
        display.textContent = (a - b).toFixed(2);

    } else if (operator === "+") {
        display.textContent = (a + b).toFixed(2);    

    } else {
          display.textContent = "error"; 
        }};