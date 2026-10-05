(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls W F Parker in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. If you smell gas, leave first, then call 911 yourself from outside.');
});

var P={
 cool:'M12 3c2 4 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 3-6 5-10z',
 heat:'M12 2c-2 4-4 6-4 10a4 4 0 0 0 8 0c0-2.2-1-4-2.2-5.8z',
 gas:'M12 2C9 6 6 8.5 6 13a6 6 0 0 0 12 0c0-2.6-1.4-4.6-3-6.4z',
 bolt:'M13 2 4 14h6l-1 8 9-12h-6z',
 thermo:'M10 2h4v11.5a3.5 3.5 0 1 1-4 0z',
 filter:'M4 4h16v3H4zm2 5h12v2H6zm0 4h12v2H6zm0 4h12v2H6z',
 noise:'M3 9h4l5-4v14l-5-4H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z',
 ice:'M11 2h2v4l2-2 1.4 1.4L13 8.8V11h2.2l3.4-3.4L20 9l-2 2h4v2h-4l2 2-1.4 1.4-3.4-3.4H13v2.2l3.4 3.4L15 20l-2-2v4h-2v-4l-2 2-1.4-1.4 3.4-3.4V13H8.8l-3.4 3.4L4 15l2-2H2v-2h4L4 9l1.4-1.4L8.8 11H11V8.8L7.6 5.4 9 4l2 2z',
 out:'M4 10h6v10H4zm10 0h6v10h-6zM9 4h6v4H9z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 fan:'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7c1.5 2.5 1.5 5 0 7-1.5-2-1.5-4.5 0-7z',
 smoke:'M8 18h8v2H8zm2-4a4 4 0 1 1 4-4c0 2-1 3-2 4h-2c-1-1-2-2-2-4z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 start:{q:'What is happening?',o:[
  ['Smell gas or burning','Or see smoke near the furnace / unit','gas','smell',1],
  ['No cool — AC not keeping up','Warm air, outdoor unit quiet, or iced up','cool','nocool'],
  ['No heat — furnace / heat pump','House cold, unit won’t stay on','heat','noheat'],
  ['Strange noise or breaker trips','Rattle, grind, or power cuts out','noise','noiseq'],
  ['Thermostat looks wrong','Blank, locked, or ignores the setpoint','thermo','thermoq'],
  ['Nothing urgent — maintenance or quote','Tune-up, filter, replacement estimate','cal','R:quote']]},
 smell:{q:'What do you smell or see?',o:[
  ['Gas / rotten eggs','Near the furnace or anywhere in the house','gas','R:gas',1],
  ['Burning plastic or smoke','Near the indoor or outdoor unit','smoke','R:burn',1],
  ['Brief hot smell after a long off season','No smoke now','ok','R:dustburn']]},
 nocool:{q:'What is the AC doing?',o:[
  ['Outdoor unit is silent / won’t start','','out','R:outquiet'],
  ['Ice on the lines or outdoor coil','','ice','R:ice',1],
  ['Runs but blows warm air','','fan','R:warm'],
  ['Trips the breaker when it starts','','bolt','R:trip',1]]},
 noheat:{q:'What is the heat doing?',o:[
  ['Won’t ignite / no flame or heat at all','','heat','R:noignite',1],
  ['Starts then shuts off quickly','Short cycles','noise','R:short'],
  ['Runs but house stays cold','','fan','R:coldair'],
  ['Error light or code on the unit','','thermo','R:code']]},
 noiseq:{q:'What else is going on?',o:[
  ['Grinding, squealing, or metal-on-metal','','noise','R:grind',1],
  ['Breaker trips when the unit kicks on','','bolt','R:trip',1],
  ['Water leaking near the indoor unit','','cool','R:leak'],
  ['Just loud, but still heating / cooling','','fan','R:loud']]},
 thermoq:{q:'What does the thermostat show?',o:[
  ['Blank / no power','','bolt','R:blank'],
  ['Won’t change temperature or mode','','thermo','R:locked'],
  ['Wrong temp vs what the house feels like','','ok','R:mismatch']]}
};
var STOP='Stay clear + call now',TODAY='Call today',BOOK='Request a visit';
var R={
 gas:['out','Get out + call 911','Gas smell: leave and call from outside.',[
  '<b>Don’t flip switches, use phones inside, or light anything.</b>',
  'Get everyone out. Call 911 from outside, then the gas utility if you know the number.',
  'After it is declared safe, call Parker to inspect the furnace / gas line side.'],'911','Strange smell or noise'],
 burn:['stop',STOP,'Burning smell or smoke: shut it down and call.',[
  '<b>Turn the system off at the thermostat.</b> If you can reach the disconnect safely, switch that off too.',
  'If smoke is building, leave and call 911.',
  'Don’t keep resetting a breaker into a hot smell.',
  '<b>Call now.</b>'],'stop','Strange smell or noise'],
 dustburn:['today',TODAY,'Dust burn-off is common on first fall heat — still watch it.',[
  'A light dusty smell for a few minutes on the first heat run can be normal.',
  'If it gets stronger, you see smoke, or it lasts more than ~20 minutes, turn it off and call today.',
  'Replace a dirty filter if you haven’t.'],'today','Strange smell or noise'],
 outquiet:['today',TODAY,'Outdoor unit won’t start: quick checks, then call.',[
  'Confirm the thermostat is on Cool and the setpoint is below room temp.',
  'Check the outdoor disconnect and the breaker once — don’t keep resetting.',
  'Clear leaves/debris from around the unit if you can do it safely.',
  'Still silent? Call today.'],'today','No cool / AC not working'],
 ice:['stop',STOP,'Iced-up AC: turn it off and call.',[
  '<b>Switch the system off.</b> Running through ice can damage the compressor.',
  'Don’t chip ice with tools.',
  'Check whether the filter is packed solid — replace it if it is.',
  '<b>Call now</b> so the freeze cause can be found.'],'stop','No cool / AC not working'],
 warm:['today',TODAY,'Runs but blows warm: call today.',[
  'Replace a dirty filter first — it is the most common fix.',
  'Confirm Cool mode and a setpoint a few degrees under room temp.',
  'Feel whether the outdoor unit’s fan is spinning.',
  'Still warm? Call today — low refrigerant and failed capacitors are common.'],'today','No cool / AC not working'],
 trip:['stop',STOP,'Breaker trips on start: leave it off and call.',[
  '<b>Don’t keep resetting the breaker.</b>',
  'Leave that breaker off.',
  'This can be a seized motor, short, or failing capacitor.',
  '<b>Call now.</b>'],'stop','Strange smell or noise'],
 noignite:['stop',STOP,'No heat / won’t ignite: call now.',[
  'If you smell gas, leave and call 911 — don’t troubleshoot.',
  'Otherwise set the thermostat to heat and a higher setpoint once.',
  'Check the furnace switch and the breaker once.',
  '<b>Call now</b> if it still won’t fire — especially in freezing weather.'],'stop','No heat / furnace'],
 short:['today',TODAY,'Starts then shuts off: call today.',[
  'Replace a dirty filter — restriction causes short cycling.',
  'Make sure supply vents aren’t all closed.',
  'If it still short-cycles after a filter change, call today.'],'today','No heat / furnace'],
 coldair:['today',TODAY,'Runs but house stays cold: call today.',[
  'Confirm heat mode and that the filter isn’t blocked.',
  'Note whether the outdoor unit (heat pump) is iced over or silent.',
  'Call today with what you observed.'],'today','No heat / furnace'],
 code:['today',TODAY,'Error light or code: write it down, then call.',[
  'Note the blink pattern or code on the board / thermostat.',
  'Don’t keep hard-resetting power.',
  'Call today and read the code to the tech.'],'today','No heat / furnace'],
 grind:['stop',STOP,'Grinding or metal noise: shut it off and call.',[
  '<b>Turn the system off.</b> Continuing can destroy a motor or blower.',
  'Call now — describe the sound and whether heat or cool was running.'],'stop','Strange smell or noise'],
 leak:['today',TODAY,'Water near the indoor unit: call today.',[
  'A clogged condensate drain often causes this on AC.',
  'If water is near outlets or the furnace electronics, keep clear and call today.',
  'Don’t ignore a full drain pan — it can shut the system down or overflow.'],'today','Something else'],
 loud:['book',BOOK,'Loud but still working: schedule a look.',[
  'Note when the noise happens (start-up, during run, shut-down).',
  'Replace the filter if it’s due.',
  'Book a visit before a small rattle becomes a failed bearing.'],'book','Strange smell or noise'],
 blank:['today',TODAY,'Blank thermostat: check power, then call.',[
  'If it is battery-powered, try fresh batteries.',
  'Confirm the furnace switch / breaker is on.',
  'Still blank? Call today.'],'today','Thermostat trouble'],
 locked:['today',TODAY,'Thermostat won’t change: call today.',[
  'Look for a hold / lock icon — some have a pin or installer lock.',
  'If you didn’t set a lock, call today rather than forcing menus.'],'today','Thermostat trouble'],
 mismatch:['book',BOOK,'Feels wrong vs the display: book a visit.',[
  'Replace the filter and make sure the thermostat isn’t over a lamp or in sun.',
  'If the gap stays large, the sensor or system may need service — book a visit.'],'book','Thermostat trouble'],
 quote:['book',BOOK,'Planning service or a replacement? Let’s talk.',[
  'Tune-ups, filter plans, and replacement estimates when the old unit is tired.',
  'Have the system age and any recent repair history handy if you know it.',
  'Leave your name below, or call.'],'book','Quote for planned work']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call Parker</button>',
 stop:'<button class="btn btn-red demo" type="button">Call Parker now</button><a class="btn btn-line" href="#filterinfo">Check the filter?</a>',
 today:'<button class="btn btn-gold demo" type="button">Call Parker</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
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
