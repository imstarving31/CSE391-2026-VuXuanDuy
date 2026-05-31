const filters = [
  { key: "all", label: "Tất cả" },
  { key: "active", label: "Chưa xong" },
  { key: "completed", label: "Hoàn thành" },
];

function TodoFilter({ filter, onChange }) {
  return (
    <div className="todo-filters">
      {filters.map((item) => (
        <button
          className={filter === item.key ? "active" : ""}
          key={item.key}
          onClick={() => onChange(item.key)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
