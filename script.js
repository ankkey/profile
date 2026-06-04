const effectMessages = {
  sky: "Bầu trời sử thi đã được bật mode chiều tối môn Toán.",
  steam: "Bếp ấm lên: thêm một chút mùi vị cho câu chuyện.",
  note: "Piano vào nhịp. Bản cập nhật trưởng thành đang được tải về.",
  shuttle: "Cầu lông tăng tốc. Có vẻ ông nội build nền tảng khá chắc.",
  profile: "Quãng thời gian tuổi thơ tự lập và những cột mốc rèn luyện đầu đời.",
  page: "Lật trang mới, vẫn là tớ, chỉ là ở một tọa độ khác.",
  riff: "Guitar kêu lên một cái. Chiếc đàn đầu tiên vẫn ở đó.",
  game: "Checkpoint đã lưu. Nếu thua thì mình chơi lại, nhưng lần này có kinh nghiệm.",
  hug: "Buff ôm ngủ kích hoạt. Tâm trạng +20, phòng thủ cảm xúc +15.",
  interests: "Những sở thích cá nhân giúp tớ nạp lại năng lượng tích cực.",
  confetti: "Đỗ vớt nhưng vẫn là đỗ. Màn clutch này tính điểm.",
  pulse: "Nói thật một chút, rồi lại cười tiếp cho đời bớt căng.",
  film: "Màn hình cuối sẵn sàng. Thả video vào là có after-credit scene.",
};
const effectClasses = {
  sky: "sky-pop",
  steam: "steam-pop",
  note: "note-pop",
  shuttle: "shuttle-pop",
  profile: "profile-pop",
  page: "page-pop",
  riff: "riff-pop",
  game: "game-pop",
  hug: "hug-pop",
  interests: "interests-pop",
  confetti: "confetti-pop",
  pulse: "pulse-pop",
  film: "film-pop",
  panel.classList.add("is-focused");
  // Spawn particles if applicable
  if (["steam", "note", "hug", "confetti"].includes(effect)) {
    createParticles(effect, panel);
  if (["profile", "interests", "confetti"].includes(effect)) {
    createParticles(effect === "profile" ? "note" : effect === "interests" ? "hug" : "confetti", panel);
  }
  // Trigger CSS pop transitions
  observer.observe(el);
});
