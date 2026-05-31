import { useState } from "react";

const randomKeys = ["A", "S", "D", "F", "J", "K", "L"];

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

function randomTargetKey() {
  return randomKeys[Math.floor(Math.random() * randomKeys.length)];
}

function Tier5Demo() {
  const [color, setColor] = useState("#5068d8");
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [liked, setLiked] = useState(false);
  const [text, setText] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [targetKey, setTargetKey] = useState(randomTargetKey);
  const [square, setSquare] = useState({ x: 0, y: 0 });
  const [gameMessage, setGameMessage] = useState("Nhấn đúng phím mục tiêu.");
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [submitted, setSubmitted] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const emailValid = formData.email.includes("@");
  const passwordMatches = formData.password !== "" && formData.password === formData.confirmPassword;

  function handleKeyboard(event) {
    if (event.target.matches("input, textarea")) return;

    setLastKey(event.key);
    if (event.key.toUpperCase() === targetKey) {
      setGameMessage(`Chính xác: ${targetKey}`);
      setTargetKey(randomTargetKey());
    }

    const moves = {
      ArrowUp: { x: 0, y: -10 },
      ArrowDown: { x: 0, y: 10 },
      ArrowLeft: { x: -10, y: 0 },
      ArrowRight: { x: 10, y: 0 },
    };
    if (moves[event.key]) {
      event.preventDefault();
      setSquare((current) => ({
        x: current.x + moves[event.key].x,
        y: current.y + moves[event.key].y,
      }));
    }
    if (event.ctrlKey && event.key.toLowerCase() === "d") {
      event.preventDefault();
      setColor(randomColor());
    }
  }

  function handleFormChange(event) {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (emailValid && passwordMatches) setSubmitted(true);
  }

  return (
    <div className="keyboard-scope" onKeyDown={handleKeyboard} tabIndex={0}>
      <div className="section-heading">
        <p className="eyebrow">Tier 5</p>
        <h2>Events cơ bản</h2>
        <p>Click vào vùng bài tập rồi thử phím mũi tên hoặc Ctrl+D.</p>
      </div>

      <div className="demo-grid">
        <section className="demo-card">
          <h2>Click Events</h2>
          <div className="color-preview" style={{ background: color }} />
          <div className="button-row">
            <button onClick={() => setColor(randomColor())} type="button">Đổi màu</button>
            <button onClick={() => setLiked((value) => !value)} type="button">{liked ? "Đã thích" : "Thích"}</button>
          </div>
          <div className="button-row">
            <button onClick={() => setClicks((value) => ({ ...value, left: value.left + 1 }))} type="button">Nút A: {clicks.left}</button>
            <button onClick={() => setClicks((value) => ({ ...value, right: value.right + 1 }))} type="button">Nút B: {clicks.right}</button>
          </div>
        </section>

        <section className="demo-card">
          <h2>Input Events</h2>
          <textarea maxLength={100} onChange={(event) => setText(event.target.value)} placeholder="Nhập nội dung..." rows={4} value={text} />
          <p>{text.length}/100 ký tự - {words} từ</p>
          <p className="result-box">Preview: {text || "(chưa nhập)"}</p>
          {text.length > 80 && <p className="error">Sắp hết ký tự.</p>}
        </section>

        <section className="demo-card">
          <h2>Keyboard Events</h2>
          <p>Phím cuối: <strong>{lastKey || "Chưa nhấn"}</strong></p>
          <p>Phím mục tiêu: <strong>{targetKey}</strong></p>
          <p>{gameMessage}</p>
          <div className="square-stage">
            <span className="movable-square" style={{ transform: `translate(${square.x}px, ${square.y}px)` }} />
          </div>
        </section>

        <section className="demo-card">
          <h2>Form Events</h2>
          {submitted ? (
            <div className="result-box success">
              <p>Đã gửi thành công: {formData.email}</p>
              <button onClick={() => setSubmitted(false)} type="button">Gửi lại</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Email<input name="email" onChange={handleFormChange} value={formData.email} /></label>
              <p className={emailValid ? "success" : "error"}>{emailValid ? "Email hợp lệ" : "Email cần có @"}</p>
              <label>Mật khẩu<input name="password" onChange={handleFormChange} type="password" value={formData.password} /></label>
              <label>Xác nhận mật khẩu<input name="confirmPassword" onChange={handleFormChange} type="password" value={formData.confirmPassword} /></label>
              <p className={passwordMatches ? "success" : "error"}>{passwordMatches ? "Mật khẩu khớp" : "Mật khẩu chưa khớp"}</p>
              <button disabled={!emailValid || !passwordMatches} type="submit">Gửi form</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default Tier5Demo;
