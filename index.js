/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.4 pound
*/
const dataElements = document.getElementsByClassName("data");
const ErrorMssg = document.getElementById("error");
const inputFld = document.getElementById("input-fld");
const convertButton = document.getElementById("convert-btn");
const fields = document.getElementById("datablock");
const factors = [3.281, 1 / 3.281, 0.264, 1 / 0.264, 2.204, 1 / 2.204];
const dataTitles = [
  "Length (Meter/Feet)",
  "Volume (Litre/Gallon)",
  "Mass (Kilogram/Pound)",
];
const conText = ["meters", "feet", "litres", "gallons", "kilograms", "pounds"];
let inputValue = 1;
let values = [];
let String = "";

for (i = 0; i < dataTitles.length; i++) {
  dataElements[i].children[0].innerText = dataTitles[i];
}

convertButton.addEventListener("click", function () {
  inputValue = inputFld.value;
  if (!isNaN(inputValue)) {
    values = factors.map((x) => x * inputValue);
    updateText();
  } else {
    ErrorMssg.innerText = "Please input a valid number!";
  }
});

function updateText() {
  for (i = 0; i < dataElements.length; i++) {
    String = `${inputValue} ${conText[2 * i]} = ${values[2 * i].toFixed(2)} ${
      conText[2 * i + 1]
    } | ${inputValue} ${conText[2 * i + 1]} = ${values[2 * i + 1].toFixed(2)} ${
      conText[2 * i]
    }`;
    dataElements[i].children[1].innerText = String;
  }
}
