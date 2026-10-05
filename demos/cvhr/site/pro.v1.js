(function(){

var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Central Virginia Horse Rescue in one tap. '+TEL);
});
var P={
 heart:'M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z',
 home:'M12 3 4 9v12h6v-6h4v6h6V9z',
 hand:'M8 11V7a2 2 0 1 1 4 0v4h1V6a2 2 0 1 1 4 0v5h1V8a2 2 0 1 1 4 0v8c0 3-2 5-6 5H9c-2.5 0-5-2-5-5v-3a2 2 0 1 1 4 0v1z',
 share:'M12 4v10m-4-4 4-4 4 4M5 18h14',
 alert:'M12 3 2 21h20L12 3zm0 6v5m0 3h.01',
 clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 4v5l3 2',
 list:'M7 5h14v2H7zm0 6h14v2H7zm0 6h14v2H7zM3 5h2v2H3zm0 6h2v2H3zm0 6h2v2H3z',
 cal:'M7 2h2v2h6V2h2v2h3v16H4V4h3zm-2 7v10h14V9z',
 truck:'M3 7h11v8H3zm11 2h4l3 3v3h-7zM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 note:'M6 3h9l5 5v13H6zm9 1.5V9h4.5'
};

var Q={
 start:{q:'How do you want to help?',o:[
  ['Donate','One-time or ongoing support','heart','donate'],
  ['Foster a horse','Temporary home / barn space','home','foster'],
  ['Volunteer','Hands-on help when posted','hand','volunteer'],
  ['Share the real link','Send people somewhere safe','share','R:share'],
  ['I found a horse in need','Urgent — ask before you move an animal','alert','R:intake'],
  ['Something else','','note','R:other']]},
 donate:{q:'Giving preference?',o:[
  ['One-time gift','','heart','R:donate_once'],
  ['Monthly / ongoing','','cal','R:donate_month'],
  ['Sponsor feed or vet care','','ok','R:donate_sponsor'],
  ['Not sure — just want a safe path','','note','R:donate_once']]},
 foster:{q:'Foster readiness?',o:[
  ['I have barn / pasture space','','home','foster_exp'],
  ['I can foster short-term only','','clock','foster_exp'],
  ['I need to learn requirements first','','list','R:foster_learn'],
  ['Not sure I can foster — explore other help','','heart','donate']]},
 foster_exp:{q:'Horse experience?',o:[
  ['Experienced with horses','','ok','R:foster_ready'],
  ['Some experience','','hand','R:foster_ready'],
  ['New — willing to learn','','list','R:foster_learn'],
  ['Quarantine / special-needs possible','','alert','R:foster_special']]},
 volunteer:{q:'Volunteer interest?',o:[
  ['Barn / chore days','','hand','R:vol_barn'],
  ['Events / fundraising help','','cal','R:vol_events'],
  ['Transport / trailer help','','truck','R:vol_haul'],
  ['Skills (photo, grant writing, DIY)','','note','R:vol_skills']]}
};
var BOOK='Request a callback',SAFE='Safe next step',TODAY='Call / ask first';
var R={
 donate_once:['book',SAFE,'Donate — use a trusted path.',[
  '<b>Do not send money on a gambling or random storefront page.</b>',
  'Prefer the rescue’s known public listings or the BetterWorld interim campaign while the domain is recovered.',
  'Save a screenshot of where you give and the amount.',
  'Request a callback below if you want the org to confirm the current safe link.',
  'This DEMO does not process donations.'],'book','I want to donate'],
 donate_month:['book',SAFE,'Monthly giving — confirm the channel.',[
  'Ask which platform is current (BetterWorld or another verified page).',
  'Never enter card details on a page that looks like slots or an unrelated shop.',
  'Request a callback to confirm the active monthly option.'],'book','I want to donate'],
 donate_sponsor:['book',SAFE,'Sponsor feed / vet care.',[
  'Say whether you want feed, vet, or general care support.',
  'Confirm the verified giving link before you pay.',
  'Request a callback — sponsorship details change with the herd’s needs.'],'book','I want to donate'],
 foster_ready:['book',BOOK,'Foster interest — here’s what to gather.',[
  'Describe your facility (stalls, pasture, fencing, water).',
  'Note experience level and any species limits.',
  'Ask about quarantine rules before offering space.',
  'Request a callback — foster placements are screened.'],'book','I may be able to foster'],
 foster_learn:['book',SAFE,'Learn foster requirements first.',[
  'Ask for the written foster guidelines before you commit.',
  'Typical topics: fencing, feed, vet access, quarantine.',
  'Request a callback or check verified public posts — not the hijacked domain.'],'book','I may be able to foster'],
 foster_special:['book',BOOK,'Special-needs / quarantine foster.',[
  'Call out quarantine capacity and distance from other equines.',
  'Vet access and experience with rehab cases matter.',
  'Request a callback — these placements are carefully matched.'],'book','I may be able to foster'],
 vol_barn:['book',BOOK,'Barn / chore volunteer.',[
  'Share availability (weekdays, weekends) and any physical limits.',
  'Ask what the current chore list needs.',
  'Request a callback — schedules change with the season.'],'book','I want to volunteer'],
 vol_events:['book',BOOK,'Events / fundraising help.',[
  'Note skills: setup, outreach, donations-in-kind.',
  'Request a callback for the next public event need.'],'book','I want to volunteer'],
 vol_haul:['book',BOOK,'Transport help.',[
  'Say if you have a trailer and typical radius.',
  'Never move an animal without the rescue’s go-ahead.',
  'Request a callback.'],'book','I want to volunteer'],
 vol_skills:['book',BOOK,'Skill-based volunteer.',[
  'Name the skill (photo, web, grants, carpentry, etc.).',
  'Request a callback — the org will match real needs.'],'book','I want to volunteer'],
 share:['book',SAFE,'Share a safe link — not the hijacked domain.',[
  '<b>Do not send people to centralvahorserescue.org while it shows gambling content.</b>',
  'Share verified listings or the BetterWorld interim campaign instead.',
  'If someone already donated on a suspicious page, they should contact their bank/card and tell the rescue via a trusted channel.'],'book','Something else'],
 intake:['today',TODAY,'Found a horse — ask first.',[
  '<b>Do not trailer an animal without guidance.</b> Call the listing number or animal control if the horse is in immediate danger.',
  'Photos, location, and condition notes help.',
  'If you are in danger, call 911.',
  'Request a callback as a backup — urgent welfare comes first.'],'today','Question about an animal'],
 other:['book',BOOK,'Other question.',[
  'Write one sentence about what you need.',
  'Request a callback — this DEMO does not contact the rescue automatically.'],'book','Something else']
};
var CTA={
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a callback</a><button class="btn btn-line demo" type="button">Call listing number</button>',
 today:'<button class="btn btn-ink demo" type="button">Call listing number</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>'
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
