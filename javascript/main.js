let displayArray = [];
let displayResult;
let displayLength;
let x;
let y;
let operator;
let typeX;
let typeY;

// All querySelectors for the buttons of the calculator

const getClear = document.querySelector("#clear");
const getPlusOrMinus = document.querySelector("#plusminus");
const getPercent = document.querySelector("#percent");
const getDivide = document.querySelector("#divide");
const getMultiply = document.querySelector("#multiply");
const getSubtract = document.querySelector("#subtract");
const getAdd = document.querySelector("#add");
const getEquals = document.querySelector("#equals");
const getPeriod = document.querySelector("#period");
const getZero = document.querySelector("#zero");
const getOne = document.querySelector("#one");
const getTwo = document.querySelector("#two");
const getThree = document.querySelector("#three");
const getFour = document.querySelector("#four");
const getFive = document.querySelector("#five");
const getSix = document.querySelector("#six");
const getSeven = document.querySelector("#seven");
const getEight = document.querySelector("#eight");
const getNine = document.querySelector("#nine");

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

getZero.addEventListener("click", () => {
  createDisplay(0);
});

getOne.addEventListener("click", () => {
  createDisplay(1);
});

getTwo.addEventListener("click", () => {
  createDisplay(2);
});

getThree.addEventListener("click", () => {
  createDisplay(3);
});

getFour.addEventListener("click", () => {
  createDisplay(4);
});

getFive.addEventListener("click", () => {
  createDisplay(5);
});

getSix.addEventListener("click", () => {
  createDisplay(6);
});

getSeven.addEventListener("click", () => {
  createDisplay(7);
});

getEight.addEventListener("click", () => {
  createDisplay(8);
});

getNine.addEventListener("click", () => {
  createDisplay(9);
});

// Event listeners for operators

getDivide.addEventListener("click", () => {
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

getMultiply.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = Number(displayResult);
    operator = "multiply";
    displayArray.splice(0, displayArray.length);
  } else if (typeX == "number" && typeY == "undefined") {
    y = Number(displayResult);
    multiplication(x, y);
    x = displayResult;
    console.log("x = " + x);
    y = undefined;
    console.log("y = " + y);
    displayArray.splice(0, displayArray.length);
  }
});

getSubtract.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = Number(displayResult);
    operator = "subtract";
    displayArray.splice(0, displayArray.length);
  } else if (typeX == "number" && typeY == "undefined") {
    y = Number(displayResult);
    subtraction(x, y);
    x = displayResult;
    console.log("x = " + x);
    y = undefined;
    console.log("y = " + y);
    displayArray.splice(0, displayArray.length);
  }
});

getAdd.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = Number(displayResult);
    operator = "add";
    displayArray.splice(0, displayArray.length);
  } else if (typeX == "number" && typeY == "undefined") {
    y = Number(displayResult);
    addition(x, y);
    x = displayResult;
    console.log("x = " + x);
    y = undefined;
    console.log("y = " + y);
    displayArray.splice(0, displayArray.length);
  }
});

getEquals.addEventListener("click", () => {
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
