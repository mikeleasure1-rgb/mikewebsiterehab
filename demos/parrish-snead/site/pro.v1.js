(function(){

var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Parrish Snead in one tap. '+TEL);
 if(e.target.closest('.demo-911'))toast('<strong>Demo:</strong> on the real site this would dial 911. If you are in danger, call 911 yourself now.');
});
var P={
 injury:'M12 3 4 9v12h6v-6h4v6h6V9z',
 biz:'M4 20V8l8-4 8 4v12H4zm4-2h2v-4H8zm6 0h2v-4h-2z',
 estate:'M6 3h9l5 5v13H6zm9 1.5V9h4.5',
 car:'M5 13h14l-1.5-4.5H6.5zm-1 2v4h2v-2h12v2h2v-4H4z',
 fall:'M12 3v10m-4 4 4 4 4-4',
 work:'M4 8h16v2H4zm2 4h12v8H6zM9 4h6v4H9z',
 doc:'M7 2h8l4 4v16H7zm8 1.5V7h3.5',
 clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 4v5l3 2',
 cal:'M7 2h2v2h6V2h2v2h3v16H4V4h3zm-2 7v10h14V9z',
 list:'M7 5h14v2H7zm0 6h14v2H7zm0 6h14v2H7zM3 5h2v2H3zm0 6h2v2H3zm0 6h2v2H3z',
 id:'M4 6h16v12H4zm3 3h4v2H7zm6 0h4v2h-4zm-6 4h10v2H7z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 note:'M6 3h9l5 5v13H6zm9 1.5V9h4.5',
 alert:'M12 3 2 21h20L12 3zm0 6v5m0 3h.01'
};

var Q={
 start:{q:'What kind of matter?',o:[
  ['Injury or accident','Someone was hurt','injury','injury'],
  ['Business matter','Contract, dispute, company question','biz','biz'],
  ['Estate, will, or probate','Planning or after a death','estate','estate'],
  ['Not sure — need a first call','','note','R:general'],
  ['I am in immediate danger','Call 911 — not a website','alert','R:danger',1]]},
 injury:{q:'What best fits?',o:[
  ['Car / traffic crash','','car','injury_when'],
  ['Fall or premises injury','','fall','injury_when'],
  ['Work-related injury','','work','injury_when'],
  ['Something else / not sure','','note','injury_when']]},
 injury_when:{q:'When did it happen?',o:[
  ['In the last few days','','clock','R:injury_recent'],
  ['Weeks or months ago','','cal','R:injury_later'],
  ['Longer ago — still have questions','','list','R:injury_later'],
  ['Not sure of the date','','note','R:injury_recent']]},
 biz:{q:'Business topic?',o:[
  ['Contract review or negotiation','','doc','R:biz_contract'],
  ['Dispute with a customer / vendor','','biz','R:biz_dispute'],
  ['Company formation / governance','','ok','R:biz_form'],
  ['Something else for the business','','note','R:biz_contract']]},
 estate:{q:'Estate topic?',o:[
  ['Will / planning while everyone is well','','doc','R:estate_plan'],
  ['Probate after a death','','list','R:estate_probate'],
  ['Power of attorney / healthcare docs','','id','R:estate_poa'],
  ['Not sure — family situation is complex','','note','R:estate_plan']]}
};
var BOOK='Request a callback',TODAY='Call soon',SAFE='Safety first';
var R={
 injury_recent:['today',TODAY,'Recent injury — gather this, then call.',[
  '<b>Get medical care first</b> if anyone still needs it.',
  'Photos of the scene, police/incident report numbers, and insurance cards help.',
  'Write a short timeline while it’s fresh.',
  'Call the firm number on this page (display only in this DEMO) or request a callback.',
  'This is not legal advice and not a promise about any case.'],'today','Injury / accident'],
 injury_later:['book',BOOK,'Injury follow-up — bring a packet.',[
  'Medical records / bills you already have, and a timeline.',
  'Insurance letters and any settlement offers (don’t ignore deadlines on letters).',
  'Request a callback — bring questions in writing.',
  'No outcome promises on this DEMO.'],'book','Injury / accident'],
 biz_contract:['book',BOOK,'Business contract — prep list.',[
  'The contract (PDF or paper) and a one-paragraph goal.',
  'Deadlines, dollar amounts, and the other party’s name.',
  'Request a callback for a consult path.',
  'General information only — not legal advice.'],'book','Business matter'],
 biz_dispute:['today',TODAY,'Business dispute — call with dates.',[
  'Write what happened, when, and what you’ve already tried.',
  'Save emails/texts; don’t delete threads.',
  'Call or request a callback soon if deadlines are looming.',
  'Not legal advice.'],'today','Business matter'],
 biz_form:['book',BOOK,'Company formation / governance.',[
  'Entity goals (LLC, corp, etc.) and who the owners are.',
  'Any draft documents you already have.',
  'Request a callback.'],'book','Business matter'],
 estate_plan:['book',BOOK,'Estate planning — starter list.',[
  'Family tree sketch and approximate asset categories (no account passwords here).',
  'Prior wills / trusts if any.',
  'Request a callback — planning is done in a real consult.',
  'Not legal advice.'],'book','Estate / probate'],
 estate_probate:['book',BOOK,'Probate — starter list.',[
  'Death certificate copies and the will if one exists.',
  'A rough list of assets and debts.',
  'Request a callback; court timing varies.',
  'Not legal advice.'],'book','Estate / probate'],
 estate_poa:['book',BOOK,'POA / healthcare documents.',[
  'Who should decide medical/financial matters if someone can’t.',
  'Prior documents if any.',
  'Request a callback.'],'book','Estate / probate'],
 general:['book',BOOK,'First call — keep it simple.',[
  'One sentence on what happened and what you want help with.',
  'Dates, names, and copies of letters help.',
  'Request a callback or call the listing number (demo buttons don’t dial).',
  'If you are in danger, call 911.'],'book','Not sure — please call'],
 danger:['out',SAFE,'If you are in danger, call 911.',[
  '<b>Call 911 now</b> if you are unsafe.',
  'This website cannot protect you.',
  'When you are safe, you can call the firm about legal questions.'],'911','Something else']
};
var CTA={
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a callback</a><button class="btn btn-line demo" type="button">Call the firm</button>',
 today:'<button class="btn btn-ink demo" type="button">Call the firm</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>',
 out:'<button class="btn btn-ink demo-911" type="button">Call 911</button><a class="btn btn-line" href="#quote">When safe — callback</a>',
 '911':'<button class="btn btn-ink demo-911" type="button">Call 911</button>'
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
