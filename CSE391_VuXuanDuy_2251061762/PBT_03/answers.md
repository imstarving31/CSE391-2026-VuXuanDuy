Câu A1:

Inline CSS (Nhúng trực tiếp vào thẻ HTML)

Ví dụ: Tiêu đề

Ưu điểm: Tác dụng ngay lập tức, độ ưu tiên cao nhất.

Nhược điểm: HTML lộn xộn, khó bảo trì, không thể tái sử dụng (lặp code).

Khi nào dùng: Chỉ dùng để test hoặc debug nhanh.

Internal CSS (Viết trong thẻ  ở phần )

Ví dụ:   h1 { color: red; }

Ưu điểm: Gom code vào một chỗ, tái sử dụng được nhiều lần trong cùng một trang đó.

Nhược điểm: Không dùng chung được cho các trang HTML khác, làm file HTML dài và nặng hơn.

Khi nào dùng: Khi làm trang web chỉ có 1 trang duy nhất hoặc làm prototype.

External CSS (Nhúng file .css bên ngoài bằng thẻ )

Ví dụ:

Ưu điểm: Code gọn gàng, tách biệt hoàn toàn HTML và CSS. Dùng chung một file CSS cho hàng trăm trang web khác nhau. Tối ưu tốc độ tải trang nhờ cache trình duyệt.

Nhược điểm: Tốn thêm 1 request mạng để tải file CSS.

Khi nào dùng: Tiêu chuẩn bắt buộc cho 100% dự án thực tế (chuẩn production).

Câu hỏi thêm: Cách nào "thắng"?

Kết quả: Inline CSS sẽ thắng.

Giải thích: CSS hoạt động theo nguyên tắc Specificity (Độ đặc hiệu/Độ ưu tiên). Do Inline CSS được gắn trực tiếp vào chính phần tử đó, trình duyệt đánh giá nó có tính "cụ thể" cao nhất (điểm Specificity cao hơn Internal và External). Do đó, nó sẽ ghi đè các quy tắc bên ngoài để áp dụng lên phần tử.

Câu A2:

h1 → Chọn: ShopTLU

.price → Chọn: 25.990.000đ, 45.990.000đ

#app header → Chọn: Toàn bộ khối tiêu đề và menu chứa các chữ "ShopTLU", "Home", "Products", "About"

nav a:first-child → Chọn: Home

.product.featured h2 → Chọn: MacBook Pro

article > p → Chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...

a[href="/"] → Chọn: Home

.top-bar.dark h1 → Chọn: ShopTLU

Câu A3:

Th1: 
Chiều rộng hiện thị = 450px
Không gian chiếm trên trang = 470px

Th2:
Chiều rộng hiện thị = 400px
Kích thước content thực tế = 350px
Không gian chiếm trên trang = 420px

Th3:
Khoảng cách giữa box-a và box-b = 40px

Do quy tắc Margin Collapse (Gộp margin) trong CSS. Khi 2 phần tử nằm dọc sát nhau, margin-bottom của khối trên và margin-top của khối dưới sẽ không cộng dồn. Trình duyệt sẽ cho chúng chồng lên nhau và chỉ lấy giá trị lớn hơn làm kết quả cuối cùng (ở đây 40px > 25px nên lấy 40px).

Câu A4: 

p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */

1. Tính specificity score (a, b, c) cho mỗi rule
rule A(0,0,1)
rule B(0,1,0)
rule C(1,0,0)
rule D(0,1,1)
2. Element sẽ có màu đỏ vì selector ID có specificity cao nhất
3. có màu cam
4. có màu đen vì !important có có specificity cao nhất trong tất cả selector

Bài B1:

Element Selector: body, header, table, footer

Class Selector: .menu

ID Selector: #ve-toi

Descendant Selector (Chọn con cháu): .menu ul, .menu a

Pseudo-class (Lớp giả): a:hover, tr:nth-child(even), tr:hover

Bai B2:

Phan 1:

Hộp 1 (content-box): chiều rộng thực tế = 350 px (đo từ DevTools)

Hộp 2 (border-box): chiều rộng thực tế = 300 px (đo từ DevTools)

Giải thích sự khác biệt:

Với content-box (Hộp 1): Kích thước width: 300px bạn khai báo chỉ được tính cho phần "lõi" (content). Khi thêm padding (20px mỗi bên) và border (5px mỗi bên), chúng sẽ cộng dồn ra bên ngoài, làm cái hộp phình to ra. Tổng chiều rộng = 300 + 202 + 52 = 350px.

Với border-box (Hộp 2): Kích thước width: 300px là lệnh ép buộc tổng thể (bao gồm cả content, padding và border). Trình duyệt sẽ tự động bóp nhỏ phần lõi content lại (từ 300px xuống còn 250px) để nhường chỗ cho padding và border, đảm bảo tổng chiều rộng cuối cùng của hộp hiển thị trên màn hình không bao giờ vượt quá 300px.

Phan 2: 

Trường hợp 1: KHÔNG DÙNG border-box (Mặc định là content-box)

Cột trái: 250px (width) + 15px*2 (padding) = 280px

Cột giữa: 500px (width) + 20px*2 (padding) = 540px

Cột phải: 250px (width) + 15px*2 (padding) = 280px

Tính toán: Tổng 3 cột = 280 + 540 + 280 = 1100px.

Giải thích: Vì 1100px > 1000px (chiều rộng của container bọc ngoài), nên container không thể chứa nổi. Giao diện bị vỡ layout, cột cuối cùng sẽ bị rớt xuống dòng dưới.

Trường hợp 2: DÙNG box-sizing: border-box;

Tính toán: Tổng 3 cột = 250 + 500 + 250 = đúng 1000px.

Giải thích: border-box ép trình duyệt tự động bóp nhỏ phần lõi (content) của mỗi cột lại để nhường chỗ cho lớp padding. Nhờ vậy, chiều rộng thực tế hiển thị trên màn hình của mỗi cột được giữ nguyên như khai báo ban đầu. Layout 3 cột nằm vừa vặn, hoàn hảo trong container 1000px.

Bai B3:

1. Liệt kê 10 rules + specificity score (Từ thấp đến cao):

p — Specificity: (0, 0, 1)

.text — Specificity: (0, 1, 0)

p.text — Specificity: (0, 1, 1)

.text.highlight — Specificity: (0, 2, 0)

p.text.highlight — Specificity: (0, 2, 1)

#demo — Specificity: (1, 0, 0)

p#demo — Specificity: (1, 0, 1)

#demo.text — Specificity: (1, 1, 0)

#demo.text.highlight — Specificity: (1, 2, 0)

p#demo.text.highlight — Specificity: (1, 2, 1)

2. Element cuối cùng hiển thị màu gì? Tại sao?

Kết quả: Element hiển thị màu red (đỏ).

Giải thích: Trình duyệt áp dụng quy tắc Specificity (Độ ưu tiên). Selector p#demo.text.highlight có chứa 1 ID, 2 Class và 1 Thẻ, mang lại số điểm cao nhất là (1, 2, 1). Vì nó có điểm số tuyệt đối cao nhất trong cả 10 rules nên màu đỏ của nó sẽ đánh bại tất cả các màu khác để áp dụng lên thẻ <p>.

4. Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.

Kết quả: KHÔNG thay đổi. Element vẫn có màu đỏ.

Giải thích: Thứ tự viết code từ trên xuống dưới trong file CSS chỉ có tác dụng quyết định kẻ chiến thắng khi 2 rules có cùng mức điểm Specificity. Còn trong trường hợp này, 10 rules đều có số điểm riêng biệt, và rule số 10 có điểm số áp đảo hoàn toàn (1, 2, 1). Do đó, dù bạn vứt rule mang màu đỏ lên dòng đầu tiên hay dòng cuối cùng của file CSS, nó vẫn luôn luôn giành chiến thắng nhờ luật Specificity.

Câu C1: 

1. Tính chiều rộng thực tế (content-box):

Sidebar: 300px (width) + 20px * 2 (padding trái/phải) + 1px * 2 (border trái/phải) = 342px

Content: 660px (width) + 30px * 2 (padding trái/phải) + 1px * 2 (border trái/phải) = 722px

2. Giải thích tại sao layout bị vỡ:
Tổng chiều rộng thực tế của cả 2 khối khi đặt cạnh nhau là: 342px + 722px = 1064px.
Trong khi đó, thẻ bọc ngoài (.container) chỉ có chỗ chứa tối đa là 960px. Vì 1064px > 960px, không đủ không gian trên một hàng ngang nên khối .content bắt buộc phải rớt xuống dòng mới.

3. Đưa ra 2 cách sửa khác nhau:

Cách 1 (Dùng border-box): Thêm thuộc tính box-sizing: border-box; vào cả sidebar và content. Trình duyệt sẽ ép tổng chiều rộng về đúng bằng width khai báo ban đầu (300px + 660px = 960px), vừa khít với container.

Cách 2 (Không dùng border-box - Trừ hao thủ công): Giữ nguyên mặc định (content-box), nhưng ta phải tự tính toán trừ đi phần padding và border để sửa lại width ở cả 2 khối:

Sidebar width mới: 300 - 40 - 2 = 258px

Content width mới: 660 - 60 - 2 = 598px

Câu C2: 

1. "Sản phẩm A" (h2) có font-size = 20px và color = green

Giải thích font-size: Thẻ h2 này bị nhắm trúng bởi rule .card .title { font-size: 20px; }. Việc "chỉ đích danh" luôn thắng việc kế thừa (kế thừa 14px từ .container hay 16px từ body đều bị bỏ qua).

Giải thích color: Xảy ra cuộc chiến độ ưu tiên (Specificity Battle). Rule #featured .title { color: red; } có ID nên điểm rất cao (1, 1, 0). Tuy nhiên, rule .highlight { color: green !important; } lại có "kim bài miễn tử" !important. Trong CSS, !important sẽ phá vỡ mọi quy tắc tính điểm và đè bẹp tất cả để giành chiến thắng. Do đó chữ biến thành màu xanh lá (green).

2. "Mô tả sản phẩm" (p trong card featured) có color = blue

Giải thích color: Thẻ <p> này bị nhắm trúng bởi rule .card p { color: inherit; }. Từ khóa inherit (kế thừa) là một lệnh ép buộc: "Cha mày màu gì thì mày phải lấy màu đó". Thẻ cha trực tiếp bọc nó là <div class="card">. Mà .card lại đang mang rule .card { color: blue; }. Vì vậy, nó kế thừa màu xanh lam (blue) từ thẻ cha.

3. "Sản phẩm B" (h2) có font-size = 20px và color = blue

Giải thích font-size: Tương tự Sản phẩm A, nó bị nhắm trúng trực tiếp bởi rule .card .title { font-size: 20px; }.

Giải thích color: Thẻ h2 này không có bất kỳ rule nào trực tiếp set thuộc tính color cho nó (nó không có class highlight, cũng không nằm trong id featured). Theo luật Cascade, khi không bị ai quản lý, nó sẽ "hưởng xái" (kế thừa) màu từ thẻ cha gần nhất. Thẻ cha của nó là .card đang có màu blue, nên nó cũng có màu blue.

4. "Mô tả sản phẩm B" (p.highlight) có color = green

Giải thích color: Xảy ra tranh chấp giữa 2 rules áp dụng trực tiếp lên nó: .card p { color: inherit; } và .highlight { color: green !important; }. Tương tự câu 1, nhờ có quyền lực tuyệt đối của !important, màu green chiến thắng lệnh inherit.

code kiểm chứng: cascade_test.html