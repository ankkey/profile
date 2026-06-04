# Personal Story Site
# Personal Story Site | Trang Kể Chuyện Tương Tác
Trang gioi thieu ca nhan dang storytelling, viet bang ngoi "to", co hieu ung khi nhan `Space`.
Trang nhật ký kể chuyện tương tác (storytelling portfolio) cá nhân được viết bằng ngôi "tớ", sử dụng các công nghệ thuần túy (HTML, Vanilla CSS, Vanilla JS) mang lại hiệu ứng mượt mà và giao diện hiện đại.
## Cach dung
## Các Tính Năng Cao Cấp Mới
1. Mo `index.html` bang trinh duyet de xem truc tiep.
2. Dua toan bo thu muc nay len GitHub.
3. Neu dung GitHub Pages, dat `index.html`, `style.css`, `script.js` o root cua repo hoac trong nhanh Pages.
4. Tao thu muc `videos` cung cap voi `index.html`, sau do them 3 video:
   - `videos/video-1.mp4`
   - `videos/video-2.mp4`
   - `videos/video-3.mp4`
1. **Điều Hướng Spacebar Tuần Tự (Space Navigation)**:
   - Nhấn phím `Space` hoặc click nút gợi ý ở đầu trang sẽ tự động cuộn trang (smooth scroll) đưa phần thông tin tiếp theo vào giữa màn hình.
2. **Hiệu Ứng Tiêu Điểm Làm Mờ Xung Quanh (Focus & Dimming)**:
   - Khi một phần thông tin được chọn, nó sẽ được áp dụng class `.is-focused` (phóng to nhẹ, phát sáng viền).
   - Nếu phần đó nằm trong một lưới (grid) chứa nhiều thẻ con (như phần Dấu mốc hay Sở thích), các thẻ xung quanh sẽ tự động mờ đi (sibling dimming) để hướng sự chú ý của người xem vào thẻ hiện tại.
3. **11 Hiệu Ứng Hình Ảnh Độc Đáo (Interactive Pop Effects)**:
   - Mỗi phần thông tin có một hoạt ảnh riêng biệt (phóng to mặt trời, nghiêng núi, lắc vợt cầu lông, lật ảnh album, bấm phím piano, giật khung hình phim cổ điển...).
4. **Hệ Thống Hạt Bay Sống Động (Particle Systems)**:
   - Các hiệu ứng liên quan đến khói (`steam`), nốt nhạc (`note`), ôm ngủ (`hug`), và chúc mừng (`confetti`) sẽ tự động bắn ra các hạt biểu tượng tương ứng từ chân thẻ và bay lên đầy nghệ thuật.
## Cho Antigravity chinh hieu ung
## Hướng Dẫn Sử Dụng & Deploy
- Noi dung hieu ung nam trong `script.js`.
- Tin nhan hien khi nhan `Space` nam o object `effectMessages`.
- Class CSS rieng cho tung hieu ung nam o object `effectClasses`.
- Moi khoi noi dung co `data-effect`, vi du:
1. **Xem Trực Tiếp**:
   - Mở tệp `index.html` bằng bất kỳ trình duyệt nào.
2. **Cấu Hình Video Cá Nhân**:
   - Tạo thư mục `videos` nằm cùng cấp với tệp `index.html`.
   - Thêm 3 tệp video của bạn và đổi tên lần lượt thành:
     - `videos/video-1.mp4`
     - `videos/video-2.mp4`
     - `videos/video-3.mp4`
3. **Đưa Lên GitHub Pages**:
   - Đưa toàn bộ thư mục này lên một repository GitHub mới.
   - Truy cập vào **Settings -> Pages** trong repo đó, chọn nhánh để deploy (ví dụ nhánh `main`) ở thư mục gốc `/root`. GitHub sẽ tự động xây dựng trang web của bạn sau vài phút.
```html
<section class="story section-panel" data-effect="riff">
```
## Tùy Biến Giao Diện & Hiệu Ứng
Doi `data-effect` hoac them key moi vao `effectMessages`, `effectClasses`, roi viet animation trong `style.css`.
- **Nội dung thông báo**: Nằm trong đối tượng `effectMessages` tại `script.js`.
- **Ánh xạ hiệu ứng**: Được khai báo trong đối tượng `effectClasses` tại `script.js`.
- **Hoạt ảnh CSS**: Được viết chi tiết trong `style.css` (tìm các class có hậu tố `-pop` và hoạt ảnh `@keyframes`).
- **Thêm thẻ mới**: Chỉ cần thêm thuộc tính `data-effect="tên_hiệu_ứng"` vào thẻ HTML tương ứng.
