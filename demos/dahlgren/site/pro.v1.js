(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the garage in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. In a real emergency, call 911 yourself once you are away from the car.');
});

/* ---- Is it safe to drive? ---- */
var P={
 lamp:'M12 3a8 8 0 0 0-8 8v3H2v2h20v-2h-2v-3a8 8 0 0 0-8-8zm-1 3h2v6h-2zm0 7h2v2h-2zM7 18h10v2H7z',
 noise:'M3 9h4l5-4v14l-5-4H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z',
 smoke:'M8 21c-2.8 0-5-2-5-4.6 0-2 1.3-3.6 3.2-4.2A5 5 0 0 1 16 10.5a4 4 0 0 1 5 3.9C21 18 18.6 21 15.5 21zM9 2c1.5 1.4 1.5 3 0 4.4 1.5 1.4 1.5 3 0 4.4-.2-1.5-2.4-2.9-.6-4.4-1.8-1.5.4-2.9.6-4.4z',
 wheel:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 7.7 6h-4.3a3.5 3.5 0 0 0-6.8 0H4.3A8 8 0 0 1 12 4zM4.3 12h3.9l2.8 3v4.9A8 8 0 0 1 4.3 12zm8.7 7.9V15l2.8-3h3.9a8 8 0 0 1-6.7 7.9z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9zm2 2h4v4H7z',
 oil:'M3 8h4l2-2h4v2h-2v1l6 2 5-3-6 9H6a2 2 0 0 1-2-2v-3L2 10zm17 9a2 2 0 0 0 4 0c0-1.2-2-3.6-2-3.6s-2 2.4-2 3.6z',
 temp:'M11 2a3 3 0 0 0-3 3v8.3a5 5 0 1 0 6 0V5a3 3 0 0 0-3-3zm0 2a1 1 0 0 1 1 1v9.4l.5.3a3 3 0 1 1-3 0l.5-.3V12h2v-2h-2V8h2V6h-2V5a1 1 0 0 1 1-1zm6 3h5v2h-5zm0 4h5v2h-5z',
 eng:'M7 5h6v2h-2v2h4l2 2h2V9h2v8h-2v-2h-2l-2 3H8l-2-2H4v2H2V9h2v3h2V9h1z',
 brake:'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 3h2v6h-2zm0 8h2v2h-2zM3.5 5.6 5 7a9.9 9.9 0 0 0 0 10l-1.5 1.4a12 12 0 0 1 0-12.8zm17 0a12 12 0 0 1 0 12.8L19 17a9.9 9.9 0 0 0 0-10z',
 bat:'M6 5h3v2h6V5h3v2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm-1 7v2h5v-2zm9 0v2h1.5v1.5h2V14H19v-2h-1.5v-1.5h-2V12z',
 tire:'M12 2a10 10 0 0 0-7 17.1L3 21h18l-2-1.9A10 10 0 0 0 12 2zm-1 4h2v7h-2zm0 9h2v2h-2z',
 knock:'M4 4h16v4H4zm2 6h12l-1 10H7zm3 2v6h2v-6zm4 0v6h2v-6z',
 bump:'M2 17c3 0 4-6 7-6s4 6 7 6 3-2 6-2v3c-2 0-3 2-6 2s-5-6-7-6-4 6-7 6z',
 hum:'M2 12c2-4 3-4 5 0s3 4 5 0 3-4 5 0 3 4 5 0v2c-2 4-3 4-5 0s-3-4-5 0-3 4-5 0-3-4-5 0z',
 belt:'M6 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM5.6 11.9l8.6 7.4 1.3-1.5L7 10.4zM8.6 5.2l10.1 4.9.9-1.8-10.1-5z',
 fire:'M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5s.5 2 2 2.5C10 7 12 2 12 2zm0 20c-4 0-7-2.7-7-6.4 0-1.6.6-3 1.4-4.2.4 3.6 2.8 6.1 5.6 6.1s5.2-2.5 5.6-6.1c.8 1.2 1.4 2.6 1.4 4.2C19 19.3 16 22 12 22z',
 drop:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 x:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v7h-2zm0 9h2v2h-2z',
 key:'M7 9a5 5 0 1 1 4.6 6.9L10 17.5H8v2H6v2H2v-4l5.1-5.1A5 5 0 0 1 7 9zm5-1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z',
 gear:'M4 7h9l2-3h3l-2 3h4v3h-2l-1 7H5L4 10H2V7zm4 4v4h2v-4zm4 0v4h2v-4z',
 fan:'M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm1-8c4 0 5 3 3 6l-2 2.3a3 3 0 0 0-1.2-.3zm9 11c0 4-3 5-6 3l-2.3-2a3 3 0 0 0 .3-1.2zM11 22c-4 0-5-3-3-6l2-2.3a3 3 0 0 0 1.2.3zM2 11c0-4 3-5 6-3l2.3 2a3 3 0 0 0-.3 1.2z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'
};
function ic(k,c){return '<span class="oi'+(c?' '+c:'')+'" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
/* option: [label, hint, icon, next, danger, lampClass] */
var Q={
 start:{q:'What is the car doing?',o:[
  ['Smoke, flames or a fuel smell','From under the hood, the car, or inside','fire','R:fire',1],
  ['A warning light came on','On the dash','lamp','light'],
  ['It is making a noise','Grinding, knocking, squealing, humming','noise','noise'],
  ['Steam or another smell','Sweet, burning, rotten-egg','smoke','smell'],
  ['It drives, shifts or starts wrong','Pulling, shaking, slipping, won\'t start','wheel','feel'],
  ['Nothing wrong, it is due for service','Maintenance or a check-up','cal','R:service']]},
 light:{q:'Which light is on?',o:[
  ['Oil pressure','Red oil can','oil','R:oil',1,'lamp-r'],
  ['Engine temperature','Red thermometer, or the gauge reads hot','temp','R:hot',1,'lamp-r'],
  ['Brake warning','Red BRAKE or (!) light','brake','brakelight',0,'lamp-r'],
  ['Check engine','Amber engine shape','eng','cel',0,'lamp-a'],
  ['Battery or charging','Red battery shape','bat','R:battery',0,'lamp-r'],
  ['Tire pressure','Amber (!) inside a tire shape','tire','R:tpms',0,'lamp-a']]},
 cel:{q:'Is the check engine light flashing?',o:[
  ['Yes, it is flashing','Often with shaking or loss of power','eng','R:celflash',1,'lamp-a'],
  ['Steady, and the car runs rough or weak','','eng','R:celrough',0,'lamp-a'],
  ['Steady, and the car drives normally','','ok','R:celsteady']]},
 brakelight:{q:'Is the parking brake all the way off, and how does the pedal feel?',o:[
  ['Pedal feels soft, low or sinks','Or the car takes longer to stop','brake','R:brakefail',1,'lamp-r'],
  ['Pedal feels normal, light stays on','Parking brake is fully released','brake','R:brakelight']]},
 noise:{q:'When do you hear it?',o:[
  ['When I brake','','brake','brakes'],
  ['From the engine: knocking or ticking','Gets faster as the engine revs','knock','R:knock'],
  ['A clunk over bumps or turning','','bump','R:clunk'],
  ['A hum or growl that rises with speed','','hum','R:hum'],
  ['A squeal at startup or with the A/C on','','belt','R:belt'],
  ['A loud roar from under the car','Louder than it used to be','noise','R:exhaust']]},
 brakes:{q:'What does it sound and feel like?',o:[
  ['Pedal feels soft or sinks','Or the car takes longer to stop','brake','R:brakefail',1],
  ['Metal-on-metal grinding','','brake','R:brakegrind'],
  ['A high squeal, pedal feels normal','','brake','R:brakesqueal']]},
 smell:{q:'What do you see or smell?',o:[
  ['Steam and a sweet, syrupy smell','Often with the temperature gauge rising','temp','R:hot',1],
  ['Raw gasoline','','drop','R:fuel',1],
  ['Burning oil','Or blue-gray smoke from the exhaust','oil','R:oilsmell'],
  ['A hot smell near one wheel','','tire','R:brakedrag'],
  ['Rotten eggs','','smoke','R:egg']]},
 feel:{q:'What is it doing?',o:[
  ['Won\'t start, or cranks slowly','','key','R:nostart'],
  ['Shakes or vibrates at speed','','wheel','R:vibe'],
  ['Pulls to one side, or the wheel is off-center','','wheel','R:align'],
  ['Slips, shifts hard, or hesitates in gear','','gear','R:trans'],
  ['Heat or A/C is not working','','fan','R:hvac']]}
};
/* result: [tier, tag, headline, steps, cta, formNeed] */
var STOP='Don\'t drive it',TODAY='Call today',BOOK='Safe to drive · book a visit';
var R={
 fire:['stop','Emergency','Pull over. Get out. Call 911.',[
  '<b>Pull over as soon as it is safe and turn the engine off.</b>',
  '<b>Get everyone out</b> and move well away from the car, off the road and upwind.',
  '<b>Call 911.</b> Don\'t open the hood or go back for belongings.',
  'Once it is out and safe, have the car towed. Don\'t try to start it.'],'911','Smoke, steam or a smell'],
 fuel:['stop',STOP,'Fuel smell: park it and don\'t start it.',[
  '<b>Turn the engine off.</b> No smoking, lighters or sparks anywhere near the car.',
  'Get everyone out. If the smell is strong or you see fuel dripping, <b>move well away and call 911.</b>',
  'Don\'t drive it to the shop. Have it towed in.'],'tow','Smoke, steam or a smell'],
 oil:['stop',STOP,'Oil pressure light: shut it off now.',[
  '<b>Pull over as soon as it is safe and turn the engine off.</b> Running without oil pressure can ruin an engine within minutes.',
  'Wait a few minutes, then check the dipstick on level ground.',
  'Even if you add oil, <b>if the light comes back on, don\'t drive it.</b> Have it towed.'],'tow','Warning light'],
 hot:['stop',STOP,'Running hot: pull over and let it cool.',[
  '<b>Pull over and shut the engine off.</b> Turning the heater on full can shed some heat while you get to a safe spot.',
  '<b>Never open the radiator or coolant cap while it is hot.</b> It can spray scalding coolant.',
  'Let it cool for at least 30 minutes.',
  'If coolant is leaking or the gauge climbs again, don\'t keep driving. Have it towed.'],'tow','Smoke, steam or a smell'],
 brakefail:['stop',STOP,'Soft or sinking pedal: don\'t drive it.',[
  '<b>Slow down gently and pull over somewhere safe.</b> Use the parking brake slowly if you need it.',
  'Don\'t drive on brakes that feel soft, low or slow to stop the car.',
  'Have it towed in, and call to set up a brake check.'],'tow','Brakes'],
 celflash:['stop','Stop driving soon','Flashing check engine light: ease off.',[
  'A flashing light usually means the engine is misfiring badly, which can overheat and damage parts of the exhaust.',
  '<b>Slow down, avoid hard acceleration, and get off the road when it is safe.</b>',
  'If it shakes, smells or loses power, don\'t keep driving. Have it towed.',
  'Call today to get it looked at.'],'today','Warning light'],
 celrough:['today',TODAY,'Steady light, running rough: get it checked today.',[
  'Drive as little as possible, and gently.',
  'If the light starts flashing, or it shakes, smells or loses power, pull over and call for a tow.',
  'Call today so the shop can read the code and find the cause.'],'today','Warning light'],
 celsteady:['book',BOOK,'Steady check engine light, runs fine.',[
  'Make sure the gas cap is on tight. A loose cap can turn the light on.',
  'Keep an eye on the gauges. If the light starts flashing, or the car runs rough, stop and call.',
  'Book a visit to read the code before a small problem gets bigger.'],'book','Warning light'],
 brakelight:['today',TODAY,'Brake light stays on: get it checked today.',[
  'With the parking brake fully off, a red brake light can mean low brake fluid or a brake system fault.',
  'Drive carefully, leave extra room to stop, and go straight to where you need to be.',
  '<b>If the pedal starts to feel soft or low, stop driving</b> and have it towed.'],'today','Brakes'],
 battery:['today',TODAY,'Battery light: the car may stall soon.',[
  'Turn off what you can: A/C, heated seats, radio, phone chargers.',
  'Drive straight to the shop or home. Avoid shutting it off if you need it to restart.',
  '<b>If the temperature gauge also rises, pull over.</b> A broken belt can stop the cooling system too.',
  'Call today.'],'today','Warning light'],
 tpms:['today','Check tires first','Tire light: look at all four tires.',[
  '<b>If a tire looks flat or low, don\'t drive on it.</b> Put on the spare or call roadside help.',
  'If they look fine, check each tire with a gauge and fill to the pressure on the driver\'s door sticker.',
  'If the light comes back within a day or two, you may have a slow leak. Call to have it checked.'],'today','Something else'],
 knock:['today',TODAY,'Engine knock: check the oil and take it easy.',[
  'Check the oil level on level ground. Low oil is a common cause of ticking or knocking.',
  '<b>A deep knock that gets louder means stop driving.</b> It can mean serious engine damage. Have it towed.',
  'Call today and describe when the sound happens.'],'today','Noise'],
 clunk:['book',BOOK,'Clunk over bumps: book a check soon.',[
  'A clunk over bumps or while turning often points to worn suspension or steering parts.',
  '<b>If the steering feels loose or the car wanders, slow down and call today.</b>',
  'Otherwise, book a visit soon. Worn parts wear tires and get worse over time.'],'book','Noise'],
 hum:['book',BOOK,'A hum that rises with speed.',[
  'This is often a worn wheel bearing or uneven tire wear.',
  'Book a visit soon so it doesn\'t wear other parts.',
  'If it turns into grinding, or the car starts to pull, call today.'],'book','Noise'],
 belt:['book',BOOK,'Squeal at startup: likely a belt.',[
  'A squeal at startup or with the A/C on is usually a worn or loose belt.',
  'Book a visit soon. A belt can also run the charging and cooling systems.',
  'If the battery light or temperature light comes on, pull over and call.'],'book','Noise'],
 exhaust:['today',TODAY,'Loud exhaust: keep fresh air coming in.',[
  'A loud roar can be an exhaust leak, and exhaust can carry carbon monoxide into the cabin.',
  'Crack the windows and don\'t sit in the car with the engine running in a garage.',
  '<b>If anyone gets a headache, dizzy or drowsy, pull over and get out into fresh air.</b>',
  'Call today.'],'today','Noise'],
 brakegrind:['today',TODAY,'Grinding brakes: drive as little as possible.',[
  'Grinding usually means the pads are worn through and metal is rubbing metal. Stopping gets weaker.',
  'Leave extra room to stop and keep trips short.',
  'Call today. Waiting can turn a pad job into rotors and more.'],'today','Brakes'],
 brakesqueal:['book',BOOK,'Squeaky brakes, normal pedal.',[
  'Many pads have a built-in squealer that warns you they are getting thin.',
  'Book a brake check in the next week or two.',
  'If it turns to grinding, or the pedal feels different, call today.'],'book','Brakes'],
 oilsmell:['today',TODAY,'Burning oil: look for a leak.',[
  'Check the oil level and look under the car for fresh drips.',
  'Oil dripping onto a hot exhaust smells like burning and can smoke.',
  '<b>If you see smoke from under the hood, pull over, get out and call 911.</b>',
  'Call today to find the leak.'],'today','Smoke, steam or a smell'],
 brakedrag:['today',TODAY,'Hot smell at one wheel: a brake may be dragging.',[
  'Make sure the parking brake is fully off.',
  'Let it cool. Don\'t touch the wheel, it can be very hot.',
  '<b>If that wheel is smoking or the car pulls hard, don\'t keep driving.</b> Call for a tow.',
  'Call today.'],'today','Brakes'],
 egg:['book',BOOK,'Rotten-egg smell: book a check.',[
  'This smell often comes from the exhaust system or a fuel-mixture problem.',
  'If the check engine light is flashing, or the car runs rough, call today.',
  'Otherwise, book a visit soon.'],'book','Smoke, steam or a smell'],
 nostart:['today',TODAY,'Won\'t start: a few quick checks.',[
  'Clicking, or dim lights, usually points to the battery or its cables. A jump-start may get you going.',
  'If it cranks but won\'t fire, don\'t keep cranking. Try in short bursts with a rest in between.',
  'Call to talk it through or set up a tow.'],'today','Won\'t start'],
 vibe:['today',TODAY,'Shaking at speed: slow down and look at the tires.',[
  '<b>Pull over somewhere safe and look for a bulge or a flat spot on each tire.</b> A bulging tire can fail. Use the spare.',
  'If the shaking started right after a pothole or curb, it may be a bent wheel or tire damage.',
  'Keep speeds down and call today.'],'today','Pulling, shaking or alignment'],
 align:['book',BOOK,'Pulling or off-center wheel: book an alignment check.',[
  'Check that all four tires are at the pressure on the door sticker. A low tire can make a car pull.',
  'If it still pulls, book an alignment check. Misalignment wears tires fast.',
  'If the pull is sudden and strong, or happens when you brake, call today.'],'book','Pulling, shaking or alignment'],
 trans:['today',TODAY,'Transmission trouble: call today.',[
  'Slipping, hard shifts or a delay going into gear are worth checking soon. They usually get worse, not better.',
  'Drive gently and avoid towing or heavy loads.',
  'If it won\'t go into gear, or you see red fluid under the car, have it towed.'],'today','Transmission'],
 hvac:['book',BOOK,'Heat or A/C out: book a visit.',[
  'Usually safe to drive. But if the defroster won\'t clear the windshield, wait until you can see clearly.',
  '<b>If the heat quits and the temperature gauge climbs, pull over.</b> That is an overheating problem.',
  'Book a visit to find the cause.'],'book','Heat or A/C'],
 service:['book','Book a visit','Let\'s get it on the calendar.',[
  'Oil changes, brake checks, alignment, and getting ready for a trip or the season.',
  'Leave your name and car in the form below, or call.'],'book','Routine maintenance']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call the garage</button>',
 tow:'<button class="btn btn-red demo" type="button">Call the garage</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 today:'<button class="btn btn-sig demo" type="button">Call the garage</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 book:'<a class="btn btn-ink" href="#quote" data-pref>Book a visit</a><button class="btn btn-line demo" type="button">Call instead</button>'
};
var MAXD=3,stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.prog i'),hist=[],need=document.getElementById('need');
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
/* deep link to a result, e.g. ?check=oil#check (shareable from a text or a Google post) */
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R[dl[1]]){hist=['start'];result(dl[1],false);box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
