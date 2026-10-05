(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h,ms){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},ms||6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls C &amp; S at (540) 775-2900 in one tap'+(card.where?', with your tow card on screen to read from':'')+'. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. In a real emergency, call 911 yourself.');
});

/* ---- open-now, America/New_York, Mon-Fri 8-5 ---- */
function nowET(){try{var p=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()),o={};p.forEach(function(x){o[x.type]=x.value});return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(o.weekday),h:(+o.hour%24)+(+o.minute)/60}}catch(_){var n=new Date();return{d:n.getDay(),h:n.getHours()+n.getMinutes()/60}}}
var N=nowET(),wk=N.d>=1&&N.d<=5,OPEN=wk&&N.h>=8&&N.h<17;
var nextOpen=(wk&&N.h<8)?'opens 8 AM today':(N.d===5||N.d===6)?'opens 8 AM Monday':(N.d===0)?'opens 8 AM Monday':'opens 8 AM tomorrow';
var STATUS=OPEN?'Shop open now · until 5 PM':'Shop closed now · '+nextOpen;
document.querySelectorAll('[data-status]').forEach(function(el){el.textContent=STATUS;el.classList.toggle('open',OPEN)});
var tr=document.querySelector('.hours tr[data-d="'+N.d+'"]');if(tr)tr.classList.add('today');

/* ---- Tow helper ---- */
var P={
 hurt:'M10 2h4v6h6v4h-6v10h-4V12H4V8h6z',
 fire:'M12 2s5 4.5 5 10a5 5 0 0 1-10 0c0-2.3 1-4 2-5 0 2 1 3 2 3 0-3 1-6 1-8z',
 lane:'M11 2h2v4h-2zm0 7h2v4h-2zm0 7h2v6h-2zM3 2h2v20H3zm16 0h2v20h-2z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 gps:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 3h-2.1A7 7 0 0 0 13 5.1V3h-2v2.1A7 7 0 0 0 5.1 11H3v2h2.1a7 7 0 0 0 5.9 5.9V21h2v-2.1a7 7 0 0 0 5.9-5.9H21z',
 road:'M9 2h6l5 20h-6l-.4-3h-3.2l-.4 3H4zm2.2 7h1.6l-.2-3h-1.2zm-.5 6h2.6l-.3-3.5h-2z',
 home:'M12 3 2 12h3v9h5v-6h4v6h5v-9h3z',
 pin:'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z',
 car:'M2 14.5 4.6 9A3 3 0 0 1 7.3 7h9.4a3 3 0 0 1 2.7 2l2.6 5.5V19a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm4.2-1h11.6L16.6 10a1 1 0 0 0-.9-.6H8.3a1 1 0 0 0-.9.6z',
 truck:'M1 6h12v9h1V9h4.5l3.5 4.5V18h-2a2.5 2.5 0 0 1-5 0H9a2.5 2.5 0 0 1-5 0H1zm15 5v3h4l-2.3-3z',
 awd:'M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM11 5h2v14h-2zM6.5 4h11v2h-11zm0 14h11v2h-11z',
 ev:'M13 2 4 14h6l-1 8 9-12h-6z',
 q:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 16h-2v-2h2zm2.1-7.8-.9.9c-.7.7-1.2 1.3-1.2 2.9h-2v-.5c0-1.1.5-2.1 1.2-2.8l1.2-1.3a2 2 0 1 0-3.4-1.4H8a4 4 0 1 1 7.1 2.2z',
 batt:'M7 4h3v2h4V4h3v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm-1 7v2h4v-2zm8 0v2h1.5v1.5h2V13H19v-2h-1.5V9.5h-2V11z',
 crash:'M12 1l2.5 6.5L21 5l-3 6 5 2-6 2 2 7-6-4-3 6-1.5-7L2 18l3.5-6L1 9l6.5-1z',
 tire:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
 heat:'M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0zM12 4a1 1 0 0 1 1 1v6h-2V5a1 1 0 0 1 1-1z',
 ditch:'M2 18c3-1 5-4 10-4s7 3 10 4v4H2zM6 8h12l1.5 4H4.5zm1 5a1.5 1.5 0 1 0 0 .1zm10 0a1.5 1.5 0 1 0 0 .1z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 safe:{q:'First: is everyone safe?',o:[
  ['Someone is hurt','','hurt','R:hurt',1],
  ['Smoke, fire or a fuel smell','','fire','R:fire',1],
  ['I\'m stuck in a travel lane','Can\'t get to the shoulder','lane','R:lane',1],
  ['Yes, we\'re off the road and okay','On the shoulder, a lot or a driveway','ok','loc']]},
 loc:{q:'Where are you?',gps:1,o:[
  ['Route 3 / Kings Highway','','road','veh'],
  ['Route 301 / James Madison Pkwy','','road','veh'],
  ['Route 206 / Dahlgren Road','','road','veh'],
  ['Home, work or a parking lot','','home','veh'],
  ['Somewhere else','Type the spot on your tow card','pin','veh']]},
 veh:{q:'What are you driving?',o:[
  ['Car or small SUV','','car','what'],
  ['Pickup, van or full-size SUV','','truck','what'],
  ['All-wheel or 4-wheel drive','Many SUVs and Subarus. It changes how it\'s towed.','awd','what'],
  ['Electric or hybrid','','ev','what'],
  ['Not sure','','q','what']]},
 what:{q:'What happened?',o:[
  ['Won\'t start, or died while driving','','batt','card'],
  ['Accident','','crash','card'],
  ['Flat tire or a damaged wheel','','tire','card'],
  ['Overheating or a warning light','','heat','card'],
  ['Stuck in a ditch, mud or snow','','ditch','card']]}
};
var DANGER={
 hurt:['danger','Call 911 first','Someone is hurt: call 911 now.',[
  '<b>Call 911.</b> Tell them the road and the nearest cross street or landmark.',
  'Turn on your hazard lights.',
  'Don\'t move anyone who is hurt unless there\'s fire or another immediate danger.',
  'If you can, wait well away from traffic, behind a guardrail if there is one.']],
 fire:['danger','Get clear','Smoke, fire or a fuel smell: get out and away.',[
  '<b>Get everyone out of the vehicle and at least 100 feet away,</b> off the road.',
  '<b>Call 911.</b>',
  'Don\'t open the hood. Fresh air can make a fire flare up.',
  'Leave belongings behind. Wait for the fire department before going back.']],
 lane:['lane','Be seen, then get clear','Stuck in a travel lane.',[
  '<b>Hazard lights on right away.</b>',
  'If you can get out safely, exit on the side away from traffic and move well off the road.',
  'If you can\'t get out safely, stay in your seat with your seatbelt on.',
  '<b>Call 911.</b> A vehicle stopped in a travel lane is an emergency. Then get the tow lined up.']]
};
var TIP={
 'Car or small SUV':'Give the year, make and model, and if it rolls in neutral. That helps them bring the right truck.',
 'Pickup, van or full-size SUV':'Give the size (half-ton, ¾-ton, one-ton) and mention a lift kit, a loaded bed or a trailer hitched up.',
 'All-wheel or 4-wheel drive':'Say it\'s all-wheel drive. AWD usually rides on a flatbed or with every wheel off the ground, so the drivetrain isn\'t damaged.',
 'Electric or hybrid':'Say it\'s electric or hybrid. Most shouldn\'t be towed with the drive wheels on the road. Your owner\'s manual has a towing page.',
 'Not sure':'Read them the year, make and model off the registration in the glove box. They\'ll know what it needs.'
};
var WAIT={
 'Won\'t start, or died while driving':['Note what happened right before: a noise, a smell, a dash light.','If it cranks but won\'t start, stop trying after a few tries so you don\'t drain the battery.','Keep the keys and the registration handy for the driver.'],
 'Accident':['Take photos of both vehicles, the plates and the scene.','Swap names, phone numbers and insurance with the other driver.','If police come, get the report number for your insurance.'],
 'Flat tire or a damaged wheel':['Don\'t change a tire on the traffic side of a busy road.','Don\'t keep driving on a flat. It can ruin the wheel.','Check if you have a spare and a jack. Tell them either way.'],
 'Overheating or a warning light':['Turn the engine off and let it cool.','Don\'t open the radiator cap while it\'s hot.','Snap a photo of the warning light for the shop.'],
 'Stuck in a ditch, mud or snow':['Don\'t keep spinning the wheels. It digs in deeper.','Tell them if the car is tilted, off the pavement, or how far from the road.','Stay out of the vehicle if it\'s on a steep slope.']
};
var stage=document.getElementById('stage'),box=document.getElementById('tow'),dots=[].slice.call(box.querySelectorAll('.steps-dots li')),trail=document.getElementById('trail'),hist=[],picks=[],need=document.getElementById('need'),note=document.getElementById('note');
var card={};var gps=null;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function prog(n){dots.forEach(function(d,i){d.classList.toggle('on',i<n)});trail.textContent=picks.length?picks.join(' → '):'Takes about 20 seconds · '+STATUS}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Step '+Math.min(n,4)+' of 4</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 if(d.gps)h+='<button class="opt gps" type="button" data-gps>'+ic('gps')+'<span>'+(gps?'Location added ✓':'Use my location')+'<small>'+(gps?'Pin: '+gps.lat.toFixed(4)+', '+gps.lng.toFixed(4)+' · now pick the closest road':'Puts a map pin on your tow card for the driver')+'</small></span></button><p class="or">or pick the closest road</p>';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]?' danger':'')+'" type="button" data-i="'+i+'">'+ic(o[2])+'<span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
 stage.innerHTML=h+'</div></div>';stage.dataset.q=id;setTier('');prog(Math.min(n,4)-1);
 if(focus)stage.querySelector('h3').focus({preventScroll:true});
}
function scrollTool(){var t=box.querySelector('.tool').getBoundingClientRect().top;if(t<0||t>innerHeight*.4)box.querySelector('.tool').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
function danger(k,focus){
 var r=DANGER[k],h='<div class="res '+r[0]+'" tabindex="-1"><p class="tag">'+r[1]+'</p><h3>'+esc(r[2])+'</h3><ol class="steps">';
 r[3].forEach(function(s){h+='<li>'+s+'</li>'});
 h+='</ol><div class="cta"><button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line" type="button" data-cont>Then line up the tow →</button></div><div class="res-foot"><button class="again" type="button" data-back>← Back</button></div></div>';
 stage.innerHTML=h;stage.dataset.q='';setTier(r[0]);prog(1);
 if(focus){stage.querySelector('.res').focus({preventScroll:true});scrollTool()}
}
function cardText(){
 var lm=(stage.querySelector('#lm')||{}).value||card.lm||'';
 return 'TOW REQUEST\nWhere: '+card.where+(lm?'\nLandmark: '+lm:'')+(gps?'\nMap pin: https://maps.google.com/?q='+gps.lat.toFixed(5)+','+gps.lng.toFixed(5):'')+'\nVehicle: '+card.veh+'\nProblem: '+card.what+'\nTake it to: C & S Auto Repair, 9288 Kings Hwy, King George'+(card.lane?'\nNote: was stopped in a travel lane':'');
}
function showCard(focus){
 var h='<div class="res ok" tabindex="-1"><p class="tag">Your tow card</p><h3>Ready. One call and you\'re done.</h3>'+
 '<div class="card"><dl>'+
 '<div class="row"><dt>Where</dt><dd>'+esc(card.where)+(gps?'<small><a href="https://maps.google.com/?q='+gps.lat.toFixed(5)+','+gps.lng.toFixed(5)+'" target="_blank" rel="noopener">Map pin: '+gps.lat.toFixed(4)+', '+gps.lng.toFixed(4)+'</a></small>':'')+'<label class="vh" for="lm" style="display:block;font-size:14px;color:#585d64;margin-top:6px">Landmark, mile marker or address</label><input id="lm" value="'+esc(card.lm||'')+'" placeholder="e.g. eastbound, by the church sign"></dd></div>'+
 '<div class="row"><dt>Vehicle</dt><dd>'+esc(card.veh)+'</dd></div>'+
 '<div class="row"><dt>Problem</dt><dd>'+esc(card.what)+'</dd></div>'+
 '<div class="row"><dt>Take to</dt><dd>C &amp; S, 9288 Kings Hwy<small>Towed straight to the shop for repair</small></dd></div>'+
 '<div class="row"><dt>Shop</dt><dd>'+esc(STATUS)+'<small>Towing is listed as 24-hour on their own site</small></dd></div>'+
 '</dl></div>'+
 '<p class="tip"><b>Tell them</b>'+esc(TIP[card.veh])+'</p>'+
 '<div class="wait"><p class="h">While you wait</p><ol>'+WAIT[card.what].map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ol></div>'+
 '<div class="cta"><button class="btn btn-amb big-call demo" type="button"><small>Call for a tow</small><span>(540) 775-2900</span></button><button class="btn btn-line" type="button" data-copy>Copy my tow card</button><a class="btn btn-line" href="#estimate" data-send>Send it to the shop</a></div>'+
 '<div class="res-foot"><button class="again" type="button" data-again>↻ Start over</button><button class="again" type="button" data-back>← Back</button></div></div>';
 stage.innerHTML=h;stage.dataset.q='';setTier('ok');prog(4);
 if(focus){stage.querySelector('.res').focus({preventScroll:true});scrollTool()}
}
var KEY={loc:'where',veh:'veh',what:'what'};
function go(next){if(next.indexOf('R:')===0)danger(next.slice(2),true);else if(next==='card')showCard(true);else ask(next,true)}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt[data-i]'),g=e.target.closest('[data-gps]'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]'),c=e.target.closest('[data-copy]'),sd=e.target.closest('[data-send]'),ct=e.target.closest('[data-cont]');
 if(o){var id=stage.dataset.q,opt=Q[id].o[+o.dataset.i];if(KEY[id])card[KEY[id]]=opt[0];hist.push(id);picks.push(opt[0]);go(opt[3])}
 else if(g){
  if(!navigator.geolocation){toast('Location isn\'t available here. Pick the closest road below.');return}
  g.querySelector('small').textContent='Finding you…';
  navigator.geolocation.getCurrentPosition(function(p){gps={lat:p.coords.latitude,lng:p.coords.longitude};ask('loc',false)},function(){g.querySelector('small').textContent='Couldn\'t get your location. Pick the closest road below.';toast('No location shared. That\'s fine: pick the closest road and add a landmark on your tow card.')},{enableHighAccuracy:true,timeout:8000,maximumAge:60000});
 }
 else if(ct){card.lane=stage.querySelector('.res.lane')?1:0;hist.push('safe');picks.push('After 911');ask('loc',true)}
 else if(b){if(stage.querySelector('#lm'))card.lm=stage.querySelector('#lm').value;picks.pop();ask(hist.pop()||'safe',true)}
 else if(a){hist=[];picks=[];card={};ask('safe',true)}
 else if(c){var u=cardText();if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(function(){toast('Tow card copied. Paste it in a text to the shop, or to whoever is picking you up.')},function(){toast('Copy this: '+esc(u).replace(/\n/g,'<br>'),12000)})}else toast('Copy this: '+esc(u).replace(/\n/g,'<br>'),12000)}
 else if(sd&&note){note.value=cardText();if(need)need.value='Towing / tow follow-up';var v=document.querySelector('[name=veh]');if(v&&!v.value&&card.veh)v.placeholder='Year, make, model ('+card.veh.toLowerCase()+')'}
});
stage.addEventListener('input',function(e){if(e.target.id==='lm')card.lm=e.target.value});
ask('safe',false);
/* deep links for sharing and screenshots: ?tow=demo#tow  or  ?tow=hurt|fire|lane#tow */
var dl=location.search.match(/[?&]tow=(\w+)/);
if(dl){if(DANGER[dl[1]]){hist=['safe'];picks=[{hurt:'Someone is hurt',fire:'Smoke, fire or a fuel smell',lane:'Stuck in a travel lane'}[dl[1]]];danger(dl[1],false)}else if(dl[1]==='demo'){hist=['safe','loc','veh','what'];picks=['Off the road','Route 3 / Kings Highway','All-wheel or 4-wheel drive','Won\'t start, or died while driving'];card={where:'Route 3 / Kings Highway',veh:'All-wheel or 4-wheel drive',what:'Won\'t start, or died while driving',lm:'Eastbound shoulder, by a white mailbox'};showCard(false)}box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
