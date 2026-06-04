# Personal Story Site | Trang Kể Chuyện Tương Tác
Trang nhật ký kể chuyện tương tác (storytelling portfolio) cá nhân được viết bằng ngôi "tớ", sử dụng các công nghệ thuần túy (HTML, Vanilla CSS, Vanilla JS) mang lại hiệu ứng mượt mà và giao diện hiện đại.
## Các Tính Năng Cao Cấp Mới
1. **Điều Hướng Spacebar Tuần Tự (Space Navigation)**:
   - Nhấn phím `Space` hoặc click nút gợi ý ở đầu trang sẽ tự động cuộn trang (smooth scroll) đưa phần thông tin tiếp theo vào giữa màn hình.
1. **Điều Hướng Cuộn Chuột Tự Động (Scroll-Reveal System)**:
   - Thay thế cho nút Spacebar, hiệu ứng giờ đây tự động kích hoạt khi người dùng cuộn chuột. 
   - Phần thông tin/thẻ nào cuộn tới vị trí giữa màn hình sẽ tự động được chọn, kích hoạt các hiệu ứng hình ảnh riêng và hiển thị thông báo ở chân trang.
2. **Hiệu Ứng Tiêu Điểm Làm Mờ Xung Quanh (Focus & Dimming)**:
   - Khi một phần thông tin được chọn, nó sẽ được áp dụng class `.is-focused` (phóng to nhẹ, phát sáng viền).
   - Nếu phần đó nằm trong một lưới (grid) chứa nhiều thẻ con (như phần Dấu mốc hay Sở thích), các thẻ xung quanh sẽ tự động mờ đi (sibling dimming) để hướng sự chú ý của người xem vào thẻ hiện tại.
3. **11 Hiệu Ứng Hình Ảnh Độc Đáo (Interactive Pop Effects)**:
   - Mỗi phần thông tin có một hoạt ảnh riêng biệt (phóng to mặt trời, nghiêng núi, lắc vợt cầu lông, lật ảnh album, bấm phím piano, giật khung hình phim cổ điển...).
4. **Hệ Thống Hạt Bay Sống Động (Particle Systems)**:
   - Các hiệu ứng liên quan đến khói (`steam`), nốt nhạc (`note`), ôm ngủ (`hug`), và chúc mừng (`confetti`) sẽ tự động bắn ra các hạt biểu tượng tương ứng từ chân thẻ và bay lên đầy nghệ thuật.
3. **11 Hiệu Ứng Hình Ảnh Độc Đáo & Hệ Thống Hạt Bay**:
   - Mỗi phần thông tin có một hoạt ảnh riêng biệt kết hợp với hiệu ứng bắn các hạt biểu tượng tương ứng (nốt nhạc, hơi ấm khói, trái tim/ngủ, pháo hoa giấy) bay lên đầy nghệ thuật.
4. **Tích Hợp Ảnh Cá Nhân**:
   - Hình ảnh bầu trời của bạn (`sky.jpg`) được hiển thị tại màn hình chào đầu trang (Hero background).
   - Trong album ảnh kỷ niệm (Dòng đời), các tệp ảnh thực tế `me.jpg` (ảnh che mặt trước gương) và `sky.jpg` đã được lắp ráp trực tiếp vào các tấm ảnh polaroid để thay thế cho các chữ giữ chỗ mặc định.
## Hướng Dẫn Sử Dụng & Deploy
1. **Xem Trực Tiếp**:
   - Mở tệp `index.html` bằng bất kỳ trình duyệt nào.
   - Mở tệp `index.html` bằng bất kỳ trình duyệt nào để xem trực tiếp giao diện.
2. **Cấu Hình Video Cá Nhân**:
   - Tạo thư mục `videos` nằm cùng cấp với tệp `index.html`.
   - Thêm 3 tệp video của bạn và đổi tên lần lượt thành:
     - `videos/video-1.mp4`
     - `videos/video-2.mp4`
     - `videos/video-3.mp4`
3. **Đưa Lên GitHub Pages**:
   - Đưa toàn bộ thư mục này lên một repository GitHub mới.
   - Truy cập vào **Settings -> Pages** trong repo đó, chọn nhánh để deploy (ví dụ nhánh `main`) ở thư mục gốc `/root`. GitHub sẽ tự động xây dựng trang web của bạn sau vài phút.
## Tùy Biến Giao Diện & Hiệu Ứng
- **Nội dung thông báo**: Nằm trong đối tượng `effectMessages` tại `script.js`.
- **Ánh xạ hiệu ứng**: Được khai báo trong đối tượng `effectClasses` tại `script.js`.
- **Hoạt ảnh CSS**: Được viết chi tiết trong `style.css` (tìm các class có hậu tố `-pop` và hoạt ảnh `@keyframes`).
- **Thêm thẻ mới**: Chỉ cần thêm thuộc tính `data-effect="tên_hiệu_ứng"` vào thẻ HTML tương ứng.
