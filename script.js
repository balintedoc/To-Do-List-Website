
setTimeout(() => {
  document.getElementById("splashScreen").style.display = "none";
  document.getElementById("mainSite").classList.remove("hidden");
  document.getElementById("bgVscode.png").classList.add("show");
}, 4700);



const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const countText = document.getElementById("count");

let tasks = [];

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAll);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="task-buttons">
        <button class="task-btn complete">✓</button>
        <button class="task-btn delete">✕</button>
      </div>
    `;

    li.querySelector(".complete").addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    li.querySelector(".delete").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    taskList.appendChild(li);
  });

  countText.textContent = `Tasks: ${tasks.length}`;
}

function clearAll() {
  tasks = [];
  renderTasks();
}

