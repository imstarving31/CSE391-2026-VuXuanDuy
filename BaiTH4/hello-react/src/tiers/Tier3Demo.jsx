import { useState } from "react";
import PriceTag from "../components/PriceTag";
import ProductCard from "../components/ProductCard";
import UserCard from "../components/UserCard";

const products = [
  { id: 1, name: "iPhone 15", price: 25000000, image: "https://placehold.co/320x180?text=iPhone+15" },
  { id: 2, name: "Samsung S24", price: 22000000, image: "https://placehold.co/320x180?text=Samsung+S24" },
  { id: 3, name: "Xiaomi 14", price: 15000000, image: "https://placehold.co/320x180?text=Xiaomi+14" },
];

const users = [
  { id: 1, name: "Minh", email: "minh@example.com", avatar: "https://placehold.co/96?text=M" },
  { id: 2, name: "An", email: "an@example.com", avatar: "https://placehold.co/96?text=A" },
  { id: 3, name: "Linh", email: "linh@example.com", avatar: "https://placehold.co/96?text=L" },
];

function Tier3Demo() {
  const [message, setMessage] = useState("Chưa chọn sản phẩm");

  return (
    <div>
      <div className="section-heading">
        <p className="eyebrow">Tier 3</p>
        <h2>Chia component và truyền props</h2>
      </div>

      <section className="demo-card full-width">
        <h2>Cửa hàng điện thoại</h2>
        <p className="hint">{message}</p>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              image={product.image}
              key={product.id}
              name={product.name}
              onAddToCart={(name) => setMessage(`Đã thêm ${name} vào giỏ`)}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <div className="demo-grid">
        <section className="demo-card">
          <h2>UserCard</h2>
          {users.map((user) => <UserCard key={user.id} {...user} />)}
        </section>
        <section className="demo-card">
          <h2>PriceTag</h2>
          <p>Khuyến mại trong ngày:</p>
          <PriceTag originalPrice={25990000} salePrice={23990000} />
        </section>
      </div>
    </div>
  );
}

export default Tier3Demo;
