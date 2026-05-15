Câu A1:

type="email" → Ô nhập text, tự kiểm tra định dạng có ký tự @ → Dùng cho form đăng nhập, đăng ký tài khoản hoặc đăng ký nhận bản tin khuyến mãi.

type="text" → Ô nhập văn bản thông thường, hỗ trợ kiểm tra bằng minlength, maxlength, pattern → Dùng để nhập tên khách hàng, địa chỉ giao hàng hoặc mã giảm giá.

type="password" → Ô nhập ẩn ký tự (dấu chấm hoặc sao), hỗ trợ kiểm tra minlength, pattern → Dùng cho ô nhập mật khẩu khi tạo tài khoản hoặc thanh toán bảo mật.

type="number" → Ô nhập số kèm nút mũi tên tăng/giảm, tự động giới hạn theo min, max, step → Dùng để khách hàng điều chỉnh số lượng sản phẩm trực tiếp trong giỏ hàng.

type="tel" → Hiển thị bàn phím số trên thiết bị di động, hỗ trợ kiểm tra định dạng qua pattern → Dùng cho ô nhập số điện thoại liên hệ ở bước điền thông tin thanh toán (Checkout).

type="date" → Hiển thị bộ chọn ngày (Date picker), tự động giới hạn ngày theo min, max → Dùng để khách hàng chọn ngày mong muốn nhận hàng hoặc nhập ngày tháng năm sinh để nhận mã giảm giá sinh nhật.

type="range" → Hiển thị thanh trượt (Slider), tự động giới hạn giá trị theo min, max, step → Dùng cho bộ lọc khoảng giá tiền (Price range) trong trang danh sách sản phẩm.

type="file" → Nút mở cửa sổ tải tệp tin, tự động lọc định dạng file qua thuộc tính accept và cho phép chọn nhiều file qua multiple → Dùng để khách hàng tải lên hình ảnh thực tế khi viết đánh giá (review) sản phẩm.

type="search" → Ô nhập tìm kiếm có thêm nút "X" để xóa nhanh nội dung → Dùng làm thanh công cụ tìm kiếm sản phẩm chính trên đầu trang web.

type="url" → Ô nhập văn bản tự kiểm tra có đúng định dạng giao thức http:// hoặc https:// → Dùng trong form đăng ký gian hàng của người bán (Seller) để họ cung cấp đường dẫn trang web hoặc mạng xã hội của cửa hàng.

Câu A2:

Trường hợp 1: <!-- User để trống -->

Dự đoán: Trình duyệt sẽ chặn không cho Submit form và hiển thị một thông báo lỗi ngay tại ô input (ví dụ: "Please fill out this field" hoặc "Vui lòng điền vào trường này").

Tại sao: Thuộc tính required quy định đây là trường dữ liệu bắt buộc. Do user để trống (value=""), HTML5 validation sẽ báo lỗi vì không thỏa mãn điều kiện có dữ liệu.

Trường hợp 2: <!-- User gõ "abc" -->

Dự đoán: Form sẽ bị chặn Submit. Trình duyệt hiển thị thông báo lỗi yêu cầu nhập đúng định dạng email (ví dụ: "Please include an '@' in the email address. 'abc' is missing an '@'").

Tại sao: Thẻ input có type="email" mang sẵn cơ chế validation tự động của HTML5 để kiểm tra định dạng email chuẩn (ít nhất phải có ký tự @ và phần tên miền). Chuỗi "abc" không khớp định dạng này nên bị từ chối.

Trường hợp 3: <!-- User gõ 15 -->

Dự đoán: Form bị chặn Submit. Trình duyệt báo lỗi giá trị vượt quá mức cho phép (ví dụ: "Value must be less than or equal to 10").

Tại sao: Thuộc tính max="10" thiết lập giới hạn trên cho ô nhập số (type="number"). Giá trị user nhập là 15, lớn hơn giới hạn tối đa (10) nên không vượt qua được validation.

Trường hợp 4: <!-- User gõ "abc123" -->

Dự đoán: Form bị chặn Submit. Trình duyệt hiện thông báo yêu cầu nhập đúng định dạng được yêu cầu (ví dụ: "Please match the requested format").

Tại sao: Thuộc tính pattern="[0-9]{10}" sử dụng Regular Expression (Biểu thức chính quy) yêu cầu dữ liệu đầu vào phải là đúng 10 chữ số liên tiếp (từ 0 đến 9). Chuỗi "abc123" vừa chứa chữ cái vừa chỉ có 6 ký tự nên vi phạm quy tắc này.

Trường hợp 5: <!-- User gõ "123" -->

Dự đoán: Form bị chặn Submit. Trình duyệt hiển thị cảnh báo chuỗi quá ngắn (ví dụ: "Please lengthen this text to 8 characters or more (you are currently using 3 characters)").

Tại sao: Thuộc tính minlength="8" bắt buộc độ dài tối thiểu của chuỗi nhập vào phải từ 8 ký tự trở lên. Do người dùng chỉ nhập "123" (3 ký tự), validation tự động của HTML5 sẽ bắt lỗi độ dài.

Câu A3:

1. Tại sao <label for="email"> quan trọng cho người dùng screen reader?
Nó liên kết nhãn với thuộc tính id của ô <input>. Nhờ đó, trình đọc màn hình (screen reader) sẽ đọc to tên trường (VD: "Email") thay vì chỉ thông báo chung chung là "ô nhập liệu", giúp người khiếm thị biết chính xác cần điền thông tin gì.

2. Khi nào dùng <fieldset> + <legend>? Cho ví dụ cụ thể.
Dùng để gom nhóm các trường nhập liệu (inputs) có liên quan đến nhau về mặt ngữ nghĩa (như nhóm thông tin địa chỉ, nhóm nút chọn phương thức thanh toán).

HTML
<fieldset>
    <legend>Phương thức thanh toán</legend>
    <input type="radio" id="cod"><label for="cod">Tiền mặt (COD)</label><br>
    <input type="radio" id="bank"><label for="bank">Chuyển khoản</label>
</fieldset>
3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?

Khi nào dùng: Dùng cho các thành phần tương tác không có chữ hiển thị trên giao diện (VD: nút bấm chỉ có mỗi icon 🛒) để cung cấp nhãn ẩn cho trình đọc màn hình đọc lên.

Tại sao KHÔNG nên dùng chung: Vì trình đọc màn hình sẽ ưu tiên aria-label và ghi đè (bỏ qua hoàn toàn) nội dung của thẻ <label>, gây trùng lặp hoặc xung đột. Nếu thẻ HTML chuẩn (<label>) đã làm tốt nhiệm vụ thì không nên lạm dụng thêm ARIA.

Câu A4:

1. Thuộc tính loading="lazy" trên thẻ <img>

Cải thiện gì: Nó báo cho trình duyệt trì hoãn (delay) việc tải hình ảnh cho đến khi người dùng cuộn chuột đến gần vị trí hình ảnh đó trên màn hình (viewport). Điều này giúp trang web tải nhanh hơn đáng kể ở lần truy cập đầu tiên, tiết kiệm băng thông mạng và tài nguyên hệ thống (đặc biệt hữu ích cho các trang có danh sách sản phẩm dài).

Khi nào KHÔNG nên dùng: KHÔNG nên dùng cho những hình ảnh nằm ở phần hiển thị đầu tiên ngay khi mở web (gọi là vùng above the fold), ví dụ như: logo, ảnh banner chính (hero image), ảnh sản phẩm đầu tiên trên trang chi tiết. Nếu dùng lazy ở đây, người dùng sẽ thấy trang web bị chớp hoặc trống một lúc trước khi ảnh hiện ra, làm giảm trải nghiệm. Những ảnh này nên dùng loading="eager" (mặc định).

2. Tại sao nên cung cấp nhiều <source> trong thẻ <video>?

Tại sao: Trình duyệt web của các hãng khác nhau (Chrome, Safari, Firefox, Edge) không hỗ trợ chung một bộ định dạng (format) hoặc codec video thống nhất. Việc cung cấp nhiều <source> giúp trình duyệt duyệt qua danh sách từ trên xuống dưới và tự động chọn định dạng đầu tiên mà nó có thể đọc được. Điều này đảm bảo video của bạn chạy được trên mọi thiết bị và hệ điều hành.

3 format video web phổ biến:

MP4 (.mp4): Cực kỳ phổ biến, hỗ trợ trên gần như 100% trình duyệt (đặc biệt là Safari/iOS). Thường dùng codec H.264.

WebM (.webm): Do Google phát triển, tối ưu cho web, dung lượng nhẹ, chất lượng cao. Hỗ trợ tốt trên Chrome, Firefox, Edge.

Ogg (.ogv): Định dạng mã nguồn mở, hỗ trợ tốt trên Firefox và Opera cũ, thường dùng làm phương án dự phòng.

3. Thuộc tính alt (Alternative Text) trên <img> dùng để làm gì?

Công dụng: alt cung cấp một đoạn văn bản thay thế để mô tả nội dung bức ảnh. Nó có 3 vai trò chính:

Hiển thị chữ thay thế khi ảnh bị lỗi không tải được (do mạng kém, sai đường dẫn).

Hỗ trợ trình đọc màn hình (Screen Reader) đọc cho người khiếm thị hiểu ảnh vẽ gì (Accessibility).

Giúp các công cụ tìm kiếm (Google SEO) hiểu ngữ cảnh của ảnh để lập chỉ mục.

Viết alt tốt cho 3 trường hợp:

Ảnh sản phẩm iPhone 16: (Mô tả chi tiết để bán hàng)
alt="Điện thoại Apple iPhone 16 Pro Max 256GB màu Titan tự nhiên chụp góc nghiêng"

Ảnh trang trí (decorative - ví dụ đường viền, pattern mờ nền): (Để trống để trình đọc màn hình bỏ qua, không đọc rác)
alt="" (Lưu ý: Bắt buộc phải có thuộc tính alt rỗng, nếu xóa hẳn thuộc tính alt, trình đọc màn hình sẽ đọc nguyên cái tên file).

Ảnh biểu đồ doanh thu Q1/2026: (Nêu bật kết luận/số liệu chính của biểu đồ)
alt="Biểu đồ cột thể hiện doanh thu quý 1 năm 2026 đạt 50 tỷ đồng, tăng 20% so với cùng kỳ năm trước"

Câu A5:

1. Cách 1 (Chỉ dùng thẻ <img> độc lập)

Khi nào dùng: Dùng cho các hình ảnh mang tính minh họa chung chung, trang trí, hoặc hình ảnh mà nội dung của nó đã quá rõ ràng không cần giải thích thêm. Nếu bạn bỏ bức ảnh này đi, luồng đọc hiểu của toàn bộ trang web hoặc đoạn văn không bị ảnh hưởng quá nhiều.

2 ví dụ thực tế:

Logo website nằm ở góc trái của thanh điều hướng (Header).

Ảnh banner quảng cáo (Hero image) khổ lớn hiển thị ngay khi vừa vào trang chủ trang E-Commerce.

2. Cách 2 (Dùng thẻ <figure> kết hợp <figcaption>)

Khi nào dùng: Dùng cho một khối nội dung mang ý nghĩa độc lập (thường là ảnh, biểu đồ, đoạn code) bắt buộc phải có ghi chú, tiêu đề đi kèm để người xem hiểu được. Cặp thẻ này "trói" bức ảnh và dòng chú thích thành một khối ngữ nghĩa duy nhất. Nếu bạn bốc toàn bộ khối <figure> này đặt ra cuối trang, mạch văn chính của bài vẫn không bị đứt đoạn.

2 ví dụ thực tế:

Ảnh biểu đồ/số liệu phân tích trong một bài viết blog (ví dụ: chú thích là "Hình 1: Biểu đồ doanh thu so sánh giữa iPhone 15 và iPhone 16").

Một tác phẩm nghệ thuật hoặc ảnh sản phẩm nổi bật trong một bài đánh giá chi tiết (cần gắn chặt tên tác phẩm/sản phẩm, giá bán, hoặc tên tác giả ngay bên dưới bức ảnh để người đọc không bị nhầm lẫn).

Câu C1: 

Lỗi 1: Dòng <form> — Thẻ form thiếu thuộc tính action và method. Đây là lỗi best practice cơ bản, khiến form không biết sẽ gửi dữ liệu đi đâu và gửi bằng phương thức nào.

Sửa: <form action="#" method="POST">

Lỗi 2: Dòng Tên: <input type="text"> — Không có thẻ <label for="..."> liên kết (vi phạm accessibility), thiếu thuộc tính id, name (để gửi dữ liệu) và required (để validate).

Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

Lỗi 3: Dòng <input type="email"...> — Thiếu thẻ <label> báo hiệu cho trình đọc màn hình, không có thuộc tính id, name, và thiếu required.

Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="Email của bạn">

Lỗi 4: Hai dòng <input type="password"...> — Không có thẻ <label>, thiếu id, name. Về mặt validation, mật khẩu không có thuộc tính ràng buộc độ dài tối thiểu (minlength).

Sửa:
<label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8" placeholder="Mật khẩu">
<label for="confirm_pwd">Nhập lại mật khẩu:</label> <input type="password" id="confirm_pwd" name="confirm_pwd" required minlength="8" placeholder="Nhập lại mật khẩu">

Lỗi 5: Dòng Phone: <input type="text"...> — Dùng sai loại input (nên dùng type="tel" thay vì text), không bọc chữ "Phone:" bằng thẻ <label>, thiếu id, name và thiếu pattern để validate đúng định dạng số.

Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Ví dụ: 0901234567"> (Nên dùng placeholder thay vì value cứng).

Lỗi 6: Dòng <select> — Thẻ select đang đứng trơ trọi, không có <label> chú thích là đang chọn thông tin gì (vi phạm accessibility). Đồng thời thiếu id và name.

Sửa: <label for="city">Thành phố:</label> <select id="city" name="city" required>

Lỗi 7: Dòng <option>Hà Nội</option>... — Các thẻ option bị thiếu thuộc tính value. Nếu không có value, dữ liệu gửi lên server sẽ thiếu sự đồng nhất và khó xử lý.

Sửa:
<option value="hanoi">Hà Nội</option>
<option value="hcm">TP.HCM</option>

Lỗi 8: Dòng <label>Tôi đồng ý điều khoản</label> — Có thẻ nhãn (label) nhưng lại... quên mất thẻ <input type="checkbox"> bên trong nó. Thiếu luôn cả thuộc tính required (bắt buộc phải đồng ý mới được Submit).

Sửa: <label><input type="checkbox" name="terms" required> Tôi đồng ý điều khoản</label>

Câu C2: 
1. Viết pattern regex:

CMND/CCCD (Đúng 12 chữ số): pattern="[0-9]{12}"

Số tài khoản (Từ 10 đến 15 chữ số): pattern="[0-9]{10,15}"
(Lưu ý: Với mã PIN 6 chữ số ẩn, bạn sẽ dùng <input type="password" pattern="[0-9]{6}" maxlength="6">).

2. Giải thích: HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?

KHÔNG. HTML5 validation hoàn toàn không có giá trị về mặt bảo mật.

Tại sao: HTML5 validation chỉ là Client-side (xác thực phía giao diện người dùng) nhằm cải thiện UX (trải nghiệm người dùng), giúp họ nhập đúng định dạng một cách tiện lợi. Bất kỳ ai có chút kiến thức IT đều có thể dễ dàng "vượt rào" bằng cách ấn F12 (DevTools) để xóa bỏ các thuộc tính required, pattern, maxlength ra khỏi mã HTML, hoặc dùng các công cụ như Postman/cURL để bắn thẳng dữ liệu rác (hoặc mã độc) lên Server mà không cần thông qua trình duyệt.

3. 3 loại validation mà HTML5 KHÔNG THỂ làm được (Phải dùng JS hoặc Backend):

Xác thực chéo giữa các ô input (Cross-field validation): HTML5 không thể lấy giá trị của ô này so sánh với ô kia. (Ví dụ: Không thể kiểm tra "Nhập lại mật khẩu" có khớp với "Mật khẩu" không, hoặc "Ngày kết thúc" có lớn hơn "Ngày bắt đầu" không).

Kiểm tra dữ liệu động/cơ sở dữ liệu (Asynchronous validation): HTML5 không thể biết dữ liệu đó đã tồn tại hay chưa. (Ví dụ: Kiểm tra xem Số CCCD, Số điện thoại hoặc Email này đã được ai dùng để đăng ký tài khoản trong hệ thống ngân hàng hay chưa).

Thuật toán logic phức tạp (Complex Business Logic): (Ví dụ: Dựa vào ngày sinh để tính toán chính xác người dùng đã đủ 18 tuổi ngay tại thời điểm đăng ký chưa; hoặc chạy thuật toán Luhn để kiểm tra xem chuỗi số thẻ tín dụng nhập vào có phải là thẻ thật hay không).

4. 2 rủi ro bảo mật nếu CHỈ validate Frontend mà không validate Backend:

Hiểm họa tấn công mã độc (SQL Injection / XSS): Kẻ gian bypass Frontend và gửi thẳng các câu lệnh SQL độc hại hoặc mã JavaScript vào API. Nếu Backend không lọc (validate/sanitize) lại, hacker có thể xóa sạch cơ sở dữ liệu ngân hàng hoặc đánh cắp thông tin người dùng khác.

Phá vỡ tính toàn vẹn của dữ liệu và logic nghiệp vụ: Hacker có thể can thiệp vào các gói tin gửi đi để thay đổi giá trị theo ý muốn. (Ví dụ: Gửi số tiền chuyển khoản là số âm -1000000 để "hack" tiền, hoặc gửi mã PIN chỉ có 1 ký tự, tạo ra các tài khoản lỗi gây sập hệ thống).