import { useState } from "react";

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function cancelEdit() {
    setEditText(todo.text);
    setIsEditing(false);
  }

  function saveEdit() {
    if (!editText.trim()) return;
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  }

  return (
    <li className={todo.done ? "todo-item completed" : "todo-item"}>
      <input
        aria-label={`Đánh dấu ${todo.text}`}
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        type="checkbox"
      />

      {isEditing ? (
        <input
          autoFocus
          className="todo-edit-input"
          onChange={(event) => setEditText(event.target.value)}
          onKeyDown={handleKeyDown}
          value={editText}
        />
      ) : (
        <button className="todo-text" onDoubleClick={() => setIsEditing(true)} type="button">
          <span>{todo.text}</span>
          <small>{todo.createdAt}</small>
        </button>
      )}

      {isEditing ? (
        <span className="button-row">
          <button onClick={saveEdit} type="button">Lưu</button>
          <button className="secondary" onClick={cancelEdit} type="button">Hủy</button>
        </span>
      ) : (
        <span className="button-row">
          <button onClick={() => setIsEditing(true)} type="button">Sửa</button>
          <button className="danger" onClick={() => onDelete(todo.id)} type="button">Xóa</button>
        </span>
      )}
    </li>
  );
}

export default TodoItem;
