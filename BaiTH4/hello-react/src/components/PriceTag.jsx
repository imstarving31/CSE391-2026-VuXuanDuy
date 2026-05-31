function PriceTag({ originalPrice, salePrice }) {
  return (
    <p className="price-tag">
      <del>{originalPrice.toLocaleString("vi-VN")}đ</del>
      <strong>{salePrice.toLocaleString("vi-VN")}đ</strong>
    </p>
  );
}

export default PriceTag;
