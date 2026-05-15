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

