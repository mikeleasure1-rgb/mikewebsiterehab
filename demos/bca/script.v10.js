(function () {
  var toast = document.querySelector(".toast");
  var timer;
  function showToast() {
    if (!toast || document.documentElement.classList.contains("shot")) return;
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add("on"); });
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove("on");
      setTimeout(function () { toast.hidden = true; }, 250);
    }, 3200);
  }
  document.querySelectorAll(".demo-call").forEach(function (b) {
    b.addEventListener("click", showToast);
  });

  var chip = document.querySelector(".why-chip");
  var why = document.getElementById("why");
  if (chip && why) {
    chip.addEventListener("click", function () {
      var open = chip.getAttribute("aria-expanded") === "true";
      chip.setAttribute("aria-expanded", String(!open));
      why.hidden = open;
    });
  }

  var form = document.querySelector(".lead");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = form.querySelector(".form-done");
      if (done) { done.hidden = false; done.focus && done.setAttribute("tabindex", "-1"); done.focus(); }
    });
  }
})();
