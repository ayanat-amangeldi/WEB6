function calculate(op) {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res;
  if (op === '+') res = a + b;
  else if (op === '-') res = a - b;
  else if (op === '*') res = a * b;
  else if (op === '/') res = a / b;
  document.getElementById("result").innerText = "Result: " + res;
}
