let display = document.getElementById("inputBox"); //taking input and giving output
//queryselector store only single value where queryselectorAll store all values
let buttons = document.querySelectorAll("button");
//Array.from convert buttons in array variables
let buttonArray = Array.from(buttons);
let string = "";
//forEach convert every array in variables,btn store all value as form of variables
buttonArray.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
