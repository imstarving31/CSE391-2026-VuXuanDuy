Câu A1 HTTP \& Browser:

1. 5 bước xảy ra khi gõ https://shopee.vn vào trình duyệt và nhấn Enter:
-b1: DNS Lookup \& bắt đầu hành trình: Trình duyệt phân giải tên miền shopee.vn thành địa chỉ IP. Sau đó, một Request xuất phát từ laptop cá nhân của em, đi qua router WiFi và hệ thống mạng cáp quang để tìm đường đến Server (Data center) của Shopee(Tham khảo mục Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương).

\-b2: Client gửi HTTP Request (Gọi món): Trình duyệt (đóng vai trò là Client) gửi một yêu cầu HTTP (thường là lệnh GET) tới Server của Shopee để xin tải trang web(Tham khảo mục 1.1 \& 1.2).

\-b3: Server xử lý yêu cầu (Nhà bếp nấu ăn): Máy chủ của Shopee tiếp nhận HTTP Request, bắt đầu xử lý logic và tổng hợp dữ liệu (thông tin sản phẩm, banner quảng cáo...) (Tham khảo mục 1.1).

\-b4: Server trả về HTTP Response (Giao món): Máy chủ gửi ngược lại một HTTP Response (với mã thành công 200 OK) mang theo các tệp tài nguyên bao gồm HTML (khung xương), CSS (trang trí) và JavaScript (chức năng) chạy qua mạng Internet về lại laptop của em (Tham khảo mục 1.1 \& 3).

\-b5: Browser Rendering (Trình duyệt hiển thị): Ngay khi nhận được các file tài nguyên, Chrome (hoặc trình duyệt của bạn) tiến hành 4 công đoạn để vẽ ra giao diện trang chủ Shopee (Tham khảo mục 1.3).

Nguồn tham chiếu: 01\_introduction\_html\_universe.md và các phần ghi rõ trong từng bước.



2\. Trong DevTools của Chrome, tab Network cho thấy requests/responses

Nguồn tham chiếu: 01\_introduction\_html\_universe.md và phần 4.3. Developer Tools (F12) — "Kính hiển vi" cho website



Câu A2:-Trang web dưới đây bị Google đánh giá SEO thấp vì dùng <div> cho mọi thứ, nên google bot đọc không biết cái nào là gì.
-4 lỗi semantic: <div class="header"> => <header>
		 <div class="menu"> => <nav>

&#x09;	<div class="main"> => <main>

&#x09;	<div class="footer"> =><footer>



Câu A3: Hình vẽ ở folder screenshots.

&#x09;Vì <div> là Block Element nó chiếm cả dòng và tự xuống dòng, còn <span>, <strong> là Inline Element chỉ chiếm nội dung và nằm cùng dòng.



Câu A4:-Sự khác nhau giữa <thead>, <tbody>, <tfoot>:

+)<thead> (Table Head - Phần đầu bảng): Dùng để nhóm các hàng chứa tiêu đề của các cột (thường đi kèm với thẻ <th>). Giúp xác định rõ ý nghĩa dữ liệu của từng cột bên dưới.

+)<tbody> (Table Body - Phần thân bảng): Dùng để chứa toàn bộ các hàng dữ liệu chính của bảng (chứa các thẻ <tr> và <td>). Một bảng có thể có nhiều <tbody> nếu cần phân nhóm dữ liệu lớn.
+)<tfoot> (Table Foot - Phần chân bảng): Dùng để nhóm các hàng mang tính chất tổng kết, tính tổng hoặc chú thích ở cuối bảng


\-KHÔNG NÊN dùng table để tạo layout trang web vì:
+)Rất khó để làm Responsive (Không thân thiện với Mobile):

Cấu trúc của table rất cứng nhắc và khó bẻ gãy. Nếu dùng nó làm layout trang web, khi xem trên các thiết bị màn hình nhỏ (như điện thoại), giao diện sẽ bị thu nhỏ lại đến mức không đọc được hoặc sinh ra thanh cuộn ngang rất khó chịu. Trong khi đó, các công cụ hiện đại như CSS Flexbox và Grid giúp bố cục tự động sắp xếp lại linh hoạt theo mọi kích thước màn hình.
+)Làm hỏng Accessibility (Khả năng tiếp cận) và SEO:

HTML5 quy định mỗi thẻ sinh ra đều có "ngữ nghĩa" riêng. Thẻ <table> có nghĩa là "đây là dữ liệu dạng bảng". Nếu bạn lấy nó làm bố cục, các phần mềm đọc màn hình (Screen Readers) cho người khiếm thị sẽ đọc lộn xộn các hàng/cột khiến họ không thể hiểu được trang web. Đồng thời, các bot tìm kiếm (như Googlebot) cũng bị rối, làm giảm thứ hạng SEO của website.
+)Code bị phình to (Code bloat) và cực kỳ khó bảo trì:

Để tạo ra một layout phức tạp bằng table, bạn bắt buộc phải lồng ghép vô số các thẻ <table>, <tr>, <td> vào bên trong nhau (nested tables). Điều này làm cho file HTML trở nên dài dòng, rối rắm (spaghetti code), trang web tải chậm hơn và biến việc sửa đổi/nâng cấp giao diện sau này thành một "cơn ác mộng" đối với lập trình viên.

bài B3:

Lỗi 1: Dòng 1 — Sai cú pháp khai báo DOCTYPE — Sửa `<!DOCTYPE>` thành `<!DOCTYPE html>`
Lỗi 2: Dòng 2 — Thiếu thẻ đóng của tiêu đề trang — Sửa `<title>Trang web` thành `<title>Trang web</title>`
Lỗi 3: Dòng 3 — Giá trị charset sai định dạng chuẩn (nên có dấu gạch ngang) — Sửa `charset="utf8"` thành `charset="UTF-8"`
Lỗi 4: Dòng 4 — Sai cú pháp thẻ đóng (viết nhầm thẻ mở) — Sửa `<h1>Welcome to ShopTLU<h1>` thành `<h1>Welcome to ShopTLU</h1>`
Lỗi 5: Dòng 8 — Sai cú pháp thẻ đóng liên kết — Sửa `<a href="home">Trang chủ<a>` thành `<a href="home">Trang chủ</a>`
Lỗi 6: Dòng 16 — Thiếu dấu ngoặc kép ở thuộc tính `src` và thiếu thuộc tính `alt` (lỗi semantic/accessibility) — Sửa `<img src=iphone.jpg>` thành `<img src="iphone.jpg" alt="iPhone 16 Pro">`
Lỗi 7: Dòng 18 — Lỗi lồng thẻ (nesting) sai trật tự giữa `<p>` và `<b>` — Sửa `<b>25.990.000đ</p></b>` thành `<b>25.990.000đ</b></p>`
Lỗi 8: Dòng 25 & 26 — Lỗi semantic: Tiêu đề của bảng đang dùng thẻ dữ liệu `<td>` thay vì thẻ tiêu đề `<th>` — Sửa `<td>Tên</td>` và `<td>Giá</td>` thành `<th>Tên</th>` và `<th>Giá</th>`
Lỗi 9: Dòng 36 — Lỗi semantic: Dùng hai thẻ `<main>` (một trang web chỉ nên có 1 thẻ `<main>` chính chứa nội dung cốt lõi). Đoạn này chứa sidebar nên dùng thẻ `<aside>` — Sửa `<main>` (và thẻ đóng tương ứng ở dòng 38) thành `<aside>` và `</aside>`
Lỗi 10: Dòng 41 — Thiếu thẻ đóng đoạn văn — Sửa `<p>Copyright 2026` thành `<p>Copyright 2026</p>`
Lỗi 11: Cuối file — Thiếu thẻ đóng gốc của tài liệu HTML — Thêm thẻ `</html>` vào dòng cuối cùng, sau `</body>`

Bài B4: thegioididong.com

1. 3 thẻ semantic HTML5 mà trang đó sử dụng: 
thẻ `<header>` nằm ở phần đầu của khối nội dung hiển thị (`<header class="header v2024 theme-reunification sticky1 fixed1"...>`)
thẻ `<footer>` nằm ở phần cuối trang (`<footer class="footer v2024"...>`)
thẻ `<section>` nằm trong thẻ `<div class = "body-home">`

 2 thẻ mà trang đó KHÔNG dùng đúng semantic:
 thẻ `<div class="header_main">`
 thẻ `<div class="body-home">`

 2.  không có `<table>`

 3. Form đó có action=/tim-kiem, method - Quan sát thẻ `<form>` trong ảnh, ta thấy không có thuộc tính method nào được khai báo. Theo tiêu chuẩn của HTML, khi thẻ form bị thiếu thuộc tính method, trình duyệt sẽ tự động mặc định sử dụng phương thức GET

 Câu C1: Thiết kế cấu trúc

 <header>
    <nav aria-label="main-navigation">
        <ul>
            <li>
                <a href="/home">Trang chủ</a>
            </li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <nav aria-label="breadcrumb">
        <ol>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/dien-thoai">Điện thoại</a></li>
            <li><span aria-current="page">iPhone 16</span></li>
        </ol>
    </nav>

    <article class="product-detail">
        
        <section class="product-overview">
            <figure class="product-gallery">
                <img src="main-img.jpg" alt="Ảnh chính iPhone 16">
                <ul class="thumbnails">
                    <li><img src="thumb1.jpg" alt="Góc chụp mặt trước"></li>
                    <li><img src="thumb2.jpg" alt="Góc chụp mặt sau"></li>
                    <li><img src="thumb3.jpg" alt="Góc chụp cạnh viền"></li>
                    <li><img src="thumb4.jpg" alt="Phụ kiện đi kèm"></li>
                </ul>
            </figure>

            <div class="product-info">
                <h1>iPhone 16 Pro Max 256GB</h1>
                <p class="price">25.990.000đ</p>
                <div class="rating">
                    <span class="stars">★★★★★</span>
                    <span>(150 đánh giá)</span>
                </div>
                <p class="description">Mô tả ngắn gọn về những ưu điểm nổi bật của sản phẩm...</p>
            </div>
        </section>

        <section class="product-specifications">
            <h2>Thông số kỹ thuật</h2>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Màn hình</th>
                        <td>6.7 inch, Super Retina XDR</td>
                    </tr>
                    <tr>
                        <th scope="row">Chipset</th>
                        <td>Apple A18 Pro</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="product-reviews">
            <h2>Đánh giá từ khách hàng</h2>
            <article class="review-item">
                <h3>Nguyễn Văn A</h3>
                <div class="review-rating"><span class="stars">★★★★★</span></div>
                <p>Máy mượt, chụp ảnh siêu đẹp!</p>
            </article>
            
            <article class="review-item">
                <h3>Trần Thị B</h3>
                <div class="review-rating"><span class="stars">★★★★☆</span></div>
                <p>Giao hàng nhanh, đóng gói cẩn thận.</p>
            </article>
        </section>

    </article>

    <aside class="related-products">
        <h2>Sản phẩm tương tự</h2>
        <ul>
            <li>
                <a href="/iphone-15">
                    <img src="ip15.jpg" alt="iPhone 15">
                    <h3>iPhone 15 Pro Max</h3>
                    <p class="price">20.990.000đ</p>
                </a>
            </li>
            <li>
                <a href="/samsung-s24">
                    <img src="s24.jpg" alt="Samsung S24">
                    <h3>Samsung Galaxy S24 Ultra</h3>
                    <p class="price">24.990.000đ</p>
                </a>
            </li>
        </ul>
    </aside>

</main>

<footer>
    <p>&copy; 2026 ShopTLU. All rights reserved.</p>
</footer>

Câu C2: 

Quan điểm "chỉ cần <div> và class là đủ" khá phổ biến vì thao tác nhanh, nhưng về lâu dài nó lại tạo ra những khoản "nợ kỹ thuật" rất lớn.

Thứ nhất, xét về SEO (Tối ưu hóa công cụ tìm kiếm), các bot của Google không "nhìn" thấy giao diện đẹp hay xấu, chúng phân tích trang web dựa trên mã nguồn. Các thẻ Semantic như <main>, <article>, hay <h1> giúp "chỉ điểm" cho bot biết đâu là nội dung cốt lõi. Một trang web toàn <div> giống như một bài văn không có chia đoạn hay tiêu đề, khiến công cụ tìm kiếm gặp khó khăn trong việc đánh giá và làm giảm thứ hạng trang.

Thứ hai, về Accessibility (Khả năng truy cập), trình đọc màn hình của người khiếm thị phụ thuộc hoàn toàn vào thẻ HTML để điều hướng. Nếu dùng thẻ <nav>, người dùng có thể bấm phím tắt để nhảy thẳng đến khu vực menu. Nếu dùng <div class="menu">, trình đọc không thể nhận diện khu vực đó là gì, buộc người khiếm thị phải nghe dò từng dòng rất mệt mỏi.

Ví dụ chứng minh: Nếu bạn tạo nút bấm bằng <div class="btn" onclick="...">, bạn phải tự viết thêm thuộc tính tabindex="0" để người dùng có thể focus bằng phím Tab, đồng thời phải viết thêm JavaScript để bắt sự kiện khi họ ấn phím Enter hoặc Space. Trong khi đó, nếu dùng đúng thẻ <button>, trình duyệt đã hỗ trợ sẵn mọi tính năng này từ đầu. Dùng thẻ chuẩn thực chất tiết kiệm thời gian code hơn.

Dù vậy, trường hợp thực tế <div> vẫn phù hợp nhất là khi bạn cần gom nhóm các phần tử thuần túy vì mục đích dàn trang (layout) hoặc tạo kiểu (CSS). Ví dụ: bạn tạo một thẻ <div class="flex-container"> bọc ngoài các thẻ sản phẩm để dàn chúng thành một hàng ngang. Khối hộp này không mang ý nghĩa nội dung ngữ nghĩa nào, nên dùng <div> ở đây là hoàn toàn chuẩn xác.