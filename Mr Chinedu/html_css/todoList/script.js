const taskList   = document.querySelector("#task-list ul");
const addTaskForm  = document.getElementById("add-task");
const searchInput  = document.querySelector("#search-tasks input");


function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "") {
    const tasks = loadTasks();
    taskList.innerHTML = "";

    const filtered = tasks.filter(t =>
        t.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach((task) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(task.id));

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.textContent = task.name;

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(checkbox);
        li.appendChild(nameSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#add-task input");
    const value = input.value.trim();
    if (!value) return;

    const tasks = loadTasks();
    tasks.push({ id: Date.now(), name: value, completed: false });
    saveTasks(tasks);
    renderTasks(searchInput.value);
    addTaskForm.reset();
});

function toggleTask(id) {
    const tasks = loadTasks().map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(tasks);
    renderTasks(searchInput.value);
}

function deleteTask(id) {
    const tasks = loadTasks().filter(t => t.id !== id);
    saveTasks(tasks);
    renderTasks(searchInput.value);
}

searchInput.addEventListener("input", (event) => {
    renderTasks(event.target.value);
});

renderTasks();