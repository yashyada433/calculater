let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  let current = display.innerText;
  if (current.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = current.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}
