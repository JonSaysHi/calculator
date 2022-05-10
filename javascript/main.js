let result;
let displayStr = "";
let x;
let y;

//--- Stage 1 ---//

//-- querySelection all number buttons, operator buttons, additional buttons and the display elemnts --//
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
const setDisplay = document.querySelector(".display");

//-- Create the functions to complete the operator calculations --//

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

const addition = function (x, y) {
  result = x + y;
  setDisplay.textContent = result;
};

const subtraction = function (x, y) {
  result = x - y;
  setDisplay.textContent = result;
};

const multiplication = function (x, y) {
  result = x * y;
  setDisplay.textContent = result;
};

const division = function (x, y) {
  result = x / y;
  setDisplay.textContent = result;
};

//-- Create the addEventListener functions for each value and decimal button --//

getZero.addEventListener("click", () => {
  if (displayStr == "") {
    return;
  } else {
    concatenateStr("0");
  }
});

getOne.addEventListener("click", () => {
  concatenateStr("1");
});

getTwo.addEventListener("click", () => {
  concatenateStr("2");
});

getThree.addEventListener("click", () => {
  concatenateStr("3");
});

getFour.addEventListener("click", () => {
  concatenateStr("4");
});

getFive.addEventListener("click", () => {
  concatenateStr("5");
});

getSix.addEventListener("click", () => {
  concatenateStr("6");
});

getSeven.addEventListener("click", () => {
  concatenateStr("7");
});

getEight.addEventListener("click", () => {
  concatenateStr("8");
});

getNine.addEventListener("click", () => {
  concatenateStr("9");
});

getDecimal.addEventListener("click", () => {
  let containsDecimal = displayStr.includes(".");
  if (containsDecimal) {
    return;
  } else if (displayStr == "") {
    concatenateStr("0.");
  } else {
    concatenateStr(".");
  }
});

//-- Create the addEventListener functions for each operator and additional button --//

getClear.addEventListener("click", () => {});

getPlusOrMinus.addEventListener("click", () => {});

getPercent.addEventListener("click", () => {});

getDivide.addEventListener("click", () => {});

getMultiply.addEventListener("click", () => {});

getSubtract.addEventListener("click", () => {});

getAdd.addEventListener("click", () => {});

getEquals.addEventListener("click", () => {});

//-- Create the functions to concatenate numbers pushed to a string --//

let concatenateStr = function (value) {
  displayStr = displayStr + value;
  // displayStr = displayStr.substring(0, 9);
  let containsDecimal = displayStr.includes(".");
  let [wholeNumStr, decimalStr] = displayStr.split(".");
  if (decimalStr) {
    displayStr = wholeNumStr + "." + decimalStr;
    displayStr = displayStr.substring(0, 11);
    console.log(displayStr);
    console.log(typeof displayStr);
    setDisplay.textContent = displayStr;
    console.log(1);
  } else if (containsDecimal) {
    // displayStr = displayStr.substring(0, 10);
    console.log(displayStr);
    console.log(typeof displayStr);
    setDisplay.textContent = displayStr;
    console.log(2);
  } else {
    displayStr = displayStr.replaceAll(",", "");
    displayStr = displayStr.substring(0, 9);
    displayStr = parseFloat(displayStr).toLocaleString();
    setDisplay.textContent = displayStr;
    console.log(displayStr);
    console.log(3);
  }
};

//-- Set this variable as the display at the end of this addEventListener--//

//-- Continue this function for each number, until either an operator or additional button is pressed, or the maximum number of digits in the string is 9 --//

//-- Stage 2 --//

//-- Once an operator function is pressed, a function will take the display value that is a concatenated string, and store it in value x.

//-- Repeat function being pressed for addEventListeners
