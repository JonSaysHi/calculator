let displayArray = [];
let displayResult;
let x;
let y;
let operator;

let display = function () {
  let displayLength = displayArray.length;
  if (displayLength === 4) {
    displayArray.splice(1, 0, ",");
  } else if (displayLength === 6) {
    displayArray.splice(1, 1);
    displayArray.splice(2, 0, ",");
  } else if (displayLength === 7) {
    displayArray.splice(2, 1);
    displayArray.splice(3, 0, ",");
  } else if (displayLength === 8) {
    displayArray.splice(3, 1);
    displayArray.splice(1, 0, ",");
    displayArray.splice(5, 0, ",");
  } else if (displayLength === 10) {
    displayArray.splice(1, 1);
    displayArray.splice(4, 1);
    displayArray.splice(2, 0, ",");
    displayArray.splice(6, 0, ",");
  } else if (displayLength === 11) {
    displayArray.splice(2, 1);
    displayArray.splice(5, 1);
    displayArray.splice(3, 0, ",");
    displayArray.splice(7, 0, ",");
  }

  displayResult = displayArray.join("");
  displayArray = displayArray.slice(0, 10);
  displayResult = displayResult;
  document.querySelector(".result").textContent = displayResult;
};

const clearButton = document.querySelector("#clear");
const plusOrMinusButton = document.querySelector("#plusminus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equals");
const periodButton = document.querySelector("#period");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const operate = function (operator, x, y) {
  if (operator === "add") {
    add(x, y);
  } else if (operator === "subtract") {
    subtract(x, y);
  } else if (operator === "multiply") {
    multiply(x, y);
  } else if (operator === "divide") {
    divide(x, y);
  } else {
    return "ERROR";
  }
};

let displayValue = function () {};

zero.addEventListener("click", () => {
  displayArray.push(0);
  display();
});

one.addEventListener("click", () => {
  displayArray.push(1);
  display();
});

two.addEventListener("click", () => {
  displayArray.push(2);
  display();
});

three.addEventListener("click", () => {
  displayArray.push(3);
  display();
});

four.addEventListener("click", () => {
  displayArray.push(4);
  display();
});

five.addEventListener("click", () => {
  displayArray.push(5);
  display();
});

six.addEventListener("click", () => {
  displayArray.push(6);
  display();
});

seven.addEventListener("click", () => {
  displayArray.push(7);
  display();
});

eight.addEventListener("click", () => {
  displayArray.push(8);
  display();
});

nine.addEventListener("click", () => {
  displayArray.push(9);
  display();
});
