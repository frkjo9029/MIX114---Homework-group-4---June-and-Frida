// task 2//

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDate");

    const text = taskInput.value.trim();
    const dueDate = dueDateInput.value; // FIXED

    if (!text) return;

    const task = {
        text: text,
        dueDate: dueDate,
        completed: false
    };

    tasks.push(task);

    tasks.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    renderTasks();

    taskInput.value = "";
    dueDateInput.value = "";
}

function renderTasks() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.style.textDecoration = "line-through";
        }

        const dateSpan = document.createElement("span");
        dateSpan.textContent = task.dueDate ? " (Due: " + task.dueDate + ")" : "";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(dateSpan);
        li.appendChild(removeBtn);

        list.appendChild(li);
    });
}