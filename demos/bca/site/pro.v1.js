(function(){
var T=document.querySelector('.toast'),tm;
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the shop in one tap. <a href="tel:+17035941785">Want this on yours? Call Michael</a>');
 if(e.target.closest('.demo-sms'))toast('<strong>Demo:</strong> on the real site this opens a text to the shop with your camera ready, so they can see the problem before they roll a truck. <a href="tel:+17035941785">Want it? Call Michael</a>');
});
var S={ac:[15,'AC / heat pump','AC not cooling'],furn:[18,'furnace','No heat'],wh:[10,'water heater','Water heater']},cur='ac';
var ag=document.getElementById('age'),co=document.getElementById('cost'),V=document.querySelector('.verdict'),G=document.querySelector('.gauge');
function fm(n){return '$'+n.toLocaleString('en-US')}
function calc(){var a=+ag.value,c=+co.value,L=S[cur][0],p=Math.min(a/L,1.25),sc=a*c,k;
document.getElementById('o-age').textContent=a+(a==1?' yr':' yrs');document.getElementById('o-cost').textContent=fm(c);
document.getElementById('g-pct').textContent=Math.round(a/L*100)+'%';G.style.setProperty('--p',Math.min(p,1)*360+'deg');
if(p>=1||sc>5000)k=['stop','Time to price a replacement.','Your '+S[cur][1]+' is old enough, or the repair is big enough, that replacing usually wins. Get a replacement quote next to the repair quote before you decide.'];
else if(sc>3500||p>.75)k=['care','Get both prices before you decide.','This one is close. The repair may be worth it, but ask for a replacement number too so you can compare side by side.'];
else k=['ok','Repair it.','At this age and price, fixing it is usually the smart money. No reason to replace a system with plenty of life left.'];
G.className='gauge '+k[0];var t=V.querySelector('.tag');t.className='tag '+k[0];t.textContent={ok:'Repair',care:'Close call',stop:'Replace'}[k[0]];
V.querySelector('h3').textContent=k[1];V.querySelector('.tip').textContent=k[2];V.querySelector('.math').textContent=a+' yrs × '+fm(c)+' = '+fm(sc)+(sc>5000?' (over $5,000)':' (under $5,000)');
var n=document.getElementById('need');if(n)n.value=S[cur][2]}
var segs=document.querySelectorAll('.seg button');segs.forEach(function(b){b.addEventListener('click',function(){segs.forEach(function(x){x.setAttribute('aria-checked','false')});b.setAttribute('aria-checked','true');cur=b.dataset.s;calc()})});
ag.addEventListener('input',calc);co.addEventListener('input',calc);calc();
var Z={'22401':'Fredericksburg','22402':'Fredericksburg','22403':'Fredericksburg','22404':'Fredericksburg','22405':'Fredericksburg / Stafford','22406':'Fredericksburg / Stafford','22407':'Fredericksburg / Spotsylvania','22408':'Fredericksburg / Spotsylvania','22412':'Fredericksburg','22553':'Spotsylvania','22551':'Spotsylvania','22534':'Partlow','22554':'Stafford','22555':'Stafford','22556':'Stafford','22463':'Garrisonville','22191':'Woodbridge','22192':'Woodbridge','22193':'Woodbridge','22195':'Woodbridge'};
var f=document.querySelector('.zip-form'),out=document.querySelector('.zip-out'),zi=document.getElementById('zip');
zi.addEventListener('input',function(){zi.value=zi.value.replace(/\D/g,'').slice(0,5);if(zi.value.length==5)check()});
f.addEventListener('submit',function(e){e.preventDefault();check()});
function check(){var v=zi.value;if(v.length<5){out.className='zip-out no';out.textContent='Enter a 5-digit ZIP.';return}
if(Z[v]){out.className='zip-out yes';out.textContent='✓ Yes, '+Z[v]+' is in our area. Call or leave your number below.'}else{out.className='zip-out no';out.textContent='That ZIP may be outside our usual area. Call and ask, we may still be able to help.'}}
document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});var k=location.search.match(/sys=(\w+)/);if(k){var b=document.querySelector('[data-s=\"'+k[1]+'\"]');b&&b.click()}var q=location.search.match(/age=(\d+)&cost=(\d+)/);if(q){ag.value=q[1];co.value=q[2];calc()}var z=location.search.match(/zip=(\d{5})/);if(z){zi.value=z[1];check()}}
})();
