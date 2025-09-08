const todoInput = document.getElementById("todoInput");
const addTask = document.getElementById("addTask");
const list = document.getElementById("list")
const clearAllBtn = document.getElementById("clearAllBtn");

addTask.addEventListener("click", ()=>{
  if (todoInput.value === "") {
    alert("Please write a task!");
    return;
  }
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  li.appendChild(checkbox);
  let taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = todoInput.value;
  li.appendChild(taskText);
  let closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;";
  li.appendChild(closeBtn);
  let editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "&#9998;";
  li.appendChild(editBtn);
  list.appendChild(li);
  todoInput.value = "";
  saveData();
  clearAllBtn.classList.remove("hidden");
})

list.addEventListener("click", function(e) {
  const target = e.target;
  const li = target.parentElement;
  if (target.className === "task-checkbox") {
    li.classList.toggle("completed");
    saveData();
  } else if (target.className === "close-btn") {
    const remove = confirm("remove task")
    if (remove){
      li.remove();
      saveData();
      if (list.children.length === 0) {
        clearAllBtn.classList.add("hidden");
      }
    }
  } else if (target.className === "edit-btn") {
    const taskTextSpan = li.querySelector('.task-text');
    const updatedText = prompt("Edit the task:", taskTextSpan.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
      taskTextSpan.textContent = updatedText;
      li.classList.remove("completed");
      li.querySelector('.task-checkbox').checked = false;
      saveData();
    }
  }
});

function clearAll() {
  const confirmed = confirm("All your tasks will be lost. Are you sure");
  if (confirmed) {
    list.innerHTML = "";
    saveData();
    clearAllBtn.classList.add("hidden");
  }
}

function saveData() {
  const tasksHTML = list.innerHTML;
  localStorage.setItem("tasks", tasksHTML);
}

function showTasks() {
  const tasksHTML = localStorage.getItem("tasks");
  if (tasksHTML) {
    list.innerHTML = tasksHTML;
    if (list.children.length > 0) {
      clearAllBtn.classList.remove("hidden");
    }
  } else {
    clearAllBtn.classList.add("hidden");
  }
}

showTasks();