# PBT 09 - DOM Manipulation & Events

## Phần A - Kiểm tra đọc hiểu

### Câu A1 - DOM Tree

```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```

Các selector:

```javascript
document.querySelector("h1");
document.querySelector("#todoForm input");
document.querySelectorAll(".todo-item");
document.querySelector("nav a.active");
document.querySelector("#todoList li:first-child");
document.querySelectorAll("nav a");
```

### Câu A2 - `innerHTML` và `textContent`

`textContent` đọc hoặc gán nội dung dạng văn bản thuần. Trình duyệt không phân tích chuỗi thành HTML. Nên dùng thuộc tính này khi hiển thị dữ liệu do người dùng nhập hoặc dữ liệu không đáng tin cậy.

```javascript
message.textContent = "Xin chào <strong>An</strong>";
// Hiển thị nguyên văn cả thẻ <strong>.
```

`innerHTML` đọc hoặc gán nội dung HTML bên trong element. Trình duyệt sẽ phân tích chuỗi và tạo các DOM node tương ứng. Chỉ nên dùng khi chuỗi HTML do lập trình viên kiểm soát hoặc đã được sanitize bằng giải pháp phù hợp.

```javascript
card.innerHTML = "<strong>Sản phẩm nổi bật</strong>";
// Hiển thị chữ in đậm.
```

Nếu đưa trực tiếp dữ liệu người dùng vào `innerHTML`, kẻ tấn công có thể chèn HTML chứa mã JavaScript và gây lỗ hổng XSS:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput; // Nguy hiểm
```

Ví dụ input độc hại:

```html
<img src=x onerror="alert('Hacked!')">
```

Cách sửa khi chỉ cần hiển thị văn bản:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```

### Câu A3 - Event Bubbling

Khi click vào button, event nổi dần từ button lên các phần tử cha:

```text
BUTTON
INNER
OUTER
```

Nếu bỏ comment `e.stopPropagation()`, event dừng tại button:

```text
BUTTON
```

## Phần C - Debug và phân tích

### Câu C1 - Debug DOM Code

Các vấn đề cần sửa:

1. Nút giảm dùng tên event `"onclick"` trong `addEventListener`. Tên đúng là `"click"`.
2. Reset dùng `countDisplay = count`. `countDisplay` được khai báo bằng `const` và đang tham chiếu đến DOM element. Cần gán `countDisplay.textContent = count`.
3. `historyList.innerHTML = null` không phải cách rõ ràng để xóa nội dung. Dùng `historyList.replaceChildren()`.
4. Trong `clearHistory`, code viết `item.remove` nhưng không gọi hàm. Cần dùng `item.remove()`.
5. Hai nút increment và decrement lặp lại logic cập nhật màn hình. Nên tách hàm `renderCount()`.
6. Chỉ increment ghi lịch sử, còn decrement và reset không ghi. Nên dùng chung hàm `addHistory()`.
7. Mỗi lịch sử bind một listener riêng. Có thể dùng event delegation trên `historyList` để đơn giản hơn và xử lý được cả nội dung khôi phục từ localStorage.
8. `localStorage.getItem("count")` trả về chuỗi hoặc `null`. Cần parse và fallback về `0`.
9. Nếu khôi phục `historyList.innerHTML`, cần xem đó là dữ liệu không đáng tin cậy. Trong bài này có thể tránh lưu HTML bằng cách lưu mảng chuỗi JSON và tạo lại `<li>` bằng `createElement`.
10. Chỉ lưu bằng `beforeunload` khiến trạng thái chưa được lưu ngay sau thao tác. Nên lưu mỗi lần dữ liệu thay đổi.

Code sau khi sửa:

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");
let count = Number(localStorage.getItem("count")) || 0;
let history = JSON.parse(localStorage.getItem("history") || "[]");

function saveState() {
    localStorage.setItem("count", String(count));
    localStorage.setItem("history", JSON.stringify(history));
}

function render() {
    countDisplay.textContent = count;
    historyList.replaceChildren();

    history.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        historyList.appendChild(li);
    });
}

function addHistory(text) {
    history.push(text);
    saveState();
    render();
}

document.querySelector("#incrementBtn").addEventListener("click", () => {
    count++;
    addHistory(`Count changed to ${count}`);
});

document.querySelector("#decrementBtn").addEventListener("click", () => {
    count--;
    addHistory(`Count changed to ${count}`);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    addHistory("Count reset to 0");
});

historyList.addEventListener("click", event => {
    if (event.target.matches("li")) {
        const index = [...historyList.children].indexOf(event.target);
        history.splice(index, 1);
        saveState();
        render();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    history = [];
    saveState();
    render();
});

render();
```

### Câu C2 - Performance

Bind listener riêng lên 1000 element làm tốn bộ nhớ, tăng thời gian khởi tạo và gây khó khăn khi các element được thêm hoặc xóa động. Event delegation bind một listener lên phần tử cha. Do event bubbling, listener này có thể dùng `event.target` hoặc `closest()` để xác định element con đã phát sinh sự kiện.

Ví dụ:

```javascript
list.addEventListener("click", event => {
    const item = event.target.closest(".item");
    if (!item || !list.contains(item)) return;
    console.log(item.dataset.id);
});
```

Refactor với `DocumentFragment`:

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

Các node được thêm vào fragment khi fragment chưa nằm trong DOM hiển thị. Cuối cùng chỉ có một lần append vào `document.body`, nhờ đó giảm số lần cập nhật layout và render không cần thiết.
