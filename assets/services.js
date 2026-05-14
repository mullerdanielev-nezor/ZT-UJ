// Tabs
function showPanel(idx) {
  document.querySelectorAll('.svc-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
  document.querySelectorAll('.svc-tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
}
// FAQ
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

document.addEventListener('DOMContentLoaded', function () {
  // Close mobile menu when a link is clicked
  const menu = document.querySelector('.mobile-menu, .mob-menu');
  if (menu) menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // URL tab param
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab');
  if (tab !== null) showPanel(parseInt(tab));
});

// Szolgáltatás rotátor (hero média)
(function () {
  const SERVICES = [
    { name: 'Vízszerelés', grad: 'linear-gradient(135deg,#1a5fa8,#0d3a78)', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c-3.5 5-7 8.5-7 12.5a7 7 0 0014 0c0-4-3.5-7.5-7-12.5z"/><path d="M9 14c0 1.5 1 3 3 3" opacity=".6"/></svg>' },
    { name: 'Fűtésszerelés', grad: 'linear-gradient(135deg,#cc1f1f,#7a1212)', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 002.5 2.5z"/></svg>' },
    { name: 'Gázszerelés', grad: 'linear-gradient(135deg,#0d3a78,#1a5fa8)', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/></svg>' },
    { name: 'Klímaszerelés', grad: 'linear-gradient(135deg,#2d7dd2,#1a5fa8)', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93M7 5l5 3 5-3M7 19l5-3 5 3M5 7l3 5-3 5M19 7l-3 5 3 5"/></svg>' }
  ];
  let idx = 0, timer = null;
  function render(i) {
    const rot = document.getElementById('svc-rotator');
    const ic = document.getElementById('svc-rotator-icon');
    const nm = document.getElementById('svc-rotator-name');
    const dots = document.getElementById('svc-rotator-dots');
    if (!rot || !ic || !nm) return;
    const s = SERVICES[i];
    ic.classList.add('swap'); nm.classList.add('swap');
    setTimeout(function () {
      rot.style.background = s.grad;
      ic.innerHTML = s.svg;
      nm.textContent = s.name;
      ic.classList.remove('swap'); nm.classList.remove('swap');
    }, 350);
    if (dots) Array.from(dots.children).forEach(function (b, k) { b.classList.toggle('active', k === i); });
    idx = i;
  }
  function next() { render((idx + 1) % SERVICES.length); }
  function start() { clearInterval(timer); timer = setInterval(next, 2000); }
  document.addEventListener('DOMContentLoaded', function () {
    const dots = document.getElementById('svc-rotator-dots');
    if (!document.getElementById('svc-rotator')) return;
    if (dots) SERVICES.forEach(function (_, i) {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Szolgáltatás ' + (i + 1));
      b.addEventListener('click', function () { render(i); start(); });
      dots.appendChild(b);
    });
    render(0);
    start();
  });
})();
