(function(){
var T=document.querySelector('.toast'),tm;
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the shop in one tap. <a href="tel:+17035941785">Want this on yours? Call Michael</a>');
 if(e.target.closest('.demo-sms'))toast('<strong>Demo:</strong> on the real site this opens a text to the shop with your camera ready, so they can see the problem before they roll a truck. <a href="tel:+17035941785">Want it? Call Michael</a>');
});
var A={noheat:['urgent','Call now. No heat is a priority call.','If you have a thermostat, check it is set to Heat and the batteries are fresh. If it is still cold, call and we will get you on the schedule.','No heat'],
noac:['urgent','Call now, or text a photo of your outdoor unit.','Check that the breaker is on and the filter is not clogged. A photo of the outdoor unit helps us bring the right parts.','AC not cooling'],
noise:['Safety first','If you smell gas, leave the house and call your gas company first.','For banging, squealing or a burning smell, turn the system off and call us. A short video of the sound helps a lot.','Strange noise or smell'],
leak:['Act soon','Turn the system off and text us a photo of the leak.','Water near the furnace or air handler often means a clogged drain line, which is usually a quick fix.','Water leaking'],
tune:['Book ahead','Ask for a tune-up visit.','Spring for AC and fall for heat is the sweet spot. Leave your number and we will call you to set a time.','Tune-up'],
'new':['Estimate','Leave your number for an in-home estimate.','A photo of your current unit\'s label helps us size the new system before we arrive.','New system quote']};
var chips=document.querySelectorAll('.chips button'),ans=document.querySelector('.answer');
chips.forEach(function(b){b.addEventListener('click',function(){chips.forEach(function(c){c.setAttribute('aria-checked','false')});b.setAttribute('aria-checked','true');var a=A[b.dataset.k];ans.hidden=false;ans.style.animation='none';ans.offsetHeight;ans.style.animation='';var t=ans.querySelector('.tag');t.textContent=a[0];t.className='tag'+(a[0]=='urgent'?' urgent':'');if(a[0]=='urgent')t.textContent='Urgent';ans.querySelector('h3').textContent=a[1];ans.querySelector('.tip').textContent=a[2];var s=document.getElementById('need');if(s)s.value=a[3];})});
var Z={'22401':'Fredericksburg','22402':'Fredericksburg','22403':'Fredericksburg','22404':'Fredericksburg','22405':'Fredericksburg / Stafford','22406':'Fredericksburg / Stafford','22407':'Fredericksburg / Spotsylvania','22408':'Fredericksburg / Spotsylvania','22412':'Fredericksburg','22553':'Spotsylvania','22551':'Spotsylvania','22534':'Partlow','22554':'Stafford','22555':'Stafford','22556':'Stafford','22463':'Garrisonville','22485':'King George','22481':'Jersey','22448':'Dahlgren','22451':'Dogue'};
var f=document.querySelector('.zip-form'),out=document.querySelector('.zip-out'),zi=document.getElementById('zip');
zi.addEventListener('input',function(){zi.value=zi.value.replace(/\D/g,'').slice(0,5);if(zi.value.length==5)check()});
f.addEventListener('submit',function(e){e.preventDefault();check()});
function check(){var v=zi.value;if(v.length<5){out.className='zip-out no';out.textContent='Enter a 5-digit ZIP.';return}
if(Z[v]){out.className='zip-out yes';out.textContent='✓ Yes, '+Z[v]+' is in our area. Call or leave your number below.'}else{out.className='zip-out no';out.textContent='That ZIP may be outside our usual area. Call and ask, we may still be able to help.'}}
document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});var k=location.search.match(/pick=(\w+)/);if(k){var b=document.querySelector('[data-k="'+k[1]+'"]');b&&b.click()}var z=location.search.match(/zip=(\d{5})/);if(z){zi.value=z[1];check()}}
})();
