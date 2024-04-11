var x = y = operator = null;
var isEvaluated = false;
const calculator = document.querySelector("#calculator");
const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");

for (let i = 9; i >= 0; --i) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {populate(i);
        console.log("----" + i + "----");
        console.log("x: " + x);
        console.log("y: " + y);
        console.log("isEvaluated: " + isEvaluated);
        console.log("--------------");});
    buttons.appendChild(button);
}
const addition = document.createElement("button");
addition.textContent = "+";
addition.addEventListener("click", () => {if (x !== null && (operator === null || isEvaluated)) operator = add; if (y !== null) operator();
    console.log("----addition----");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");});
buttons.appendChild(addition);

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.addEventListener("click", () => {if (x !== null && (operator === null || isEvaluated)) operator = subtract; if (y !== null) operator();
    console.log("----subtraction----");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");});
buttons.appendChild(subtraction);

const multiplication = document.createElement("button");
multiplication.textContent = "x";
multiplication.addEventListener("click", () => {if (x !== null && (operator === null || isEvaluated)) operator = multiply; if (y !== null) operator();
    console.log("----multiplication---");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");});
buttons.appendChild(multiplication);

const division = document.createElement("button");
division.textContent = "÷";
division.addEventListener("click", () => {if (x !== null && (operator === null || isEvaluated)) operator = divide; if (y !== null) operator();
    console.log("----division----");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");});
buttons.appendChild(division);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {if (y != null) operator(true);
    console.log("------equals------");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");});
buttons.appendChild(equals);

const clear = document.createElement("button");
clear.textContent = "c";
clear.addEventListener("click", () => {x = y = operator = null; screen.textContent = ""});
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

function add(evaluated = false) {
    x = parseInt(x);
    y = parseInt(y);
    x = x + y;
    x = x.toString();
    y = null;
    isEvaluated = evaluated;
    if (isEvaluated) operator = null;
    screen.textContent = x;
    console.log("------add------");
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------");
}

function subtract(evaluated = false) {
    x = parseInt(x);
    y = parseInt(y);
    x = x - y;
    x = x.toString();
    y = null;
    isEvaluated = evaluated;
    if (isEvaluated) operator = null;
    screen.textContent = x;
    console.log("------sub------")
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------")
}

function multiply(evaluated = false) {
    x = parseInt(x);
    y = parseInt(y);
    x = x * y;
    x = x.toString();
    y = null;
    isEvaluated = evaluated;
    if (isEvaluated) operator = null;
    screen.textContent = x;
    console.log("------mul------")
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------")
}

function divide(evaluated = false) {
    if (y == 0) {
        screen.textContent = "Err";
        x = y = operator = null;
        isEvaluated = evaluated;
        return;
    }
    x = parseInt(x);
    y = parseInt(y);
    x = x / y;
    x = x.toString();
    y = null;
    isEvaluated = evaluated;
    if (isEvaluated) operator = null;
    screen.textContent = x;
    console.log("------div------")
    console.log("x: " + x);
    console.log("y: " + y);
    console.log("isEvaluated: " + isEvaluated);
    console.log("--------------")
}