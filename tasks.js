// ----- Task 0: First Script -----
// Change these to your actual name & group (for console output at load)
const DEFAULT_NAME = "Ayanat Amangeldi";
const DEFAULT_GROUP = "SE-2429";

// alert once on page load
window.addEventListener("DOMContentLoaded", () => {
  alert("Hello, JavaScript World!");

  console.log("Student:", DEFAULT_NAME);
  console.log("Group:", DEFAULT_GROUP);

  // wire up "Log my name & group" button
  const logBtn = document.getElementById("logIdentityBtn");
  const nameInput = document.getElementById("studentName");
  const groupInput = document.getElementById("studentGroup");
  const echo = document.getElementById("identityEcho");

  logBtn.addEventListener("click", () => {
    const n = nameInput.value.trim() || DEFAULT_NAME;
    const g = groupInput.value.trim() || DEFAULT_GROUP;
    console.log(`[Task 0] Name: ${n}, Group: ${g}`);
    echo.textContent = `Logged: ${n} — ${g}`;
  });

  // ----- Task 1: Variables & Operators -----
  const numA = document.getElementById("numA");
  const numB = document.getElementById("numB");
  const greet = document.getElementById("greet");
  const name = document.getElementById("name");
  const runOpsBtn = document.getElementById("runOpsBtn");
  const opsSummary = document.getElementById("opsSummary");

  runOpsBtn.addEventListener("click", () => {
    const a = Number(numA.value);
    const b = Number(numB.value);
    const str1 = greet.value;
    const str2 = name.value;

    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = b === 0 ? "∞ (division by zero)" : a / b;

    const concat = str1 + ", " + str2 + "!";
    const isBig = add > 10; // boolean

    console.log("[Task 1] a:", a, "b:", b);
    console.log("[Task 1] +:", add, " -:", sub, " *:", mul, " /:", div);
    console.log("[Task 1] concat:", concat);
    console.log("[Task 1] boolean isBig (add>10):", isBig);

    opsSummary.textContent =
`a=${a}, b=${b}
add=${add}, sub=${sub}, mul=${mul}, div=${div}
concat="${concat}"
isBig=${isBig}`;
  });

  // ----- Task 2: Changing Content -----
  const contentP = document.getElementById("contentP");
  const changeContentBtn = document.getElementById("changeContentBtn");
  changeContentBtn.addEventListener("click", () => {
    contentP.textContent = "The paragraph text has been changed!";
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

  // ----- Task 5: Mouse Events (mouseover / mouseout) -----
  const hoverBox = document.getElementById("hoverBox");
  const originalBg = getComputedStyle(hoverBox).backgroundColor;

  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#b8c0ff"; // change color on hover
  });

  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = originalBg; // restore
  });

  // ----- Task 6: Keyboard Events (keyup) -----
  const liveInput = document.getElementById("liveInput");
  const liveValue = document.getElementById("liveValue");

  liveInput.addEventListener("keyup", () => {
    liveValue.textContent = liveInput.value || "(empty)";
  });
});
