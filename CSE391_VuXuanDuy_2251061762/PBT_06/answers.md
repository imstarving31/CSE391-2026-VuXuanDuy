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
