function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price.toLocaleString("vi-VN")}đ</p>
      <button onClick={() => onAddToCart(name)} type="button">
        Thêm vào giỏ
      </button>
    </article>
  );
}

export default ProductCard;
