const todoInput = document.getElementById("todoInput");
const addTask = document.getElementById("addTask");
const list = document.getElementById("list");
const clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "Clear All";
clearAllBtn.className = "clrbtn ";
clearAllBtn.addEventListener("click", () => {
  list.innerHTML = "";
  clearAllBtn.style.display = "none";
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
  checkboxbtn.className = "boxbtn";
  li.appendChild(checkboxbtn);
  clearAllBtn.style.display = "inline-block";
  const delbtn = document.createElement("button");
  li.appendChild(delbtn);
  delbtn.textContent = "x";
  delbtn.className = "delbtn";
  delbtn.addEventListener("click", () => {
    li.remove();
  });
});
