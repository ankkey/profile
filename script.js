const effectMessages = {
  sky: "Bau troi su thi da duoc bat mode chieu toi mon Toan.",
  steam: "Bep am len: them mot chut mui vi cho cau chuyen.",
  note: "Piano vao nhip. Ban cap nhat truong thanh dang duoc tai ve.",
  shuttle: "Cau long tang toc. Co ve ong noi build nen tang kha chac.",
  page: "Lat trang moi, van la to, chi la o mot toa do khac.",
  riff: "Guitar keu len mot cai. Chiec dan dau tien van o do.",
  game: "Checkpoint da luu. Neu thua thi minh choi lai, nhung lan nay co kinh nghiem.",
  hug: "Buff om ngu kich hoat. Tam trang +20, phong thu cam xuc +15.",
  confetti: "Do vot nhung van la do. Man clutch nay tinh diem.",
  pulse: "Noi that mot chut, roi lai cuoi tiep cho doi bot cang.",
  film: "Man hinh cuoi san sang. Tha video vao la co after-credit scene.",
};

const effectClasses = {
  sky: "sky-pop",
  riff: "riff-pop",
  shuttle: "shuttle-pop",
  pulse: "pulse-pop",
  film: "film-pop",
};

const cursorLight = document.querySelector(".cursor-light");
const spaceHint = document.querySelector("#spaceHint");

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
  window.setTimeout(() => burst.remove(), 900);
}

function triggerSectionEffect(panel = getActiveSection()) {
  if (!panel) return;

  const effect = panel.dataset.effect;
  const effectClass = effectClasses[effect];
  showBurst(effectMessages[effect] || "Hieu ung da kich hoat.");

  if (effectClass) {
    panel.classList.remove(effectClass);
    void panel.offsetWidth;
    panel.classList.add(effectClass);
    window.setTimeout(() => panel.classList.remove(effectClass), 800);
  } else {
    panel.animate(
      [
        { transform: "translateY(0)", filter: "saturate(1)" },
        { transform: "translateY(-6px)", filter: "saturate(1.2)" },
        { transform: "translateY(0)", filter: "saturate(1)" },
      ],
      { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  }
}

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target?.isContentEditable;

  if (event.code === "Space" && !isTyping) {
    event.preventDefault();
    triggerSectionEffect();
  }
});

spaceHint?.addEventListener("click", () => triggerSectionEffect());

window.addEventListener("pointermove", (event) => {
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" },
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".section-panel, .stat-card, .three-panel article").forEach((el) => {
  observer.observe(el);
});
