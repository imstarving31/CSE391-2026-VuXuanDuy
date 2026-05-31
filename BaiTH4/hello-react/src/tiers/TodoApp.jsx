import { useEffect, useState } from "react";
import TodoFilter from "../components/TodoFilter";
import TodoItem from "../components/TodoItem";

const STORAGE_KEY = "baith4-react-todos";

const placeholders = {
  all: "Nhập công việc mới...",
  active: "Thêm việc cần làm...",
  completed: "Thêm việc mới dù đang xem việc đã xong...",
};

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function TodoApp() {
  const [todos, setTodos] = useState(loadTodos);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    const text = inputValue.trim();
    if (!text) return;

    setTodos((current) => [
      ...current,
      {
        id: Date.now(),
        text,
        done: false,
        createdAt: new Date().toLocaleString("vi-VN"),
      },
    ]);
    setInputValue("");
  }

  function toggleTodo(id) {
    setTodos((current) => current.map((todo) => (
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )));
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  function editTodo(id, text) {
    setTodos((current) => current.map((todo) => (
      todo.id === id ? { ...todo, text } : todo
    )));
  }

  function clearCompleted() {
    setTodos((current) => current.filter((todo) => !todo.done));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });
  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.length - activeCount;

  return (
    <div>
      <div className="section-heading">
        <p className="eyebrow">Tier 7</p>
        <h2>Todo App tổng hợp</h2>
        <p>Thêm, sửa, double-click để sửa nhanh, toggle, xóa, lọc và lưu localStorage.</p>
      </div>

      <section className="todo-app">
        <div className="todo-input-row">
          <input
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && addTodo()}
            placeholder={placeholders[filter]}
            value={inputValue}
          />
          <button onClick={addTodo} type="button">Thêm</button>
        </div>

        <TodoFilter filter={filter} onChange={setFilter} />

        {filteredTodos.length === 0 ? (
          <p className="empty-state">
            {todos.length === 0 ? "Chưa có công việc nào." : "Không có công việc phù hợp."}
          </p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                onDelete={deleteTodo}
                onEdit={editTodo}
                onToggle={toggleTodo}
                todo={todo}
              />
            ))}
          </ul>
        )}

        <footer className="todo-footer">
          <span>Tổng: {todos.length}</span>
          <span>Chưa xong: {activeCount}</span>
          <span>Đã xong: {completedCount}</span>
          {completedCount > 0 && <button className="danger" onClick={clearCompleted} type="button">Xóa việc đã xong</button>}
        </footer>
      </section>
    </div>
  );
}

export default TodoApp;
