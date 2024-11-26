const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let a = 0;
let b = 0;

let operator = '';
let reset = false;

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (reset || display.textContent == 0) {
            display.textContent = number.value;
            reset = false; 
        } else {
            display.textContent += number.value;
            }
        });
      });

operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            reset = false;
            a = +display.textContent;
            operator = operator.value;
            display.textContent += `${operator}`;
        })
});

equals.addEventListener('click', () => {
    b = +display.textContent.split(' ')[2];
    operate(a, b, operator);
});

clear.addEventListener('click', () => {
    (a=0), (b=0), (display.textContent = '');
    display.textContent = 0;
});

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            display.textContent = a + b;
            break;
        case '-':
            display.textContent = a - b;
            break;
        case '*':
            display.textContent = a * b;
            break;
        case '/':
            display.textContent = (a / b).toFixed(2);
            break;
        default:
            console.log('error');
    }

    reset = true;
}
