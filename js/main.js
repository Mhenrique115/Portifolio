/* =============================================
   MATHEUS.DEV — Portfolio JavaScript
   ============================================= */

// ─── THEME TOGGLE ────────────────────────────

let isDark = true;

function toggleTheme() {
  isDark = !isDark;
  document.getElementById('body').classList.toggle('dark', isDark);
  document.getElementById('theme-btn').textContent = isDark ? '[ light ]' : '[ dark ]';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  // Redraw matrix with new theme color
  initMatrix();
}

// Restore saved theme or fallback to dark
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    isDark = false;
    document.getElementById('body').classList.remove('dark');
    document.getElementById('theme-btn').textContent = '[ dark ]';
  } else {
    isDark = true;
    document.getElementById('body').classList.add('dark');
    document.getElementById('theme-btn').textContent = '[ light ]';
  }
})();

// ─── MOBILE MENU ─────────────────────────────

function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.remove('open');
}

// ─── MATRIX RAIN ─────────────────────────────

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

const snippets = [
  'export const', '=> {}', 'async', 'await', 'const ',
  'interface', 'type ', 'return', 'if (auth)', 'jwt.sign',
  'prisma.', 'findMany', 'T extends', 'Promise<', 'void',
  'boolean', 'string', 'number', 'null', 'undefined',
  'try {', 'catch (e)', 'middleware', 'router.get', 'res.json',
  'req.body', 'import {', "from '", '@Injectable', 'class ',
  'new ', 'delete ', '[]', '{}', '()', '||', '&&',
  '===', '!==', '...spread', '?.', '??', 'console.log',
  'SELECT *', 'WHERE id =', 'JOIN', 'ORDER BY', 'docker run',
  'git commit', 'npm install', 'process.env', 'HTTP 200',
  'Bearer ', 'refresh_token', 'bcrypt.hash', 'zod.parse',
  'public class', 'System.out.println', 'static void main',
  'String[] args', 'import java.', 'new ArrayList', 'HashMap<',
  'extends', 'implements', 'throws', 'Scanner sc', 'final',
  'private', 'protected', 'synchronized'
];

let drops = [];

function initMatrix() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drops = [];

  const colors = isDark
    ? ['rgba(204,153,205,0.85)', 'rgba(126,198,153,0.85)', 'rgba(232,197,104,0.85)', 'rgba(140,140,140,0.75)']
    : ['rgba(0,51,179,0.95)', 'rgba(6,125,23,0.95)', 'rgba(110,63,154,0.95)', 'rgba(140,140,140,0.75)'];

  const cols = Math.floor(canvas.width / 32);
  for (let i = 0; i < cols; i++) {
    drops.push({
      x:     i * 32 + Math.random() * 12,
      y:     Math.random() * -canvas.height,
      speed: 0.65 + Math.random() * 1.05,
      word:  snippets[Math.floor(Math.random() * snippets.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    });
    if (Math.random() < 0.45) {
      drops.push({
        x:     i * 32 + Math.random() * 12,
        y:     Math.random() * -canvas.height,
        speed: 0.65 + Math.random() * 1.05,
        word:  snippets[Math.floor(Math.random() * snippets.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    if (Math.random() < 0.15) {
      drops.push({
        x:     i * 32 + Math.random() * 12,
        y:     Math.random() * -canvas.height,
        speed: 0.65 + Math.random() * 1.05,
        word:  snippets[Math.floor(Math.random() * snippets.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }
}

function drawMatrix() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px JetBrains Mono, monospace';
  ctx.textBaseline = 'top';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.12)';
  ctx.shadowBlur = 0.5;

  drops.forEach((d) => {
    ctx.fillStyle = d.color;
    ctx.fillText(d.word, d.x, d.y);
    d.y += d.speed;
    if (d.y > canvas.height + 20) {
      d.y    = -20;
      d.word = snippets[Math.floor(Math.random() * snippets.length)];
      d.speed = 0.65 + Math.random() * 1.05;
      d.color = isDark
        ? ['rgba(204,153,205,0.85)', 'rgba(126,198,153,0.85)', 'rgba(232,197,104,0.85)', 'rgba(140,140,140,0.75)'][Math.floor(Math.random() * 4)]
        : ['rgba(0,51,179,0.95)', 'rgba(6,125,23,0.95)', 'rgba(110,63,154,0.95)', 'rgba(140,140,140,0.75)'][Math.floor(Math.random() * 4)];
    }
  });
}

initMatrix();
window.addEventListener('resize', initMatrix);
setInterval(drawMatrix, 45);

// ─── SMOOTH SCROLL ───────────────────────────

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV HIGHLIGHT ────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav#nav-desktop a');

function onScroll() {
  let current = '';
  sections.forEach((sec) => {
    const top = sec.offsetTop - 80;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--accent)'
      : '';
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

// ─── SCROLL REVEAL ───────────────────────────

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.tl-item, .stack-card, .proj-card, .contact-link').forEach((el) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
