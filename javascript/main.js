let displayArray = [];
let x;
let y;
const clearButton = document.querySelector("#clear");
const plusOrMinusButton = document.querySelector("#plusminus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equals");
const periodButton = document.querySelector("#period");
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

one.addEventListener("click", () => {
  displayArray.push(1);
});

two.addEventListener("click", () => {
  displayArray.push(2);
});

three.addEventListener("click", () => {
  displayArray.push(3);
});

four.addEventListener("click", () => {
  displayArray.push(4);
});

five.addEventListener("click", () => {
  displayArray.push(5);
});

six.addEventListener("click", () => {
  displayArray.push(6);
});

six.addEventListener("click", () => {
  displayArray.push(7);
});

six.addEventListener("click", () => {
  displayArray.push(8);
});

six.addEventListener("click", () => {
  displayArray.push(9);
});
