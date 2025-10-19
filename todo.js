function addTask() {
  let title = document.getElementById("taskTitle").value.trim();
  let desc = document.getElementById("taskDesc").value.trim();

  if (title === "" || desc === "") return;

  let li = document.createElement("li");

  let taskContent = document.createElement("div");
  taskContent.innerHTML = `<strong>${title}</strong><br><small>${desc}</small>`;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  li.appendChild(taskContent);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}
