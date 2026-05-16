Câu A1:

1. static

Vẫn chiếm chỗ: Có

Tham chiếu vị trí: Luồng tài liệu (flow) mặc định

Cuộn theo trang: Có

Use case: Trạng thái mặc định của mọi thẻ (không dùng được top/left/right/bottom).

2. relative

Vẫn chiếm chỗ: Có (chỗ cũ vẫn bị bỏ trống)

Tham chiếu vị trí: Vị trí ban đầu của chính nó

Cuộn theo trang: Có

Use case: Làm điểm gốc (mỏ neo) cho thẻ con absolute, hoặc dịch chuyển nhẹ không vỡ layout.

3. absolute

Vẫn chiếm chỗ: Không (nổi lên, các thẻ khác trượt lấp vào)

Tham chiếu vị trí: Thẻ cha/ông gần nhất có position khác static

Cuộn theo trang: Có (cuộn theo thẻ cha)

Use case: Tooltip, popup, nút "X" đóng cửa sổ, icon đè lên ảnh.

4. fixed

Vẫn chiếm chỗ: Không

Tham chiếu vị trí: Khung nhìn trình duyệt (Viewport/Màn hình)

Cuộn theo trang: Không (đứng im 1 chỗ)

Use case: Thanh menu điều hướng luôn nổi (Fixed header), nút "Scroll to top".

5. sticky

Vẫn chiếm chỗ: Có

Tham chiếu vị trí: Kết hợp giữa Viewport và thẻ cha bọc nó

Cuộn theo trang: Có (cuộn tới ngưỡng thì đứng im, cuộn hết thẻ cha thì trôi đi)

Use case: Thanh công cụ bám dính khi cuộn, tiêu đề danh sách bám đỉnh màn hình.

Câu hỏi thêm:

absolute tham chiếu body: Khi không có thẻ cha/ông nào bọc ngoài nó được set position (khác static).

absolute tham chiếu parent: Khi thẻ cha trực tiếp bọc nó được set position (thường là relative).

"nearest positioned ancestor": Trình duyệt dò ngược từ thẻ hiện tại lên trên, đụng thẻ cha/ông ĐẦU TIÊN có position khác static thì lập tức lấy thẻ đó làm lồng tọa độ (bỏ qua các thẻ bọc ngoài cùng).

Câu A2: 

Trường hợp 1: Flexbox cơ bản

Bố cục: 1 hàng ngang, 4 cột có kích thước bằng nhau y hệt.

Trường hợp 2: Flexbox bọc dòng (Wrap) kèm tính toán Margin

Bố cục: 3 hàng, 2 cột (Một lưới 2x3 hoàn hảo).

Trường hợp 3: Flexbox căn chỉnh không gian

Bố cục: 1 hàng ngang với 3 items. Item 1 dính sát lề trái, Item 2 nằm chính giữa, Item 3 dính sát lề phải. Cả 3 item đều được căn lơ lửng ở giữa theo chiều dọc.

Trường hợp 4: CSS Grid phân chia cố định và linh hoạt

Bố cục: 1 hàng ngang chia làm 3 cột. Cột trái và cột phải có chiều rộng cố định, cột giữa phình to lấp đầy khoảng trống. Giữa các cột có rãnh (gap) 20px.

Trường hợp 5: CSS Grid bọc dòng tự động (Auto-placement)

Bố cục: 3 hàng, 3 cột. Hàng 1 có 3 items, Hàng 2 có 3 items, Hàng 3 có 1 item (nằm ở lề trái).

Câu C1:

1. Navigation bar ngang (logo + menu + buttons)

Giải pháp: Flexbox

Giải thích: Thanh điều hướng là một layout 1 chiều (chỉ theo chiều ngang). Flexbox sinh ra để xử lý xuất sắc các trường hợp phân phối khoảng trống dọc theo một trục, ví dụ như đẩy logo sang trái, menu ra giữa và nút bấm sang phải (sử dụng justify-content: space-between hoặc gap).

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

Giải pháp: Grid

Giải thích: Đây là một layout 2 chiều (gồm cả hàng và cột) đòi hỏi sự khắt khe về tỷ lệ. Khi bạn cần cấu trúc lưới cố định (3 cột bằng nhau) mà không quan tâm bên trong có bao nhiêu phần tử (dòng sẽ tự rớt xuống), CSS Grid với lệnh grid-template-columns: repeat(3, 1fr) là lựa chọn hoàn hảo và ngắn gọn nhất.

3. Layout blog: main content + sidebar

Giải pháp: Grid (hoặc Kết hợp)

Giải thích: Đây là dạng bố cục vĩ mô (macro-layout) của trang. Lợi thế của Grid là bạn có thể định nghĩa tỷ lệ giữa phần nội dung chính và thanh bên (ví dụ: grid-template-columns: 3fr 1fr) ngay tại phần tử cha mà không cần can thiệp nhiều vào CSS của các phần tử con. Nếu bên trong thẻ content hay sidebar có các chi tiết nhỏ hơn, bạn có thể kết hợp Flexbox bên trong chúng.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)

Giải pháp: Grid

Giải thích: Mặc dù Flexbox hoàn toàn có thể làm được việc này, nhưng Grid tối ưu và an toàn hơn cho dạng lưới chia cột đều nhau. Nếu nội dung một cột dài hơn các cột khác, Flexbox đôi khi xử lý kích thước cột hơi khó lường. Với Grid (grid-template-columns: repeat(4, 1fr)), 4 cột sẽ luôn được chia không gian bằng nhau một cách tuyệt đối trên màn hình lớn.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

Giải pháp: Flexbox

Giải thích: Bên trong một Card là layout vi mô (micro-layout) và thường đi theo 1 chiều dọc (flex-direction: column). Flexbox giải quyết bài toán "nút dính đáy" cực kỳ thanh lịch. Bạn chỉ cần set phần text ở giữa tự động co giãn (flex-grow: 1) hoặc đặt cho nút bấm thuộc tính margin-top: auto, nút sẽ tự động bị đẩy xuống sát đáy card cho dù đoạn text có ngắn hay dài.

Câu C2: demo debugflexbox.html

Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
Nguyên nhân:
Mặc định trong Flexbox, thuộc tính align-items: stretch làm cho các thẻ .card có cùng chiều cao trên một hàng. Tuy nhiên, nội dung bên trong mỗi card (text, tiêu đề) có độ dài ngắn khác nhau, dẫn đến phần nút .btn bên dưới bị đẩy xuống ở các vị trí không đồng đều do bản thân .card chưa được thiết lập layout để quản lý vị trí các thẻ con của nó.

Code sửa:
Biến chính .card thành một flex container theo chiều dọc (column), sau đó dùng margin-top: auto cho nút .btn. Trình duyệt sẽ tự động gom hết khoảng trống thừa bên trong card đẩy vào phía trên nút, ép nút luôn nằm sát đáy.

Lỗi 2: Item không nằm giữa container ngang & dọc
Nguyên nhân:
Thuộc tính display: flex; chỉ mới kích hoạt môi trường Flexbox. Thuộc tính text-align: center; chỉ có tác dụng căn giữa chữ (text) ở bên trong thẻ .hero-content, chứ không thể can thiệp vào vị trí của bản thân khối .hero-content bên trong container .hero. Thiếu các lệnh căn chỉnh trục dọc và trục ngang của Flexbox.

Code sửa:
Bổ sung justify-content (trục chính ngang) và align-items (trục chéo dọc) vào container cha.

Lỗi 3: Sidebar bị co lại khi content quá dài
Nguyên nhân:
Mặc định của mọi flex item là flex-shrink: 1 (cho phép co lại nếu container không đủ chỗ). Khi thẻ .content chứa quá nhiều nội dung hoặc khi màn hình nhỏ lại, Flexbox sẽ tự động bóp nhỏ thẻ .sidebar để nhường chỗ, bất chấp việc bạn đã set width: 250px.

Code sửa:
Chỉ định cho .sidebar không được phép co lại bằng cách gán flex-shrink: 0.