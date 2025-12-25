
// Typing effect
const text = "A strategist. A leader. Calm in chaos.";
let i = 0;
setInterval(() => {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
  }
}, 60);

// Music toggle
const music = document.getElementById("bgMusic");
document.getElementById("musicToggle").onclick = () => {
  music.paused ? music.play() : music.pause();
};

// Konami Code Easter Egg
let keys = [];
const konami = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
window.addEventListener("keydown", e => {
  keys.push(e.key);
  if (keys.join("").includes(konami)) {
    alert("🎮 Secret Unlocked: Legendary Mode Activated");
    keys = [];
  }
});

// Star map animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = Array.from({length: 200}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*1.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fill();
    s.y += 0.2;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
