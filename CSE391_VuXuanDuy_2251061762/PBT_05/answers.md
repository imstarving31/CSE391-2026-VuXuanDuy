Câu A1:

1. Thẻ <meta viewport> chuẩn và giải thích


<meta name="viewport" content="width=device-width, initial-scale=1.0">

Giải thích từng thuộc tính:

name="viewport": Báo cho trình duyệt biết đây là thẻ cấu hình vùng nhìn (khung hiển thị) của trang web.

width=device-width: Yêu cầu trình duyệt thiết lập chiều rộng của trang web bằng đúng với chiều rộng vật lý của thiết bị đang xem (thay vì dùng một chiều rộng mặc định cố định).

initial-scale=1.0: Đặt mức độ thu phóng (zoom) ban đầu là 100% khi trang vừa tải xong, chống tình trạng trang bị tự động zoom to hay thu nhỏ.

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị như thế nào?
Nếu không có tấm vé vào cửa này, iPhone (và các điện thoại thông minh khác) sẽ tự động giả định trang web của bạn là phiên bản dành cho Desktop (thường tự gán chiều rộng khoảng 980px).
Sau đó, để hiển thị toàn bộ trang, thiết bị sẽ thu nhỏ mọi thứ lại để nhét vừa vào màn hình điện thoại. Hậu quả là:

Chữ nhỏ xíu, không thể đọc được.

Nút bấm chồng chéo, quá bé để chạm chính xác.

Người dùng bắt buộc phải dùng hai ngón tay để zoom in và kéo ngang màn hình liên tục mới xem được nội dung.

3. Mobile-First vs Desktop-First
Sự khác nhau cơ bản:

Mobile-First (Ưu tiên di động): Viết CSS mặc định cho màn hình nhỏ nhất trước. Sau đó, dùng @media (min-width: ...) để bổ sung hoặc thay đổi layout khi kích thước màn hình lớn dần lên.

Desktop-First (Ưu tiên máy tính): Viết CSS mặc định cho màn hình to nhất trước. Sau đó, dùng @media (max-width: ...) để ghi đè, bóp nhỏ layout lại khi màn hình nhỏ dần.

Ví dụ CSS với breakpoint 768px:
Cách Mobile-First (min-width):

/* Mặc định cho Mobile */
.box { 
    width: 100%; 
}

/* Từ Tablet (768px) trở lên */
@media (min-width: 768px) { 
    .box { width: 50%; } 
}

Cách Desktop-First (max-width):

/* Mặc định cho Desktop */
.box { 
    width: 50%; 
}

/* Từ Tablet (768px) trở xuống */
@media (max-width: 768px) { 
    .box { width: 100%; } 
}

Tại sao Mobile-First được khuyên dùng?

Tối ưu hiệu suất (Performance): Thiết bị di động thường có cấu hình yếu và mạng chậm hơn. Theo cách Mobile-First, trình duyệt trên điện thoại chỉ cần đọc đoạn CSS mặc định và bỏ qua phần CSS phức tạp của Desktop. Nếu dùng Desktop-First, điện thoại phải tải toàn bộ CSS nặng nề của Desktop rồi mới đọc đến lệnh ghi đè để thu nhỏ, gây lãng phí tài nguyên.

Tư duy thiết kế logic hơn: Bắt đầu từ không gian nhỏ hẹp giúp bạn tập trung vào nội dung cốt lõi nhất. Từ đó, việc "mở rộng" thêm chức năng và không gian khi lên Desktop sẽ dễ dàng và ít lỗi hơn việc phải "nhồi nhét" một cục giao diện khổng lồ vào màn hình bé xíu.

Câu A2:

Kích thước xs (Extra Small) — Dưới 576px: Đây là breakpoint đại diện cho các thiết bị điện thoại cầm dọc (như iPhone, điện thoại Android thông thường). Ở màn hình hẹp này, lưới sản phẩm nên hiển thị 1 cột duy nhất. Cách này giúp hình ảnh và thông tin sản phẩm hiện lên to, rõ ràng, phù hợp với thói quen cuộn dọc (scroll) của người dùng trên điện thoại.

Kích thước sm (Small) — Từ 576px trở lên: Mốc kích thước này đại diện cho điện thoại khi được cầm ngang hoặc các thiết bị màn hình gập. Do không gian chiều ngang đã được mở rộng hơn, bạn có thể thiết lập lưới sản phẩm hiển thị 2 cột để tận dụng diện tích màn hình.

Kích thước md (Medium) — Từ 768px trở lên: Đây là kích thước chuẩn của các dòng máy tính bảng (Tablet/iPad) khi cầm dọc. Trên thiết bị này, giao diện đã khá rộng rãi nên lưới sản phẩm có thể hiển thị từ 2 đến 3 cột, tùy thuộc vào việc mỗi thẻ sản phẩm của bạn chứa nhiều hay ít thông tin.

Kích thước lg (Large) — Từ 992px trở lên: Breakpoint này đại diện cho giao diện Desktop nhỏ hoặc các dòng Laptop phổ thông (màn hình khoảng 13 đến 14 inch). Trải nghiệm người dùng lúc này là thao tác với chuột và màn hình ngang, nên lý tưởng nhất là chia lưới sản phẩm thành 3 đến 4 cột.

Kích thước xl (Extra Large) — Từ 1200px trở lên: Đây là kích thước dành cho Desktop lớn hoặc các màn hình PC rời (từ 15 inch trở lên). Để tránh việc các thẻ sản phẩm bị kéo giãn quá mức và tận dụng tối đa không gian trống trên màn hình rộng, bạn nên chia lưới hiển thị từ 4 đến 5 cột.

Câu A3:

375px 375px

600px 540px

800px 720px

1000px 960px

1400px 1140px

Câu A4:

1. Giải thích 4 tính năng chính của SCSS và ví dụ
Variables (Biến)

Giải thích: Tính năng này cho phép lưu trữ các giá trị thường dùng (như mã màu, phông chữ, kích thước, bo góc) vào một cái tên bắt đầu bằng ký tự $. Khi giao diện cần thay đổi (ví dụ đổi màu chủ đạo của toàn bộ trang), bạn chỉ cần sửa giá trị ở nơi khai báo biến duy nhất thay vì phải đi tìm và sửa thủ công ở hàng chục, hàng trăm chỗ trong file CSS.

Ví dụ:

SCSS
$primary-color: #805ad5;
$radius-card: 8px;

.card {
    background-color: $primary-color;
    border-radius: $radius-card;
}
Nesting (Viết CSS lồng nhau)

Giải thích: Thay vì viết các bộ chọn (selectors) một cách rời rạc và lặp đi lặp lại như CSS thuần, SCSS cho phép lồng các bộ chọn con vào trong bộ chọn cha đúng theo cấu trúc phân cấp hình cây của file HTML. Cách viết này giúp mã nguồn gọn gàng, trực quan và dễ quản lý. Tuy nhiên, quy tắc cốt lõi là không nên lồng quá 3 cấp để tránh sinh ra selector quá dài gây ảnh hưởng hiệu năng.

Ví dụ:

SCSS
.navbar {
    background: #1a202c;
    padding: 16px;

    ul {
        list-style: none;
        display: flex;

        li {
            margin-right: 24px;
        }
    }
}
Mixins (Hàm CSS dùng chung)

Giải thích: Hoạt động như một hàm trong lập trình. Bạn dùng từ khóa @mixin để đóng gói một nhóm thuộc tính CSS xuất hiện lặp đi lặp lại nhiều lần. Khi muốn sử dụng nhóm thuộc tính này ở class khác, bạn chỉ cần gọi từ khóa @include. Mixin còn có thể nhận tham số truyền vào giúp tùy biến linh hoạt các giá trị.

Ví dụ:

SCSS
// Định nghĩa mixin căn giữa bằng flex
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero {
    @include flex-center;
    height: 100vh;
}
@extend / Inheritance (Kế thừa)

Giải thích: Cho phép một bộ chọn thừa hưởng (kế thừa) lại toàn bộ tất cả các thuộc tính CSS từ một bộ chọn khác đã được định nghĩa sẵn. Lệnh này giúp giảm thiểu việc viết lặp mã nguồn cho các thành phần giao diện có chung cấu trúc nền tảng (ví dụ như các loại nút bấm, các kiểu thông báo cảnh báo).

Ví dụ:

SCSS
.btn-base {
    padding: 10px 20px;
    border-radius: 4px;
    display: inline-block;
}

.btn-primary {
    @extend .btn-base;
    background-color: #805ad5;
    color: white;
}

2. Tại sao trình duyệt KHÔNG đọc được file .scss và bước chuyển đổi?
Trình duyệt web (như Chrome, Edge, Safari, Firefox) được xây dựng theo các tiêu chuẩn thế giới và chúng chỉ có khả năng phân tích ngữ nghĩa, đọc hiểu cấu trúc cú pháp của các file CSS thuần (đuôi .css). Các tính năng lập trình nâng cao có trong SCSS như biến, cấu trúc lồng nhau, hay hàm mixin nằm ngoài khả năng xử lý trực tiếp của công cụ render trên trình duyệt.

Để đưa giao diện chạy được trên trình duyệt, bạn bắt buộc phải trải qua một bước gọi là Compile (Biên dịch).

Quá trình biên dịch này sẽ sử dụng một công cụ (Compiler) – ví dụ như extension "Live Sass Compiler" trên VS Code hoặc các bộ công cụ tự động hóa trong dự án thực tế như Vite, Webpack – để phân tích file .scss, xử lý các hàm, các biến, rồi dịch ngược toàn bộ cấu trúc mã đó thành một hoặc nhiều file .css tiêu chuẩn để trình duyệt đọc hiểu bình thường.

---

## Bài B3 — SCSS Refactor (20đ)

### 1. Cấu trúc thư mục SCSS

```
scss/
├── _variables.scss    (Các biến SCSS)
├── _mixins.scss       (Các mixin tái sử dụng)
├── _components.scss   (Các component với nested selectors)
└── style.scss         (File chính, import các partial)
```

### 2. Biến SCSS (_variables.scss)

Tạo ít nhất 8 biến:

```scss
// Màu sắc
$primary-color: #805ad5;
$secondary-color: #f093fb;
$text-color: #2d3436;
$bg-light: #f5f5f5;

// Font
$font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
$font-secondary: 'Georgia', serif;

// Breakpoint
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;

// Spacing
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 32px;
$spacing-xl: 48px;

// Border radius
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;

// Shadow
$shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
$shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
```

### 3. Mixin (_mixins.scss)

Tạo ít nhất 3 mixin tái sử dụng:

```scss
// Media query mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'tablet' {
    @media (min-width: $breakpoint-tablet) {
      @content;
    }
  } @else if $breakpoint == 'desktop' {
    @media (min-width: $breakpoint-desktop) {
      @content;
    }
  }
}

// Flexbox center
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Card shadow và styling
@mixin card-shadow {
  box-shadow: $shadow-md;
  background-color: white;
  border-radius: $radius-md;
  padding: $spacing-md;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-4px);
  }
}

// Flex layout
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 4. Component (_components.scss)

Sử dụng nested selectors (ít nhất 3 block):

```scss
// Card component
.card {
  @include card-shadow;
  border: 1px solid #eee;

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: $radius-md $radius-md 0 0;
  }

  .card-title {
    font-family: $font-primary;
    font-size: 1.25rem;
    color: $primary-color;
    margin: $spacing-md 0 $spacing-sm 0;
  }

  .card-description {
    color: $text-color;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  &:hover {
    .card-title {
      color: $secondary-color;
    }
  }

  &.featured {
    border: 2px solid $primary-color;
    box-shadow: 0 0 0 3px rgba(128, 90, 213, 0.1);
  }
}

// Header component
.header {
  @include flex-between;
  background-color: $primary-color;
  color: white;
  padding: $spacing-md $spacing-lg;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav {
    display: flex;
    gap: $spacing-md;

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }
}

// Grid layout
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: $spacing-md;

  @include respond-to('tablet') {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
  }

  @include respond-to('desktop') {
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
  }
}

// Button component
.btn {
  @include flex-center;
  padding: $spacing-sm $spacing-md;
  background-color: $primary-color;
  color: white;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  font-family: $font-primary;
  transition: all 0.3s ease;

  &:hover {
    background-color: $secondary-color;
    transform: scale(1.05);
  }

  &.secondary {
    background-color: $secondary-color;

    &:hover {
      background-color: $primary-color;
    }
  }
}
```

### 5. File chính (style.scss)

```scss
@import 'variables';
@import 'mixins';
@import 'components';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-primary;
  color: $text-color;
  background-color: $bg-light;
}

html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-primary;
  margin-bottom: $spacing-md;
}

a {
  color: $primary-color;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: $secondary-color;
  }
}
```

### 6. Lệnh Compile SCSS → CSS

**Cài Sass toàn cục:**
```bash
npm install -g sass
```

**Compile một lần:**
```bash
sass scss/style.scss css/style.css
```

**Compile với watch mode (tự động biên dịch khi thay đổi):**
```bash
sass --watch scss:css
```

**Compile với minified output (file CSS bé hơn):**
```bash
sass --style=compressed scss/style.scss css/style.css
```

### 7. Kết quả Compile

File `css/style.css` được tạo thành công từ `scss/style.scss` với tất cả các variables, mixins, và nested selectors được biên dịch thành CSS chuẩn.

Lệnh compile đã chạy thành công:
```
sass scss/style.scss css/style.css
```

Deprecation warnings về `@import` là bình thường (sẽ bị deprecated ở Dart Sass 3.0.0), nhưng hiện tại vẫn hoạt động đúng.



