(function(){var r=document.querySelector('.demo-rail');if(!r)return;var b=document.querySelectorAll('.rail-btn'),h=document.querySelector('.rail-hint');
function u(){var max=r.scrollWidth-r.clientWidth-2;b[0].disabled=r.scrollLeft<=2;b[1].disabled=r.scrollLeft>=max;var n=r.querySelectorAll('.demo-card').length;if(h)h.textContent=max<=0?n+' demos':'Swipe for more → ('+n+' demos)';document.querySelector('.rail-nav').style.visibility='visible';}
b.forEach(function(x){x.addEventListener('click',function(){var c=r.querySelector('.demo-card');r.scrollBy({left:(+x.dataset.dir)*(c.offsetWidth+16),behavior:'smooth'});});});
r.addEventListener('scroll',u,{passive:true});window.addEventListener('resize',u);u();})();
