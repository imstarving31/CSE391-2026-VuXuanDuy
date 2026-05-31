# PBT 07 - JavaScript Basics

## Phần A - Kiểm tra đọc hiểu

### Câu A1 - `var`, `let`, `const`

#### Dự đoán kết quả

**Đoạn 1**

```text
undefined
```

Khai báo bằng `var` được hoist lên đầu scope nhưng phép gán `x = 5` vẫn nằm ở vị trí cũ. Vì vậy, tại thời điểm `console.log(x)` chạy, biến `x` đã tồn tại nhưng chưa có giá trị.

**Đoạn 2**

```text
ReferenceError: Cannot access 'y' before initialization
```

Biến khai báo bằng `let` cũng được đưa vào scope nhưng nằm trong Temporal Dead Zone (TDZ) cho đến dòng khai báo. Không thể truy cập biến trong khoảng này.

**Đoạn 3**

```text
TypeError: Assignment to constant variable
```

Không thể gán lại một giá trị mới cho biến khai báo bằng `const`. Vì lỗi xảy ra trước `console.log(z)`, dòng log không chạy.

**Đoạn 4**

```text
[ 1, 2, 3, 4 ]
```

`const` ngăn việc gán lại biến `arr` sang một mảng khác, nhưng vẫn cho phép thay đổi nội dung của mảng hiện tại.

**Đoạn 5**

```text
Trong block: 2
Ngoài block: 1
```

Hai biến `a` thuộc hai scope khác nhau. Biến bên trong block chỉ che khuất biến bên ngoài trong phạm vi `{ ... }`.

File kiểm chứng: `var_let_const.js`.

### Câu A2 - Data Types và Coercion

| Biểu thức | Kết quả |
|---|---|
| `typeof null` | `"object"` |
| `typeof undefined` | `"undefined"` |
| `typeof NaN` | `"number"` |
| `"5" + 3` | `"53"` |
| `"5" - 3` | `2` |
| `"5" * "3"` | `15` |
| `true + true` | `2` |
| `[] + []` | `""` |
| `[] + {}` | `"[object Object]"` |
| `{} + []` trong lời gọi `console.log` | `"[object Object]"` |

`typeof null` trả về `"object"` vì đây là một hành vi cũ của JavaScript được giữ lại để tương thích. `NaN` mang nghĩa "Not a Number", nhưng bản thân nó vẫn thuộc kiểu `number`.

Toán tử `+` vừa dùng để cộng số vừa dùng để nối chuỗi. Khi một toán hạng trở thành chuỗi, `"5" + 3` nối chuỗi và cho kết quả `"53"`. Toán tử `-` chỉ dùng cho phép toán số nên `"5"` được ép thành số `5`, kết quả của `"5" - 3` là `2`.

### Câu A3 - So sánh `==` và `===`

| Biểu thức | Kết quả |
|---|---|
| `5 == "5"` | `true` |
| `5 === "5"` | `false` |
| `null == undefined` | `true` |
| `null === undefined` | `false` |
| `NaN == NaN` | `false` |
| `0 == false` | `true` |
| `0 === false` | `false` |
| `"" == false` | `true` |

Nên ưu tiên dùng `===` vì phép so sánh này kiểm tra cả giá trị và kiểu dữ liệu, không tự động ép kiểu. Nhờ vậy code dễ dự đoán hơn và tránh các kết quả bất ngờ như `0 == false`.

### Câu A4 - Truthy và Falsy

Các giá trị falsy thông dụng trong JavaScript:

- `false`
- `0`
- `-0`
- `0n`
- `""` (chuỗi rỗng)
- `null`
- `undefined`
- `NaN`

Ngoài ra, trong trình duyệt còn có trường hợp đặc biệt cũ `document.all` cũng được xử lý như một giá trị falsy.

Kết quả của đoạn code:

| Điều kiện | Kết quả |
|---|---|
| `if ("0")` | In `A` |
| `if ("")` | Không in `B` |
| `if ([])` | In `C` |
| `if ({})` | In `D` |
| `if (null)` | Không in `E` |
| `if (0)` | Không in `F` |
| `if (-1)` | In `G` |
| `if (" ")` | In `H` |

Mảng rỗng, object rỗng và chuỗi chứa dấu cách vẫn là truthy.

### Câu A5 - Template Literals

```javascript
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

const html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

## Phần C - Suy luận

### Câu C1 - Debug JavaScript

Các vấn đề cần sửa:

1. Chưa kiểm tra `giaBan` có thật sự là số hợp lệ hay không. Test đang truyền `"100000"` là chuỗi và JavaScript âm thầm ép kiểu khi nhân. Nên kiểm tra kiểu dữ liệu để tránh nhận input sai.
2. Chưa kiểm tra `phanTramGiam` có phải số hợp lệ hay không. Nếu nhận chuỗi hoặc `NaN`, điều kiện hiện tại có thể cho kết quả không mong muốn.
3. Chưa kiểm tra giá bán âm. Một giá bán nhỏ hơn `0` không hợp lệ trong bài toán này.
4. `if (giaSauGiam = 0)` dùng toán tử gán `=` thay vì toán tử so sánh `===`. Phép gán làm thay đổi giá trị của `giaSauGiam` thành `0`, sau đó điều kiện trở thành falsy.
5. Các biến `giamGia` và `giaSauGiam` không cần gán lại, nên khai báo bằng `const` để thể hiện rõ ý định.
6. Vòng lặp dùng `var i`. `var` có function scope nên cả 5 callback của `setTimeout` cùng tham chiếu đến một biến `i`. Khi callback chạy sau 1 giây, vòng lặp đã kết thúc và `i` bằng `5`, vì vậy chương trình in `Item 5` năm lần.
7. Nên dùng `let i` trong vòng lặp. `let` có block scope và mỗi lượt lặp tạo ra một binding riêng, nên kết quả là `Item 0` đến `Item 4`.

Code sau khi sửa:

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || !Number.isFinite(giaBan) || giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (
        typeof phanTramGiam !== "number" ||
        !Number.isFinite(phanTramGiam) ||
        phanTramGiam < 0 ||
        phanTramGiam > 100
    ) {
        return "Phần trăm giảm không hợp lệ";
    }

    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Item " + i);
    }, 1000);
}
```

### Câu C2 - Hóa đơn nhà hàng

Chương trình được cài đặt trong file `restaurant_bill.js`.

Quy ước được sử dụng: VAT và tip được tính trên số tiền sau khi áp dụng các mức giảm giá. Tip là tùy chọn thông qua tham số `includeTip`.
