const display = document.getElementById("display");

function apendToDisplay(input) {
  display.value += input;
}

function Clear() {
  display.value = "";
}

function calcolate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
    setTimeout(Clear, 700);
  }
}
