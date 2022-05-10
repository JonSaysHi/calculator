let result;
let displayStr = "";
let operator;
let x;
let y;
let operatorClicked = false;

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

//-- Create the functions to complete the operator calculations --//

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
  console.log(result);
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
    console.log(1);
  } else if (decimalStr && resultLength > 10 && containsExp == false) {
    setDisplay.textContent = Math.round(result).toLocaleString();
    console.log(2);
  } else if (decimalStr && resultLength <= 10) {
    setDisplay.textContent = (
      Number(wholeNumStr).toLocaleString() +
      "." +
      decimalStr
    )
      .toString()
      .substring(0, 12);
    console.log(3);
  } else if (resultLength > 9 || containsExp) {
    // result = Number(result).toExponential(0);
    setDisplay.textContent = Number(result).toExponential(0);
    console.log(4);
  } else {
    setDisplay.textContent = result.toLocaleString().substring(0, 12);
    console.log(5);
  }
};

//-- Create the addEventListener functions for each value and decimal button --//

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

//-- Create the addEventListener functions for each operator and additional button --//

getClear.addEventListener("click", () => {});

getPlusOrMinus.addEventListener("click", () => {});

getPercent.addEventListener("click", () => {});

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

//-- Stage 2 --//

//-- Create the functions that will assaignthe display value as value x, and allow for second value to be input, and a calculation to take place --//
