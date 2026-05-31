import { useState } from "react";
import LifecycleDemo from "../LifecycleDemo";

/* eslint-disable react-hooks/immutability -- This intentionally demonstrates why a normal variable does not update React UI. */
function BadCounter() {
  let count = 0;

  function handleClick() {
    count += 1;
    console.log("BadCounter count:", count);
  }

  return (
    <section className="demo-card">
      <h2>Biến thường</h2>
      <p>Bộ đếm trên UI: {count}</p>
      <button onClick={handleClick} type="button">
        Tăng và xem Console
      </button>
      <p className="hint">Console tăng nhưng UI không re-render.</p>
    </section>
  );
}
/* eslint-enable react-hooks/immutability */

function GoodCounter() {
  const [count, setCount] = useState(0);
  console.log("GoodCounter render:", count);

  return (
    <section className="demo-card">
      <h2>useState</h2>
      <p>Bộ đếm trên UI: {count}</p>
      <button onClick={() => setCount((current) => current + 1)} type="button">
        Tăng và re-render
      </button>
      <p className="hint success">setCount báo cho React cập nhật UI.</p>
    </section>
  );
}

function FlowDemo() {
  const [step, setStep] = useState(1);
  const messages = [
    "Bước 1: Xin chào!",
    "Bước 2: Đang học React",
    "Bước 3: Hiểu useState",
    "Bước 4: Hoàn thành!",
  ];

  return (
    <section className="demo-card full-width">
      <h2>Luồng hoạt động</h2>
      <p>Component function → JSX → UI → user action → setState → re-render.</p>
      <div className="button-row">
        <button
          disabled={step === messages.length}
          onClick={() => setStep((current) => current + 1)}
          type="button"
        >
          Bước tiếp theo
        </button>
        <button className="secondary" onClick={() => setStep(1)} type="button">
          Quay lại đầu
        </button>
      </div>
      <p className="result-box">{messages[step - 1]}</p>
    </section>
  );
}

function Tier1Demo() {
  return (
    <div>
      <div className="section-heading">
        <p className="eyebrow">Tier 1</p>
        <h2>Hiểu luồng hoạt động của React</h2>
      </div>
      <div className="demo-grid">
        <LifecycleDemo />
        <BadCounter />
        <GoodCounter />
        <FlowDemo />
      </div>
    </div>
  );
}

export default Tier1Demo;
