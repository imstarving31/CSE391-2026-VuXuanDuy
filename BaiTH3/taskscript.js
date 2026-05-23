const TASK_STORAGE_KEY = "personal_tasks";

let tasks = [];
let editingTaskIndex = -1;

const btnOpenTaskForm = document.getElementById("btnOpenTaskForm");
const btnCloseTaskForm = document.getElementById("btnCloseTaskForm");
const btnCancelTaskForm = document.getElementById("btnCancelTaskForm");
const taskModal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");
const taskFormTitle = document.getElementById("taskFormTitle");
const btnSaveTask = document.getElementById("btnSaveTask");
const taskList = document.getElementById("taskList");
const taskMessage = document.getElementById("taskMessage");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDueDate = document.getElementById("taskDueDate");
const taskPriority = document.getElementById("taskPriority");
const taskCompleted = document.getElementById("taskCompleted");
const taskErrorMessages = document.querySelectorAll("[data-error-for]");

function loadTasks() {
    const data = localStorage.getItem(TASK_STORAGE_KEY);
    tasks = data ? JSON.parse(data) : [];
}

function saveTasks() {
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}

function getPriorityClass(priority) {
    if (priority === "Cao") {
        return "priority-high";
    }

    if (priority === "Trung bình") {
        return "priority-medium";
    }

    return "priority-low";
}

function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = `<p class="empty-state">Chưa có công việc nào. Hãy thêm công việc đầu tiên.</p>`;
        updateTaskSummary();
        return;
    }

    taskList.innerHTML = tasks.map((task, index) => `
        <article class="task-card ${task.completed ? "completed" : ""}">
            <div class="task-topline">
                <div>
                    <h2 class="task-title">${task.title}</h2>
                    <p class="task-description">${task.description}</p>
                </div>
                <label class="status-toggle">
                    <input type="checkbox" data-action="toggle" data-index="${index}" ${task.completed ? "checked" : ""}>
                    ${task.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}
                </label>
            </div>

            <div class="task-meta">
                <span class="badge">Hạn: ${task.dueDate}</span>
                <span class="badge ${getPriorityClass(task.priority)}">Ưu tiên: ${task.priority}</span>
            </div>

            <div class="task-actions">
                <button class="btn btn-warning" type="button" data-action="edit" data-index="${index}">Sửa</button>
                <button class="btn btn-danger" type="button" data-action="delete" data-index="${index}">Xóa</button>
            </div>
        </article>
    `).join("");

    updateTaskSummary();
}

function updateTaskSummary() {
    const completedCount = tasks.filter((task) => task.completed).length;

    totalTasks.innerText = tasks.length;
    completedTasks.innerText = completedCount;
    pendingTasks.innerText = tasks.length - completedCount;
}

function showMessage(content, type = "success") {
    taskMessage.textContent = content;
    taskMessage.classList.toggle("error", type === "error");

    setTimeout(() => {
        taskMessage.textContent = "";
        taskMessage.classList.remove("error");
    }, 2500);
}

function openTaskForm(mode = "add") {
    taskModal.classList.remove("hidden");

    if (mode === "add") {
        taskFormTitle.innerText = "Thêm công việc";
        btnSaveTask.innerText = "Lưu công việc";
    } else {
        taskFormTitle.innerText = "Cập nhật công việc";
        btnSaveTask.innerText = "Cập nhật";
    }
}

function closeTaskForm() {
    taskModal.classList.add("hidden");
    resetTaskForm();
}

function resetTaskForm() {
    taskForm.reset();
    editingTaskIndex = -1;
    clearValidationErrors();
}

function getTaskFromForm() {
    return {
        title: taskTitle.value.trim(),
        description: taskDescription.value.trim(),
        dueDate: taskDueDate.value,
        priority: taskPriority.value,
        completed: taskCompleted.checked
    };
}

function fillTaskForm(task, index) {
    editingTaskIndex = index;
    taskTitle.value = task.title;
    taskDescription.value = task.description;
    taskDueDate.value = task.dueDate;
    taskPriority.value = task.priority;
    taskCompleted.checked = task.completed;
    clearValidationErrors();
}

function clearValidationErrors() {
    taskErrorMessages.forEach((errorElement) => {
        const inputId = errorElement.dataset.errorFor;
        const input = document.getElementById(inputId);

        errorElement.textContent = "";

        if (input) {
            input.classList.remove("invalid");
        }
    });
}

function showFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.querySelector(`[data-error-for="${inputId}"]`);

    if (input) {
        input.classList.add("invalid");
    }

    if (errorElement) {
        errorElement.textContent = message;
    }
}

function validateTaskForm(task) {
    let isValid = true;
    clearValidationErrors();

    if (task.title === "") {
        showFieldError("taskTitle", "Vui lòng nhập tiêu đề công việc.");
        isValid = false;
    } else if (task.title.length < 3 || task.title.length > 80) {
        showFieldError("taskTitle", "Tiêu đề cần từ 3 đến 80 ký tự.");
        isValid = false;
    }

    if (task.description === "") {
        showFieldError("taskDescription", "Vui lòng nhập mô tả ngắn.");
        isValid = false;
    } else if (task.description.length > 200) {
        showFieldError("taskDescription", "Mô tả không vượt quá 200 ký tự.");
        isValid = false;
    }

    if (task.dueDate === "") {
        showFieldError("taskDueDate", "Vui lòng chọn hạn hoàn thành.");
        isValid = false;
    } else {
        const today = new Date();
        const dueDate = new Date(task.dueDate);
        today.setHours(0, 0, 0, 0);

        if (Number.isNaN(dueDate.getTime())) {
            showFieldError("taskDueDate", "Ngày không hợp lệ.");
            isValid = false;
        } else if (dueDate < today) {
            showFieldError("taskDueDate", "Hạn hoàn thành không được ở quá khứ.");
            isValid = false;
        }
    }

    if (task.priority === "") {
        showFieldError("taskPriority", "Vui lòng chọn mức ưu tiên.");
        isValid = false;
    }

    return isValid;
}

function handleTaskSubmit(event) {
    event.preventDefault();

    const task = getTaskFromForm();

    if (!validateTaskForm(task)) {
        showMessage("Vui lòng kiểm tra lại các lỗi trong form.", "error");
        return;
    }

    if (editingTaskIndex === -1) {
        tasks.push(task);
        showMessage("Đã thêm công việc mới.");
    } else {
        tasks[editingTaskIndex] = task;
        showMessage("Đã cập nhật công việc.");
    }

    saveTasks();
    renderTasks();
    closeTaskForm();
}

function handleTaskListClick(event) {
    const actionElement = event.target.closest("[data-action]");

    if (!actionElement || !taskList.contains(actionElement)) {
        return;
    }

    const action = actionElement.dataset.action;
    const index = Number(actionElement.dataset.index);

    if (action === "edit") {
        fillTaskForm(tasks[index], index);
        openTaskForm("edit");
    }

    if (action === "delete") {
        const isConfirmed = confirm(`Bạn có chắc muốn xóa công việc "${tasks[index].title}"?`);

        if (isConfirmed) {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
            showMessage("Đã xóa công việc.");
        }
    }

    if (action === "toggle") {
        tasks[index].completed = actionElement.checked;
        saveTasks();
        renderTasks();
        showMessage("Đã cập nhật trạng thái công việc.");
    }
}

btnOpenTaskForm.addEventListener("click", () => {
    resetTaskForm();
    openTaskForm("add");
});

btnCloseTaskForm.addEventListener("click", closeTaskForm);
btnCancelTaskForm.addEventListener("click", closeTaskForm);
taskForm.addEventListener("submit", handleTaskSubmit);
taskList.addEventListener("click", handleTaskListClick);

taskForm.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("change", () => {
        validateTaskForm(getTaskFromForm());
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !taskModal.classList.contains("hidden")) {
        closeTaskForm();
    }
});

loadTasks();
renderTasks();
