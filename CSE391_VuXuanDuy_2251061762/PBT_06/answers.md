Câu A1:

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
| :---       | :---    | :---          | :---    |
| Số cột     | 1       | 2             | 4       |

1. col-md-6 nghĩa là gì?
Nghĩa là khi chiều rộng màn hình từ kích thước trung bình (md - Medium, ≥ 768px) trở lên, phần tử này sẽ chiếm 6/12 cột (tức là 50% chiều rộng của thẻ cha).

2. Tại sao không cần viết col-sm-12?
Vì Bootstrap hoạt động theo cơ chế Mobile-First (Ưu tiên thiết bị di động).
Khi bạn viết col-12, Bootstrap ngầm hiểu là: "Bắt đầu từ màn hình nhỏ nhất (0px), hãy chiếm 12 cột. Và CỨ GIỮ NGUYÊN NHƯ VẬY cho đến khi gặp một lệnh breakpoint khác lớn hơn chặn lại".
Vì vậy, giá trị 12 cột này sẽ tự động được kế thừa qua mốc sm (≥ 576px) và chỉ bị thay đổi khi đụng phải mốc md (≥ 768px) với lệnh col-md-6. Việc viết col-sm-12 là thừa thãi và không cần thiết.