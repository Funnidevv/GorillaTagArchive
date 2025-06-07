const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
let numStars = 200;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
    alpha: Math.random(),
    delta: Math.random() * 0.02
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}

animateStars();
