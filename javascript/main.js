let result;
let displayStr = "";
let operator;
let x;
let y;
let operatorClicked = false;
let PlusOrMinusClicked = false;

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
const numberButtonArr = [
  getZero,
  getOne,
  getTwo,
  getThree,
  getFour,
  getFive,
  getSix,
  getSeven,
  getEight,
  getNine,
];
const setDisplay = document.querySelector(".display");

//-- Stage 2 --//
//-- Create the addEventListener functions for each value and decimal button that sends its corresponding number to be calculated --//

for (let i = 0; i < numberButtonArr.length; i++) {
  const numberButton = numberButtonArr[i];
  numberButton.addEventListener("click", () => {
    concatenateStr(i);
  });
}

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

//-- Create the addEventListener functions for each operator --//

getDivide.addEventListener("click", () => {
  if (x == undefined && operator == undefined) {
    setDisplay.textContent = displayStr;
    x = Number(displayStr.replaceAll(",", ""));
    displayStr = "";
    operator = "divide";
  } else if (y == undefined) {
    y = Number(displayStr.replaceAll(",", ""));
    calculate(x, y);
    x = result;
    y = undefined;
    displayStr = "";
    operator = "divide";
  }
});

getMultiply.addEventListener("click", () => {
  if (x == undefined) {
    setDisplay.textContent = displayStr;
    x = Number(displayStr.replaceAll(",", ""));
    displayStr = "";
    operator = "multiply";
  } else if (y == undefined) {
    y = Number(displayStr.replaceAll(",", ""));
    calculate(x, y);
    x = result;
    y = undefined;
    displayStr = "";
    operator = "multiply";
  }
});

getSubtract.addEventListener("click", () => {
  if (x == undefined) {
    setDisplay.textContent = displayStr;
    x = Number(displayStr.replaceAll(",", ""));
    displayStr = "";
    operator = "subtract";
  } else if (y == undefined) {
    y = Number(displayStr.replaceAll(",", ""));
    calculate(x, y);
    x = result;
    y = undefined;
    displayStr = "";
    operator = "subtract";
  }
});

getAdd.addEventListener("click", () => {
  if (x == undefined) {
    setDisplay.textContent = displayStr;
    x = Number(displayStr.replaceAll(",", ""));
    displayStr = "";
    operator = "add";
  } else if (y == undefined) {
    y = Number(displayStr.replaceAll(",", ""));
    calculate(x, y);
    x = result;
    y = undefined;
    displayStr = "";
    operator = "add";
  }
});

getEquals.addEventListener("click", () => {
  if (x == undefined) {
    return;
  } else if (y == undefined) {
    y = Number(displayStr.replaceAll(",", ""));
    calculate(x, y);
    x = result;
    y = undefined;
    displayStr = "";
    operator = undefined;
  }
});

//-- Create the addEventListener functions for additional button --//

getClear.addEventListener("click", () => {
  x = undefined;
  y = undefined;
  result = undefined;
  displayStr = "";
  setDisplay.textContent = 0;
});

getPlusOrMinus.addEventListener("click", () => {
  if (PlusOrMinusClicked == false && displayStr == "") {
    displayStr = "-0";
    setDisplay.textContent = displayStr;
    PlusOrMinusClicked = true;
  } else if (PlusOrMinusClicked == false) {
    displayStr = "-" + displayStr;
    setDisplay.textContent = displayStr;
    PlusOrMinusClicked = true;
  } else {
    displayStr = displayStr.replace("-", "");
    setDisplay.textContent = displayStr;
    PlusOrMinusClicked = false;
  }
});

getPercent.addEventListener("click", () => {
  displayStr = (Number(displayStr.replaceAll(",", "")) / 100).toLocaleString();
  setDisplay.textContent = displayStr;
});

//-- Stage 3 --//
//-- Create the functions to concatenate numbers pushed to a string --//

let concatenateStr = function (value) {
  displayStr = displayStr + value;
  let containsDecimal = displayStr.includes(".");
  let [wholeNumStr, decimalStr] = displayStr.split(".");
  if (displayStr == "0") {
    displayStr = "0";
    setDisplay.textContent = displayStr;
  }
  if (decimalStr) {
    displayStr = wholeNumStr + "." + decimalStr;
    displayStr = displayStr.substring(0, 11);
    setDisplay.textContent = displayStr;
    return displayStr;
  } else if (containsDecimal) {
    setDisplay.textContent = displayStr;
    return displayStr;
  } else {
    displayStr = displayStr.replaceAll(",", "");
    displayStr = displayStr.substring(0, 9);
    displayStr = parseFloat(displayStr).toLocaleString();
    setDisplay.textContent = displayStr;
    return displayStr;
  }
};

//-- Stage 4 --//

//-- Create the functions to complete the operator calculations and format the result appropriately --//

const calculate = function (x, y) {
  if (operator == "add") {
    result = x + y;
    formatting();
  } else if (operator == "subtract") {
    result = x - y;
    formatting();
  } else if (operator == "multiply") {
    result = x * y;
    formatting();
  } else if (operator == "divide") {
    result = x / y;
    formatting();
  }
};

const formatting = function () {
  let resultStr = result.toString();
  let resultLength = resultStr.length;
  let containsExp = result.toString().includes("e+");
  let [wholeNumStr, decimalStr] = resultStr.split(".");
  if (decimalStr && decimalStr.length > 1 && containsExp == false) {
    setDisplay.textContent = (
      Number(wholeNumStr).toLocaleString() +
      "." +
      decimalStr
    )
      .toString()
      .substring(0, 11);
  } else if (decimalStr && resultLength > 10 && containsExp == false) {
    setDisplay.textContent = Math.round(result).toLocaleString();
  } else if (decimalStr && resultLength <= 10) {
    setDisplay.textContent = (
      Number(wholeNumStr).toLocaleString() +
      "." +
      decimalStr
    )
      .toString()
      .substring(0, 12);
  } else if (resultLength > 9 || containsExp) {
    setDisplay.textContent = Number(result).toExponential(0);
  } else {
    setDisplay.textContent = result.toLocaleString().substring(0, 12);
  }
};
