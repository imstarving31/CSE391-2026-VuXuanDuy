# PBT 08 - JavaScript Functions, Arrays & Objects

## Phần A - Kiểm tra đọc hiểu

### Câu A1 - Function Declaration, Expression và Arrow Function

Đề bài ghi object `{ thuong, thuc_nhan }`, nhưng công thức đang tính thuế. Vì vậy, phần trả lời sử dụng tên thuộc tính `{ thue, thuc_nhan }`.

**Cách 1: Function Declaration**

```javascript
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
}
```

**Cách 2: Function Expression**

```javascript
const tinhThueBaoHiem = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```

**Cách 3: Arrow Function**

```javascript
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thue, thuc_nhan: luong - thue };
};
```

Function Declaration được hoist toàn bộ, nên có thể gọi trước dòng khai báo:

```javascript
console.log(sum(2, 3)); // 5

function sum(a, b) {
    return a + b;
}
```

Function Expression và Arrow Function thường được gán vào biến `const` hoặc `let`. Không thể gọi trước dòng khởi tạo vì biến đang nằm trong Temporal Dead Zone (TDZ):

```javascript
console.log(sum(2, 3)); // ReferenceError

const sum = (a, b) => a + b;
```

### Câu A2 - Scope và Closure

**Đoạn 1**

```text
1
2
3
2
2
```

Các method được trả về từ `counter()` vẫn nhớ và cùng sử dụng biến `count`, ngay cả khi hàm `counter()` đã chạy xong. Đây là closure.

**Đoạn 2**

```text
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

`var` có function scope. Ba callback cùng tham chiếu đến một biến `i`. Khi các callback chạy sau khoảng 100ms, vòng lặp đã kết thúc và `i` bằng `3`.

`let` có block scope. Mỗi lượt lặp tạo ra một binding `j` riêng, nên ba callback nhớ lần lượt các giá trị `0`, `1`, `2`.

### Câu A3 - Array Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter(num => num % 2 === 0);
const tripledNumbers = nums.map(num => num * 3);
const total = nums.reduce((sum, num) => sum + num, 0);
const firstGreaterThanSeven = nums.find(num => num > 7);
const hasNumberGreaterThanTen = nums.some(num => num > 10);
const areAllPositive = nums.every(num => num > 0);
const descriptions = nums.map(num => `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`);
const reversedNumbers = [...nums].reverse();
```

### Câu A4 - Object Destructuring và Spread

Với đoạn destructuring:

```text
iPhone 16 25990000 8 Titan
ReferenceError: specs is not defined
```

Biến `specs` không được tạo ra. Cú pháp `specs: { ram, color }` chỉ lấy hai thuộc tính lồng nhau và gán chúng vào hai biến `ram`, `color`.

Nếu chạy riêng phần spread để script không dừng do `ReferenceError`, kết quả là:

```text
23990000
true
25990000
16
```

Object `updated` là object mới nên việc đổi `updated.price` không làm thay đổi `product.price`.

Tuy nhiên, spread chỉ tạo shallow copy. `copy.specs` và `product.specs` vẫn tham chiếu đến cùng một object lồng nhau. Vì vậy, thay đổi `copy.specs.ram` cũng làm `product.specs.ram` trở thành `16`.

## Phần C - Suy luận

### Câu C1 - Refactor Code

```javascript
const processOrders = orders =>
    orders
        .filter(({ status, total }) => status === "completed" && total > 100000)
        .map(({ id, customer, total }) => {
            const discount = total * 0.1;
            return { id, customer, total, discount, finalTotal: total - discount };
        })
        .sort((a, b) => b.finalTotal - a.finalTotal);
```

### Câu C2 - Thiết kế API `miniArray`

```javascript
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        const hasInitialValue = arguments.length >= 3;
        if (arr.length === 0 && !hasInitialValue) {
            throw new TypeError("Reduce of empty array with no initial value");
        }

        let accumulator = hasInitialValue ? initialValue : arr[0];
        let startIndex = hasInitialValue ? 0 : 1;

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

console.log(miniArray.map([1, 2, 3], x => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
```

Kết quả:

```text
[ 2, 4, 6 ]
[ 3, 4 ]
10
```
