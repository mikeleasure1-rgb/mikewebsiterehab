(function(){
  if (!location.hash) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function go(){ var el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView({behavior:'auto', block:'start'}); }
  go();
  document.addEventListener('DOMContentLoaded', go);
  window.addEventListener('load', function(){ go(); setTimeout(go, 300); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
})();
