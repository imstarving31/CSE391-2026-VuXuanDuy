const products = [
  { id: 1, name: "Tai nghe Bluetooth", price: 890000 },
  { id: 2, name: "Bàn phím cơ", price: 1450000 },
  { id: 3, name: "Màn hình 24 inch", price: 3490000 },
  { id: 4, name: "Chuột không dây", price: 620000 },
  { id: 5, name: "Webcam Full HD", price: 1190000 },
];

function getGreeting(hour) {
  if (hour < 12) return "Chào buổi sáng";
  if (hour < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
}

function Tier2Demo() {
  const now = new Date();
  const personalInfo = {
    name: "Vũ Xuân Duy",
    age: 20,
    hometown: "Việt Nam",
    weight: 62,
    height: 1.7,
  };
  const bmi = personalInfo.weight / personalInfo.height ** 2;
  const isOnline = true;
  const isLoggedIn = true;
  const stock = 0;
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <div className="section-heading">
        <p className="eyebrow">Tier 2</p>
        <h2>Biến trong JSX</h2>
      </div>

      <div className="demo-grid">
        <section className="demo-card">
          <h2>{getGreeting(now.getHours())}, {personalInfo.name}!</h2>
          <p>Tuổi: {personalInfo.age}</p>
          <p>Quê quán: {personalInfo.hometown}</p>
          <p>BMI: {bmi.toFixed(1)}</p>
        </section>

        <section className="demo-card">
          <h2>Conditional Rendering</h2>
          <p>Trạng thái: <strong>{isOnline ? "Online" : "Offline"}</strong></p>
          {isLoggedIn ? <p>Menu tài khoản đang hiển thị.</p> : <p>Vui lòng đăng nhập.</p>}
          {stock === 0 && <p className="error">Hết hàng</p>}
        </section>

        <section className="demo-card full-width">
          <h2>Render danh sách sản phẩm</h2>
          <div className="simple-list">
            {products.map((product) => (
              <div className="simple-list-row" key={product.id}>
                <span>{product.name}</span>
                <strong className={product.price > 1000000 ? "expensive" : ""}>
                  {product.price.toLocaleString("vi-VN")}đ
                </strong>
              </div>
            ))}
          </div>
          <p className="summary">Tổng giá: {total.toLocaleString("vi-VN")}đ</p>
        </section>
      </div>
    </div>
  );
}

export default Tier2Demo;
