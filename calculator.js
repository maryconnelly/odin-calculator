const operator = "";
const num1 = "";
const num2 = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {
    add();
}

const number = "";

const display = document.querySelector("#display");

const one = document.querySelector("#one");
    one.addEventListener('click', () => {
        display.textContent = "1";
    })
const two = document.querySelector("#two");
two.addEventListener('click', () => {
    display.textContent = "2";
})
const three = document.querySelector("#three");
three.addEventListener('click', () => {
    display.textContent = "3";
})
const four = document.querySelector("#four");
four.addEventListener('click', () => {
    display.textContent = "4";
})
const five = document.querySelector("#five");
five.addEventListener('click', () => {
    display.textContent = "5";
})
const six = document.querySelector("#six");
six.addEventListener('click', () => {
    display.textContent = "6";
})
const seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    display.textContent = "7";
})
const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    display.textContent = "8";
})
const nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    display.textContent = "9";
})
const zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    display.textContent = "0";
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener('click', () => {
    display.textContent = ".";
})

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    display.textContent = "";
})