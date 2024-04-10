var x = y = operator = null;
var isEvaluated = false;
const calculator = document.querySelector("#calculator");
const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");
// screen.textContent = "Hello";

for (let i = 0; i <= 9; ++i) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {populate(i);});
    buttons.appendChild(button);
}
const addition = document.createElement("button");
addition.textContent = "+";
addition.addEventListener("click", () => {if (x !== null) operator = add;operator;});
buttons.appendChild(addition);

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.addEventListener("click", () => {if (x !== null) operator = subtract;operator;});
buttons.appendChild(subtraction);

const multiplication = document.createElement("button");
multiplication.textContent = "x";
multiplication.addEventListener("click", () => {if (x !== null) operator = multiply;operator;});
buttons.appendChild(multiplication);

const division = document.createElement("button");
division.textContent = "÷";
division.addEventListener("click", () => {if (x !== null) operator = divide;operator;});
buttons.appendChild(division);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {if (y != null) operator();});
buttons.appendChild(equals);

const clear = document.createElement("button");
clear.textContent = "c";
clear.addEventListener("click", () => {x = y = operator = null;screen.textContent = ""});
buttons.appendChild(clear);

function populate(i) {
    let numStr = i.toString();
    if (x === null || (isEvaluated && operator === null)) {
        x = numStr;
        isEvaluated = false;
        screen.textContent = x;
    }
    else if (operator === null) {
        x = x + numStr;
        screen.textContent = x;
    }
    else if (y === null) {
        y = numStr;
        screen.textContent = y;
    }
    else {
        y = y + numStr;
        screen.textContent = y;
    }
}

function add() {
    x = parseInt(x);
    y = parseInt(y);
    x = x + y;
    x = x.toString();
    y = operator = null;
    isEvaluated = true;
    screen.textContent = x;
}

function subtract() {
    x = parseInt(x);
    y = parseInt(y);
    x = x - y;
    x = x.toString();
    y = operator = null;
    isEvaluated = true;
    screen.textContent = x;
}

function multiply() {
    x = parseInt(x);
    y = parseInt(y);
    x = x * y;
    x = x.toString();
    y = operator = null;
    isEvaluated = true;
    screen.textContent = x;
}

function divide() {
    if (y == 0) {
        screen.textContent = "Err";
        x = y = operator = null;
        isEvaluated = true;
        return;
    }
    x = parseInt(x);
    y = parseInt(y);
    x = x / y;
    x = x.toString();
    y = operator = null;
    isEvaluated = true;
    screen.textContent = x;
}