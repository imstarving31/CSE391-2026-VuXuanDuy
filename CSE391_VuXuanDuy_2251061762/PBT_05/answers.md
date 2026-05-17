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