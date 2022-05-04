let displayArray = [];
let displayResult = 0;
let actualArray = [];
let actualResult;
let displayLength;
let displayResultArray;
let x;
let y;
let operator;
let typeX;
let typeY;
let myFunc = (num) => Number(num);
let decimalClicked = false;
let withoutDecimals;
let withCommasArray = [];

// All querySelectors for the buttons of the calculator

const getClear = document.querySelector("#clear");
const getPlusOrMinus = document.querySelector("#plusminus");
const getPercent = document.querySelector("#percent");
const getDivide = document.querySelector("#divide");
const getMultiply = document.querySelector("#multiply");
const getSubtract = document.querySelector("#subtract");
const getAdd = document.querySelector("#add");
const getEquals = document.querySelector("#equals");
const getDecimal = document.querySelector("#decimal");
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
const clear = function (x, y) {
  x = 0;
  y = 0;
  displayResult = 0;
  actualResult = 0;
  displayArray = [];
  actualArray = [];
  document.querySelector(".result").textContent = displayResult;
};

const addition = function (x, y) {
  displayResult = x + y;
  actualResult = x + y;
  Formatting();
  document.querySelector(".result").textContent = displayResult;
};

const subtraction = function (x, y) {
  displayResult = x - y;
  actualResult = x - y;
  Formatting();
  document.querySelector(".result").textContent = displayResult;
};

const multiplication = function (x, y) {
  displayResult = x * y;
  actualResult = x * y;
  Formatting();
  document.querySelector(".result").textContent = displayResult;
};

const division = function (x, y) {
  displayResult = x / y;
  actualResult = x / y;
  Formatting();
  document.querySelector(".result").textContent = displayResult;
};

let Formatting = function () {
  withoutDecimals = Math.trunc(actualResult);
  let withoutDecimalsArray = Array.from(String(withoutDecimals), myFunc);
  let withoutDecimalsLength = withoutDecimalsArray.length;

  displayResult = displayResult.toLocaleString();
  displayResultArray = Array.from(String(displayResult), myFunc);
  if (withoutDecimalsLength >= 10) {
    displayResult = Number.parseFloat(actualResult).toExponential(0);
    return displayResult;
  } else if (withoutDecimalsLength >= 9) {
    actualResult = Math.round(actualResult);
    displayResult = Math.round(actualResult).toLocaleString();
    return displayResult && actualResult;
  } else {
    // commasResult();
    // displayArray = displayArray.slice(0, 10);
    displayResult = displayResult.toLocaleString();
    return displayResult;
  }
};

const operate = function (operator, x, y) {
  if (operator === "add") {
    addition(x, y);
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
  displayResult = displayArray.join("");
  console.log("Display result:" + displayResult);
  let [wholeNumStr, decimalStr] = displayResult.split(".");
  if (decimalStr) {
    displayResult = Number(wholeNumStr).toLocaleString() + "." + decimalStr;
    withCommasArray = displayResult.split("");
    displayArray = withCommasArray.slice(0, 9);
    document.querySelector(".result").textContent = displayResult;
  } else {
    displayResult = Number(displayResult).toLocaleString();
    console.log("DisplayResult w/ commas:" + displayResult);
    // commas();
    displayArray = displayArray.slice(0, 8);
    document.querySelector(".result").textContent = displayResult;
  }
};

let actual = function () {
  actualResult = Number(actualArray.join(""));
  actualArray = actualArray.slice(0, 8);
  console.log("Actual result:" + actualResult);
};

function createDisplay(number) {
  displayArray.push(number);
  actualArray.push(number);
  display();
  actual();
}

// Event listeners for number buttons

getZero.addEventListener("click", () => {
  if (displayResult == 0 || displayResult == "undefined") {
    displayResult = 0;
  } else {
    createDisplay(0);
  }
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
    x = actualResult;
    operator = "divide";
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "divide";
    x = actualResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  }
});

getMultiply.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = actualResult;
    operator = "multiply";
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "multiply";
    x = actualResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  }
});

getSubtract.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = actualResult;
    operator = "subtract";
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "subtract";
    x = actualResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  }
});

getAdd.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "undefined" && typeY == "undefined") {
    x = actualResult;
    operator = "add";
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "add";
    x = displayResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
    decimalClicked = false;
  }
});

getEquals.addEventListener("click", () => {
  typeX = typeof x;
  typeY = typeof y;
  if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    x = undefined;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    decimalClicked = false;
  }
});

getDecimal.addEventListener("click", () => {
  if (actualArray.length === 0) {
    displayArray.push(".");
    displayResult = displayArray.join("");
    displayArray = displayArray.slice(0, 8);
    document.querySelector(".result").textContent = displayResult;

    actualArray.push(".");
    actualResult = Number(actualArray.join(""));
    actualArray = actualArray.slice(0, 8);

    decimalClicked = true;
  }
  if (decimalClicked == false) {
    displayArray.push(".");
    displayResult = displayArray.join("");
    displayArray = displayArray.slice(0, 8);
    document.querySelector(".result").textContent = displayResult;

    actualArray.push(".");
    actualResult = Number(actualArray.join(""));
    actualArray = actualArray.slice(0, 8);

    decimalClicked = true;
  } else {
    return;
  }
});

getClear.addEventListener("click", () => {
  clear();
});

// This function adds and removes commas for the corresponding length

// let commas = function () {
//   displayLength = displayArray.length;
//   if (displayLength === 3) {
//     displayArray.splice(1, 0, ",");
//   } else if (displayLength === 5) {
//     displayArray.splice(1, 1);
//     displayArray.splice(2, 0, ",");
//   } else if (displayLength === 6) {
//     displayArray.splice(2, 1);
//     displayArray.splice(3, 0, ",");
//   } else if (displayLength === 7) {
//     displayArray.splice(3, 1);
//     displayArray.splice(1, 0, ",");
//     displayArray.splice(5, 0, ",");
//   } else if (displayLength === 9) {
//     displayArray.splice(1, 1);
//     displayArray.splice(4, 1);
//     displayArray.splice(2, 0, ",");
//     displayArray.splice(6, 0, ",");
//   } else if (displayLength === 10) {
//     displayArray.splice(2, 1);
//     displayArray.splice(5, 1);
//     displayArray.splice(3, 0, ",");
//     displayArray.splice(7, 0, ",");
//   }
// };

// let commasResult = function () {
//   displayLength = displayResultArray.length;
//   if (displayLength === 4) {
//     displayResultArray.splice(1, 0, ",");
//   } else if (displayLength === 5) {
//     displayResultArray.splice(1, 0);
//     displayResultArray.splice(2, 0, ",");
//   } else if (displayLength === 6) {
//     displayResultArray.splice(2, 0);
//     displayResultArray.splice(3, 0, ",");
//   } else if (displayLength === 7) {
//     displayResultArray.splice(3, 0);
//     displayResultArray.splice(1, 0, ",");
//     displayResultArray.splice(5, 0, ",");
//   } else if (displayLength === 8) {
//     displayResultArray.splice(1, 0);
//     displayResultArray.splice(4, 0);
//     displayResultArray.splice(2, 0, ",");
//     displayResultArray.splice(6, 0, ",");
//   } else if (displayLength === 9) {
//     displayResultArray.splice(2, 0);
//     displayResultArray.splice(5, 0);
//     displayResultArray.splice(3, 0, ",");
//     displayResultArray.splice(7, 0, ",");
//   }
// };
