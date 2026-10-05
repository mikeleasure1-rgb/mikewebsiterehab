(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Nightwatch Security in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. If you suspect a break-in or you’re in danger, leave and call 911 yourself.');
});

var P={
 shield:'M12 2 3 6v7c0 6 3.8 9.7 9 11 5.2-1.3 9-5 9-11V6z',
 cam:'M4 8a8 8 0 0 1 16 0v2h2v10H2V10h2zm2 2v8h12v-8z',
 bell:'M12 3a6 6 0 0 1 6 6v3.5l2 3.5H4l2-3.5V9a6 6 0 0 1 6-6zm-2 16h4a2 2 0 0 1-4 0z',
 keypad:'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 4v2h2V6zm4 0v2h2V6zM9 10v2h2v-2zm4 0v2h2v-2zM9 14v2h6v-2z',
 bat:'M6 8h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm14 3h2v4h-2zM8 11v4h6v-4z',
 door:'M5 3h10v18H5zm12 4h2v14h-2zM8 12h2v2H8z',
 motion:'M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 9 3-2h4l3 2v7h-3v-4h-4v4H7z',
 home:'M12 3 2 11h3v10h14V11h3z',
 biz:'M4 4h16v4H4zm2 6h4v10H6zm6 0h4v10h-4zm6 0h2v10h-2z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 lock:'M12 1a5 5 0 0 1 5 5v3h2v10H5V11h2V6a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V6a3 3 0 0 0-3-3z',
 siren:'M12 2l2 5h5l-4 3.5L17 18l-5-3-5 3 2-7.5L5 7h5z',
 phone:'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 eye:'M12 5c5 0 9 5 9 7s-4 7-9 7-9-5-9-7 4-7 9-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 start:{q:'What do you need help with?',o:[
  ['Alarm is going off / won’t clear','Siren, beeping, or “alarm” on the keypad','siren','alarm',1],
  ['System trouble / beeping panel','Low battery, trouble light, sensor issue','bell','trouble'],
  ['Cameras or video doorbell','New cameras, blind spots, or app access','cam','cameras'],
  ['New system or takeover quote','House or business that needs coverage','shield','quoteq'],
  ['Codes, locks, or who can arm it','New users, lockout, old codes','lock','access'],
  ['Something else','Monitoring question, service visit','phone','R:other']]},
 alarm:{q:'Do you think someone is breaking in?',o:[
  ['Yes — I hear something / door forced / I’m scared','','siren','R:breakin',1],
  ['No — false alarm or I set it off','Pet, door draft, or I armed it wrong','ok','falseq'],
  ['Not sure — siren won’t stop','','keypad','R:cantclear',1]]},
 falseq:{q:'Can you silence the keypad?',o:[
  ['Yes — I entered my code and it stopped','','ok','R:falseok'],
  ['I don’t have the code / it won’t take the code','','lock','R:nocode',1],
  ['It stopped, but a sensor still shows open/fault','','door','R:sensor']]},
 trouble:{q:'What is the panel saying?',o:[
  ['Low battery / AC loss / power trouble','Beeping every few minutes','bat','R:battery'],
  ['A zone or sensor won’t clear','Door, window, or motion stays faulted','motion','R:sensor'],
  ['Keypad is blank, locked, or scrambled','','keypad','R:keypad',1],
  ['Monitoring called / “alarm signal” but all is fine','','phone','R:monitor']]},
 cameras:{q:'What about cameras?',o:[
  ['I want new cameras or a doorbell camera','Driveway, doors, yard','cam','R:newcam'],
  ['Existing cameras are down or I can’t see the app','','eye','R:camdown'],
  ['I need help placing them so they actually help','Blind spots, glare, height','home','R:camplace']]},
 quoteq:{q:'What are we covering?',o:[
  ['A home','Doors, windows, maybe cameras','home','R:homequote'],
  ['A small business or shop','After-hours, doors, cameras','biz','R:bizquote'],
  ['I already have a system — want local service','Takeover / service without ripping it out','shield','R:takeover']]},
 access:{q:'What about access?',o:[
  ['Need new user codes or to remove someone','Roommate, employee, contractor','lock','R:codes'],
  ['Locked out / forgot the master code','','keypad','R:lockout',1],
  ['Door lock or keypad lock acting up','','door','R:doorlock']]}
};
var STOP='Call now',TODAY='Call today',BOOK='Request a visit';
var R={
 breakin:['out','Get out + call 911','If you suspect a break-in: leave and call 911.',[
  '<b>Get to a safe place.</b> Don’t confront anyone.',
  '<b>Call 911 from outside or a neighbor’s.</b>',
  'If monitoring calls, give them your password only if you are safe and it’s actually you.',
  'After police clear it, call Nightwatch to inspect sensors and the panel.'],'911','Possible break-in / alarm won’t clear'],
 cantclear:['stop',STOP,'Siren won’t stop: try the code once, then call.',[
  'Enter your arm/disarm code on the keypad. On many panels you press Off / Disarm, code, Off again.',
  'If it keeps sounding and you are safe, leave the area so you can hear the phone.',
  'Call Nightwatch now. If you feel unsafe, call 911 first.'],'stop','Possible break-in / alarm won’t clear'],
 falseok:['book',BOOK,'False alarm cleared — good. Prevent the next one.',[
  'Note which zone tripped (door name, motion name) if the keypad showed it.',
  'Pets, loose door contacts, and drafts are common causes.',
  'Book a service visit if it happens more than once.'],'book','Alarm trouble / beeping'],
 nocode:['stop',STOP,'No working code: call now.',[
  'Don’t keep guessing codes — some panels lock out.',
  'If the siren is still going and neighbors are calling, stay available for monitoring.',
  '<b>Call Nightwatch now</b> to get a tech path and code reset with proof of address.'],'stop','Alarm trouble / beeping'],
 sensor:['today',TODAY,'Sensor won’t clear: call today.',[
  'Check that the door/window is fully closed and the magnet lines up with the sensor.',
  'For motion: leave the room empty for a minute and see if it clears.',
  'If it stays faulted, call today — a dead battery or misaligned contact is common.'],'today','Service / sensors / keypad'],
 battery:['today',TODAY,'Low battery / power trouble: call today.',[
  'If the house had a power blip, the panel may beep until backup battery recovers or is replaced.',
  'Don’t ignore week-long beeping — backup batteries fail and leave you unprotected in an outage.',
  'Call today for a battery / power check.'],'today','Alarm trouble / beeping'],
 keypad:['stop',STOP,'Keypad blank or locked: call now.',[
  'Check whether the whole system has power (other keypads, siren LED).',
  'Don’t pull the panel can open unless a tech asks you to.',
  '<b>Call now</b> — a dark keypad can mean power, wiring, or panel failure.'],'stop','Service / sensors / keypad'],
 monitor:['today',TODAY,'Monitoring called, house is fine: tidy it up today.',[
  'Ask which zone reported. That’s your clue for the false trip.',
  'Make sure your emergency contacts and passcode with the monitoring company are current.',
  'Call Nightwatch today if the same zone keeps reporting.'],'today','Alarm trouble / beeping'],
 newcam:['book',BOOK,'New cameras: let’s map the coverage.',[
  'List the spots you care about: front door, driveway, back yard, shop door.',
  'Note whether you want phone alerts, night vision, and local vs cloud recording.',
  'Request a visit — placement matters more than buying the fanciest camera.'],'book','Cameras or video doorbell'],
 camdown:['today',TODAY,'Cameras down: a few checks, then call.',[
  'Confirm Wi-Fi / PoE power to the camera and that the app still has the right account.',
  'Reboot the recorder / base station once.',
  'Still dark? Call today — wiring, power, or a dead unit needs a tech.'],'today','Cameras or video doorbell'],
 camplace:['book',BOOK,'Camera placement: book a walkthrough.',[
  'Good coverage beats more cameras. Height, angle, and glare matter.',
  'Bring photos of the house corners you worry about.',
  'Book a visit and we’ll mark where cameras actually help.'],'book','Cameras or video doorbell'],
 homequote:['book',BOOK,'Home system quote: start with doors and sleep areas.',[
  'Count exterior doors and ground-floor windows you want covered.',
  'Decide if you want cameras with the alarm, or alarm first.',
  'Leave your name below or call — no pressure pitch in this demo.'],'book','New system quote'],
 bizquote:['book',BOOK,'Business / shop coverage: after-hours first.',[
  'Note opening doors, bay doors, office windows, and cash / tool areas.',
  'Cameras at entry and the parking pad usually matter most.',
  'Request a quote — we’ll match zones to how you actually lock up.'],'book','New system quote'],
 takeover:['book',BOOK,'Already have a system? Local service is possible.',[
  'Many panels can be serviced or retaken without a full rip-out.',
  'Have the panel brand (often on the keypad) and whether monitoring is still active.',
  'Book a visit to see what’s reusable.'],'book','New system quote'],
 codes:['today',TODAY,'User codes: call today and clean the list.',[
  'Remove codes for people who shouldn’t have access anymore.',
  'Don’t share the master code casually — use user codes instead.',
  'Call today and we’ll walk through adding/removing users.'],'today','Codes & access'],
 lockout:['stop',STOP,'Locked out of the system: call now.',[
  'Don’t factory-reset the panel unless a tech is guiding you — that can wipe zones and monitoring.',
  'Have proof of address / ownership ready.',
  '<b>Call Nightwatch now</b> for a lockout reset path.'],'stop','Codes & access'],
 doorlock:['today',TODAY,'Door / keypad lock trouble: call today.',[
  'Check battery if it’s a battery lock. Replace with name-brand alkalines.',
  'Confirm the door latches cleanly — a binding door kills lock life.',
  'Call today if it still won’t lock/unlock reliably.'],'today','Codes & access'],
 other:['book',BOOK,'Something else? Tell us in the form.',[
  'Monitoring questions, add-on sensors, or a service visit we didn’t list.',
  'Leave a short note below — or call the number on the page.',
  'We’ll route it to the right next step.'],'book','Something else']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call Nightwatch</button>',
 stop:'<button class="btn btn-red demo" type="button">Call Nightwatch now</button><a class="btn btn-line" href="#tips">Codes tip</a>',
 today:'<button class="btn btn-gold demo" type="button">Call Nightwatch</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a visit</a><button class="btn btn-line demo" type="button">Call instead</button>'
};
var MAXD=3,stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.meter i'),hist=[],need=document.getElementById('need');
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Question '+n+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]?' danger':'')+'" type="button" data-i="'+i+'">'+ic(o[2])+'<span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
 stage.innerHTML=h+'</div></div>';stage.dataset.q=id;setTier('');bar.style.width=Math.min(14+hist.length/MAXD*60,80)+'%';
 if(focus)stage.querySelector('h3').focus({preventScroll:true});
}
function result(k,focus){
 var r=R[k],h='<div class="res '+r[0]+'" tabindex="-1"><p class="tag">'+r[1]+'</p><h3>'+esc(r[2])+'</h3><ol class="steps">';
 r[3].forEach(function(s){h+='<li>'+s+'</li>'});
 h+='</ol><div class="cta">'+CTA[r[4]]+'</div><button class="again" type="button" data-again>↻ Start over</button>'+(hist.length?' <button class="again" type="button" data-back>← Back</button>':'')+'</div>';
 stage.innerHTML=h;stage.dataset.q='';setTier(r[0]);bar.style.width='100%';
 if(need&&r[5])need.value=r[5];
 if(history.replaceState){try{history.replaceState(null,'',location.pathname+'?check='+k+(/[?&]shot=1/.test(location.search)?'&shot=1':'')+'#check')}catch(e){}}
 if(focus){var el=stage.querySelector('.res');el.focus({preventScroll:true});var t=box.getBoundingClientRect().top;if(t<0||t>innerHeight*.4)box.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
function go(next){if(next.indexOf('R:')===0)result(next.slice(2),true);else ask(next,true)}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]');
 if(o){var id=stage.dataset.q;hist.push(id);go(Q[id].o[+o.dataset.i][3])}
 else if(b){ask(hist.pop(),true)}
 else if(a){hist=[];ask('start',true);if(history.replaceState){try{history.replaceState(null,'',location.pathname+(/[?&]shot=1/.test(location.search)?'?shot=1':'')+'#check')}catch(e){}}}
});
ask('start',false);
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R[dl[1]]){hist=['start'];result(dl[1],false);box.classList.add('in')}
document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
