(function () {
  var btns = document.querySelectorAll(".seg-btn");
  var views = { before: document.getElementById("view-before"), after: document.getElementById("view-after") };
  var caps = { before: document.getElementById("cap-before"), after: document.getElementById("cap-after") };
  var current = "before";

  function show(v) {
    current = v;
    btns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.view === v)); });
    Object.keys(views).forEach(function (k) {
      views[k].hidden = k !== v;
      caps[k].hidden = k !== v;
    });
    if (v === "after") views.after.scrollTop = 0;
  }
  btns.forEach(function (b) { b.addEventListener("click", function () { show(b.dataset.view); }); });
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { show(b.dataset.go); });
  });

  if (location.hash === "#after") show("after");

  // Swipe left/right on the phone screen
  var screen = document.querySelector(".screen"), x0 = null, y0 = null;
  screen.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  screen.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(dx < 0 ? "after" : "before");
    x0 = null;
  }, { passive: true });

  // Sticky ask only after they've actually seen the After view
  var sticky = document.getElementById("sticky");
  function reveal() {
    sticky.classList.add("on");
    sticky.removeAttribute("aria-hidden");
    sticky.removeAttribute("tabindex");
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { reveal(); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(views.after); // hidden until After is toggled, so it only fires once they've seen it
  } else {
    btns[1].addEventListener("click", reveal);
  }
})();
