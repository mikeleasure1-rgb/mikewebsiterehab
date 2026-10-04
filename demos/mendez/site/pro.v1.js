(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the shop in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. In a real emergency, call 911 yourself from outside.');
});

/* ---- Is this an emergency? ---- */
var ICON={fire:'🔥',smell:'👃',no:'✓',water:'💧',line:'⚡',hot:'♨',house:'🏠',room:'🔌',trip:'⏻',flick:'💡',plan:'🗓',yes:'✓',unsure:'?',again:'↻',one:'1'};
var Q={
 danger:{q:'Right now, do you see smoke, flames or sparks, or smell something burning?',o:[
  ['Smoke, flames or sparks','Anywhere in the house','fire','R:fire',1],
  ['A burning or hot-plastic smell','No smoke that I can see','smell','R:smell',1],
  ['No, none of that','','no','water']]},
 water:{q:'Is there water near anything electrical, or a power line down outside?',o:[
  ['Water near outlets, wiring or the panel','Flooding, a leak, a wet basement','water','R:water',1],
  ['A power line is down','On the ground, a car, a fence or a tree','line','R:line',1],
  ['No','','no','hot']]},
 hot:{q:'Is an outlet, switch or the panel hot, buzzing or crackling? Or did anyone get a shock?',o:[
  ['Yes','Hot to the touch, buzzing, scorch marks, or a shock','hot','R:hot',1],
  ['No','','no','power']]},
 power:{q:'What is going on with your power?',o:[
  ['The whole house is out','','house','neighbors'],
  ['One room or a few outlets are dead','','room','R:partial'],
  ['A breaker keeps tripping','','trip','trip'],
  ['Lights flicker or dim','','flick','flicker'],
  ['Nothing is broken, I want work done','Panel upgrade, lighting, fans, a new circuit','plan','R:plan']]},
 neighbors:{q:'Look outside. Are your neighbors out too?',o:[
  ['Yes, the street is dark','','yes','R:utility'],
  ['No, just my house','','house','R:mainout'],
  ['Not sure','','unsure','R:mainout']]},
 trip:{q:'When you reset it, what happens?',o:[
  ['It trips again right away','Or it trips with nothing running','trip','R:tripnow'],
  ['It trips now and then','Usually when a few big things run at once','one','R:tripload']]},
 flicker:{q:'Where are the lights flickering?',o:[
  ['One light or one fixture','','one','R:flick1'],
  ['Lots of lights, or they dim hard','Often when the AC, dryer or microwave kicks on','flick','R:flickall']]}
};
var R={
 fire:['emergency','Emergency · get out','Get everyone out. Call 911.',[
  '<b>Get everyone out of the house now.</b> Don\'t stop to grab things.',
  '<b>Call 911 from outside.</b>',
  'Never use water on an electrical fire, and don\'t go back in for anything.',
  'Once the fire department says it\'s safe, call an electrician before the power goes back on.'],'911','Burning smell'],
 smell:['emergency','Emergency · call now','Stop using it. Call an electrician now.',[
  '<b>If you see smoke or the smell gets stronger, get everyone out and call 911.</b>',
  'Stop using the outlet, switch or appliance. Don\'t touch it if it feels hot.',
  'If you can reach the panel with dry hands and dry feet, switch off that circuit\'s breaker, or the main.',
  'Call now. A burning smell from wiring shouldn\'t wait until tomorrow.'],'call','Burning smell'],
 water:['emergency','Emergency · stay clear','Stay out of the water. Don\'t touch anything electrical.',[
  '<b>Don\'t step into standing water</b> that could reach outlets, cords or appliances.',
  'Only shut off the main breaker if you can reach the panel while standing somewhere dry. If not, leave it.',
  '<b>If you can\'t shut the power off safely, get out and call your power company or 911.</b>',
  'Have an electrician check everything that got wet before it\'s used again.'],'call','Water near electrical'],
 line:['emergency','Emergency · stay back','Stay far away. Call 911.',[
  '<b>Treat every downed line as live,</b> even if it isn\'t sparking.',
  '<b>Stay at least 35 feet away</b> and keep kids and pets back. Don\'t touch anything the line is touching.',
  'Call 911, then your power company. Never drive over a downed line.',
  'If the line to your house or your meter was damaged, call an electrician once the utility says it\'s safe.'],'911','Power out'],
 hot:['sameday','Same-day visit','Stop using it. Get it checked today.',[
  '<b>If anyone was hurt by a shock, call 911.</b> Don\'t touch a person who is still touching the source. Cut the power first if you can do it safely.',
  'Stop using that outlet or switch. Don\'t touch it if it\'s hot.',
  'If you can reach the panel safely, switch off that circuit\'s breaker.',
  'If it starts to smoke or smell like burning, get everyone out and call 911.'],'sameday','Hot, buzzing or sparking outlet or switch'],
 mainout:['sameday','Same-day visit','Just your house is out. Call today.',[
  'Check the main breaker in your panel. If it has tripped, switch it fully off, then on, <b>one time</b>.',
  'If it trips again, or nothing changes, leave it off and call.',
  '<b>If the meter or the wires to your house look damaged, stay away</b> and call your power company first.',
  'Unplug computers and TVs so they\'re protected when the power comes back.'],'sameday','Power out'],
 utility:['utility','Power company','Likely an outage. Report it to your power company.',[
  'Report the outage to your power company by app, website or phone.',
  'Unplug sensitive electronics, and leave one lamp on so you know when power is back.',
  'Use flashlights instead of candles.',
  '<b>Using a generator? Run it outside,</b> far from doors and windows, and never plug it into a wall outlet.',
  'If your neighbors get power back and you don\'t, call an electrician.'],'utility','Power out'],
 partial:['schedule','Can schedule','Often a quick fix. Try this first.',[
  'Look for a tripped breaker in the panel. Switch it fully off, then on, <b>one time</b>.',
  'Press <b>Reset</b> on any GFCI outlets (the ones with Test and Reset buttons). Check the kitchen, baths, garage and outside.',
  'Still dead? Book a visit.',
  'If that circuit runs your fridge, sump pump, heat or medical equipment, ask for a same-day visit.'],'schedule','Dead outlets'],
 tripnow:['sameday','Same-day visit','Leave it off. Get it checked today.',[
  '<b>Don\'t keep resetting it.</b> A breaker that trips right away is protecting you from a fault.',
  'Unplug what\'s on that circuit and leave the breaker off.',
  'If the breaker or panel is hot, or you smell burning, treat it as an emergency: get out and call 911 if there\'s smoke.'],'sameday','Breaker keeps tripping'],
 tripload:['schedule','Can schedule','Likely an overloaded circuit.',[
  'Move big-draw things like space heaters, microwaves and hair dryers to other outlets.',
  'Reset the breaker once: fully off, then on.',
  'Book a visit to see if that circuit should be split or upgraded.',
  'If it starts tripping with nothing running, call for a same-day visit.'],'schedule','Breaker keeps tripping'],
 flick1:['schedule','Can schedule','Probably the bulb or fixture.',[
  'With the switch off, make sure the bulb is tight, or try a new one.',
  'Still flickering? It may be the fixture, the switch or a loose wire. Stop using it and book a visit.',
  'If the switch or fixture is warm or buzzing, call for a same-day visit.'],'schedule','Flickering or dimming lights'],
 flickall:['sameday','Same-day visit','House-wide flicker. Get it checked today.',[
  'Flicker across the house, or lights dimming hard when big appliances start, can mean a loose connection in the panel or the line to your house.',
  'Ask a neighbor if theirs flicker too. If so, tell your power company.',
  'Call to have it checked today. Loose connections can overheat.',
  '<b>If you smell burning or see sparks, get everyone out and call 911.</b>'],'sameday','Flickering or dimming lights'],
 plan:['schedule','Can schedule','Let\'s get it on the calendar.',[
  'Panel upgrades, new circuits, lighting, ceiling fans, EV chargers and more.',
  'Tell us what you have in mind in the form below, or call.'],'schedule','Panel upgrade']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Then call Mendez</button>',
 call:'<button class="btn btn-red demo" type="button">Call now</button><a class="btn btn-line" href="#quote" data-pref>Or get a callback</a>',
 sameday:'<button class="btn btn-volt demo" type="button">Call for same-day</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 schedule:'<a class="btn btn-ink" href="#quote" data-pref>Book a visit</a><button class="btn btn-line demo" type="button">Call instead</button>',
 utility:''
};
var MAXD=4,stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.prog i'),hist=[],need=document.getElementById('need');
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Question '+n+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]?' danger':'')+'" type="button" data-i="'+i+'"><span class="oi" aria-hidden="true">'+ICON[o[2]]+'</span><span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
 stage.innerHTML=h+'</div></div>';stage.dataset.q=id;setTier('');bar.style.width=Math.min(12+hist.length/MAXD*70,82)+'%';
 if(focus)stage.querySelector('h3').focus({preventScroll:true});
}
function result(k,focus){
 var r=R[k],h='<div class="res '+r[0]+'" tabindex="-1"><p class="tag">'+r[1]+'</p><h3>'+esc(r[2])+'</h3><ol class="steps">';
 r[3].forEach(function(s){h+='<li>'+s+'</li>'});
 h+='</ol>'+(CTA[r[4]]?'<div class="cta">'+CTA[r[4]]+'</div>':'')+'<button class="again" type="button" data-again>↻ Start over</button>'+(hist.length?' <button class="again" type="button" data-back>← Back</button>':'')+'</div>';
 stage.innerHTML=h;stage.dataset.q='';setTier(r[0]);bar.style.width='100%';
 if(need&&r[5])need.value=r[5];
 if(focus){var el=stage.querySelector('.res');el.focus({preventScroll:true});var t=box.getBoundingClientRect().top;if(t<0||t>innerHeight*.4)box.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
function go(next){if(next.indexOf('R:')===0)result(next.slice(2),true);else ask(next,true)}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]');
 if(o){var id=stage.dataset.q;hist.push(id);go(Q[id].o[+o.dataset.i][3])}
 else if(b){ask(hist.pop(),true)}
 else if(a){hist=[];ask('danger',true)}
});
ask('danger',false);
/* deep link to a result, e.g. ?check=water#check (shareable from a text or a Google post) */
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R[dl[1]]){hist=['danger'];result(dl[1],false);box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
