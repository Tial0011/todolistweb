const todoInput = document.getElementById("todoInput");
const addTask = document.getElementById("addTask");
const list = document.getElementById("list");
const clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "Clear All";
clearAllBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
const container = document.getElementById("container");
container.appendChild(clearAllBtn);
clearAllBtn.style.display = "none";
addTask.addEventListener("click", () => {
  if (todoInput.value === "") {
    alert("Please write a task!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = todoInput.value;
  list.appendChild(li);
  todoInput.value = "";
  const checkboxbtn = document.createElement("input");
  checkboxbtn.type = "checkbox";
  li.appendChild(checkboxbtn);
  clearAllBtn.style.display = "inline-block";
});
