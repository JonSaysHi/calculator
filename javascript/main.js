let displayArray = [];
let displayResult;
let displayLength;
let x;
let y;
let operator;
let typeX;
let typeY;

// All querySelectors for the buttons of the calculator

const clear = document.querySelector("#clear");
const plusOrMinus = document.querySelector("#plusminus");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const period = document.querySelector("#period");
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

// All perator functions

const addition = function (x, y) {
  displayResult = x + y;
  document.querySelector(".result").textContent = displayResult;
};

const subtraction = function (x, y) {
  displayResult = x - y;
  document.querySelector(".result").textContent = displayResult;
};

const multiplication = function (x, y) {
  displayResult = x * y;
  document.querySelector(".result").textContent = displayResult;
};

const division = function (x, y) {
  displayResult = x / y;
  document.querySelector(".result").textContent = displayResult;
};

const operate = function (operator, x, y) {
  if (operator === "add") {
    additon(x, y);
  } else if (operator === "subtract") {
    subtraction(x, y);
  } else if (operator === "multiply") {
    multiplication(x, y);
  } else if (operator === "divide") {
    division(x, y);
  } else {
    return "ERROR";
  }
};

// Functions for creating the visual display of numbers

let display = function () {
  // commas();

  displayResult = displayArray.join("");
  // displayArray = displayArray.slice(0, 10);
  displayArray = displayArray.slice(0, 8);
  displayResult = displayResult;
  document.querySelector(".result").textContent = displayResult;
};

function createDisplay(number) {
  displayArray.push(number);
  display();
}

// Event listeners for number buttons

zero.addEventListener("click", () => {
  createDisplay(0);
});

one.addEventListener("click", () => {
  createDisplay(1);
});

two.addEventListener("click", () => {
  createDisplay(2);
});

three.addEventListener("click", () => {
  createDisplay(3);
});

four.addEventListener("click", () => {
  createDisplay(4);
});

five.addEventListener("click", () => {
  createDisplay(5);
});

six.addEventListener("click", () => {
  createDisplay(6);
});

seven.addEventListener("click", () => {
  createDisplay(7);
});

eight.addEventListener("click", () => {
  createDisplay(8);
});

nine.addEventListener("click", () => {
  createDisplay(9);
});

// Event listeners for operators

divide.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = Number(displayResult);
    operator = "divide";
    displayArray.splice(0, displayArray.length);
  } else if (typeX == "number" && typeY == "undefined") {
    y = Number(displayResult);
    division(x, y);
    x = displayResult;
    console.log("x = " + x);
    y = undefined;
    console.log("y = " + y);
    displayArray.splice(0, displayArray.length);
  }
});

multiply.addEventListener("click", () => {
  let typeX = typeof x;
  if (typeX == "undefined") {
    x = Number(displayResult);
    operator = "multiply";
    displayArray.splice(0, displayArray.length);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
  } else if (typeX == "number") {
    y = Number(displayResult);
    displayArray.splice(0, displayArray.length);
    multiplication(x, y);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
    x = displayResult;
  }
});

add.addEventListener("click", () => {
  let typeX = typeof x;
  if (typeX == "undefined") {
    x = Number(displayResult);
    operator = "add";
    displayArray.splice(0, displayArray.length);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
  } else if (typeX == "number") {
    y = Number(displayResult);
    displayArray.splice(0, displayArray.length);
    addition(x, y);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
    x = displayResult;
  }
});

subtract.addEventListener("click", () => {
  let typeX = typeof x;
  if (typeX == "undefined") {
    x = Number(displayResult);
    operator = "subtract";
    displayArray.splice(0, displayArray.length);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
  } else if (typeX == "number") {
    y = Number(displayResult);
    displayArray.splice(0, displayArray.length);
    subtraction(x, y);
    console.log("x is " + typeX);
    console.log("y is " + typeX);
    x = displayResult;
  }
});

equals.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "number" && typeY == "undefined") {
    y = Number(displayResult);
    operate(operator, x, y);
    x = undefined;
    console.log("x = " + x);
    y = undefined;
    console.log("y = " + y);
    displayArray.splice(0, displayArray.length);
  }
});

// This function adds and removes commas for the corresponding length

// let commas = function () {
//   displayLength = displayArray.length;
//   if (displayLength === 4) {
//     displayArray.splice(1, 0, ",");
//   } else if (displayLength === 6) {
//     displayArray.splice(1, 1);
//     displayArray.splice(2, 0, ",");
//   } else if (displayLength === 7) {
//     displayArray.splice(2, 1);
//     displayArray.splice(3, 0, ",");
//   } else if (displayLength === 8) {
//     displayArray.splice(3, 1);
//     displayArray.splice(1, 0, ",");
//     displayArray.splice(5, 0, ",");
//   } else if (displayLength === 10) {
//     displayArray.splice(1, 1);
//     displayArray.splice(4, 1);
//     displayArray.splice(2, 0, ",");
//     displayArray.splice(6, 0, ",");
//   } else if (displayLength === 11) {
//     displayArray.splice(2, 1);
//     displayArray.splice(5, 1);
//     displayArray.splice(3, 0, ",");
//     displayArray.splice(7, 0, ",");
//   }
// };
