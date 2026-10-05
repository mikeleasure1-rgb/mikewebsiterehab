(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls J’s Plumbing &amp; Well Pumps in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. If you smell gas, leave first, then call 911 yourself from outside.');
});

/* ---- Is this a plumbing / well emergency? ---- */
var P={
 burst:'M3 10h6v4H3zm12 0h6v4h-6zM11 6l1-4 1 4-1 1zm-3.5 1.5L6 4.5l3 2.5-.5 1zm9 0-.5-1 3-2.5zM12 9c-1.5 2-2.5 3.5-2.5 5a2.5 2.5 0 0 0 5 0c0-1.5-1-3-2.5-5zm-4 9h8v2H8z',
 drip:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 sewer:'M4 3h16v4H4zm2 6h12l-1.5 6H7.5zM9 17h6v2H9zm-1 3h8v2H8z',
 tap:'M5 5h8a4 4 0 0 1 4 4v1h2v3h-6v-3h2V9a2 2 0 0 0-2-2H5zm11 11s-2 2.3-2 3.5a2 2 0 0 0 4 0c0-1.2-2-3.5-2-3.5z',
 drain:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 3a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4zm-1 5h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z',
 heater:'M7 2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1v2h-2v-2h-4v2H8v-2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 5s-3 3.4-3 5.3a3 3 0 0 0 6 0C15 10.4 12 7 12 7z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9zm2 2h4v4H7z',
 ceil:'M2 4h20v3H2zm4 5h2l1 3H5zm10 0h2l1 3h-4zm-4 3s-3 3.6-3 5.5a3 3 0 0 0 6 0c0-1.9-3-5.5-3-5.5z',
 bolt:'M13 2 4 14h6l-1 8 9-12h-6z',
 cab:'M3 4h18v6H3zm2 2v2h14V6zM4 12h16v8H4zm6 2v2h4v-2z',
 meter:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 0 1 6.9 6H15a3 3 0 1 0 0 2h3.9A7 7 0 1 1 12 5z',
 toilet:'M6 2h7v6H6zm-2 8h16a6 6 0 0 1-5 6l1 6H8l1-6a6 6 0 0 1-5-6z',
 house:'M12 3 2 11h3v10h14V11h3z',
 snow:'M11 2h2v4l2-2 1.4 1.4L13 8.8V11h2.2l3.4-3.4L20 9l-2 2h4v2h-4l2 2-1.4 1.4-3.4-3.4H13v2.2l3.4 3.4L15 20l-2-2v4h-2v-4l-2 2-1.4-1.4 3.4-3.4V13H8.8l-3.4 3.4L4 15l2-2H2v-2h4L4 9l1.4-1.4L8.8 11H11V8.8L7.6 5.4 9 4l2 2z',
 well:'M4 8h16v3h-2v10H6V11H4zm4 3v8h8v-8zM11 2h2v6h-2z',
 one:'M5 5h8a4 4 0 0 1 4 4v1h2v3h-6v-3h2V9a2 2 0 0 0-2-2H5zm-1 11h7v2H4zm0 4h7v2H4z',
 gas:'M12 2C9 6 6 8.5 6 13a6 6 0 0 0 12 0c0-2.6-1.4-4.6-3-6.4-.4 2.2-1.5 3.4-3 3.9.6-3 .5-5.6 0-8.5z',
 hot:'M8 4a4 4 0 0 1 8 0c0 1.5-1 2.5-1 4h-2c0-2 1-2.6 1-4a2 2 0 0 0-4 0c0 1.4 1 2 1 4H9c0-1.5-1-2.5-1-4zm-3 7h14v2H5zm1 4h12l-1 7H7z',
 noise:'M3 9h4l5-4v14l-5-4H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z',
 many:'M3 5h8v6H3zm10 0h8v6h-8zM3 13h8v6H3zm10 0h8v6h-8z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 cycle:'M12 4a8 8 0 1 1-7.5 5.2L6 8H3l2.5-4.5L8 8H6.1A6 6 0 1 0 12 6v2l4-3-4-3v2z',
 gauge:'M4 16a8 8 0 1 1 16 0H4zm8-10v6l4 2'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
/* option: [label, hint, icon, next, danger] */
var Q={
 start:{q:'What is happening?',o:[
  ['A pipe burst, or water is spraying','Water pouring out right now','burst','R:burst',1],
  ['Sewage is backing up','Toilet, tub or floor drain','sewer','sewer',1],
  ['Something is leaking','Dripping, a puddle, a wet ceiling','drip','leak'],
  ['No water / well trouble','Nothing from taps, or the well pump acting up','well','nowater'],
  ['A drain is slow or clogged','Sink, tub, shower or toilet','drain','drain'],
  ['Water heater trouble','No hot water, leaking, odd noises','heater','heater'],
  ['Nothing urgent — planned job','New work, remodel, install','cal','R:planned']]},
 leak:{q:'Where is the water?',o:[
  ['Coming through a ceiling or wall','Stain spreading, ceiling sagging, dripping','ceil','R:ceiling',1],
  ['Near outlets, wiring or the electrical panel','','bolt','R:electric',1],
  ['Under a sink or at one fixture','Faucet, toilet, supply line','cab','R:fixture'],
  ['A puddle or wet spot, not sure from where','Floor, yard, basement','meter','R:hidden']]},
 sewer:{q:'Where is it coming up?',o:[
  ['More than one drain, or a basement floor drain','Or a toilet gurgles when you run water','many','R:mainline',1],
  ['One toilet is overflowing','','toilet','R:toilet']]},
 nowater:{q:'Is it the whole house?',o:[
  ['Whole house, and it is below freezing','Pipes may be frozen','snow','R:frozen',1],
  ['Whole house — I am on a well','No water, or the pump keeps kicking on','well','wellq'],
  ['Whole house — I am on public water','No water from any tap','house','R:public'],
  ['Just one faucet or fixture','Everything else works','one','R:onefix']]},
 wellq:{q:'What is the well doing?',o:[
  ['No water at all','Pump silent, or breaker tripped','well','R:wellnone',1],
  ['Pump short-cycles / kicks on and off','Runs a few seconds, stops, repeats','cycle','R:wellcycle'],
  ['Water, but pressure is low or surging','Spits, fades, or the gauge won’t hold','gauge','R:wellpress'],
  ['Pump runs and never shuts off','Or the pressure tank is soaking wet','noise','R:wellrun',1]]},
 drain:{q:'How many drains?',o:[
  ['Several drains, or a toilet gurgles','Water comes up in another drain','many','R:slowmany'],
  ['Just one drain','','drain','R:slowone']]},
 heater:{q:'What is the water heater doing?',o:[
  ['I smell gas or rotten eggs','Near the heater or anywhere in the house','gas','R:gas',1],
  ['Water is leaking from the tank','Puddle around the base','drip','R:tank',1],
  ['No hot water','Or it runs out fast','hot','R:nohot'],
  ['Popping, rumbling, or the relief valve drips','Small pipe on the side of the tank','noise','R:noise']]}
};
var STOP='Shut it off + call now',TODAY='Call today',BOOK='Book a visit';
/* result: [tier, tag, headline, steps, cta, form-need] */
var R={
 burst:['stop',STOP,'Burst pipe: shut off the main water valve now.',[
  '<b>Close the main water shut-off.</b> On public water it’s usually where the line enters the house. On a well, look by the pressure tank. Turn it clockwise.',
  '<b>Stay away from water near outlets, cords or the electrical panel.</b> Only switch off power if you can reach the panel without standing in water.',
  'Open a faucet on the lowest floor to drain what’s left in the pipes.',
  'Move what you can out of the water, and take photos for insurance.',
  '<b>Call now.</b> J’s is listed open 24 hours.'],'stop','Leak or burst pipe'],
 ceiling:['stop',STOP,'Water through the ceiling: shut off the water and stay clear.',[
  '<b>Stay out from under a sagging or bulging ceiling.</b> A wet ceiling can come down.',
  '<b>Close the main water shut-off</b> if the leak is from a supply pipe, not rain.',
  '<b>Don’t use light switches or fixtures in the wet area.</b> Turn that circuit off at the panel if you can reach it from a dry spot.',
  'Put a bucket under the drip and move furniture away.',
  '<b>Call now.</b>'],'stop','Leak or burst pipe'],
 electric:['stop',STOP,'Water near electricity: stay back, then shut it off.',[
  '<b>Don’t touch outlets, cords or the panel, and don’t step into the water.</b>',
  'If you can reach the electrical panel from a dry spot, switch off the main breaker. If not, stay clear and call 911 or the power company.',
  '<b>Close the main water shut-off</b> if you can reach it without going through the water.',
  '<b>Call now.</b>'],'stop','Leak or burst pipe'],
 fixture:['today',TODAY,'Leak at one fixture: close its valve and call today.',[
  '<b>Close the small shut-off valve under the sink or behind the toilet.</b> Turn it clockwise. If it won’t close, use the main shut-off.',
  'Put a towel or bucket under it and dry the cabinet so you can see if it keeps dripping.',
  'Call today before the cabinet or floor is damaged.'],'today','Leak or burst pipe'],
 hidden:['today',TODAY,'Wet spot, unknown source: check your meter or well gauge.',[
  'Turn off every faucet and appliance that uses water.',
  'On public water, watch the meter. On a well, watch the pressure gauge — if the pump keeps kicking on with nothing running, water is escaping.',
  'Close the main shut-off if the spot is growing. Call today.'],'today','Leak or burst pipe'],
 mainline:['stop',STOP,'Sewage in more than one drain: stop using water now.',[
  '<b>Stop running water anywhere in the house.</b> No flushing, showers, dishwasher or laundry.',
  '<b>Keep kids and pets away from it.</b> Don’t touch sewage without gloves.',
  'If it is near outlets or appliances, keep clear of the wet area.',
  '<b>Call now.</b> This usually means the main sewer line is blocked.'],'stop','Sewage or drain backup'],
 toilet:['today',TODAY,'Overflowing toilet: close the valve, don’t flush again.',[
  '<b>Turn the shut-off valve behind the toilet clockwise</b> to stop the water.',
  'Or lift the tank lid and press the flapper down to stop it filling.',
  'Don’t flush again. Try a plunger once it has drained down.',
  'If other drains back up too, stop using water and call now. Otherwise, call today.'],'today','Sewage or drain backup'],
 frozen:['stop',STOP,'Likely a frozen pipe: shut off the water before it thaws.',[
  '<b>A frozen pipe can split and flood as it thaws.</b> If you see a bulge, a crack or wet spots, close the main shut-off now.',
  'Open the faucet so melting water can flow out.',
  'Warm the pipe slowly with a hair dryer or space heater kept well away from anything that can burn. <b>Never use an open flame.</b>',
  '<b>Call now</b> if you can’t find the frozen spot, or a pipe is damaged.'],'stop','No water / well pump'],
 wellnone:['stop',STOP,'No water on a well: check the breaker, then call.',[
  'Check whether the breaker for the well pump has tripped. Reset it <b>once</b>. If it trips again, leave it off.',
  'Look at the pressure gauge by the pressure tank. If it reads zero, the pump isn’t building pressure.',
  'Don’t keep resetting a breaker that trips — that can burn out the pump.',
  '<b>Call now.</b> J’s does well pumps around the clock.'],'stop','No water / well pump'],
 wellcycle:['today',TODAY,'Short-cycling well pump: call today before it burns out.',[
  'A pump that kicks on every few seconds is usually a waterlogged pressure tank, a bad switch, or a small leak.',
  'Don’t keep running heavy water use (laundry, long showers) until it’s checked — short-cycling kills pumps.',
  'Note what the gauge does when it cycles, and call today.'],'today','No water / well pump'],
 wellpress:['today',TODAY,'Low or surging well pressure: call today.',[
  'Low or spurting pressure often means a failing pressure tank, a clogged filter, or a pump losing its prime.',
  'Check any whole-house filter and clean or bypass it if it’s packed.',
  'Call today so it doesn’t become a no-water call at night.'],'today','No water / well pump'],
 wellrun:['stop',STOP,'Pump won’t shut off, or the tank is wet: call now.',[
  'If the pump runs nonstop, it may be losing pressure (leak, switch, or tank). Running dry can ruin it.',
  'If the pressure tank is soaking wet or hissing, stay clear of wiring around it.',
  'Turn the pump breaker off if you can reach it safely, then <b>call now</b>.'],'stop','No water / well pump'],
 public:['today',TODAY,'No water on public water: check with the utility first.',[
  'Ask a neighbor, or check the water utility’s outage page. A main break can shut off a whole street.',
  'Make sure your own main shut-off valve is fully open.',
  'If neighbors have water and your valve is open, call today.'],'today','No water / well pump'],
 onefix:['book',BOOK,'One fixture with no water: book a visit.',[
  'Check that the small shut-off valve under that sink or behind that toilet is fully open.',
  'Low flow from one faucet is often a clogged aerator at the tip. Unscrew and rinse it.',
  'Still nothing? Book a visit.'],'book','Something else'],
 slowmany:['today',TODAY,'Several slow drains: go easy on water and call today.',[
  'When several drains are slow or a toilet gurgles, the blockage is often further down the line.',
  'Run as little water as you can until it is cleared.',
  '<b>If sewage comes up anywhere, stop using water and call now.</b>',
  'Call today for drain cleaning.'],'today','Slow or clogged drain'],
 slowone:['book',BOOK,'One slow drain: book drain cleaning.',[
  'Try a plunger, or clear hair from the stopper.',
  'Skip chemical drain cleaners. They can damage pipes and splash back on whoever clears the drain next.',
  'If it stops draining completely, or others slow down too, call today.',
  'Otherwise, book a drain cleaning.'],'book','Slow or clogged drain'],
 gas:['out','Get out + call 911','Gas smell: leave the house now.',[
  '<b>Get everyone out now.</b> Leave the door open behind you.',
  '<b>Don’t flip switches, use a lighter, or start a car in the garage.</b>',
  '<b>Once you are outside and away, call 911 or your gas supplier.</b>',
  'Don’t go back in until they say it is safe. Then call to have the water heater checked.'],'911','Water heater'],
 tank:['stop',STOP,'Leaking tank: shut off water and power to the heater.',[
  '<b>Close the cold-water valve on the pipe going into the top of the heater.</b>',
  '<b>Turn off the heater:</b> switch off its breaker if electric, or turn the gas control to Off if gas.',
  'Keep away from the small pipe on the side of the tank — water from it can be scalding.',
  '<b>Call now.</b> A leaking tank usually needs replacing.'],'stop','Water heater'],
 nohot:['today',TODAY,'No hot water: a couple of quick checks.',[
  'Electric heater: check whether its breaker tripped. Reset it once. If it trips again, leave it off.',
  'Gas heater: check the pilot, following the instructions on the heater’s label. If you smell gas, leave and call 911.',
  'Call today if it still won’t heat.'],'today','Water heater'],
 noise:['book',BOOK,'Popping or a dripping relief valve: book a service visit.',[
  'Popping and rumbling are often sediment in the bottom of the tank. Flushing it may help.',
  'A relief valve that drips now and then needs a look. <b>If it is spraying steady hot water, turn the heater off and call today.</b>',
  'Never cap or plug the relief valve.',
  'Book a water heater service visit.'],'book','Water heater'],
 planned:['book',BOOK,'Planning a job? Let’s get it on the calendar.',[
  'Well pump work, pressure tanks, water heaters, drains, fixtures, and remodel plumbing.',
  'Have a rough idea of the rooms involved and your timing.',
  'Leave your name in the form below, or call.'],'book','Planned job or install']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Later: call J’s</button>',
 stop:'<button class="btn btn-red demo" type="button">Call J’s now</button><a class="btn btn-line" href="#valveinfo" data-valve>Where is my shut-off?</a>',
 today:'<button class="btn btn-gold demo" type="button">Call J’s</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 book:'<a class="btn btn-ink" href="#quote" data-pref>Book a visit</a><button class="btn btn-line demo" type="button">Call instead</button>'
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
