// ZT Épületgépészet - shared scripts (loader + hamburger + reveal observer)
window.addEventListener('load', function () {
  setTimeout(function () {
    var l = document.getElementById('zt-loader');
    if (l) l.classList.add('hide');
  }, 250);
  setTimeout(function () {
    var l = document.getElementById('zt-loader');
    if (l) l.remove();
  }, 700);
});

// Hamburger menu toggle (works for both .mob-menu and .mobile-menu)
document.addEventListener('DOMContentLoaded', function () {
  var hbtn = document.querySelector('.hamburger');
  if (!hbtn) return;
  hbtn.addEventListener('click', function () {
    var menu = document.querySelector('.mob-menu, .mobile-menu');
    if (!menu) return;
    menu.classList.toggle('open');
    var s = hbtn.querySelectorAll('span');
    if (s.length >= 3) {
      if (menu.classList.contains('open')) {
        s[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        s[1].style.opacity = '0';
        s[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        s[0].style.transform = '';
        s[1].style.opacity = '';
        s[2].style.transform = '';
      }
    }
  });
});

// Shared helper used by some inline onclick handlers
function closeMob() {
  var menu = document.querySelector('.mob-menu, .mobile-menu');
  if (menu) menu.classList.remove('open');
  var hbtn = document.querySelector('.hamburger');
  if (hbtn) {
    var s = hbtn.querySelectorAll('span');
    if (s.length >= 3) {
      s[0].style.transform = '';
      s[1].style.opacity = '';
      s[2].style.transform = '';
    }
  }
}

// Hide floating call button when footer is in viewport
document.addEventListener('DOMContentLoaded', function () {
  var footer = document.querySelector('footer');
  if (!footer || !('IntersectionObserver' in window)) return;
  var o = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      document.body.classList.toggle('zt-footer-visible', e.isIntersecting);
    });
  }, { rootMargin: '0px 0px -10px 0px' });
  o.observe(footer);
});

// Cookie consent banner
document.addEventListener('DOMContentLoaded', function () {
  try {
    if (localStorage.getItem('zt-cookie') === 'accepted' || localStorage.getItem('zt-cookie') === 'rejected') return;
  } catch (e) { /* localStorage blocked, still show banner */ }
  var banner = document.createElement('div');
  banner.id = 'zt-cookie';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Süti tájékoztató');
  banner.innerHTML =
    '<p>Az oldal sütiket használ a működéshez és a látogatottság méréséhez. A részletekről az <a href="aszf.html#sutik">ÁSZF / adatkezelési tájékoztató</a> oldalon olvashat.</p>' +
    '<div id="zt-cookie-actions">' +
      '<button class="zt-reject" type="button">Csak a szükséges</button>' +
      '<button class="zt-accept" type="button">Elfogadom</button>' +
    '</div>';
  document.body.appendChild(banner);
  // Show with transition
  requestAnimationFrame(function () { banner.classList.add('show'); });
  function dismiss(value) {
    try { localStorage.setItem('zt-cookie', value); } catch (e) {}
    banner.classList.remove('show');
    setTimeout(function () { banner.remove(); }, 400);
  }
  banner.querySelector('.zt-accept').addEventListener('click', function () { dismiss('accepted'); });
  banner.querySelector('.zt-reject').addEventListener('click', function () { dismiss('rejected'); });
});

// Shared reveal-on-scroll observer
document.addEventListener('DOMContentLoaded', function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
});
