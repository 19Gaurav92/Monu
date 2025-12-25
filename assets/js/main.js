/* ===============================
   Typing Effect
================================ */
const text = "A strategist. A leader. Calm in chaos.";
let i = 0;

const typingEl = document.getElementById("typing");
const typingInterval = setInterval(() => {
  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
  } else {
    clearInterval(typingInterval);
  }
}, 60);

/* ===============================
   Background Music (NO BUTTON)
   Starts muted, unmutes on interaction
================================ */
const music = document.getElementById("bgMusic");

const startMusic = () => {
  music.muted = false;
  music.volume = 0.4;
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("scroll", startMusic);
  document.removeEventListener("keydown", startMusic);
};

music.play().catch(() => {});
document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("keydown", startMusic);

/* ===============================
   Future Prediction Explorer
================================ */
const predictions = {
  month: "A short-term opportunity will test decision-making. Calm judgment brings progress.",
  six: "Growing responsibility and visibility. Leadership sharpens through pressure.",
  year: "A defining year marked by authority, stability, and strategic wins.",
  five: "Transition into senior leadership with long-term influence and legacy building."
};

document.getElementById("timeline").addEventListener("change", e => {
  document.getElementById("prediction").innerText =
    predictions[e.target.value] || "";
});

/* ===============================
   Konami Code Easter Egg
================================ */
let keys = [];
const konami =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

window.addEventListener("keydown", e => {
  keys.push(e.key);
  if (keys.join("").includes(konami)) {
    alert("🎮 Legendary Mode Activated");
    keys = [];
  }
});

/* ===============================
   Star Map Animation
================================ */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += 0.15;
    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(animateStars);
}
animateStars();

