import { useState } from "react";

function Tier4Demo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isLampOn, setIsLampOn] = useState(false);
  const [age, setAge] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const countColor = count > 0 ? "positive" : count < 0 ? "negative" : "";
  const isValidAge = Number(age) > 0 && Number(age) < 100;

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.includes("@") || !isValidAge) return;
    setSubmitted(true);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setAge("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div className={isDark ? "tier-panel dark-panel" : "tier-panel"}>
      <div className="section-heading">
        <p className="eyebrow">Tier 4</p>
        <h2>useState cơ bản</h2>
      </div>

      <div className="demo-grid">
        <section className="demo-card">
          <h2>State với số</h2>
          <p className={`large-number ${countColor}`}>{count}</p>
          <p>{count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Bằng 0"}</p>
          <div className="button-row">
            <button onClick={() => setCount((value) => value + 1)} type="button">+1</button>
            <button onClick={() => setCount((value) => value - 1)} type="button">-1</button>
            <button onClick={() => setCount((value) => value + 5)} type="button">+5</button>
            <button onClick={() => setCount((value) => value * 2)} type="button">x2</button>
            <button className="secondary" onClick={() => setCount(0)} type="button">Reset</button>
          </div>
        </section>

        <section className="demo-card">
          <h2>Controlled Input</h2>
          <label>
            Tên ({name.length}/100)
            <input maxLength={100} onChange={(event) => setName(event.target.value)} value={name} />
          </label>
          <label>
            Email
            <input onChange={(event) => setEmail(event.target.value)} value={email} />
          </label>
          <p className={email.includes("@") ? "success" : "error"}>
            {email.includes("@") ? "Email hợp lệ" : "Email cần có ký tự @"}
          </p>
          <label>
            Mật khẩu
            <span className="inline-input">
              <input
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                value={password}
              />
              <button onClick={() => setShowPassword((value) => !value)} type="button">
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </span>
          </label>
        </section>

        <section className="demo-card">
          <h2>State với boolean</h2>
          <div className="button-row">
            <button onClick={() => setIsDark((value) => !value)} type="button">
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <button onClick={() => setIsLampOn((value) => !value)} type="button">
              Đèn: {isLampOn ? "Bật" : "Tắt"}
            </button>
          </div>
          <button className="accordion-title" onClick={() => setIsAccordionOpen((value) => !value)} type="button">
            Accordion {isAccordionOpen ? "−" : "+"}
          </button>
          {isAccordionOpen && <p className="result-box">Nội dung accordion đang hiển thị.</p>}
        </section>

        <section className="demo-card">
          <h2>Nhiều state trong form</h2>
          {submitted ? (
            <div className="result-box success">
              <p>Xin chào {name}!</p>
              <p>Email: {email}</p>
              <p>Tuổi: {age}</p>
              <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
              <button onClick={resetForm} type="button">Đăng ký lại</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Tuổi<input onChange={(event) => setAge(event.target.value)} type="number" value={age} /></label>
              <label className="checkbox-label">
                <input checked={isStudent} onChange={(event) => setIsStudent(event.target.checked)} type="checkbox" />
                Là sinh viên
              </label>
              <button disabled={!name.trim() || !email.includes("@") || !isValidAge} type="submit">Đăng ký</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default Tier4Demo;
