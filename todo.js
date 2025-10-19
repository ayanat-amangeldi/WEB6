function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;
  if (text === "") return;

  let li = document.createElement("li");
  li.innerText = text;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
