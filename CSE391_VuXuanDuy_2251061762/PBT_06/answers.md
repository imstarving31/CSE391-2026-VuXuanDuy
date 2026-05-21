Câu A1:

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
| :---       | :---    | :---          | :---    |
| Số cột     | 1       | 2             | 4       |

1. col-md-6 nghĩa là gì?
Nghĩa là khi chiều rộng màn hình từ kích thước trung bình (md - Medium, ≥ 768px) trở lên, phần tử này sẽ chiếm 6/12 cột (tức là 50% chiều rộng của thẻ cha).

2. Tại sao không cần viết col-sm-12?
Vì Bootstrap hoạt động theo cơ chế Mobile-First (Ưu tiên thiết bị di động).
Khi bạn viết col-12, Bootstrap ngầm hiểu là: "Bắt đầu từ màn hình nhỏ nhất (0px), hãy chiếm 12 cột. Và CỨ GIỮ NGUYÊN NHƯ VẬY cho đến khi gặp một lệnh breakpoint khác lớn hơn chặn lại".
Vì vậy, giá trị 12 cột này sẽ tự động được kế thừa qua mốc sm (≥ 576px) và chỉ bị thay đổi khi đụng phải mốc md (≥ 768px) với lệnh col-md-6. Việc viết col-sm-12 là thừa thãi và không cần thiết.

## Câu A2

### 1. Giải thích class `d-none d-md-block`

`d-none` làm phần tử bị ẩn ở tất cả kích thước màn hình. `d-md-block` ghi đè lại từ breakpoint `md` trở lên, làm phần tử hiển thị theo kiểu `block`.

Vì vậy, element dùng `d-none d-md-block` sẽ:

- Ẩn khi màn hình nhỏ hơn `md`, tức là dưới `768px`.
- Hiển thị khi màn hình từ `768px` trở lên.

### 2. Liệt kê 5 spacing utilities và giải thích

- `mt-3`: thêm `margin-top` mức 3 cho phần tử.
- `mb-4`: thêm `margin-bottom` mức 4 cho phần tử.
- `ms-2`: thêm `margin-left` mức 2 trong giao diện trái sang phải.
- `px-4`: thêm `padding-left` và `padding-right` mức 4.
- `mb-auto`: đặt `margin-bottom: auto`, thường dùng trong flexbox để đẩy phần tử khác ra xa.

Trong Bootstrap, các mức spacing như `0`, `1`, `2`, `3`, `4`, `5` tương ứng với các giá trị có sẵn trong hệ thống spacing của framework.

### 3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`

- `.container`: có chiều rộng tối đa thay đổi theo từng breakpoint và được căn giữa. Ở màn hình lớn, nội dung không chiếm toàn bộ chiều ngang.
- `.container-fluid`: luôn rộng `100%` theo chiều ngang màn hình ở mọi kích thước.
- `.container-md`: rộng `100%` khi màn hình nhỏ hơn `md`, sau đó từ `md` trở lên sẽ hoạt động giống container có giới hạn chiều rộng.

## Câu C1

### 1. Quy trình đổi màu `$primary` sang `#E63946`

Để đổi màu chủ đạo của Bootstrap đúng cách, nên tùy biến bằng SASS/SCSS thay vì sửa trực tiếp file CSS đã biên dịch.

Quy trình thực hiện:

1. Cài công cụ cần thiết: Node.js, npm và Bootstrap qua npm.
2. Tạo file SCSS riêng, ví dụ `scss/custom.scss`.
3. Khai báo biến trước khi import Bootstrap:

```scss
$primary: #E63946;

@import "../node_modules/bootstrap/scss/bootstrap";
```

4. Biên dịch SCSS thành CSS bằng Sass:

```bash
npx sass scss/custom.scss css/custom-bootstrap.css
```

5. Trong HTML, thay link Bootstrap CDN bằng file CSS đã biên dịch:

```html
<link rel="stylesheet" href="css/custom-bootstrap.css">
```

Khi đó các component dùng màu primary như `.btn-primary`, `.text-primary`, `.bg-primary`, `.border-primary`, link, form focus... sẽ được cập nhật đồng bộ theo màu mới.

### 2. Vì sao không nên override trực tiếp `.btn-primary { background: red; }`

Không nên override trực tiếp vì cách này chỉ sửa một phần nhỏ của component. Ví dụ `.btn-primary` còn có màu chữ, border, trạng thái hover, active, disabled, focus shadow và nhiều biến thể liên quan. Nếu chỉ đổi `background`, giao diện dễ bị lệch màu, thiếu nhất quán hoặc khó đọc.

Dùng SASS variables tốt hơn vì:

- Thay đổi được toàn bộ hệ thống màu của Bootstrap một cách đồng bộ.
- Các trạng thái hover, active, disabled được Bootstrap tự tính toán phù hợp.
- Dễ bảo trì khi dự án lớn hơn.
- Không cần viết nhiều CSS override rời rạc.
- Giữ đúng cách tùy biến chính thức của Bootstrap.

## Câu C2

### 1. CSS thuần tạo navbar responsive và product card

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #222;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 48px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.navbar-logo {
  font-size: 24px;
  font-weight: 700;
  color: #0d6efd;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.navbar-actions {
  display: flex;
  gap: 12px;
}

.search-input {
  width: 220px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.cart-button {
  padding: 10px 14px;
  border: 0;
  border-radius: 6px;
  background: #0d6efd;
  color: #fff;
  cursor: pointer;
}

.product-card {
  overflow: hidden;
  max-width: 320px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.product-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-body {
  padding: 18px;
}

.product-title {
  margin: 0 0 8px;
  font-size: 20px;
}

.product-desc {
  margin: 0 0 16px;
  color: #666;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  font-weight: 700;
  color: #0d6efd;
}

.product-button {
  padding: 10px 14px;
  border: 0;
  border-radius: 6px;
  background: #0d6efd;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
    padding: 16px 24px;
  }

  .navbar-menu,
  .navbar-actions {
    width: 100%;
    flex-direction: column;
  }

  .search-input {
    width: 100%;
  }
}
```

### 2. So sánh CSS thuần với Bootstrap

| Tiêu chí | CSS thuần | Bootstrap |
| :--- | :--- | :--- |
| Số dòng CSS | Cần khoảng 90 dòng CSS cho navbar và card cơ bản như ví dụ trên. Nếu thêm dropdown, modal, responsive grid thì số dòng tăng nhiều hơn. | Gần như không cần viết CSS layout, chủ yếu dùng class như `navbar`, `row`, `col`, `card`, `btn`, `dropdown`, `modal`. |
| Thời gian phát triển | Lâu hơn vì phải tự viết layout, spacing, responsive, hover, trạng thái nút. | Nhanh hơn vì component và utilities đã có sẵn. |
| Khả năng tùy biến | Tùy biến rất sâu, kiểm soát hoàn toàn giao diện. | Tùy biến tốt nếu dùng SASS variables, nhưng nếu chỉ dùng CDN thì dễ bị giống giao diện Bootstrap mặc định. |

### 3. Khi nào nên dùng Bootstrap?

Nên dùng Bootstrap khi:

- Cần làm giao diện nhanh, đúng responsive và ổn định.
- Dự án là dashboard, trang quản trị, landing page, form, bảng dữ liệu.
- Nhóm muốn dùng hệ thống component có sẵn để tiết kiệm thời gian.
- Bài tập yêu cầu thực hành grid, utilities và components của Bootstrap.

### 4. Khi nào không nên dùng Bootstrap?

Không nên dùng Bootstrap khi:

- Dự án cần giao diện rất riêng, khác hoàn toàn style mặc định.
- Website nhỏ chỉ cần vài thành phần đơn giản, dùng Bootstrap sẽ hơi nặng.
- Muốn kiểm soát từng chi tiết CSS hoặc luyện kỹ năng CSS thuần.
- Dự án đã có design system riêng và Bootstrap có thể gây xung đột class/style.
