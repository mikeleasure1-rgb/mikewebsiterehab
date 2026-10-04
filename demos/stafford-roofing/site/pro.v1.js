(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls the company in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this button dials 911. In a real emergency, get clear and call 911 yourself.');
});

/* ---- Roof & siding check ---- */
var P={
 tree:'M12 2a6 6 0 0 0-5.7 7.9A5 5 0 0 0 8 19h3v3h2v-3h3a5 5 0 0 0 1.7-9.1A6 6 0 0 0 12 2z',
 bolt:'M13 2 4 14h6l-1 8 9-12h-6z',
 drop:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 no:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 roof:'M1 13 12 4l11 9-1.3 1.5L12 6.6 2.3 14.5zM5 14h14v6H5z',
 siding:'M3 4h18v3H3zm0 4.5h18v3H3zM3 13h18v3H3zm0 4.5h18v3H3z',
 gutter:'M2 5h20v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm15 7h3v10h-3z',
 win:'M4 3h16v18H4zm2 2v6h5V5zm7 0v6h5V5zM6 13v6h5v-6zm7 0v6h5v-6z',
 plan:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9zm2 2h4v4H7z',
 shingle:'M2 6h20v4H2zm2 5h7v4H4zm9 0h7v4h-7zM2 16h20v4H2z',
 dots:'M5 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7-4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
 hail:'M6 8a6 6 0 0 1 11.7-1.6A4.5 4.5 0 0 1 18 15H6a3.5 3.5 0 0 1 0-7zm1 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z',
 sag:'M1 9c5 6 17 6 22 0v4c-5 6-17 6-22 0z',
 vent:'M9 3h6v4H9zM5 8h14l3 12H2zm4 4v4h6v-4z',
 stain:'M12 4c4 0 7 2.5 7 6s-2 4-1 7-3 4-6 3-6-1-6-5 0-4-1-6 3-5 7-5z',
 clock:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.6 2.1-1 1.7L11 13.6V7z',
 crack:'M3 3h18v18H3zm8 2-2 5 4 2-3 7 6-8-4-2 2-4z',
 wave:'M2 8c3-3 5-3 8 0s5 3 8 0 4-2 4-2v4s-1 2-4 2-5-3-8-3-5 3-8 3zm0 6c3-3 5-3 8 0s5 3 8 0 4-2 4-2v4s-1 2-4 2-5-3-8-3-5 3-8 3z',
 rot:'M4 3h16v18H4zm4 4v2h3V7zm5 3v2h3v-2zm-5 4v2h3v-2z',
 over:'M2 5h20v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm4 8c1 2 1 3 0 4-1-1-1-2 0-4zm6 0c1 2 1 3 0 4-1-1-1-2 0-4zm6 0c1 2 1 3 0 4-1-1-1-2 0-4z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 safe:{q:'First: is anything dangerous right now?',o:[
  ['A tree or big limb is on the house','','tree','R:tree',1],
  ['A power line is down or touching the house','','bolt','R:line',1],
  ['A ceiling is sagging, or water is near lights or outlets','','drop','R:ceiling',1],
  ['No, nothing like that','','no','area']]},
 area:{q:'Where is the problem?',o:[
  ['On the roof','Seen from the ground or a window','roof','roof'],
  ['A leak or stain inside','Ceiling, wall or attic','drop','leak'],
  ['Siding','','siding','siding'],
  ['Gutters','','gutter','gutter'],
  ['Windows or trim','','win','R:window'],
  ['Nothing is broken, I\'m planning a project','New roof, siding or windows','plan','R:plan']]},
 roof:{q:'What do you see on the roof?',o:[
  ['Missing or blown-off shingles','Or pieces of shingle in the yard','shingle','R:shingles'],
  ['Granules in the gutters, or bald spots','Shingles look worn or curled','dots','R:granules'],
  ['Damage after a hail storm','Dents on gutters, vents or siding','hail','R:hail'],
  ['A dip or sag in the roofline','','sag','R:sag'],
  ['Loose flashing, or a lifted vent or pipe boot','Around the chimney, vents or skylight','vent','R:flashing']]},
 leak:{q:'What is the leak doing?',o:[
  ['Dripping right now','','drop','R:leaknow'],
  ['Only in heavy or wind-driven rain','','clock','R:leakrain'],
  ['An old stain, dry now','','stain','R:stain']]},
 siding:{q:'What is wrong with the siding?',o:[
  ['Pieces missing or blown off','','siding','R:sidingoff'],
  ['Cracks, holes or hail marks','','crack','R:sidinghail'],
  ['Warped, buckled or loose','','wave','R:warp'],
  ['Soft or rotted wood','On siding or trim','rot','R:rot']]},
 gutter:{q:'What are the gutters doing?',o:[
  ['Overflowing when it rains','','over','R:overflow'],
  ['Sagging or pulling away from the house','','gutter','R:gutterpull'],
  ['Full of shingle granules','','dots','R:granules']]}
};
/* [tier, tag, headline, steps, cta, formNeed] */
var R={
 tree:['danger','Safety first','Tree on the house: get clear first.',[
  '<b>Get everyone out of the rooms under the tree or the damage.</b>',
  '<b>If any wires are down or tangled in the tree, stay at least 35 feet away and call 911.</b>',
  'Don\'t climb on the roof or try to cut the tree yourself. A tree service usually removes it first.',
  'From a safe spot, take photos of the damage for your insurance.',
  'Once it is safe, call for a roof inspection and to get the opening covered.'],'911','Storm damage'],
 line:['danger','Safety first','Power line down: stay far away.',[
  '<b>Treat every downed line as live.</b> Stay at least 35 feet away and keep kids and pets back.',
  '<b>Call 911, then your power company.</b>',
  'Don\'t touch anything the line is touching: gutters, siding, a fence or a ladder.',
  'After the utility says it is safe, call for an inspection of the roof and siding.'],'911','Storm damage'],
 ceiling:['danger','Safety first','Stay out from under a sagging ceiling.',[
  '<b>Keep everyone out of that room.</b> A ceiling holding water can come down.',
  '<b>If water is near lights or outlets, don\'t touch them.</b> Only switch off that circuit if you can reach the panel standing somewhere dry.',
  'Move what you can out of the way and catch drips in buckets.',
  'Call today. This needs a roof repair and likely an electrician\'s check too.'],'today','Roof leak'],
 shingles:['today','Call today','Missing shingles: get it covered before the next rain.',[
  '<b>Stay off the roof,</b> especially when it is wet or windy.',
  'From the ground, take photos of the bare spots and any shingles in the yard.',
  'After the next rain, check ceilings and the attic for wet spots.',
  'Call today. If rain is on the way, ask about a temporary cover.'],'today','Missing or damaged shingles'],
 granules:['inspect','Book an inspection','Granules in the gutters: shingles may be wearing out.',[
  'A few granules on a newer roof is normal. Heavy amounts, bald spots or curling shingles are signs of age or hail damage.',
  'Take a photo of what is in the gutter and of the roof from the ground.',
  'Book an inspection to see how much life the roof has left.'],'inspect','Missing or damaged shingles'],
 hail:['inspect','Book an inspection','After hail: get it checked before small damage turns into leaks.',[
  'Dents on gutters, downspouts, vents and siding are good clues the roof was hit too.',
  'Write down the storm date and take photos from the ground.',
  'Don\'t climb up to look. Book an inspection.',
  'If damage is found, many homeowners contact their insurance company next.'],'inspect','Storm damage'],
 sag:['today','Call today','A sagging roofline needs a look soon.',[
  'A dip or sag can mean water damage or a problem with the decking or framing under the shingles.',
  'Stay out of the attic area under the sag.',
  'Call today to have it looked at.'],'today','Something else'],
 flashing:['inspect','Book an inspection','Loose flashing or a lifted boot: a common leak spot.',[
  'Flashing and pipe boots seal the gaps around chimneys, vents and skylights. When they loosen, water gets in.',
  'Check the ceiling and attic below that spot after the next rain.',
  'Book an inspection. If you already see a leak inside, call today.'],'inspect','Roof leak'],
 leaknow:['today','Call today','Active leak: catch the water, then call.',[
  'Put down buckets and towels, and move furniture and electronics out of the way.',
  '<b>If water is near lights or outlets, stay clear</b> and only switch off that circuit if you can stand somewhere dry.',
  'If you can get into the attic safely, look for the wet spot with a flashlight and mark it.',
  'Take photos, and don\'t go up on the roof in the rain. Call today.'],'today','Roof leak'],
 leakrain:['inspect','Book an inspection','Leaks only in heavy rain: book an inspection.',[
  'Note when it happens: how hard it rained, which way the wind blew, how long before the drip started.',
  'Leaks like this often start around chimneys, skylights, vents or valleys.',
  'Book an inspection and share what you noted.'],'inspect','Roof leak'],
 stain:['inspect','Book an inspection','Old stain, dry now: worth a check.',[
  'Trace the edge of the stain with a pencil and write the date next to it.',
  'If it grows after the next rain, the leak is still active. Call.',
  'Book an inspection to find where the water came in.'],'inspect','Roof leak'],
 sidingoff:['today','Call today','Siding blown off: cover the gap.',[
  'Pick up the pieces. They help match the color and style.',
  'The wall behind can soak up water. If you can reach it safely from the ground, cover it with a tarp.',
  'Take photos for your insurance, then call today.'],'today','Siding damage'],
 sidinghail:['inspect','Book an inspection','Cracked or holed siding: book an inspection.',[
  'Cracks and holes let water behind the siding, where it can rot the wall.',
  'Take photos and note when the damage happened, for example the storm date.',
  'Book an inspection. If there was hail, the roof may need a look too.'],'inspect','Siding damage'],
 warp:['inspect','Book an inspection','Warped or buckled siding.',[
  'Heat is a common cause: a grill too close to the wall, or sunlight reflecting off a nearby window.',
  'Siding nailed too tight can also buckle as it expands.',
  'Keep grills away from the wall and book an inspection.'],'inspect','Siding damage'],
 rot:['inspect','Book an inspection','Soft or rotted wood.',[
  'Press with a screwdriver. If it sinks in easily, the wood is rotting.',
  'Rot spreads, and it often means water is getting in nearby.',
  'Book an inspection to find the cause and replace what\'s damaged.'],'inspect','Windows or trim'],
 overflow:['inspect','Book an inspection','Overflowing gutters.',[
  'Clogs are the usual cause. Downspouts can clog too.',
  'Water spilling over can soak siding and pool at the foundation.',
  'Only clean them from a ladder if you are comfortable. Otherwise book a visit.'],'inspect','Gutters'],
 gutterpull:['inspect','Book an inspection','Gutters pulling away from the house.',[
  'Don\'t lean a ladder against a loose gutter.',
  'A sagging gutter can mean loose hangers or rotted trim behind it.',
  'Book an inspection before the next big rain.'],'inspect','Gutters'],
 window:['inspect','Book an inspection','Windows or trim: let\'s take a look.',[
  'Note which windows: drafty, foggy between the panes, hard to open, or leaking around the frame.',
  'Check the trim around them for soft or peeling wood.',
  'Book a visit to talk through repair or replacement.'],'inspect','Windows or trim'],
 plan:['plan','Plan it','Planning a new roof, siding or windows.',[
  'Have the rough age of the current roof or siding if you know it.',
  'Take a few photos of each side of the house.',
  'Request an estimate below, or call.'],'plan','New roof or siding']
};
var CTA={
 '911':'<button class="btn btn-red demo-911" type="button">Call 911</button><button class="btn btn-line demo" type="button">Then call for an inspection</button>',
 today:'<button class="btn btn-cu demo" type="button">Call today</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 inspect:'<a class="btn btn-slate" href="#quote" data-pref>Request an inspection</a><button class="btn btn-line demo" type="button">Call instead</button>',
 plan:'<a class="btn btn-slate" href="#quote" data-pref>Request an estimate</a><button class="btn btn-line demo" type="button">Call instead</button>'
};
var MAXD=3,stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.prog i'),hist=[],need=document.getElementById('need');
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Question '+n+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
 d.o.forEach(function(o,i){h+='<button class="opt'+(o[4]?' danger':'')+'" type="button" data-i="'+i+'">'+ic(o[2])+'<span>'+esc(o[0])+(o[1]?'<small>'+esc(o[1])+'</small>':'')+'</span></button>'});
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
 else if(a){hist=[];ask('safe',true)}
});
ask('safe',false);
/* deep link to a result, e.g. ?check=shingles#check (shareable from a text or a Google post) */
var dl=location.search.match(/[?&]check=(\w+)/);
if(dl&&R[dl[1]]){hist=['safe'];result(dl[1],false);box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
