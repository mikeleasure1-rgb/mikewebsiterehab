(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Fitzwater &amp; Dean in one tap. '+TEL);
});

var P={
 person:'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z',
 biz:'M3 4h18v4H3zm2 6h14v10H5zm3 2v2h8v-2z',
 newc:'M12 3 4 9v12h6v-6h4v6h6V9z',
 cal:'M7 2h2v2h6V2h2v2h3v16H4V4h3zm-1 8h12v8H6z',
 w2:'M7 2h10v4H7zm-2 6h14v14H5zm4 3v2h6v-2zm0 4v2h6v-2z',
 id:'M4 6h16v12H4zm3 3h4v2H7zm6 0h4v2h-4zm-6 4h10v2H7z',
 bank:'M3 10h18v2H3zm2 4h14v6H5zM12 3 4 9h16z',
 home:'M12 3 2 11h3v10h14V11h3z',
 kid:'M12 4a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm-5 9c0-2 2.5-3 5-3s5 1 5 3v7H7z',
 stock:'M4 18h16v2H4zm2-4 3-8h2l3 8h-2.1l-.6-1.6H8.7L8.1 14z',
 health:'M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z',
 ok:'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
 list:'M7 4h14v2H7zm0 6h14v2H7zm0 6h14v2H7zM3 5h2v2H3zm0 6h2v2H3zm0 6h2v2H3z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var Q={
 start:{q:'What kind of visit is this?',o:[
  ['Individual / family tax return','W-2, 1099, credits, refinances','person','indiv'],
  ['Business return or books review','Schedule C, S-corp, LLC, payroll','biz','bizq'],
  ['I’m a new client','First meeting or transferring from another firm','newc','newq'],
  ['Quarterly estimates / mid-year question','Not a full annual return yet','cal','R:quarterly']]},
 indiv:{q:'Anything special this year?',o:[
  ['Pretty standard W-2 year','Maybe a 1099 or two','w2','R:indiv_basic'],
  ['Bought / sold a home, or refinanced','','home','R:indiv_home'],
  ['Kids, daycare, or education credits','','kid','R:indiv_family'],
  ['Investments, crypto, or K-1s','','stock','R:indiv_invest'],
  ['Self-employed side income','','biz','R:indiv_side']]},
 bizq:{q:'What does the business need?',o:[
  ['Annual business tax return','','w2','R:biz_return'],
  ['Bookkeeping catch-up or year-end wrap','','list','R:biz_books'],
  ['Payroll / contractor 1099s','','id','R:biz_payroll'],
  ['New entity or first-year business','','newc','R:biz_new']]},
 newq:{q:'What are you bringing the firm for?',o:[
  ['Personal taxes','','person','indiv'],
  ['Business taxes or books','','biz','bizq'],
  ['Both — household and a business','','list','R:new_both']]}
};
var LIST='Your checklist',BOOK='Request a callback';
var R={
 indiv_basic:['book',LIST,'Individual return — start with these.',[
  '<b>Government ID</b> for each adult on the return.',
  '<b>Last year’s return</b> (PDF or paper) if you have it.',
  '<b>W-2s</b> from every employer; <b>1099s</b> (NEC, INT, DIV, MISC, SSA, etc.).',
  'Health coverage forms (1095-A/B/C) if you received them.',
  'Bank routing/account if you want direct deposit.',
  'Call to confirm anything unique before you drive over.'],'book','Individual tax return'],
 indiv_home:['book',LIST,'Home purchase / sale / refi — add these.',[
  'Everything in the basic individual list.',
  '<b>Closing disclosure / HUD statement</b> for purchase or sale.',
  'Refinance settlement statement and Form 1098 from the lender.',
  'Property tax amounts paid, and any energy-credit receipts if relevant.',
  'Call if you rented the property part of the year.'],'book','Individual tax return'],
 indiv_family:['book',LIST,'Family / education — add these.',[
  'Everything in the basic individual list.',
  'SSNs / ITINs for dependents; Form 8332 if applicable.',
  'Childcare provider name, EIN/SSN, and amount paid.',
  'Form 1098-T and education expense receipts.',
  'Adoption or alimony documents if they apply.'],'book','Individual tax return'],
 indiv_invest:['book',LIST,'Investments — add these.',[
  'Everything in the basic individual list.',
  'Brokerage 1099-B / consolidated 1099; cost basis details.',
  'Crypto year-end statements or gain/loss export.',
  'Schedule K-1s from partnerships, S-corps, or estates (even if late).',
  'Foreign account notes if you have any (the firm will ask the right forms).'],'book','Individual tax return'],
 indiv_side:['book',LIST,'Side income — add these.',[
  'Everything in the basic individual list.',
  '1099-NEC / 1099-K and a simple income/expense total.',
  'Mileage log or vehicle info if you deducted auto use.',
  'Home-office rough square footage if you claim one.',
  'Quarterly estimate payments already made (dates + amounts).'],'book','Individual tax return'],
 biz_return:['book',LIST,'Business return — start with these.',[
  'Prior-year business return and current books (QuickBooks export, Excel, or reports).',
  'Year-end bank / credit-card statements or reconciled balances.',
  'Payroll summaries, W-2/W-3, and 1099s you issued.',
  'Asset purchases/sales (date, amount, description).',
  'Owner draws/contributions and loan activity.'],'book','Business return / books'],
 biz_books:['book',LIST,'Books catch-up — start with these.',[
  'Login or export of your current bookkeeping file.',
  'Bank and credit-card CSVs for the period that is behind.',
  'Sales reports / invoices if you invoice outside the books.',
  'Receipt folder (or photo album) for big expenses.',
  'A note on what “caught up” means for you (monthly, quarterly, year-end).'],'book','Business return / books'],
 biz_payroll:['book',LIST,'Payroll / 1099s — start with these.',[
  'Payroll reports by quarter and year-to-date.',
  'Employee W-4 / contractor W-9 on file (or a list of who needs one).',
  'Prior-year W-2/W-3 and 1099-NEC filings if available.',
  'State unemployment and withholding account IDs if you have them.',
  'Call before deadlines — payroll calendars are unforgiving.'],'book','Business return / books'],
 biz_new:['book',LIST,'New or first-year business — start with these.',[
  'Articles / EIN letter and entity type (LLC, S-corp election, etc.).',
  'Bank statements since you opened the account.',
  'Startup expense list and major asset purchases.',
  'Any 1099s already received or issued.',
  'A short description of what the business does and when it started.'],'book','Business return / books'],
 new_both:['book',LIST,'New client — household + business.',[
  'Prior-year personal and business returns.',
  'Photo ID and a list of family members on the return.',
  'Business EIN letter and current books export.',
  'W-2s / 1099s for the tax year you’re filing.',
  'Write down questions you want answered in the first meeting.'],'book','New client / first visit'],
 quarterly:['book',LIST,'Quarterly / mid-year — start with these.',[
  'Last year’s return and year-to-date income summary.',
  'Estimates already paid (IRS + Virginia) with dates.',
  'Big changes: new job, sale of property, new business, or large bonus.',
  'Call to confirm the next due date before you send a payment.'],'book','Quarterly estimates']
};
var CTA={
 book:'<a class="btn btn-ink" href="#quote" data-pref>Request a callback</a><button class="btn btn-line demo" type="button">Call the firm</button><a class="btn btn-line" href="#bringinfo">Screenshot tip</a>'
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
