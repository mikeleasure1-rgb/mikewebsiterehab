(function(){

var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast("<strong>Demo:</strong> on the real site this calls Oscar's in one tap. "+TEL);
});
var P={
 spring:'M12 4c2 3 2 5 0 7-2-2-2-4 0-7zm0 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
 summer:'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
 fall:'M12 3c3 4 3 7 0 10-3-3-3-6 0-10zm-6 14h12l-2 4H8z',
 leaf:'M12 3c4 2 7 6 7 10a7 7 0 0 1-14 0c0-2 1-4 2-5 1 3 3 4 5 4-2-3-2-6 0-9z',
 plant:'M12 2c-1 4-4 6-4 10a4 4 0 0 0 8 0c0-2-1-4-2-5 0 2 0 3-1 4 .5-2 .5-5-1-9zM11 14h2v8h-2z',
 sun:'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0-4v2m0 16v2M4 12H2m20 0h-2',
 water:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 cold:'M12 2v20M5 5l14 14M19 5 5 19M2 12h20',
 drain:'M4 6h16v2H4zm2 4h12l-2 10H8z',
 hard:'M3 18h18v2H3zM6 8h4v8H6zm8 2h4v6h-4z',
 slope:'M3 18 12 6l9 12z',
 path:'M8 3h8v18H8z',
 patio:'M4 10h16v10H4zM8 6h8v4H8z',
 wall:'M3 8h18v3H3zm0 5h18v3H3zm0 5h18v3H3z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 note:'M6 3h9l5 5v13H6zm9 1.5V9h4.5',
 cal:'M7 2h2v2h6V2h2v2h3v16H4V4h3zm-2 7v10h14V9z',
 clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 4v5l3 2'
};

var Q={
 start:{q:'What season are you targeting?',o:[
  ['Spring / early summer','Planting, beds, lawn restart','spring','spring'],
  ['Peak summer','Heat-aware work, irrigation questions','summer','summer'],
  ['Fall cleanup','Leaves, beds, winter prep','fall','fall'],
  ['Drainage / grading problem','Water where it shouldn’t be','drain','drain'],
  ['Hardscape / patio / walk','Stone, pavers, outdoor living','hard','hard'],
  ['Not sure — describe the yard','','note','R:other']]},
 spring:{q:'Spring job type?',o:[
  ['Lawn restart / cleanup','','leaf','R:spring_lawn'],
  ['Beds, mulch, shrubs','','plant','R:spring_beds'],
  ['Full curb-appeal refresh','Lawn + beds together','ok','R:spring_full'],
  ['Something else this spring','','note','R:spring_lawn']]},
 summer:{q:'Summer priority?',o:[
  ['Keep lawn / beds alive in heat','','sun','R:summer_maint'],
  ['Planting that can handle heat','','plant','R:summer_plant'],
  ['Irrigation / watering questions','','water','R:summer_water'],
  ['Hardscape while it’s dry','','hard','hard']]},
 fall:{q:'Fall priority?',o:[
  ['Leaf cleanup / haul-away','','leaf','R:fall_leaves'],
  ['Bed cutback + mulch','','plant','R:fall_beds'],
  ['Winterize / protect plantings','','cold','R:fall_winter'],
  ['Get ahead of spring hardscape','','hard','hard']]},
 drain:{q:'What’s the water doing?',o:[
  ['Pools against the house','','water','R:drain_house'],
  ['Yard stays soggy / muddy','','drain','R:drain_yard'],
  ['Washout / erosion on a slope','','slope','R:drain_slope'],
  ['Not sure — need eyes on it','','note','R:drain_yard']]},
 hard:{q:'Hardscape scope?',o:[
  ['Walkway or steps','','path','R:hard_walk'],
  ['Patio / seating pad','','patio','R:hard_patio'],
  ['Wall, edging, or small retain','','wall','R:hard_wall'],
  ['Design help — not sure yet','','note','R:hard_walk']]}
};
var BOOK='Request a quote',PLAN='Project prep',TODAY='Call about timing';
var R={
 spring_lawn:['book',PLAN,'Spring lawn / cleanup — prep list.',[
  '<b>Season:</b> spring / early summer lawn work.',
  'Note lot size roughly and whether equipment can access the backyard.',
  'Flag dog areas, septic lids, and irrigation heads if you know them.',
  'Request a callback — no invented prices on this page.'],'book','Spring / summer lawn & beds'],
 spring_beds:['book',PLAN,'Beds & planting — prep list.',[
  '<b>Season:</b> spring beds / mulch / shrubs.',
  'Photos of current beds help; list sun vs shade if you know it.',
  'Say if you want low-maintenance vs color-heavy.',
  'Request a quote callback.'],'book','Spring / summer lawn & beds'],
 spring_full:['book',PLAN,'Curb-appeal refresh — prep list.',[
  '<b>Scope:</b> lawn + beds together.',
  'Prioritize what neighbors see from the street first.',
  'Budget range is fine as a conversation starter — confirmed on the phone.',
  'Request a callback with photos ready.'],'book','Spring / summer lawn & beds'],
 summer_maint:['book',PLAN,'Summer maintenance — prep list.',[
  '<b>Season:</b> peak summer upkeep.',
  'Note mowing frequency today and any brown patches.',
  'Irrigation: timers, well vs municipal, known leaks.',
  'Request a callback — heat changes timing.'],'book','Spring / summer lawn & beds'],
 summer_plant:['book',PLAN,'Heat-tolerant planting — prep list.',[
  'List sunny vs shady beds and watering ability.',
  'Avoid mid-day installs in extreme heat when possible.',
  'Request a callback for plant suggestions that fit FXBG summers.'],'book','Spring / summer lawn & beds'],
 summer_water:['today',TODAY,'Watering / irrigation question.',[
  'Describe dry spots, runoff, or a timer that misbehaves.',
  'If water is actively wasting, note it — call sooner.',
  'Request a callback with your address and system type if known.'],'today','Spring / summer lawn & beds'],
 fall_leaves:['book',PLAN,'Fall leaf cleanup — prep list.',[
  '<b>Season:</b> fall leaf / haul-away.',
  'Lot size and tree density matter; note HOA rules if any.',
  'Say one-time vs recurring through leaf drop.',
  'Request a callback before peak leaf weeks.'],'book','Fall cleanup'],
 fall_beds:['book',PLAN,'Fall beds — prep list.',[
  'Cutback, mulch, and bed edges for winter.',
  'Note plants you want protected vs replaced.',
  'Request a callback.'],'book','Fall cleanup'],
 fall_winter:['book',PLAN,'Winter prep — prep list.',[
  'Wrap, mulch depth, and sensitive shrubs.',
  'Drainage issues are easier to spot after leaves drop — mention them.',
  'Request a callback.'],'book','Fall cleanup'],
 drain_house:['today',TODAY,'Water against the house — call.',[
  '<b>Call soon</b> if water sits against foundation or enters a basement.',
  'Photos after rain help; note downspout locations.',
  'This DEMO does not diagnose structural issues.'],'today','Drainage / grading'],
 drain_yard:['book',PLAN,'Soggy yard — prep list.',[
  'Where it pools and how long after rain.',
  'Photos and a rough sketch of high/low spots help.',
  'Request a callback for grading / drainage options.'],'book','Drainage / grading'],
 drain_slope:['book',PLAN,'Slope washout — prep list.',[
  'Photos of erosion paths and any failing edging.',
  'Note if neighbors’ runoff contributes.',
  'Request a callback — fixes vary by slope and soil.'],'book','Drainage / grading'],
 hard_walk:['book',PLAN,'Walk / steps — prep list.',[
  'Length roughly, material preference (paver, stone, concrete).',
  'Note trip hazards and lighting needs.',
  'Request a quote callback.'],'book','Hardscape / patio'],
 hard_patio:['book',PLAN,'Patio — prep list.',[
  'Rough size and how you’ll use it (dining, fire, lounge).',
  'Drainage on the pad matters — mention soggy spots.',
  'Request a callback.'],'book','Hardscape / patio'],
 hard_wall:['book',PLAN,'Wall / edging — prep list.',[
  'Height roughly and whether it’s retaining soil.',
  'Photos from multiple angles help.',
  'Request a callback — structural retain walls need care.'],'book','Hardscape / patio'],
 other:['book',BOOK,'Other yard project.',[
  'Describe the yard and what “done” looks like.',
  'Add timing (ASAP, this season, flexible).',
  'Request a callback.'],'book','Something else']
};

var CTA={
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a callback</a><button class="btn btn-line demo" type="button">Call now</button>',
 today:'<button class="btn btn-ink demo" type="button">Call now</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>'
};
var MAXD=4;

function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var stage=document.getElementById('stage'),box=document.getElementById('check'),bar=box.querySelector('.meter i'),hist=[],need=document.getElementById('need');
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setTier(t){box.className=box.className.replace(/\bt-\w+/g,'').trim()+(t?' t-'+t:'')}
function ask(id,focus){
 var d=Q[id],n=hist.length+1,h='<div class="q"><p class="q-step"><span>Step '+n+'</span>'+(hist.length?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(d.q)+'</h3><div class="opts">';
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
