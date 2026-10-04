(function(){
var T=document.querySelector('.toast'),tm;
var TEL='<a href="tel:+17035941785" target="_top">Want this on yours? Call Michael</a>';
function toast(h,ms){T.innerHTML=h;T.hidden=false;requestAnimationFrame(function(){T.classList.add('on')});clearTimeout(tm);tm=setTimeout(function(){T.classList.remove('on');setTimeout(function(){T.hidden=true},250)},ms||6500)}
document.addEventListener('click',function(e){
 if(e.target.closest('.demo'))toast('<strong>Demo:</strong> on the real site this calls Morning Star in one tap. '+TEL);
});

/* ---- Project planner ---- */
var P={
 kitchen:'M3 3h18v7H3zm2 2v3h6V5zm8 0v3h6V5zM3 12h18v9H3zm2 2v5h6v-5zm8 0v5h6v-5z',
 bath:'M7 4a2 2 0 0 1 4 0h-2v7h13v2a6 6 0 0 1-4 5.7V21h-2v-2H8v2H6v-2.3A6 6 0 0 1 2 13v-2h3V4z',
 base:'M2 10 12 3l10 7v2H2zm2 4h16v7H4zm3 2v3h4v-3zm6 0v3h4v-3z',
 home:'M12 3 2 11h3v10h14V11h3zm-2 10h4v6h-4z',
 out:'M1 13 12 4l11 9-1.3 1.5L12 6.6 2.3 14.5zM5 14h14v6H5z',
 fix:'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-.6-.6-2.1z',
 brush:'M18 2l4 4-9 9-4-4zM7 13l4 4c0 3-2 5-6 5H2c2-1 2-3 2-5a3 3 0 0 1 3-4z',
 layout:'M3 3h18v18H3zm2 2v6h6V5zm8 0v14h6V5zM5 13v6h6v-6z',
 drop:'M12 2s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z',
 ease:'M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9 7h6l1 7h-2l-1 8h-2l-1-8H8z',
 tag:'M3 3h8l10 10-8 8L3 11zm4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
 old:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.6 2.1-1 1.7L11 13.6V7z',
 layers:'M12 2 1 8l11 6 11-6zM3.3 12 1 13.3l11 6 11-6-2.3-1.3-8.7 4.7z',
 win:'M4 3h16v18H4zm2 2v6h5V5zm7 0v6h5V5zM6 13v6h5v-6zm7 0v6h5v-6z',
 rot:'M4 3h16v18H4zm4 4v2h3V7zm5 3v2h3v-2zm-5 4v2h3v-2z',
 storm:'M6 8a6 6 0 0 1 11.7-1.6A4.5 4.5 0 0 1 18 15h-3l-2 4h3l-5 5 1-5H9l2-4H6a3.5 3.5 0 0 1 0-7z',
 now:'M13 2 4 14h6l-1 8 9-12h-6z',
 soon:'M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zm-2 7v10h14V9z',
 idea:'M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2zM9 20h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z'
};
function ic(k){return '<span class="oi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="'+P[k]+'"/></svg></span>'}
var ROOMS=[['kitchen','Kitchen','kitchen'],['bath','Bathroom','bath'],['basement','Basement','base'],['whole','Several rooms or the whole house','home'],['outside','Outside the house','out'],['repair','A repair','fix']];
var GOALS={
 kitchen:[['refresh','Refresh it','New finishes, counters, fixtures or floors','brush'],['layout','Full remodel','New layout, or walls and cabinets moving','layout'],['fix','Fix a problem','A leak, damage or worn-out parts','drop']],
 bath:[['refresh','Refresh it','New vanity, fixtures, tile or floors','brush'],['full','Full remodel','Down to the studs, or a new layout','layout'],['access','Make it easier to use','Walk-in shower, grab bars, wider path','ease']],
 basement:[['finish','Finish it','Turn unfinished space into living space','layers'],['update','Update it','Freshen a basement that is already finished','brush'],['water','Damp or water problem','Musty smell, stains or water on the floor','drop']],
 whole:[['multi','Several rooms at once','','layers'],['sell','Getting it ready to sell or rent','','tag'],['older','An older home that needs updating','','old']],
 outside:[['roof','Roof','Worn, leaking or storm-damaged','out'],['windows','Windows','Drafty, foggy or hard to open','win'],['exterior','Other outside work','Siding, trim and the outside of the house','layers']],
 repair:[['rot','Wood rot','Soft trim, sills, posts or floors','rot'],['storm','Storm damage','Wind, hail or a fallen limb','storm'],['water','Water damage','A leak, a burst pipe, stains','drop']]
};
var WHEN=[['asap','As soon as possible','Something is damaged or can\'t wait','now'],['soon','In the next 1 to 3 months','','soon'],['later','Just planning','Getting ideas and a rough number','idea']];
var BASE=['Photos: a wide shot of each wall or side, plus close-ups of anything damaged','Rough measurements: length and width of the space (ceiling height for basements)','Your street address and the best times for a visit','A budget range you are comfortable with, even a rough one'];
var PLANS={
 kitchen_refresh:{t:'Kitchen refresh',ready:['What stays and what goes: cabinets, counters, appliances, floors','Photos of kitchens you like, saved on your phone'],ask:['Which parts can be refreshed instead of replaced?','How long will the kitchen be out of use?'],know:'Keeping the layout the same usually keeps a kitchen project simpler and shorter.'},
 kitchen_layout:{t:'Full kitchen remodel',ready:['A simple sketch of the current layout, with doors and windows','What you want to change: an island, more storage, moving the sink or range','Appliance list: what you are keeping and what you are buying'],ask:['Which changes need permits, and how is that handled?','How long will the kitchen be out of use, and what can I use meanwhile?','What happens if you find damage behind walls or under the floor?'],know:'Moving walls, plumbing or gas lines usually means permits and inspections. Ask how they are handled.'},
 kitchen_fix:{t:'Kitchen repair',ready:['Where the problem is: under the sink, behind the dishwasher, a wall or the floor','When you first noticed it, and whether it is getting worse'],ask:['Can the damaged part be repaired, or does more need replacing?','Could the cause be somewhere else, like plumbing or a roof leak?'],know:'Fix the cause first, then the finish. Covering damage without fixing the source brings it back.',urgent:1},
 bath_refresh:{t:'Bathroom refresh',ready:['What stays: tub, shower, toilet, vanity, tile','The vanity width and the mirror and lighting you have now'],ask:['Can tile be updated without a full tear-out?','How long will the bathroom be out of use?'],know:'If this is your only bathroom, ask about scheduling so you are not without one for long.'},
 bath_full:{t:'Full bathroom remodel',ready:['A sketch with the tub, shower, toilet and vanity positions','What you want: walk-in shower, double vanity, more storage','Any soft floor spots or old leaks you know about'],ask:['Which changes need permits?','What happens if you find rot or water damage under the floor?','How long will it be out of use?'],know:'Moving the toilet, shower or vanity means moving plumbing. Ask how that changes the scope.'},
 bath_access:{t:'Easier-to-use bathroom',ready:['Who will use it, and what is hard today: stepping over the tub, low toilet, tight doorway','Door width and the space in front of the toilet and tub'],ask:['What changes make the biggest difference for us?','Can grab bars go where we need them, and what is behind those walls?'],know:'Small changes such as grab bars, a handheld shower and better lighting can come first while you plan the bigger ones.'},
 basement_finish:{t:'Finish the basement',ready:['How you want to use it: family room, bedroom, office, bathroom','Whether it has ever had water, and where','Where the furnace, water heater and electrical panel are'],ask:['What permits does a finished basement need?','What should be done about moisture before walls go up?','Can a bathroom or bedroom be added?'],know:'Finishing over a damp basement traps moisture. Any water issue gets solved first.'},
 basement_update:{t:'Basement update',ready:['What bothers you most: floors, lighting, walls, layout','Any musty smells or stains'],ask:['Can we keep the walls and change the finishes?','Should anything be checked for moisture first?'],know:'If carpet or drywall is coming out anyway, it is a good time to look for hidden moisture.'},
 basement_water:{t:'Basement water problem',ready:['Photos of stains, damp spots or water lines on walls and floors','When it happens: after heavy rain, all the time, or once','Where your gutters and downspouts drain outside'],ask:['Where do you think the water is coming from?','What should be fixed before anything is finished?'],know:'Water in a basement often starts outside, at gutters, downspouts or grading. Fix the source before finishing anything.',urgent:1},
 whole_multi:{t:'Several rooms at once',ready:['A list of rooms in order of priority','What you want done in each, even in a sentence','Whether you will live in the house during the work'],ask:['Can the work be done in phases?','What order makes sense, and why?','How will the house stay livable during the work?'],know:'Ranking the rooms helps when the budget or schedule needs a trade-off.'},
 whole_sell:{t:'Getting the house ready to sell or rent',ready:['Your target date for listing or move-in','Any inspection report or list from an agent','Rooms buyers or tenants see first'],ask:['What gives the most impact for the time we have?','Can this be done by our date?'],know:'If you already have an inspection report, it is the fastest way to scope the work.'},
 whole_older:{t:'Updating an older home',ready:['The rough age of the house and anything you know was updated','Problem spots: soft floors, cracks, drafty windows, old wiring or plumbing','Rooms you use most'],ask:['What should be fixed first for safety or to stop damage?','What is likely to turn up once walls are opened?'],know:'Older homes can hide surprises. Ask how changes to the plan are priced and approved.'},
 outside_roof:{t:'Roof work',ready:['The rough age of the roof, if you know it','Photos from the ground of any damage, and of any ceiling stains inside','Your insurance info, if it was storm damage'],ask:['Repair or replace, and why?','What happens if the decking under the shingles is damaged?'],know:'Stay off the roof. Photos from the ground or a window are enough for the call.'},
 outside_windows:{t:'Windows',ready:['How many windows, and which ones bother you','Rough sizes of the main ones','What is wrong: drafty, foggy between panes, hard to open, leaking'],ask:['Which windows need replacing, and which can be repaired?','Is the trim around them in good shape?'],know:'Fog between the panes usually means a failed seal. Soft wood around a window can mean water is getting in.'},
 outside_exterior:{t:'Outside of the house',ready:['Photos of each side of the house','What you want: repairs, a new look, or both','Any soft or rotted spots you have found'],ask:['What needs repair before anything new goes on?','How do you match what is already there?'],know:'Soft wood on the outside often means water is getting in. Find the cause first.'},
 repair_rot:{t:'Wood rot repair',ready:['Photos of each soft or rotted spot, with something for scale','Where water might be coming from: gutters, a leak, a sprinkler'],ask:['How far does the rot go?','What is causing it, and how do we stop it coming back?'],know:'Poke it with a screwdriver. If it sinks in easily, the wood is rotting, and rot spreads.'},
 repair_storm:{t:'Storm damage repair',ready:['The date of the storm','Photos of all damage, taken before cleanup','Your insurance company and claim number, if you have one'],ask:['What needs to be covered or secured right away?','What else should be checked for hidden damage?'],know:'Take photos before anything is moved or cleaned up. They help with insurance.',urgent:1},
 repair_water:{t:'Water damage repair',ready:['Where the water came from, if you know: a pipe, an appliance, the roof','Photos of the damage, taken before cleanup','How long it was wet'],ask:['Has the source been fixed?','What needs to come out to dry properly?'],know:'Wet drywall, insulation and flooring may need to come out so everything can dry. Hidden moisture leads to mold.',urgent:1}
};
var URG='<p class="alert"><b>Is water still coming in, or is anything unsafe?</b> Shut off the water at the fixture or the main valve if you can. Stay away from wet outlets, lights and appliances. If a ceiling is sagging, keep everyone out of that room. Take photos before cleanup.</p>';
var stage=document.getElementById('stage'),box=document.getElementById('plan'),dots=box.querySelectorAll('.steps-dots li'),msg=document.getElementById('msg'),sel={};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function setDots(n){dots.forEach(function(d,i){d.className=i<n?'ok':(i===n?'on':'')})}
function opts(list,cls){var h='<div class="opts'+(cls?' '+cls:'')+'">';list.forEach(function(o,i){h+='<button class="opt" type="button" data-i="'+i+'">'+ic(o[3]||o[2])+'<span>'+esc(o[1])+(o[2]&&o[3]?'<small>'+esc(o[2])+'</small>':'')+'</span></button>'});return h+'</div>'}
function shell(n,q,body){return '<div class="q"><p class="q-step"><span>Step '+(n+1)+' of 3</span>'+(n?'<button class="back" type="button" data-back>← Back</button>':'')+'</p><h3 tabindex="-1">'+esc(q)+'</h3>'+body+'</div>'}
function step(n,focus){
 var h;
 if(n===0)h=shell(0,'Which part of the house?',opts(ROOMS.map(function(r){return [r[0],r[1],'',r[2]]})));
 else if(n===1)h=shell(1,'What do you want to do?',opts(GOALS[sel.room].map(function(g){return [g[0],g[1],g[2],g[3]]}),'list'));
 else h=shell(2,'When would you like to start?',opts(WHEN,'list'));
 stage.innerHTML=h;stage.dataset.s=n;setDots(n);
 if(focus)stage.querySelector('h3').focus({preventScroll:true});
}
function plan(key,when,focus){
 var p=PLANS[key],w=WHEN.filter(function(x){return x[0]===when})[0]||WHEN[2],room=ROOMS.filter(function(r){return r[0]===key.split('_')[0]})[0];
 var items=BASE.concat(p.ready),h='<div class="plan" tabindex="-1"><div class="plan-top"><p class="tag">Your plan</p><h3>'+esc(p.t)+'</h3><p>'+esc(room[1])+' · '+esc(w[1].toLowerCase().replace(/^in the/,'in the'))+'</p></div>';
 if(p.urgent&&when==='asap')h+=URG;
 h+='<h4>Have this ready for the estimate call</h4><ul class="check-list">';
 items.forEach(function(it,i){h+='<li><label><input type="checkbox"><span>'+esc(it)+'</span></label></li>'});
 h+='</ul><h4>Good questions to ask</h4><ul class="ask">';
 p.ask.forEach(function(a){h+='<li>'+esc(a)+'</li>'});
 h+='</ul><p class="know">'+esc(p.know)+'</p>';
 h+='<div class="cta"><a class="btn btn-green" href="#quote" data-send>Send this with my estimate request</a><button class="btn btn-line demo" type="button">Call instead</button></div><button class="again" type="button" data-copy>Copy my checklist</button> <button class="again" type="button" data-again>↻ Plan another project</button> <button class="again" type="button" data-back>← Back</button></div>';
 stage.innerHTML=h;stage.dataset.s=3;stage.dataset.key=key;stage.dataset.when=w[0];setDots(3);
 if(focus){var el=stage.querySelector('.plan');el.focus({preventScroll:true});var t=box.getBoundingClientRect().top;if(t<0||t>innerHeight*.4)box.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
}
function summary(){var p=PLANS[stage.dataset.key],w=WHEN.filter(function(x){return x[0]===stage.dataset.when})[0];return p.t+' · timing: '+w[1].toLowerCase()+'.'}
stage.addEventListener('click',function(e){
 var o=e.target.closest('.opt'),b=e.target.closest('[data-back]'),a=e.target.closest('[data-again]'),s=e.target.closest('[data-send]'),c=e.target.closest('[data-copy]');
 var n=+stage.dataset.s;
 if(o){var i=+o.dataset.i;
  if(n===0){sel.room=ROOMS[i][0];step(1,true)}
  else if(n===1){sel.goal=GOALS[sel.room][i][0];step(2,true)}
  else if(n===2){sel.when=WHEN[i][0];plan(sel.room+'_'+sel.goal,sel.when,true)}}
 else if(b){if(n===3){if(!sel.room){var k=stage.dataset.key.split('_');sel.room=k[0];sel.goal=k[1]}step(2,true)}else step(n-1,true)}
 else if(a){sel={};step(0,true)}
 else if(s){if(msg)msg.value=summary()+' ';}
 else if(c){var txt=summary()+'\nHave ready:\n'+[].map.call(stage.querySelectorAll('.check-list span'),function(x){return '- '+x.textContent}).join('\n');
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(function(){toast('Checklist copied. Paste it into a note or a text.',3000)},function(){toast('Couldn\'t copy on this device. Take a screenshot instead.',3000)});else toast('Couldn\'t copy on this device. Take a screenshot instead.',3000)}
});
step(0,false);
/* deep link to a plan, e.g. ?check=kitchen_layout&when=soon#plan */
var dl=location.search.match(/[?&]check=(\w+)/),wh=location.search.match(/[?&]when=(\w+)/);
if(dl&&PLANS[dl[1]]){var k=dl[1].split('_');sel={room:k[0],goal:k[1]};plan(dl[1],wh?wh[1]:'later',false);box.classList.add('in')}

document.querySelector('.lead').addEventListener('submit',function(e){e.preventDefault();this.querySelector('.done').hidden=false});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
if(/[?&]shot=1/.test(location.search))document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
})();
