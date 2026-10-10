(function(){

var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Bennett Atkinson in one tap. '+TEL);
});
var P={
 person:'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z',
 biz:'M4 20V8l8-4 8 4v12H4zm4-2h2v-4H8zm6 0h2v-4h-2zM8 10h8v2H8z',
 irs:'M6 4h12v2H6zm0 4h12v14H6zm3 3h6v2H9zm0 4h6v2H9z',
 pay:'M4 6h16v4H4zm0 6h16v8H4zm3 2v4h2v-4zm4 0v4h2v-4zm4 0v4h2v-4z',
 folder:'M3 6h7l2 2h9v12H3z',
 list:'M7 5h14v2H7zm0 6h14v2H7zm0 6h14v2H7zM3 5h2v2H3zm0 6h2v2H3zm0 6h2v2H3z',
 cal:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 id:'M4 6h16v12H4zm3 3h4v2H7zm0 4h10v2H7zm6-4h4v2h-4z',
 home:'M12 3 4 9v12h6v-6h4v6h6V9z',
 cash:'M3 7h18v10H3zm2 2v6h14V9zm5 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 note:'M6 3h9l5 5v13H6zm9 1.5V9h4.5'
};
var Q={
 start:{q:'What kind of tax visit is this?',o:[
  ['Individual / family return','W-2, 1099, itemizing questions','person','indiv'],
  ['Business return or books','S-corp, LLC, payroll, quarterly','biz','biz'],
  ['IRS notice or letter','Something arrived in the mail','irs','R:irs'],
  ['Payroll or sales tax help','Not a full return — a specific ask','pay','R:payroll'],
  ['Not sure yet — general checklist','First time or returning client','list','R:general']]},
 indiv:{q:'Anything special this year?',o:[
  ['Bought or sold a home','Or refinanced','home','R:indiv_home'],
  ['Started a side gig / 1099 income','Freelance, rideshare, contract','cash','R:indiv_1099'],
  ['Mostly W-2 wages','Standard year','folder','R:indiv_w2'],
  ['Kids, college, or dependent care','Credits and paperwork','id','R:indiv_dep']]},
 biz:{q:'What does the business need?',o:[
  ['Full business tax return','Entity return + owner pieces','biz','R:biz_return'],
  ['Bookkeeping catch-up','Months behind or new system','note','R:biz_books'],
  ['Payroll setup or cleanup','Employees or contractors','pay','R:biz_pay'],
  ['Quarterly estimates / planning','Cash-flow or tax projection','cal','R:biz_plan']]}
};
var BRING='Bring this',CALL='Call / schedule',NOTE='Good to know';
var R={
 indiv_w2:['book',BRING,'Individual return — start with these.',[
  '<b>Last year’s return</b> (PDF or paper) and any extension paperwork.',
  '<b>All W-2s</b> and <b>1099s</b> (INT, DIV, NEC, MISC, SSA).',
  'Mortgage interest (Form 1098), property tax, and charitable receipts if you itemize.',
  'HSA/IRA contribution records, and a list of questions.',
  'Call with the packet ready — or leave a callback below.'],'book','Individual tax return'],
 indiv_1099:['book',BRING,'Side income — add these to the usual packet.',[
  'Everything from a standard W-2 year, <b>plus</b>:',
  '<b>1099-NEC / 1099-K</b> and a simple income/expense summary for the side work.',
  'Mileage log (if you drive for work), home-office notes only if you used space regularly.',
  'Quarterly estimate payments you already made (dates + amounts).',
  'Call so the firm can tell you what else fits your situation.'],'book','Individual tax return'],
 indiv_home:['book',BRING,'Home sale or purchase — bring closing papers.',[
  'Standard W-2 / 1099 packet, <b>plus closing disclosure / HUD-1</b>.',
  'Prior cost basis records if you sold (improvements, prior sale docs).',
  'Refinance: Form 1098 and closing costs summary.',
  'Call early — home transactions have timing questions.'],'book','Individual tax return'],
 indiv_dep:['book',BRING,'Dependents &amp; education — extra forms help.',[
  'Standard packet, plus <b>dependent SSNs</b> and childcare provider EIN/name/address.',
  'Form 1098-T for college, and records of tuition you paid.',
  'Adoption or special-needs notes if they apply.',
  'Call with questions listed — credits have rules.'],'book','Individual tax return'],
 biz_return:['book',BRING,'Business return — gather the year in numbers.',[
  '<b>Prior-year business return</b> and current-year trial balance or bookkeeping export.',
  'Bank/credit statements summary, asset purchases (date, cost), loan interest.',
  'Payroll reports / W-2 / 1099 totals issued to others.',
  'Owner draws, contributions, and health coverage notes.',
  'Schedule a visit — business returns need a clear packet.'],'book','Business / payroll'],
 biz_books:['today',CALL,'Bookkeeping catch-up — start here.',[
  'Bank and credit-card CSVs (or login readiness) for the months behind.',
  'Prior chart of accounts if you have one.',
  'Receipts for big expenses; payroll reports if you have staff.',
  'Call today so the firm can scope how far behind the books are.'],'today','Bookkeeping / monthly work'],
 biz_pay:['today',CALL,'Payroll help — have these ready.',[
  'Employee list, pay rates, and how you pay today (manual, ADP, etc.).',
  'Recent payroll tax deposits and any notices.',
  'Contractor list if you issue 1099s.',
  'Call — payroll mistakes compound quickly.'],'today','Business / payroll'],
 biz_plan:['book',BRING,'Planning visit — numbers + goals.',[
  'Latest P&amp;L / balance sheet, even if rough.',
  'Last year’s return and estimate payments year-to-date.',
  'A short note on what you’re deciding (hire, buy equipment, change entity).',
  'Book a planning call — bring questions in writing.'],'book','Business / payroll'],
 irs:['today',CALL,'IRS notice — don’t ignore the deadline.',[
  '<b>Bring the notice itself</b> (all pages) and the envelope date.',
  'Prior return for the tax year on the letter, and any payment records.',
  'Note the response deadline on the first page.',
  '<b>Call soon</b> — representation starts with the letter in hand.'],'today','IRS notice or question'],
 payroll:['today',CALL,'Payroll / sales tax — specific ask.',[
  'What broke (filing, deposit, W-2, sales tax period).',
  'Login letters or notices from the agency.',
  'Recent filings you already submitted.',
  'Call with the period dates written down.'],'today','Business / payroll'],
 general:['book',BRING,'General first visit — a clean starter set.',[
  'Photo ID and last year’s return if you have it.',
  'Whatever income forms you’ve received so far (W-2, 1099).',
  'A written list of life changes (move, marriage, new business, new baby).',
  'Call or request a callback — the firm will finish the list with you.'],'book','Something else']
};
var CTA={
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a callback</a><button class="btn btn-line demo" type="button">Call instead</button>',
 today:'<button class="btn btn-gold demo" type="button">Call the firm</button><a class="btn btn-line" href="#quote" data-pref>Request a callback</a>'
};
var MAXD=3;


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
