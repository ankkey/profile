const effectMessages = {
  sky: "Bầu trời sử thi đã được bật mode chiều tối môn Toán.",
  profile: "Quãng thời gian tuổi thơ tự lập và những cột mốc rèn luyện đầu đời.",
  page: "Lật trang mới, vẫn là tớ, chỉ là ở một tọa độ khác.",
  riff: "Guitar kêu lên một cái. Chiếc đàn đầu tiên vẫn ở đó.",
  interests: "Những sở thích cá nhân giúp tớ nạp lại năng lượng tích cực.",
  confetti: "Đỗ vớt nhưng vẫn là đỗ. Màn clutch này tính điểm.",
  pulse: "Nói thật một chút, rồi lại cười tiếp cho đời bớt căng.",
  film: "Màn hình cuối sẵn sàng. Thả video vào là có after-credit scene.",
};
const effectClasses = {
  sky: "sky-pop",
  profile: "profile-pop",
  page: "page-pop",
  riff: "riff-pop",
  interests: "interests-pop",
  confetti: "confetti-pop",
  pulse: "pulse-pop",
  film: "film-pop",
};
const cursorLight = document.querySelector(".cursor-light");
const scrollHint = document.querySelector("#scrollHint");
// Ensure cursor light is hidden initially
if (cursorLight) {
  cursorLight.style.opacity = "0";
  cursorLight.style.transition = "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.1s ease-out";
}
function getActiveSection() {
  const panels = [...document.querySelectorAll("[data-effect]")];
  const viewportMiddle = window.innerHeight / 2;
  return panels.reduce((closest, panel) => {
    const rect = panel.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
    if (!closest || distance < closest.distance) {
      return { panel, distance };
    }
    return closest;
  }, null)?.panel;
}
function showBurst(message) {
  const oldBurst = document.querySelector(".effect-burst");
  oldBurst?.remove();
  const burst = document.createElement("div");
  burst.className = "effect-burst";
  burst.textContent = message;
  document.body.appendChild(burst);
  
  // Clean fade out handled by CSS
  window.setTimeout(() => burst.remove(), 1200);
}
function createParticles(type, element) {
  const count = type === "confetti" ? 35 : 12;
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = `particle particle-${type}`;
    
    let x, y;
    if (type === "confetti") {
      // Spawn from center and burst outwards
      x = rect.width / 2;
      y = rect.height / 2;
      const angle = Math.random() * Math.PI * 2;
      const velocity = 60 + Math.random() * 120;
      particle.style.setProperty("--dx", `${Math.cos(angle) * velocity}px`);
      particle.style.setProperty("--dy", `${Math.sin(angle) * velocity - 60}px`);
    } else {
      // Float upwards from bottom
      x = Math.random() * rect.width;
      y = rect.height - 15;
      particle.style.setProperty("--dx", `${(Math.random() - 0.5) * 50}px`);
      particle.style.setProperty("--dy", `-${60 + Math.random() * 90}px`);
    }
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    // Add visual content
    if (type === "note") {
      const notes = ["🎵", "🎶", "🎹", "♩", "♪", "♫"];
      particle.textContent = notes[Math.floor(Math.random() * notes.length)];
    } else if (type === "hug") {
      const hugs = ["💖", "✨", "💤", "🧸", "🌸", "🤍"];
      particle.textContent = hugs[Math.floor(Math.random() * hugs.length)];
    } else if (type === "steam") {
      const size = 8 + Math.random() * 16;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = "rgba(255, 255, 255, 0.4)";
      particle.style.borderRadius = "50%";
      particle.style.filter = "blur(3px)";
    } else if (type === "confetti") {
      const colors = ["#ef6f61", "#e5aa3f", "#4267ac", "#2f6f5e", "#6f4a7c"];
      const size = 6 + Math.random() * 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    }
    element.appendChild(particle);
    
    particle.addEventListener("animationend", () => particle.remove());
    setTimeout(() => particle.remove(), 2500); // Fallback cleanup
  }
}
function triggerSectionEffect(panel = getActiveSection()) {
  if (!panel) return;
  const effect = panel.dataset.effect;
  const effectClass = effectClasses[effect];
  
  // Trigger text burst
  showBurst(effectMessages[effect] || "Hiệu ứng đã kích hoạt.");
  // Remove focus class from all elements and add to current
  document.querySelectorAll("[data-effect]").forEach(el => el.classList.remove("is-focused"));
  panel.classList.add("is-focused");
  // Spawn particles if applicable
  if (["profile", "interests", "confetti"].includes(effect)) {
    createParticles(effect === "profile" ? "note" : effect === "interests" ? "hug" : "confetti", panel);
  }
  // Trigger CSS pop transitions
  if (effectClass) {
    panel.classList.remove(effectClass);
    void panel.offsetWidth; // Trigger reflow
    panel.classList.add(effectClass);
    window.setTimeout(() => panel.classList.remove(effectClass), 1000);
  } else {
    // Fallback animation
    panel.animate(
      [
        { transform: "translateY(0) scale(1)", filter: "brightness(1)" },
        { transform: "translateY(-8px) scale(1.01)", filter: "brightness(1.05)" },
        { transform: "translateY(0) scale(1)", filter: "brightness(1)" },
      ],
      { duration: 650, easing: "cubic-bezier(.25,.8,.25,1)" },
    );
  }
}
// Function to navigate sequentially to the next element
function navigateToNext() {
  const elements = [...document.querySelectorAll("[data-effect]")];
  if (elements.length === 0) return;
  const active = getActiveSection();
  let nextIndex = 0;
  
  if (active) {
    const currentIndex = elements.indexOf(active);
    nextIndex = (currentIndex + 1) % elements.length;
  }
  const nextElement = elements[nextIndex];
  
  // Trigger transition scroll
  nextElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  // Apply visual focus and active animations immediately
  lastActiveSection = nextElement;
  triggerSectionEffect(nextElement);
}
// Scroll Reveal Logic (trigger effect when element crosses center of screen)
let lastActiveSection = null;
let isScrolling = false;
function checkActiveSectionOnScroll() {
  const active = getActiveSection();
  if (active && active !== lastActiveSection) {
    lastActiveSection = active;
    triggerSectionEffect(active);
  }
  isScrolling = false;
}
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(checkActiveSectionOnScroll);
    isScrolling = true;
  }
});
// Run initial check on load
checkActiveSectionOnScroll();
// Handle Hint button click
scrollHint?.addEventListener("click", () => {
  navigateToNext();
});
// Update cursor-light on pointer move
window.addEventListener("pointermove", (event) => {
  if (cursorLight) {
    if (cursorLight.style.opacity === "0") {
      cursorLight.style.opacity = "1";
    }
    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
  }
});
// IntersectionObserver for initial load reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(32px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 800, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" },
        );
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".section-panel, .stat-card, .three-panel article").forEach((el) => {
document.querySelectorAll(".reveal-init").forEach((el) => {
  observer.observe(el);
});
