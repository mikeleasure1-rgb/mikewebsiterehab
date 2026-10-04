(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h,cls){T.innerHTML=h;T.className='toast'+(cls?' '+cls:'');T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},7000)}
document.addEventListener('click',function(e){
 var d=e.target.closest('.demo'),n=e.target.closest('.demo-911');
 if(d){e.preventDefault();toast('<strong>Demo:</strong> on the real site this calls the shop in one tap. '+TEL)}
 if(n){e.preventDefault();toast('<strong>Demo: this button doesn\'t dial.</strong> If anyone is in danger, dial 911 yourself now.','t911')}
});

/* ---- Locked out? guide ---- */
var P={
 car:'M18.9 6c-.2-.6-.8-1-1.4-1H6.5c-.7 0-1.2.4-1.4 1L3 12v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8zM6.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 11l1.5-4.5h11L19 11z',
 door:'M6 2h12a1 1 0 0 1 1 1v18h2v1H3v-1h2V3a1 1 0 0 1 1-1zm9 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
 alert:'M12 2 1 21h22zm-1 7h2v6h-2zm0 8h2v2h-2z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 home:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
 biz:'M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z',
 safe:'M4 3h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v1h-3v-1H8v1H5v-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
 key:'M12.65 10A6 6 0 0 0 7 6a6 6 0 0 0 0 12 6 6 0 0 0 5.65-4H17v4h4v-4h2v-4zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
 lost:'M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8l5 5 1.5-1.5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z',
 broke:'M7 6a6 6 0 1 0 5.65 8H14v-4h-1.35A6 6 0 0 0 7 6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9.2-4h2.3l-1.2 4H16zm3.8 0h3v4h-2v2h-2.2z',
 shield:'M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5zm-1 6h2v6h-2zm0 8h2v2h-2z',
 plan:'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14z',
 report:'M19 3h-4.2A3 3 0 0 0 12 1a3 3 0 0 0-2.8 2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z',
 box:'M2 3h20v4H2zm1 5h18v13H3zm6 3v2h6v-2z'
};
function ic(k){return '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="'+P[k]+'"/></svg>'}
/* option: [label, sub, icon, next, style] style 1=danger 2=ok */
var Q={
 safe:{q:'First: is anyone in danger right now?',o:[
  ['A child, pet or vulnerable person is locked in a car','Any weather. A closed car heats up fast.','car','R:car911',1],
  ['Someone is locked in a room or home and may need help','Not answering, hurt, ill, or a young child alone','door','R:room911',1],
  ['Another danger: a threat, a fire, or someone hurt','','alert','R:danger911',1],
  ['No, everyone is safe','','ok','what',2]]},
 what:{q:'What are you locked out of?',o:[
  ['My home or apartment','','home','home'],
  ['My car or truck','','car','car'],
  ['A business','Shop, office or building','biz','biz'],
  ['A safe, a room, or something else','','safe','other']]},
 home:{q:'What happened at home?',o:[
  ['The door locked and my keys are inside','','key','R:homein'],
  ['My keys are lost or stolen','','lost','R:homelost'],
  ['A key broke off in the lock, or won\'t turn','','broke','R:broken'],
  ['The lock was damaged in a break-in','Or someone tried to get in','shield','brk',1],
  ['I\'m not locked out. I want locks rekeyed or changed','After a move, lost keys, a roommate moving out','plan','R:rekey']]},
 car:{q:'What happened with the car?',o:[
  ['My keys are locked inside','','key','R:carin'],
  ['My keys are lost, and there\'s no spare','','lost','R:carlost'],
  ['The key broke, or won\'t turn in the door or ignition','','broke','R:carbroken']]},
 biz:{q:'What happened at the business?',o:[
  ['Locked out, keys inside or lost','','key','R:bizin'],
  ['A break-in, or a damaged lock','','shield','brk',1],
  ['We need locks rekeyed or changed','Staff changes, lost keys, a new location','plan','R:rekey']]},
 brk:{q:'Did the break-in just happen, or could someone still be inside?',o:[
  ['It just happened, or I\'m not sure','Someone could still be inside','alert','R:police',1],
  ['It was earlier, and it hasn\'t been reported yet','No one is inside','report','R:report'],
  ['Police have already come. I need it secured.','','ok','R:breakin',2]]},
 other:{q:'What are you locked out of?',o:[
  ['A safe','Home or business safe','safe','R:safe'],
  ['A room inside the house','Bedroom, bathroom or closet door','door','R:interior'],
  ['Something else','Mailbox, gate, cabinet or file drawer','box','R:misc']]}
};
var ID='Photo ID',PLACE='Proof it\'s your place: lease, deed, utility bill or business license',HOME='Proof you live there: lease, deed or utility bill',CAR='Registration or title',MMY='Car make, model and year',INSIDE='ID locked inside? Say so when you call.';
/* result: [tier, tag, title, steps, cta, form value, have-ready, note] */
var R={
 car911:['emergency','Call 911 now','Call 911 now. Don\'t wait for a locksmith.',[
  '<b>Call 911 right now.</b> A closed car can get dangerously hot within minutes, even on a mild day and even with the windows cracked.',
  'Tell them a child, pet or person is locked in a car, and exactly where you are.',
  'Stay with the car and keep talking to whoever is inside if you can.',
  'Follow the dispatcher\'s directions, including whether to break a window.'],'911','Locked out of car'],
 room911:['emergency','Call 911 now','Someone may need help. Call 911.',[
  '<b>Call 911</b> if the person isn\'t answering, may be hurt or ill, or is a young child alone.',
  'Keep talking to them through the door if you can.',
  'Don\'t wait on a locksmith when someone may need medical help. Emergency responders can get in.',
  'Once everyone is safe, get the lock fixed or replaced.'],'911','Something else'],
 danger911:['emergency','Call 911 now','Get somewhere safe, then call 911.',[
  '<b>Get yourself and anyone with you to a safe place first.</b>',
  '<b>Call 911.</b> A locked door can wait.',
  'If there\'s fire or smoke, get out and stay out.',
  'Once police or firefighters say it\'s safe, get the door secured.'],'911','Something else'],
 police:['police','Call police first','Don\'t go in. Call 911 from somewhere safe.',[
  '<b>Don\'t go inside.</b> Someone could still be there.',
  '<b>Get to a safe place, like your car or a neighbor\'s, and call 911.</b>',
  'Don\'t touch the door, the lock or anything else until police say it\'s OK.',
  'Once police clear it, call to get the door secured.'],'police','Break-in or damaged lock'],
 report:['police','Call police first','Report it before the repair.',[
  '<b>If you think anyone could be inside, leave and call 911.</b>',
  'Otherwise, call the police non-emergency line to report the break-in. Keep the report number.',
  '<b>Take photos of the damage</b> before anything is fixed, for police and insurance.',
  'Check whether any keys were taken. If so, plan to rekey or change those locks.',
  'Then call to get the door secured.'],'call','Break-in or damaged lock',[ID,PLACE,'Police report number']],
 breakin:['now','Secure it · call now','Get that door secured today.',[
  '<b>Take photos of the damage</b> before the repair, for insurance.',
  'Have the police report number handy.',
  'If any keys were taken, ask about rekeying or changing every lock they fit.',
  'If the door can\'t be secured tonight, don\'t stay there alone.'],'call','Break-in or damaged lock',[ID,PLACE,'Police report number']],
 homein:['now','Lockout · call now','Locked out of home? Call now.',[
  'Check the easy ones first: other doors, a garage keypad, or someone else with a key.',
  'Renting? Your landlord or property manager may have a key.',
  '<b>Don\'t force a window or door.</b> The repair usually costs more than the lockout.',
  'Call and say where you are and what kind of lock it is: knob, deadbolt or smart lock.'],'call','Locked out of home',[ID,HOME],INSIDE],
 homelost:['now','Lockout · call now','Lost keys? Get in, then rekey.',[
  'Retrace your steps and check with anyone who has a spare.',
  'Call to get back in.',
  '<b>If the keys had your address on them, or may have been stolen, rekey or change the locks</b> so the old keys stop working.',
  'Car key or garage remote on the same ring? Mention it when you call.'],'call','Lost all keys',[ID,HOME],INSIDE],
 broken:['now','Lockout · call now','Key broke or stuck? Don\'t force it.',[
  '<b>Stop turning.</b> Forcing a stuck or broken key can damage the lock.',
  'Don\'t use glue, or dig at it with a knife or pin. That often jams it deeper.',
  'If part of the key sticks out, you can try pulling it gently straight out with needle-nose pliers.',
  'Keep the broken piece. It can help make a new key.'],'call','Key broke in the lock',[ID,HOME]],
 rekey:['schedule','Can schedule','Rekey or change locks: book a time.',[
  '<b>Rekeying</b> changes the inside of the lock so old keys stop working. You keep the hardware.',
  '<b>Changing locks</b> swaps the hardware. Good for worn, damaged or outdated locks.',
  'Count the doors, note the lock types (knob, deadbolt, lever, smart lock), and decide if you want one key for every door.',
  'Book a time below, or call.'],'schedule','Rekey or change locks',[ID,'Proof you own or manage the property']],
 carin:['now','Lockout · call now','Keys locked in the car? Call now.',[
  '<b>If a child or pet is inside, call 911 now.</b>',
  'Check every door and the trunk. A spare at home, or a car app that unlocks the doors?',
  'Don\'t use a coat hanger or a wedge. It can damage the door, the seals or the wiring.',
  'On a busy road? Move somewhere safe to wait. Your insurance or roadside plan may cover lockouts.'],'call','Locked out of car',[ID,CAR,MMY,'Where the car is'],INSIDE],
 carlost:['now','Lockout · call now','No key at all? Call with the car details.',[
  'Call and ask whether they can make a key for your exact car.',
  'Have the <b>make, model and year</b> ready, and say whether it uses a push-button start, a fob or a regular key.',
  'The VIN is on your registration and on the dashboard, visible through the windshield on the driver\'s side.',
  'Ask what proof of ownership they need before they come out.'],'call','Lost car keys',[ID,CAR,MMY,'VIN']],
 carbroken:['now','Lockout · call now','Key stuck or snapped? Don\'t force it.',[
  '<b>Stop turning.</b> Forcing it can damage the ignition or the door lock.',
  'Stuck in the ignition? Make sure the car is in Park, then gently turn the steering wheel side to side while turning the key. A locked wheel often holds the key.',
  'Keep any broken piece. It helps cut a new key.',
  'Still stuck? Call with the make, model and year.'],'call','Key broke in the lock',[ID,CAR,MMY]],
 bizin:['now','Lockout · call now','Locked out of the business? Call now.',[
  'Check whether an owner, manager or landlord has a key or code.',
  'If there\'s an alarm, have the code or the alarm company\'s number ready.',
  '<b>Expect to show you\'re authorized to be there.</b> That protects the business.',
  'Call and say what kind of door and lock it is.'],'call','Locked out of business',[ID,'Proof you\'re authorized: business license, lease, or the owner on the phone']],
 safe:['schedule','Can schedule','Locked out of a safe? Book a time.',[
  'Don\'t pry or drill it yourself. That can lock it for good and damage what\'s inside.',
  'Try the combination again slowly, and check the manual for a backup key or override.',
  'Note the brand, and any model or serial number you can see.',
  '<b>If medication or something urgent is inside, say so when you call.</b>'],'schedule','Safe',[ID,'Proof it\'s yours, like the receipt']],
 interior:['now','Try this first','Locked out of a room? Try this first.',[
  '<b>If anyone on the other side may need help, call 911.</b>',
  'Many bedroom and bathroom knobs have a small hole on the outside. A thin, straight tool pushed in (or turned) can release the lock.',
  'Don\'t kick or force the door. It\'s an expensive repair.',
  'Still stuck? Call.'],'call','Something else'],
 misc:['schedule','Can schedule','Tell us what it is. Book a time.',[
  'Mailboxes, gates, cabinets and file drawers often have simpler locks.',
  'Take a photo of the lock and any numbers on the key or lock face.',
  'Need it today? Call. Otherwise, book a time below.'],'schedule','Something else',[ID,'For a mailbox: proof of address']]
};
var CTA={
 '911':'<a class="btn btn-red demo-911" href="#demo-note" role="button">Call 911</a><a class="btn btn-line demo" href="#demo-note" role="button">Then call the shop</a>',
 police:'<a class="btn btn-pol demo-911" href="#demo-note" role="button">Call 911</a><a class="btn btn-line demo" href="#demo-note" role="button">Then call the shop</a>',
 call:'<a class="btn btn-brass demo" href="#demo-note" role="button">Call now</a><a class="btn btn-line" href="#quote" data-pref>Or get a callback</a>',
 schedule:'<a class="btn btn-ink" href="#quote" data-pref>Book a time</a><a class="btn btn-line demo" href="#demo-note" role="button">Call instead</a>'
};
var MAXD=3,stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.prog i'),hist=[],need=document.getElementById('need');
var RM=matchMedia('(prefers-reduced-motion: reduce)');
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function into(){var t=box.getBoundingClientRect().top;if(t<0||t>innerHeight*.45)box.scrollIntoView({behavior:RM.matches?'auto':'smooth',block:'start'})}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span'+(id==='safe'?' class="safe"':'')+'>'+(id==='safe'?'Safety first':'Question '+n)+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]===1?' danger':o[4]===2?' ok':'')+'" type="button" data-i="'+i+'"><span class="oi" aria-hidden="true">'+ic(o[2])+'</span><span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
 stage.innerHTML=h+'</div></div>';stage.dataset.q=id;setTier('');bar.style.width=Math.min(10+hist.length/MAXD*72,82)+'%';
 if(focus){stage.querySelector('h3').focus({preventScroll:true});into()}
}
function result(k,focus){
 var r=R[k],h='<div class="res '+r[0]+'" tabindex="-1" data-r="'+k+'"><p class="tag">'+r[1]+'</p><h3>'+esc(r[2])+'</h3><ol class="steps">';
 r[3].forEach(function(s){h+='<li>'+s+'</li>'});
 h+='</ol>';
 if(r[6]){h+='<div class="ready"><p>Have ready</p><ul>';r[6].forEach(function(x){h+='<li>'+esc(x)+'</li>'});h+='</ul>'+(r[7]?'<p class="note">'+esc(r[7])+'</p>':'')+'</div>'}
 h+='<div class="cta">'+CTA[r[4]]+'</div><div class="again-row"><button class="again" type="button" data-again>↻ Start over</button>'+(hist.length?'<button class="again" type="button" data-back>← Back</button>':'')+'</div></div>';
 stage.innerHTML=h;stage.dataset.q='';setTier(r[0]);bar.style.width='100%';
 if(need&&r[5])need.value=r[5];
 if(focus){stage.querySelector('.res').focus({preventScroll:true});into()}
}
function go(next){if(next.indexOf('R:')===0)result(next.slice(2),true);else ask(next,true)}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]');
 if(o){var id=stage.dataset.q;hist.push(id);go(Q[id].o[+o.dataset.i][3])}
 else if(b){ask(hist.pop(),true)}
 else if(a){hist=[];ask('safe',true)}
});
ask('safe',false);
/* deep link to a result, e.g. ?check=carin#check (shareable from a text or a Google post) */
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R.hasOwnProperty(dl[1])){hist=['safe'];result(dl[1],false);box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
