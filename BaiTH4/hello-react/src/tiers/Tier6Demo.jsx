import { useRef, useState } from "react";

const initialStudents = [
  { id: 1, name: "Minh", age: 20 },
  { id: 2, name: "An", age: 21 },
  { id: 3, name: "Linh", age: 19 },
];

function Tier6Demo() {
  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [message, setMessage] = useState("");
  const [deletedStudent, setDeletedStudent] = useState(null);
  const nameInputRef = useRef(null);
  const undoTimeoutRef = useRef(null);

  const averageAge = students.length
    ? students.reduce((total, student) => total + student.age, 0) / students.length
    : 0;

  function addStudent() {
    const age = Number(newAge);
    if (!newName.trim() || age <= 0 || age >= 100) {
      setMessage("Tên và tuổi từ 1 đến 99 là bắt buộc.");
      return;
    }

    setStudents((current) => [...current, { id: Date.now(), name: newName.trim(), age }]);
    setNewName("");
    setNewAge("");
    setMessage("Đã thêm sinh viên thành công.");
    nameInputRef.current?.focus();
  }

  function deleteStudent(student) {
    if (!window.confirm(`Xóa ${student.name}?`)) return;

    setStudents((current) => current.filter((item) => item.id !== student.id));
    setDeletedStudent(student);
    setMessage(`Đã xóa ${student.name}. Bạn có 5 giây để hoàn tác.`);
    window.clearTimeout(undoTimeoutRef.current);
    undoTimeoutRef.current = window.setTimeout(() => setDeletedStudent(null), 5000);
  }

  function undoDelete() {
    if (!deletedStudent) return;

    window.clearTimeout(undoTimeoutRef.current);
    setStudents((current) => [...current, deletedStudent]);
    setMessage(`Đã hoàn tác xóa ${deletedStudent.name}.`);
    setDeletedStudent(null);
  }

  function startEdit(student) {
    setEditingId(student.id);
    setEditName(student.name);
    setEditAge(String(student.age));
  }

  function cancelEdit() {
    setEditingId(null);
  }

  function saveEdit() {
    const age = Number(editAge);
    if (!editName.trim() || age <= 0 || age >= 100) {
      setMessage("Không thể lưu: tên hoặc tuổi không hợp lệ.");
      return;
    }

    setStudents((current) => current.map((student) => (
      student.id === editingId ? { ...student, name: editName.trim(), age } : student
    )));
    setEditingId(null);
    setMessage("Đã lưu thông tin.");
  }

  function handleEditKeyDown(event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  }

  function deleteAll() {
    if (!window.confirm("Xóa tất cả sinh viên?")) return;
    setStudents([]);
    setDeletedStudent(null);
    setMessage("Danh sách đã được xóa.");
  }

  return (
    <div>
      <div className="section-heading">
        <p className="eyebrow">Tier 6</p>
        <h2>Lists và CRUD</h2>
      </div>

      <section className="demo-card full-width">
        <div className="section-toolbar">
          <div>
            <h2>Quản lý sinh viên</h2>
            <p>Tuổi trung bình: {averageAge.toFixed(1)}</p>
          </div>
          {students.length > 0 && <button className="danger" onClick={deleteAll} type="button">Xóa tất cả</button>}
        </div>

        <div className="form-row">
          <input
            onChange={(event) => setNewName(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && addStudent()}
            placeholder="Tên sinh viên"
            ref={nameInputRef}
            value={newName}
          />
          <input
            min="1"
            max="99"
            onChange={(event) => setNewAge(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && addStudent()}
            placeholder="Tuổi"
            type="number"
            value={newAge}
          />
          <button onClick={addStudent} type="button">Thêm</button>
        </div>

        {message && (
          <p className="result-box">
            {message}
            {deletedStudent && <button className="link-button" onClick={undoDelete} type="button">Hoàn tác</button>}
          </p>
        )}

        {students.length === 0 ? (
          <p className="empty-state">Danh sách trống</p>
        ) : (
          <div className="simple-list">
            {students.map((student, index) => (
              <div className="simple-list-row" key={student.id}>
                {editingId === student.id ? (
                  <div className="edit-row">
                    <input autoFocus onChange={(event) => setEditName(event.target.value)} onKeyDown={handleEditKeyDown} value={editName} />
                    <input onChange={(event) => setEditAge(event.target.value)} onKeyDown={handleEditKeyDown} type="number" value={editAge} />
                    <button onClick={saveEdit} type="button">Lưu</button>
                    <button className="secondary" onClick={cancelEdit} type="button">Hủy</button>
                  </div>
                ) : (
                  <>
                    <span className={student.age >= 20 ? "student-highlight" : ""}>
                      {index + 1}. {student.name} - {student.age} tuổi
                    </span>
                    <span className="button-row">
                      <button onClick={() => startEdit(student)} type="button">Sửa</button>
                      <button className="danger" onClick={() => deleteStudent(student)} type="button">Xóa</button>
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Tier6Demo;
