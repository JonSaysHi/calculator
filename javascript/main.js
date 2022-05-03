let displayArray = [];
let displayResult;
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
  commasForResult();
  actualResult = x + y;
  document.querySelector(".result").textContent = displayResult;
};

const subtraction = function (x, y) {
  displayResult = x - y;
  commasForResult();
  actualResult = x - y;
  document.querySelector(".result").textContent = displayResult;
};

const multiplication = function (x, y) {
  displayResult = x * y;
  commasForResult();
  actualResult = x * y;
  document.querySelector(".result").textContent = displayResult;
};

const division = function (x, y) {
  displayResult = x / y;
  commasForResult();
  actualResult = x / y;
  document.querySelector(".result").textContent = displayResult;
};

let commasForResult = function () {
  displayResultArray = Array.from(String(displayResult), myFunc);
  commasResult();
  displayArray = displayArray.slice(0, 10);
  displayResult = displayResultArray.join("");
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
  // console.log(actualResult);
  commas();
  displayArray = displayArray.slice(0, 10);
  // displayArray = displayArray.slice(0, 8);
  document.querySelector(".result").textContent = displayResult;
};

let actual = function () {
  actualResult = Number(actualArray.join(""));
  actualArray = actualArray.slice(0, 8);
};

function createDisplay(number) {
  displayArray.push(number);
  actualArray.push(number);
  display();
  actual();
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
    x = actualResult;
    operator = "divide";
    displayArray.splice(0, displayArray.length);
    console.log(operator);
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "divide";
    x = displayResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    console.log(operator);
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
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "multiply";
    x = displayResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
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
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "subtract";
    x = displayResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
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
  } else if (typeX == "number" && typeY == "undefined") {
    y = actualResult;
    operate(operator, x, y);
    operator = "add";
    x = displayResult;
    y = undefined;
    displayArray.splice(0, displayArray.length);
    actualArray.splice(0, actualArray.length);
    console.log(operator);
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
  }
});

// This function adds and removes commas for the corresponding length

let commas = function () {
  displayLength = displayArray.length;
  if (displayLength === 3) {
    displayArray.splice(1, 0, ",");
  } else if (displayLength === 5) {
    displayArray.splice(1, 1);
    displayArray.splice(2, 0, ",");
  } else if (displayLength === 6) {
    displayArray.splice(2, 1);
    displayArray.splice(3, 0, ",");
  } else if (displayLength === 7) {
    displayArray.splice(3, 1);
    displayArray.splice(1, 0, ",");
    displayArray.splice(5, 0, ",");
  } else if (displayLength === 9) {
    displayArray.splice(1, 1);
    displayArray.splice(4, 1);
    displayArray.splice(2, 0, ",");
    displayArray.splice(6, 0, ",");
  } else if (displayLength === 10) {
    displayArray.splice(2, 1);
    displayArray.splice(5, 1);
    displayArray.splice(3, 0, ",");
    displayArray.splice(7, 0, ",");
  }
};

let commasResult = function () {
  displayLength = displayResultArray.length;
  if (displayLength === 4) {
    displayResultArray.splice(1, 0, ",");
  } else if (displayLength === 5) {
    displayResultArray.splice(1, 0);
    displayResultArray.splice(2, 0, ",");
  } else if (displayLength === 6) {
    displayResultArray.splice(2, 0);
    displayResultArray.splice(3, 0, ",");
  } else if (displayLength === 7) {
    displayResultArray.splice(3, 0);
    displayResultArray.splice(1, 0, ",");
    displayResultArray.splice(5, 0, ",");
  } else if (displayLength === 8) {
    displayResultArray.splice(1, 0);
    displayResultArray.splice(4, 0);
    displayResultArray.splice(2, 0, ",");
    displayResultArray.splice(6, 0, ",");
  } else if (displayLength === 9) {
    displayResultArray.splice(2, 0);
    displayResultArray.splice(5, 0);
    displayResultArray.splice(3, 0, ",");
    displayResultArray.splice(7, 0, ",");
  }
};
