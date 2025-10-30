function calculate(op) {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let resultElement = document.getElementById("result");
  let res;

 
  if (isNaN(a) || isNaN(b)) {
    resultElement.innerText = " Please enter both numbers.";
    return;
  }

  
  if (op === '/' && b === 0) {
    resultElement.innerText = " Cannot divide by zero.";
    return;
  }

  
  if (op === '+') res = a + b;
  else if (op === '-') res = a - b;
  else if (op === '*') res = a * b;
  else if (op === '/') res = a / b;

  resultElement.innerText = "Result: " + res;
}
