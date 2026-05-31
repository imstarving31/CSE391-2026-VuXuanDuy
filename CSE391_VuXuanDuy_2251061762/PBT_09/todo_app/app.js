const STORAGE_KEY = "pbt09_todos";
const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const itemsLeft = document.querySelector("#itemsLeft");
const clearCompletedButton = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter");

let todos = loadTodos();
let currentFilter = "all";

function loadTodos() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodoElement(todo) {
    const item = document.createElement("li");
    item.className = "todo-item";
    item.dataset.id = todo.id;

    if (todo.completed) {
        item.classList.add("completed");
    }

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;
    text.title = "Click để hoàn thành, double-click để sửa";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.type = "button";
    deleteButton.textContent = "X";
    deleteButton.setAttribute("aria-label", `Xóa ${todo.text}`);

    item.append(text, deleteButton);
    return item;
}

function getVisibleTodos() {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.completed);
    }
    if (currentFilter === "completed") {
        return todos.filter(todo => todo.completed);
    }
    return todos;
}

function renderTodos() {
    const fragment = document.createDocumentFragment();
    getVisibleTodos().forEach(todo => fragment.appendChild(createTodoElement(todo)));
    list.replaceChildren(fragment);

    updateItemsLeft();
}

function updateItemsLeft() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

function commit() {
    saveTodos();
    renderTodos();
}

function findTodo(id) {
    return todos.find(todo => todo.id === id);
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();

    if (!text) {
        return;
    }

    todos.push({
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text,
        completed: false,
    });

    input.value = "";
    input.focus();
    commit();
});

list.addEventListener("click", event => {
    const item = event.target.closest(".todo-item");
    if (!item) {
        return;
    }

    if (event.target.matches(".delete-btn")) {
        todos = todos.filter(todo => todo.id !== item.dataset.id);
        commit();
        return;
    }

    if (event.target.matches(".todo-text")) {
        const todo = findTodo(item.dataset.id);
        todo.completed = !todo.completed;
        saveTodos();

        if (currentFilter === "all") {
            item.classList.toggle("completed", todo.completed);
            updateItemsLeft();
        } else {
            renderTodos();
        }
    }
});

list.addEventListener("dblclick", event => {
    if (!event.target.matches(".todo-text")) {
        return;
    }

    const item = event.target.closest(".todo-item");
    const todo = findTodo(item.dataset.id);
    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = todo.text;

    event.target.replaceWith(editInput);
    editInput.focus();
    editInput.select();
    let isFinished = false;

    function finishEdit(shouldSave) {
        if (isFinished) {
            return;
        }

        isFinished = true;
        if (shouldSave) {
            const text = editInput.value.trim();
            if (text) {
                todo.text = text;
                commit();
                return;
            }
        }

        renderTodos();
    }

    editInput.addEventListener("keydown", keyboardEvent => {
        if (keyboardEvent.key === "Enter") {
            finishEdit(true);
        }
        if (keyboardEvent.key === "Escape") {
            finishEdit(false);
        }
    });

    editInput.addEventListener("blur", () => finishEdit(true), { once: true });
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        filterButtons.forEach(item => item.classList.toggle("active", item === button));
        renderTodos();
    });
});

clearCompletedButton.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    commit();
});

renderTodos();
