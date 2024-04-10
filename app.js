var x = y = operator = null;
const calculator = document.querySelector("#calculator");
const buttons = document.querySelector("#buttons");
const screen = document.querySelector("#screen");
screen.textContent = "Hello";

for (let i = 0; i <= 9; ++i) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {populate(i);});
    buttons.appendChild(button);
}
const addition = document.createElement("button");
addition.textContent = "+";
addition.addEventListener("click", () => {if (x !== null) operator = add;});
buttons.appendChild(addition);

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.addEventListener("click", () => {if (x !== null) operator = subtract;});
buttons.appendChild(subtraction);

const multiplication = document.createElement("button");
multiplication.textContent = "x";
multiplication.addEventListener("click", () => {if (x !== null) operator = multiply;});
buttons.appendChild(multiplication);

const division = document.createElement("button");
division.textContent = "÷";
division.addEventListener("click", () => {if (x !== null) operator = divide;});
buttons.appendChild(division);

const equals = document.createElement("button");
division.textContent = "=";
division.addEventListener("click", () => {if (y !== null) console.log(operator(x,y));});
buttons.appendChild(division);


console.log("x = " + x);
console.log("operator = " + operator);
console.log("y = " + y);
console.log("---");
console.log();


function populate(i) {
    let temp = i.toString();
    // console.log(temp)
    
    if (operator === null) x = i;
    else y = i;
    console.log("x = " + x);
    console.log("operator = " + operator);
    console.log("y = " + y);
    console.log("---");
}

function add(x, y) {
    console.log(x);
    let a = x;
    let b = y;
    console.log(a);
    x = y = operator = null;
    console.log(a + b);
    return a + b;
}

function subtract(x, y) {
    console.log(x);
    let a = x;
    let b = y;
    console.log(a);
    x = y = operator = null;
    console.log(a + b);
    return a - b;
}

function multiply(x, y) {
    console.log(x);
    let a = x;
    let b = y;
    console.log(a);
    x = y = operator = null;
    console.log(a + b);
    return a * b;
}

function divide(x, y) {
    console.log(x);
    if (y == 0) return NaN;
    let a = x;
    let b = y;
    console.log(a);
    x = y = operator = null;
    console.log(a + b);
    return a / b;
}