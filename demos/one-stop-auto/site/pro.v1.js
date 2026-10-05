(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the shop in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. In a real emergency, call 911 yourself once you are away from the car.');
});

/* ---- Open now (America/New_York): Mon-Fri 8 AM-6 PM ---- */
(function(){
 var els=[document.getElementById('hours'),document.getElementById('hours-m')].filter(Boolean);
 if(!els.length)return;
 var DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],O=8,C=18;
 function now(){try{var p=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date()),o={};p.forEach(function(x){o[x.type]=x.value});return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(o.weekday),m:(+o.hour%24)*60+(+o.minute)}}catch(e){var d=new Date();return{d:d.getDay(),m:d.getHours()*60+d.getMinutes()}}}
 function wk(d){return d>=1&&d<=5}
 function paint(){
  var n=now(),open=wk(n.d)&&n.m>=O*60&&n.m<C*60,st,wh;
  if(open){st='Open now';wh=(C*60-n.m<=60?'Closes soon · 6 PM':'Until 6 PM today')}
  else{var nd=n.d,lab;if(wk(nd)&&n.m<O*60)lab='today';else{nd=(nd+1)%7;while(!wk(nd))nd=(nd+1)%7;lab=nd===(n.d+1)%7?'tomorrow':DN[nd]}st='Closed';wh='Opens '+lab+' at 8 AM'}
  els.forEach(function(el){el.className=(el.classList.contains('mobile-hours')?'hours mobile-hours ':'hours ')+(open?'open':'closed');el.querySelector('[data-state]').textContent=st;el.querySelector('[data-when]').textContent=wh;el.setAttribute('aria-label',st+'. '+wh+'. Hours Monday to Friday, 8 AM to 6 PM.')});
  var s2=document.querySelector('[data-state2]');if(s2){s2.className='hc-state '+(open?'open':'closed');s2.textContent=(open?'Open now · until 6 PM':'Closed now · '+wh)}
  document.querySelectorAll('.hours-card tr').forEach(function(r){r.classList.toggle('today',+r.dataset.d===n.d)});
 }
 paint();setInterval(paint,60000);
})();

/* ---- Inspection desk / what's wrong ---- */
var P={
 lamp:'M12 3a8 8 0 0 0-8 8v3H2v2h20v-2h-2v-3a8 8 0 0 0-8-8zm-1 3h2v6h-2zm0 7h2v2h-2zM7 18h10v2H7z',
 noise:'M3 9h4l5-4v14l-5-4H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z',
 smoke:'M8 21c-2.8 0-5-2-5-4.6 0-2 1.3-3.6 3.2-4.2A5 5 0 0 1 16 10.5a4 4 0 0 1 5 3.9C21 18 18.6 21 15.5 21z',
 wheel:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 7.7 6h-4.3a3.5 3.5 0 0 0-6.8 0H4.3A8 8 0 0 1 12 4z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9zm2 2h4v4H7z',
 oil:'M3 8h4l2-2h4v2h-2v1l6 2 5-3-6 9H6a2 2 0 0 1-2-2v-3L2 10z',
 temp:'M11 2a3 3 0 0 0-3 3v8.3a5 5 0 1 0 6 0V5a3 3 0 0 0-3-3zm0 2a1 1 0 0 1 1 1v9.4l.5.3a3 3 0 1 1-3 0l.5-.3V5a1 1 0 0 1 1-1z',
 eng:'M7 5h6v2h-2v2h4l2 2h2V9h2v8h-2v-2h-2l-2 3H8l-2-2H4v2H2V9h2v3h2V9h1z',
 brake:'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 3h2v6h-2zm0 8h2v2h-2z',
 bat:'M6 5h3v2h6V5h3v2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3z',
 tire:'M12 2a10 10 0 0 0-7 17.1L3 21h18l-2-1.9A10 10 0 0 0 12 2zm-1 4h2v7h-2zm0 9h2v2h-2z',
 knock:'M4 4h16v4H4zm2 6h12l-1 10H7z',
 fire:'M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5s.5 2 2 2.5C10 7 12 2 12 2z',
 drop:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 key:'M7 9a5 5 0 1 1 4.6 6.9L10 17.5H8v2H6v2H2v-4l5.1-5.1A5 5 0 0 1 7 9z',
 gear:'M4 7h9l2-3h3l-2 3h4v3h-2l-1 7H5L4 10H2V7z',
 fan:'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm1-8c4 0 5 3 3 6l-2 2.3a3 3 0 0 0-1.2-.3z',
 insp:'M9 2h6v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm0 4v1h6V6zm1.2 9.6L8 13.4l-1.4 1.4 3.6 3.6 6.4-6.4-1.4-1.4z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 light:'M9 2h2v3H9zm4 0h2v3h-2zM5 8h14v2H5zm2 4h10l1 8H6z',
 emis:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v6h-2zm0 8h2v2h-2z'
};
function ic(k,c){return '<span class="oi'+(c?' '+c:'')+'" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 start:{q:'What brings you in?',o:[
  ['Virginia state inspection','Sticker due, renewing, or first time here','insp','inspect'],
  ['Failed inspection / need to pass','Lights, tires, brakes, or emissions','emis','failed'],
  ['A warning light came on','On the dash','lamp','light'],
  ['Something feels or sounds wrong','Noise, pull, shake, smell, won\'t start','noise','wrong'],
  ['Oil change or routine service','Keep it ready for the road','cal','R:service'],
  ['Smoke, flames or a fuel smell','Emergency — get clear first','fire','R:fire',1]]},
 inspect:{q:'Where are you with the sticker?',o:[
  ['Due this month or already expired','Need it soon','insp','R:inspect'],
  ['Coming up in the next 1–2 months','Want to schedule ahead','cal','R:inspectsoon'],
  ['Not sure — want a walk-around first','Lights, tires, wipers before the day','ok','R:precheck'],
  ['Also have a problem to fix','Noise, light, or something that may fail','noise','wrong']]},
 failed:{q:'What kept it from passing?',o:[
  ['Lights, horn, wipers or glass','Safety items on the walk-around','light','R:failights'],
  ['Tires or brakes','Tread, pads, or a soft pedal','brake','R:failbrake'],
  ['Check engine / emissions','Or the light won\'t clear','emis','R:failemis'],
  ['Not sure — they handed me a list','','insp','R:faillist']]},
 light:{q:'Which light is on?',o:[
  ['Oil pressure','Red oil can','oil','R:oil',1,'lamp-r'],
  ['Engine temperature','Red thermometer / gauge hot','temp','R:hot',1,'lamp-r'],
  ['Brake warning','Red BRAKE or (!)','brake','brakelight',0,'lamp-r'],
  ['Check engine','Amber engine shape','eng','cel',0,'lamp-a'],
  ['Battery / charging','Red battery','bat','R:battery',0,'lamp-r'],
  ['Tire pressure','Amber tire (!)','tire','R:tpms',0,'lamp-a']]},
 cel:{q:'Is the check engine light flashing?',o:[
  ['Yes, flashing','Often with shake or loss of power','eng','R:celflash',1,'lamp-a'],
  ['Steady, car runs rough','','eng','R:celrough',0,'lamp-a'],
  ['Steady, drives normally','May also block emissions','ok','R:celsteady']]},
 brakelight:{q:'Parking brake off — how does the pedal feel?',o:[
  ['Soft, low or sinks','Or longer to stop','brake','R:brakefail',1,'lamp-r'],
  ['Pedal feels normal, light stays on','','brake','R:brakelight']]},
 wrong:{q:'What is it doing?',o:[
  ['Noise when I brake','Squeal or grind','brake','brakes'],
  ['Won\'t start / cranks slow','','key','R:nostart'],
  ['Pulls, shakes or wanders','','wheel','R:vibe'],
  ['Slips or shifts hard','','gear','R:trans'],
  ['Steam or a smell','Sweet, burning, fuel','smoke','smell'],
  ['Heat or A/C out','','fan','R:hvac']]},
 brakes:{q:'What does it sound and feel like?',o:[
  ['Pedal soft or sinks','','brake','R:brakefail',1],
  ['Metal-on-metal grinding','','brake','R:brakegrind'],
  ['High squeal, pedal feels normal','','brake','R:brakesqueal']]},
 smell:{q:'What do you see or smell?',o:[
  ['Steam + sweet smell','Temp rising','temp','R:hot',1],
  ['Raw gasoline','','drop','R:fuel',1],
  ['Burning oil / blue-gray smoke','','oil','R:oilsmell'],
  ['Rotten eggs','','smoke','R:egg']]}
};
var STOP='Don\'t drive it',TODAY='Call today',BOOK='Book a visit';
var R={
 fire:['stop','Emergency','Pull over. Get out. Call 911.',[
  '<b>Pull over as soon as it is safe and turn the engine off.</b>',
  '<b>Get everyone out</b> and move well away from the car, upwind.',
  '<b>Call 911.</b> Don\'t open the hood.',
  'Once safe, have the car towed — don\'t try to start it.'],'911','Smoke, flames or a fuel smell'],
 fuel:['stop',STOP,'Fuel smell: park it and don\'t start it.',[
  '<b>Turn the engine off.</b> No smoking or sparks near the car.',
  'If the smell is strong or fuel is dripping, <b>move away and call 911.</b>',
  'Don\'t drive it in. Have it towed.'],'tow','Smoke, flames or a fuel smell'],
 oil:['stop',STOP,'Oil pressure light: shut it off now.',[
  '<b>Pull over and turn the engine off.</b> Running without oil pressure can ruin an engine fast.',
  'Check the dipstick on level ground after a few minutes.',
  'If the light returns, <b>don\'t drive it</b> — have it towed.'],'tow','Warning light'],
 hot:['stop',STOP,'Running hot: pull over and let it cool.',[
  '<b>Pull over and shut it off.</b> Heater on full can shed some heat while you find a safe spot.',
  '<b>Never open a hot radiator cap.</b>',
  'If coolant leaks or the gauge climbs again, tow it in.'],'tow','Warning light'],
 brakefail:['stop',STOP,'Soft or sinking pedal: don\'t drive it.',[
  '<b>Slow down gently and pull over somewhere safe.</b>',
  'Don\'t drive on brakes that feel soft or slow to stop.',
  'Have it towed and call to set up a brake check.'],'tow','Brakes'],
 celflash:['stop','Stop driving soon','Flashing check engine: ease off.',[
  'Flashing often means a bad misfire that can damage the exhaust.',
  '<b>Slow down, avoid hard acceleration, get off the road when safe.</b>',
  'If it shakes, smells or loses power, tow it. Call today.'],'today','Warning light'],
 celrough:['today',TODAY,'Steady light, running rough: check today.',[
  'Drive as little as possible, and gently.',
  'If it starts flashing, stop and call for a tow.',
  'Call today so the shop can read the code.'],'today','Warning light'],
 celsteady:['book',BOOK,'Steady check engine — also plan for emissions.',[
  'Tighten the gas cap; a loose cap can turn the light on.',
  'A steady light can keep you from clearing emissions / inspection.',
  'Book a visit to read the code before it gets worse.'],'book','Emissions / check engine light'],
 brakelight:['today',TODAY,'Brake light stays on: check today.',[
  'With the parking brake off, a red brake light can mean low fluid or a system fault.',
  'Leave extra room to stop.',
  '<b>If the pedal goes soft, stop driving</b> and tow it.'],'today','Brakes'],
 battery:['today',TODAY,'Battery light: it may stall soon.',[
  'Turn off extras: A/C, heated seats, chargers.',
  'Drive straight to the shop. Avoid shutting it off if you need a restart.',
  'If the temp gauge also rises, pull over — a belt may have failed.'],'today','Warning light'],
 tpms:['today','Check tires first','Low tire or tire light.',[
  '<b>If a tire looks flat or low, don\'t drive on it.</b>',
  'If they look fine, fill to the door-sticker pressure.',
  'If it keeps losing air, call to have it checked — tires matter for inspection too.'],'today','Noise or something feels wrong'],
 inspect:['book','Book inspection','Virginia state inspection — let\'s get you on the calendar.',[
  'Check the sticker on your windshield for the month it runs out.',
  'Before you come in: <b>lights, brake lights, turn signals, horn, wipers,</b> no big cracks in your view, tires with good tread.',
  'Anything not working? Mention it when you book so it can be checked during the visit.',
  'Use the form below, or call during open hours.'],'book','VA state inspection'],
 inspectsoon:['book','Schedule ahead','Sticker coming up — book before the rush.',[
  'Booking a week or two early avoids a last-minute scramble.',
  'Same walk-around: lights, tires, wipers, glass in your view.',
  'Leave your name and car below.'],'book','VA state inspection'],
 precheck:['book','Walk-around first','Quick self-check before inspection day.',[
  'From the ground: headlights, brake lights, turn signals, horn, wipers clear the glass.',
  'Penny test on tread — if you see all of Lincoln\'s head, plan on tires.',
  'Book the inspection, and note anything that looks off.'],'book','VA state inspection'],
 failights:['book','Fix to pass','Lights / visibility items.',[
  'Burned-out bulbs, a cracked windshield in your view, or dead wipers are common fail items.',
  'Book a visit — often a same-day fix so you can re-inspect.',
  'Bring any fail sheet the last shop gave you.'],'book','Failed inspection / need repairs to pass'],
 failbrake:['today',TODAY,'Brakes or tires failed — don\'t wait.',[
  'Worn pads, soft pedal feel, or bald tires are safety items.',
  'If the pedal feels soft now, <b>don\'t keep driving</b> — call about a tow.',
  'Otherwise call today to get on the schedule.'],'today','Failed inspection / need repairs to pass'],
 failemis:['book','Emissions path','Check engine / emissions fail.',[
  'The shop can read the code and explain what has to clear before you pass.',
  'Don\'t keep clearing the light and retesting without a fix — it usually comes back.',
  'Book a diagnostic visit and bring the fail paperwork.'],'book','Emissions / check engine light'],
 faillist:['book','Bring the list','Failed — we\'ll work the sheet.',[
  'Bring the inspection fail list so nothing gets missed.',
  'Priority is anything unsafe to drive, then the rest to pass.',
  'Book a callback or call during open hours.'],'book','Failed inspection / need repairs to pass'],
 nostart:['today',TODAY,'Won\'t start: a few quick checks.',[
  'Clicking or dim lights usually means battery or cables. A jump may help.',
  'If it cranks but won\'t fire, don\'t keep cranking — short bursts only.',
  'Call to talk it through or set up a tow.'],'today','Noise or something feels wrong'],
 vibe:['today',TODAY,'Shaking or pulling: slow down and look.',[
  '<b>Pull over safely and check for a bulge or flat spot on each tire.</b>',
  'If it started after a pothole, you may have a bent wheel.',
  'Keep speeds down and call today — alignment and tires also matter for inspection.'],'today','Noise or something feels wrong'],
 trans:['today',TODAY,'Transmission trouble: call today.',[
  'Slipping or hard shifts usually get worse, not better.',
  'Drive gently; if it won\'t go into gear or you see red fluid, tow it.'],'today','Noise or something feels wrong'],
 hvac:['book',BOOK,'Heat or A/C out: book a visit.',[
  'Usually safe to drive if you can see clearly.',
  '<b>If heat quits and the temp gauge climbs, pull over</b> — that\'s overheating.',
  'Book a visit to find the cause.'],'book','Something else'],
 brakegrind:['today',TODAY,'Grinding brakes: drive as little as possible.',[
  'Grinding usually means metal on metal. Stopping gets weaker.',
  'Leave extra room and keep trips short. Call today.'],'today','Brakes'],
 brakesqueal:['book',BOOK,'Squeaky brakes, normal pedal.',[
  'Many pads squeal when they\'re getting thin.',
  'Book a brake check in the next week or two.',
  'If it turns to grinding or the pedal changes, call today.'],'book','Brakes'],
 oilsmell:['today',TODAY,'Burning oil: look for a leak.',[
  'Check oil level and look under the car for drips.',
  '<b>If you see smoke from under the hood, pull over, get out, call 911.</b>',
  'Call today to find the leak.'],'today','Smoke, flames or a fuel smell'],
 egg:['book',BOOK,'Rotten-egg smell: book a check.',[
  'Often exhaust or fuel-mixture related.',
  'If the check engine light is flashing or it runs rough, call today.',
  'Otherwise book soon.'],'book','Smoke, flames or a fuel smell'],
 service:['book','Book a visit','Oil change or routine care.',[
  'Routine service keeps the car ready for daily driving and inspection day.',
  'Leave your name and car below, or call during open hours.'],'book','Oil change or routine service']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call the shop</button>',
 tow:'<button class="btn btn-red demo" type="button">Call the shop about a tow</button><a class="btn btn-line" href="#book" data-pref>Request a callback</a>',
 today:'<button class="btn btn-sig demo" type="button">Call the shop</button><a class="btn btn-line" href="#book" data-pref>Request a callback</a>',
 book:'<a class="btn btn-ink" href="#book" data-pref>Book inspection / visit</a><button class="btn btn-line demo" type="button">Call instead</button>'
};
var MAXD=3,stage=document.getElementById('stage'),box=document.getElementById('desk'),bar=box.querySelector('.prog i'),hist=[],need=document.getElementById('need');
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Question '+n+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]?' danger':'')+'" type="button" data-i="'+i+'">'+ic(o[2],o[5])+'<span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
 stage.innerHTML=h+'</div></div>';stage.dataset.q=id;setTier('');bar.style.width=Math.min(12+hist.length/MAXD*70,82)+'%';
 if(focus)stage.querySelector('h3').focus({preventScroll:true});
}
function result(k,focus){
 var r=R[k],h='<div class="res '+r[0]+'" tabindex="-1"><p class="tag">'+r[1]+'</p><h3>'+esc(r[2])+'</h3><ol class="steps">';
 r[3].forEach(function(s){h+='<li>'+s+'</li>'});
 h+='</ol><div class="cta">'+CTA[r[4]]+'</div><button class="again" type="button" data-again>↻ Start over</button>'+(hist.length?' <button class="again" type="button" data-back>← Back</button>':'')+'</div>';
 stage.innerHTML=h;stage.dataset.q='';setTier(r[0]);bar.style.width='100%';
 if(need&&r[5])need.value=r[5];
 if(focus){var el=stage.querySelector('.res');el.focus({preventScroll:true});var t=box.getBoundingClientRect().top;if(t<0||t>innerHeight*.4)box.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
function go(next){if(next.indexOf('R:')===0)result(next.slice(2),true);else ask(next,true)}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]');
 if(o){var id=stage.dataset.q;hist.push(id);go(Q[id].o[+o.dataset.i][3])}
 else if(b){ask(hist.pop(),true)}
 else if(a){hist=[];ask('start',true)}
});
ask('start',false);
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R[dl[1]]){hist=['start'];result(dl[1],false);box.classList.add('in')}

var dock=document.querySelector('.dock'),hc=document.querySelector('.hero .cta');
if(dock&&hc&&'IntersectionObserver' in window){new IntersectionObserver(function(es){dock.classList.toggle('away',es[0].isIntersecting)}).observe(hc)}
document.getElementById('lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
