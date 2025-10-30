// ----- Task 0: First Script -----
const DEFAULT_NAME = "Ayanat Amangeldi";
const DEFAULT_AGE = 20;

window.addEventListener("DOMContentLoaded", () => {
  alert("Hello, JavaScript World!");
  console.log("Student:", DEFAULT_NAME);
  console.log("Age:", DEFAULT_AGE);

  // Task 0
  const logBtn = document.getElementById("logIdentityBtn");
  const nameInput = document.getElementById("studentName");
  const ageInput = document.getElementById("studentAge");
  const echo = document.getElementById("identityEcho");

  logBtn.addEventListener("click", () => {
    const name = nameInput.value.trim() || DEFAULT_NAME;
    const age = parseInt(ageInput.value) || DEFAULT_AGE;

    console.log(`[Task 0] Name: ${name}, Age: ${age}`);

    if (age < 18) {
      echo.textContent = `Hi, ${name}. You are not an adult.`;
      echo.style.color = "red";
    } else {
      echo.textContent = `Welcome, ${name}! You are an adult.`;
      echo.style.color = "green";
    }
  });

  // ----- Task 1: Variables & Operators -----
  const numA = document.getElementById("numA");
  const numB = document.getElementById("numB");
  const greet = document.getElementById("greet");
  const nameField = document.getElementById("name");
  const runOpsBtn = document.getElementById("runOpsBtn");
  const opsSummary = document.getElementById("opsSummary");

  runOpsBtn.addEventListener("click", () => {
    const a = Number(numA.value);
    const b = Number(numB.value);
    const str1 = greet.value;
    const str2 = nameField.value;

    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = b === 0 ? "∞ (division by zero)" : a / b;
    const concat = str1 + ", " + str2 + "!";
    const isBig = add > 10;

    console.log("[Task 1]", { a, b, add, sub, mul, div, concat, isBig });

    opsSummary.textContent =
`a=${a}, b=${b}
add=${add}, sub=${sub}, mul=${mul}, div=${div}
concat="${concat}"
isBig=${isBig}`;
  });

  // ----- Task 2: Changing Content -----
  const contentP = document.getElementById("contentP");
  const changeContentBtn = document.getElementById("changeContentBtn");
  const originalText = contentP.textContent;
  let swapped = false;

  changeContentBtn.addEventListener("click", () => {
    if (!swapped) {
      contentP.textContent = "The paragraph text has been changed!";
    } else {
      contentP.textContent = originalText;
    }
    swapped = !swapped;
  });

  // ----- Task 3: Changing Styles -----
  const styleBox = document.getElementById("styleBox");
  const bgBtn = document.getElementById("bgBtn");
  const fontBtn = document.getElementById("fontBtn");

  const colors = ["#ffe5ec", "#e6fffa", "#e0c3fc", "#fef9c3", "#d0bdf4"];
  let colorIdx = 0;
  let fontSize = 16;

  bgBtn.addEventListener("click", () => {
    colorIdx = (colorIdx + 1) % colors.length;
    styleBox.style.backgroundColor = colors[colorIdx];
  });

  fontBtn.addEventListener("click", () => {
    fontSize += 2;
    styleBox.style.fontSize = fontSize + "px";
  });

  // ----- Task 4: Creating & Removing Elements -----
  const addItemBtn = document.getElementById("addItemBtn");
  const removeItemBtn = document.getElementById("removeItemBtn");
  const dynamicList = document.getElementById("dynamicList");
  let itemCount = 0;

  addItemBtn.addEventListener("click", () => {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    dynamicList.appendChild(li);
  });

  removeItemBtn.addEventListener("click", () => {
    const last = dynamicList.lastElementChild;
    if (last) last.remove();
  });

  // ----- Task 5: Mouse Events -----
  const hoverBox = document.getElementById("hoverBox");
  const originalBg = getComputedStyle(hoverBox).backgroundColor;

  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#b8c0ff";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = originalBg;
  });

  // ----- Task 6: Keyboard Events -----
  const liveInput = document.getElementById("liveInput");
  const liveValue = document.getElementById("liveValue");
  const liveCount = document.getElementById("liveCount"); // элемент для счётчика

  const updateLive = () => {
    const val = liveInput.value || "";
    liveValue.textContent = val || "(empty)";
    if (liveCount) liveCount.textContent = String(val.length);
  };

  liveInput.addEventListener("keyup", updateLive);
  updateLive();
});
