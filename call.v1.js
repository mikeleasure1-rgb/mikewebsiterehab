(function () {
  var NUM = '703-594-1785', TEL = 'tel:+17035941785';
  var desktop = window.matchMedia('(hover: hover) and (pointer: fine)');
  var base = document.currentScript.src.replace(/call\.v1\.js.*$/, '');
  var pop = null, owner = null;

  function close() {
    if (!pop) return;
    var p = pop; pop = null; owner = null;
    p.classList.remove('open');
    setTimeout(function () { p.remove(); }, 180);
  }
  function place(el) {
    var r = el.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var left = Math.min(Math.max(12, r.left + r.width / 2 - w / 2), window.innerWidth - w - 12);
    var top = r.bottom + 10;
    if (top + h > window.innerHeight - 12) top = r.top - h - 10;
    pop.style.left = left + 'px'; pop.style.top = Math.max(12, top) + 'px';
  }
  function swap(el) {
    if (el.classList.contains('is-number')) return;
    el.classList.add('num-swap', 'fading');
    setTimeout(function () {
      el.textContent = NUM;
      el.classList.add('is-number'); el.classList.remove('fading');
      el.setAttribute('aria-label', 'Call Michael at ' + NUM);
    }, 180);
  }
  function open(el) {
    close();
    owner = el;
    pop = document.createElement('div');
    pop.className = 'call-pop'; pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', 'Call Michael'); pop.tabIndex = -1;
    pop.innerHTML =
      '<button class="cp-close" aria-label="Close">×</button>' +
      '<p class="cp-eyebrow">Call or text Michael</p>' +
      '<p class="cp-num"><a href="' + TEL + '">' + NUM + '</a></p>' +
      '<div class="cp-row"><button class="cp-copy" type="button">Copy number</button></div>' +
      '<div class="cp-qr"><img src="' + base + 'assets/call-qr.v1.svg" alt="QR code to call ' + NUM + '">' +
      '<p><strong>On your computer?</strong>Point your phone camera here to call.</p></div>';
    document.body.appendChild(pop);
    place(el);
    requestAnimationFrame(function () { pop && pop.classList.add('open'); });
    pop.querySelector('.cp-close').onclick = close;
    var btn = pop.querySelector('.cp-copy');
    btn.onclick = function () {
      var done = function () { btn.textContent = 'Copied ✓'; btn.classList.add('done'); };
      if (navigator.clipboard) navigator.clipboard.writeText(NUM).then(done, done); else done();
    };
    btn.focus({ preventScroll: true });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="' + TEL + '"]');
    if (a && desktop.matches && !(pop && pop.contains(a))) {
      e.preventDefault();
      if (owner === a) { close(); return; }
      swap(a); open(a);
      return;
    }
    if (pop && !pop.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', function () { if (pop && owner) place(owner); });
  window.addEventListener('scroll', function () { if (pop && owner) place(owner); }, { passive: true });

  // Screenshot helper: ?call=1 opens the card on the first call button
  if (/[?&]call=1/.test(location.search)) {
    window.addEventListener('load', function () {
      var a = document.querySelector('a[href="' + TEL + '"].hero-cta, main a[href="' + TEL + '"]');
      if (a) { swap(a); open(a); }
    });
  }
})();
