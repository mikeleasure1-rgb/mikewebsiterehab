(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Aces Electric in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. If there is smoke or fire, get out first, then call 911 yourself.');
});

var P={
 bolt:'M13 2 4 14h6l-1 8 9-12h-6z',
 panel:'M6 3h12v18H6zm3 3v2h6V6zm0 4v2h6v-2zm0 4v2h4v-2z',
 outlet:'M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 5v4h2V8zm4 0v4h2V8zm-3 7h2v3h-2z',
 spark:'M12 2l1.5 5.5L19 9l-4.2 3.2L16 18l-4-3-4 3 1.2-5.8L5 9l5.5-1.5z',
 dark:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 0 1 0 14V5z',
 hot:'M12 2c-2 4-4 6-4 10a4 4 0 0 0 8 0c0-2.2-1-4-2.2-5.8C14.5 7.5 14 9 12.8 10.2 13.5 7.5 13 4.8 12 2z',
 neigh:'M4 10h6v10H4zm10 0h6v10h-6zM9 4h6v4H9z',
 light:'M9 21h6v2H9zm3-19a7 7 0 0 1 4 12.7V18H8v-3.3A7 7 0 0 1 12 2z',
 fan:'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7c1.5 2.5 1.5 5 0 7-1.5-2-1.5-4.5 0-7zm7 7c-2.5 1.5-5 1.5-7 0 2-1.5 4.5-1.5 7 0zM5 10c2.5-1.5 5-1.5 7 0-2 1.5-4.5 1.5-7 0zm7 11c-1.5-2.5-1.5-5 0-7 1.5 2 1.5 4.5 0 7z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 water:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 one:'M9 3h6v6H9zm-3 8h12v10H6z',
 many:'M3 5h8v6H3zm10 0h8v6h-8zM3 13h8v6H3zm10 0h8v6h-8z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 smoke:'M8 18h8v2H8zm2-4a4 4 0 1 1 4-4c0 2-1 3-2 4h-2c-1-1-2-2-2-4a2 2 0 1 0-2 2c0 2 1 3 2 4z',
 meter:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 0 1 6.9 6H15a3 3 0 1 0 0 2h3.9A7 7 0 1 1 12 5z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 start:{q:'What is happening?',o:[
  ['Smell burning, see sparks, or smoke','Or an outlet / switch is hot to the touch','spark','burn',1],
  ['Whole house or big area is dark','No power in most rooms','dark','outage',1],
  ['A breaker keeps tripping','Won’t stay on, or trips again right away','panel','breaker'],
  ['One outlet, switch, or light is dead','Everything else works','outlet','onefix'],
  ['Water near wiring or the panel','Wet floor, leaking near electrical','water','R:water',1],
  ['Nothing urgent — I need a quote','Panel upgrade, remodel, new circuit','cal','R:quote']]},
 burn:{q:'Is there smoke or fire?',o:[
  ['Yes — smoke, flames, or heavy burning smell','','smoke','R:fire',1],
  ['Sparks or a hot outlet / switch, no smoke','','spark','R:hot',1],
  ['Just a brief spark when I plugged something in','No heat, no smell now','outlet','R:brief']]},
 outage:{q:'Do the neighbors have power?',o:[
  ['Neighbors are dark too','Street or block outage','neigh','R:utility'],
  ['Neighbors have power — it’s just us','','dark','houseout'],
  ['Not sure yet','','meter','houseout']]},
 houseout:{q:'What does the main breaker do?',o:[
  ['Main breaker is tripped / off','Big switch in the panel','panel','R:maintrip',1],
  ['I reset it once and it tripped again','','panel','R:mainagain',1],
  ['Breakers look on, still no power','','bolt','R:nopower'],
  ['I am not comfortable opening the panel','','ok','R:nocomfort']]},
 breaker:{q:'What trips?',o:[
  ['Same breaker, every time I use one thing','Hair dryer, microwave, space heater','one','R:overload'],
  ['Trips with nothing obvious running','Or trips randomly','panel','R:short',1],
  ['GFCI / “Test” outlet in bath, kitchen, or garage','Button in the middle of the outlet','outlet','R:gfci'],
  ['Several breakers or half the house','','many','R:multi',1]]},
 onefix:{q:'What stopped working?',o:[
  ['One outlet or a few on the same wall','','outlet','R:deadout'],
  ['Lights flicker or one room is dim','','light','R:flicker'],
  ['Ceiling fan, dishwasher, or a big appliance','','fan','R:appliance']]}
};
var STOP='Stay clear + call now',TODAY='Call today',BOOK='Request a quote';
var R={
 fire:['out','Get out + call 911','Smoke or fire: leave now.',[
  '<b>Get everyone out.</b> Close the door behind you if you can do it safely.',
  '<b>Call 911 from outside.</b> Do not go back in for belongings.',
  'If you can reach the main breaker from outside or a dry spot with no smoke, switch it off — otherwise leave it.',
  'After it is safe, call Aces to inspect the wiring.'],'911','Sparks, burning smell, or hot outlet'],
 hot:['stop',STOP,'Hot outlet or sparks: stop using it and call.',[
  '<b>Unplug what you can without touching the hot plate or scorched area.</b>',
  'Switch that breaker off at the panel if you can reach it safely.',
  'Don’t keep resetting a breaker that trips into a hot smell.',
  '<b>Call now.</b> Heat and arcing can start a fire inside the wall.'],'stop','Sparks, burning smell, or hot outlet'],
 brief:['today',TODAY,'Brief spark at a plug: inspect before you use it again.',[
  'Try a different outlet with that same cord. If it sparks there too, stop using the device.',
  'Look for a blackened plate, melted plastic, or a warm smell — if you see any, switch the breaker off and call today.',
  'Otherwise call today so the outlet can be checked.'],'today','Sparks, burning smell, or hot outlet'],
 water:['stop',STOP,'Water near electricity: stay back.',[
  '<b>Don’t touch outlets, cords, or the panel, and don’t step into the water.</b>',
  'If you can reach the main breaker from a dry spot, switch it off. If not, stay clear and call 911 or the power company if needed.',
  'Stop the water source if you can do it without going through the wet area.',
  '<b>Call now</b> for the electrical side once the area is safe to approach.'],'stop','Something else'],
 utility:['book',BOOK,'Looks like a utility outage.',[
  'Check the power company’s outage map or ask a neighbor.',
  'Unplug sensitive electronics so they don’t all surge back on at once.',
  'If the street comes back and your house stays dark, call Aces.',
  'Otherwise you’re waiting on the utility — no electrician visit needed yet.'],'book','Power out / no power'],
 maintrip:['stop',STOP,'Main breaker is off: reset once, carefully.',[
  'Stand to the side of the panel, not directly in front.',
  'Push the main breaker firmly to Off, then back to On — <b>once</b>.',
  'If it won’t stay on, or the panel smells hot, leave it off and <b>call now</b>.',
  'If power returns, note what was running and call today if it trips again.'],'stop','Power out / no power'],
 mainagain:['stop',STOP,'Main breaker tripped again: leave it off.',[
  '<b>Do not keep resetting it.</b> Something is drawing hard or shorting.',
  'Leave the main off. Keep the panel door closed.',
  'Stay out of any room that smelled hot or showed sparks.',
  '<b>Call now.</b>'],'stop','Power out / no power'],
 nopower:['today',TODAY,'Breakers on, still dark: call today.',[
  'Confirm the utility meter is spinning / digital display is live if you can see it safely.',
  'Check whether a whole section of the panel (upper/lower) is out — that can be a failed main lug or lost leg.',
  'Call today. Don’t open sealed utility sections of the panel.'],'today','Power out / no power'],
 nocomfort:['today',TODAY,'Not comfortable at the panel: that’s fine — call.',[
  'You don’t have to open the panel. Leave it alone.',
  'Note whether neighbors have power and whether any breakers look orange/tripped from the outside.',
  'Call today and describe what you see.'],'today','Power out / no power'],
 overload:['today',TODAY,'Likely an overload on one circuit.',[
  'Unplug space heaters, hair tools, and high-draw appliances on that circuit.',
  'Reset the breaker once. If it holds, spread those loads across different rooms.',
  'If it still trips with almost nothing plugged in, call today — it may be a weak breaker or a hidden fault.'],'today','Breaker keeps tripping'],
 short:['stop',STOP,'Breaker trips with nothing running: call now.',[
  'Leave that breaker off.',
  'Unplug devices on that circuit anyway, in case one is shorted.',
  'A breaker that trips unloaded often means a short in the wiring or device.',
  '<b>Call now</b> before someone resets it into a fault.'],'stop','Breaker keeps tripping'],
 gfci:['book',BOOK,'GFCI outlet tripped: reset, then watch it.',[
  'Press the Reset button in the center of the outlet (bath, kitchen, garage, outdoors).',
  'If it won’t reset, or trips again immediately, leave it and book a visit.',
  'GFCI protects you around water — don’t bypass it with an adapter.'],'book','Breaker keeps tripping'],
 multi:['stop',STOP,'Several breakers or half the house: call now.',[
  'This can be a loose service connection, a failing panel, or a lost hot leg.',
  'Don’t keep resetting multiple breakers.',
  'If you smell hot plastic at the panel, leave the area and call now.',
  '<b>Call now.</b>'],'stop','Breaker keeps tripping'],
 deadout:['today',TODAY,'Dead outlet: quick checks, then call.',[
  'Try Reset on any GFCI in the bath, kitchen, garage, or exterior — one often feeds others.',
  'Check the matching breaker once.',
  'Still dead? Call today. Don’t take the outlet apart yourself.'],'today','Outlet, switch, or light'],
 flicker:['today',TODAY,'Flicker or dim lights: call today.',[
  'Note whether it happens when the A/C, well pump, or microwave kicks on.',
  'If lights dim house-wide, or you see flicker at the same time every few minutes, that can be a service issue — call today.',
  'If only one fixture flickers, try a new bulb first, then call if it continues.'],'today','Outlet, switch, or light'],
 appliance:['today',TODAY,'One appliance circuit is dead: call today.',[
  'Confirm the appliance is plugged in firmly and any local switch is on.',
  'Check its breaker once. If it trips again under load, leave it off.',
  'Call today — dedicated circuits for dryers, ranges, and A/C need proper diagnosis.'],'today','Outlet, switch, or light'],
 quote:['book',BOOK,'Planning electrical work? Let’s price it.',[
  'Panel upgrades, new circuits, remodel wiring, ceiling fans, and generator prep.',
  'Have a rough idea of the rooms involved and your timing.',
  'Leave your name in the form below, or call.'],'book','Quote for planned work']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call Aces</button>',
 stop:'<button class="btn btn-red demo" type="button">Call Aces now</button><a class="btn btn-line" href="#panelinfo">Where is my panel?</a>',
 today:'<button class="btn btn-gold demo" type="button">Call Aces</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a quote</a><button class="btn btn-line demo" type="button">Call instead</button>'
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
