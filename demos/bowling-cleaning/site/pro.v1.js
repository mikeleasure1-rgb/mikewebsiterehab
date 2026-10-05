(function(){

var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Bowling Cleaning in one tap. '+TEL);
});
var P={
 home:'M12 3 4 9v12h6v-6h4v6h6V9z',
 office:'M6 4h12v16H6zm3 3h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z',
 spark:'M12 2l1.5 5.5L19 9l-4.2 3.2L16 18l-4-3-4 3 1.2-5.8L5 9l5.5-1.5z',
 broom:'M8 3h3l1 8H9zm-2 10h12l-1 8H7z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 people:'M9 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm6 1c-2.5 0-4.5 1-4.5 2.5V18h9v-3.5C19.5 13 17.5 12 15 12z',
 move:'M4 7h10v10H4zm12 3h4v7h-4zM8 4h2v3H8z',
 clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 4v5l3 2',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 note:'M6 3h9l5 5v13H6zm9 1.5V9h4.5',
 size:'M4 8h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 14h16v6H4z',
 bath:'M6 4h8v4H6zm-2 6h16v2H7l-1 8h12l-1-6h2l1.5 8H4z'
};

var Q={
 start:{q:'What needs cleaning?',o:[
  ['Home / apartment','Residential clean','home','home'],
  ['Office / small commercial','Suite, shop, or office','office','office'],
  ['Move-in or move-out','Empty or nearly empty works best','move','move'],
  ['Deep clean / one-time reset','After remodel, guests, or neglect','spark','deep'],
  ['Not sure — describe later','','note','R:other']]},
 home:{q:'About how big is the home?',o:[
  ['Studio / 1 bedroom','Rough guide only','size','home_bath'],
  ['2–3 bedrooms','','size','home_bath'],
  ['4+ bedrooms or large home','','size','home_bath'],
  ['Not sure of size','','note','home_bath']]},
 home_bath:{q:'Bathrooms + extras?',o:[
  ['1 bath','','bath','home_freq'],
  ['2 baths','','bath','home_freq'],
  ['3+ baths','','bath','home_freq'],
  ['Also want oven, fridge, or insides of cabinets','Call it out on the quote','spark','home_freq']]},
 home_freq:{q:'How often?',o:[
  ['One-time / deep clean','','spark','R:home_once'],
  ['Weekly or biweekly','','cal','R:home_recur'],
  ['Monthly','','clock','R:home_recur'],
  ['Just need a ballpark conversation','','note','R:home_once']]},
 office:{q:'What kind of space?',o:[
  ['Small office / few rooms','','office','office_size'],
  ['Larger suite or multi-room','','people','office_size'],
  ['Retail / shop floor','','broom','office_size'],
  ['Medical / clinic-style rooms','Extra sanitation notes','bath','office_size']]},
 office_size:{q:'Rough size?',o:[
  ['Under ~1,500 sq ft','Or a handful of desks','size','office_freq'],
  ['1,500–4,000 sq ft','','size','office_freq'],
  ['Larger / multi-floor','','size','office_freq'],
  ['Not sure — walkthrough needed','','note','office_freq']]},
 office_freq:{q:'How often?',o:[
  ['One-time','','spark','R:office_once'],
  ['Recurring (nights/weekends)','','cal','R:office_recur'],
  ['After hours as needed','','clock','R:office_once'],
  ['Daytime while open','','people','R:office_recur']]},
 move:{q:'Move timing?',o:[
  ['Move-out — need it for landlord / buyers','','move','R:move'],
  ['Move-in — empty place before furniture','','home','R:move'],
  ['Date is this weekend','Tight timing','clock','R:move_rush'],
  ['Flexible date','','cal','R:move']]},
 deep:{q:'What drove the deep clean?',o:[
  ['After remodel / construction dust','','spark','R:deep'],
  ['Long time since last pro clean','','broom','R:deep'],
  ['Allergy / health reset','','ok','R:deep'],
  ['Hosting or listing photos','','cal','R:deep']]}
};
var BOOK='Request a quote',SCOPE='Scope summary',RUSH='Call about timing';
var R={
 home_once:['book',SCOPE,'Home one-time / deep clean — send this scope.',[
  '<b>Type:</b> residential one-time or deep clean.',
  'Add bed/bath count and whether the home is occupied or empty.',
  'Note pets, kids’ rooms, or ovens/fridges if you want them included.',
  'No dollar amount is quoted on this page — request a callback for pricing.',
  'Prefer call? Use the number on the page (demo buttons don’t dial).'],'book','Home cleaning quote'],
 home_recur:['book',SCOPE,'Home recurring clean — send this scope.',[
  '<b>Type:</b> residential recurring.',
  'Say weekly, biweekly, or monthly and preferred days.',
  'Add bed/bath count and must-do rooms each visit.',
  'Request a callback — availability confirms on the phone.',
  'This DEMO does not book a crew.'],'book','Recurring schedule question'],
 office_once:['book',SCOPE,'Office one-time — send this scope.',[
  '<b>Type:</b> commercial one-time.',
  'Approximate square footage or desk count helps.',
  'Note kitchens, restrooms, and after-hours access.',
  'Request a quote callback — no invented prices here.'],'book','Office / commercial quote'],
 office_recur:['book',SCOPE,'Office recurring — send this scope.',[
  '<b>Type:</b> commercial recurring.',
  'Nights, weekends, or daytime? How many visits per week?',
  'List restrooms, break room, and flooring types if you know them.',
  'Request a callback to confirm scheduling.'],'book','Office / commercial quote'],
 move:['book',SCOPE,'Move-in / move-out clean.',[
  '<b>Type:</b> move clean (empty or nearly empty works best).',
  'Note fridge/oven, cabinets inside, and garage if needed.',
  'Share move date and city/zip.',
  'Request a callback — timing is tight around move weekends.'],'book','Move-in / move-out clean'],
 move_rush:['today',RUSH,'Move clean with a tight date.',[
  '<b>Call today</b> with the exact move date and address.',
  'Empty or nearly empty homes clean faster — say if furniture is still there.',
  'List fridge/oven/cabinets if they must be done.',
  'Request a callback as backup if you miss each other.'],'today','Move-in / move-out clean'],
 deep:['book',SCOPE,'Deep / reset clean — send this scope.',[
  '<b>Type:</b> deep clean or post-remodel reset.',
  'Call out construction dust, grease, or rooms that need extra time.',
  'Photos help — attach them when the live site supports uploads.',
  'Request a callback; deep cleans are scoped on the phone.'],'book','Home cleaning quote'],
 other:['book',BOOK,'Other cleaning ask.',[
  'Describe the space and what “done” looks like in one sentence.',
  'Add timing (ASAP, this week, flexible).',
  'Request a callback — the company confirms fit and price.'],'book','Something else']
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
