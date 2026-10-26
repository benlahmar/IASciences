/* Parcours guidé entre les espaces Cours / TD / TP et les chapitres publiés. */
(()=>{
 'use strict';
 const chapter=Number(document.body.dataset.chapterNumber);
 if(![1,2,3,4,5,6,7,8].includes(chapter))return;
 const steps=[{ch:1,part:'cours',label:'Chapitre 1 · Cours'},{ch:1,part:'td',label:'Chapitre 1 · TD'},{ch:1,part:'tp',label:'Chapitre 1 · TP'},{ch:2,part:'cours',label:'Chapitre 2 · Cours'},{ch:2,part:'td',label:'Chapitre 2 · TD'},{ch:2,part:'tp',label:'Chapitre 2 · TP'},{ch:3,part:'cours',label:'Chapitre 3 · Cours'},{ch:3,part:'td',label:'Chapitre 3 · TD'},{ch:3,part:'tp',label:'Chapitre 3 · TP'},{ch:4,part:'cours',label:'Chapitre 4 · Cours'},{ch:4,part:'td',label:'Chapitre 4 · TD'},{ch:4,part:'tp',label:'Chapitre 4 · TP'},{ch:5,part:'cours',label:'Chapitre 5 · Cours'},{ch:5,part:'td',label:'Chapitre 5 · TD'},{ch:5,part:'tp',label:'Chapitre 5 · TP'},{ch:6,part:'cours',label:'Chapitre 6 · Cours'},{ch:6,part:'td',label:'Chapitre 6 · TD'},{ch:6,part:'tp',label:'Chapitre 6 · Atelier'},{ch:7,part:'cours',label:'Chapitre 7 · Cours'},{ch:7,part:'td',label:'Chapitre 7 · TD'},{ch:7,part:'tp',label:'Chapitre 7 · Atelier'},{ch:8,part:'cours',label:'Chapitre 8 · Cours'},{ch:8,part:'td',label:'Chapitre 8 · Guide'},{ch:8,part:'tp',label:'Chapitre 8 · TP'}];
 const parts=['cours','td','tp'];
 let part=parts.includes(new URLSearchParams(location.search).get('part'))?new URLSearchParams(location.search).get('part'):document.querySelector('#workspace')?.dataset.panel||'cours';
 const dock=document.createElement('nav');dock.className='reading-navigation';dock.setAttribute('aria-label','Navigation de lecture précédent suivant');
 dock.innerHTML='<button class="read-step" id="readingPrev" type="button" aria-label="Étape précédente">← <span>Précédent</span></button><div class="reading-progress"><div class="reading-progress-label" id="readingProgressLabel" aria-live="polite"></div><div class="reading-progress-track"><div id="readingProgressFill"></div></div></div><button class="read-step primary" id="readingNext" type="button" aria-label="Étape suivante"><span>Suivant</span> →</button>';
 document.body.append(dock);
 const prev=dock.querySelector('#readingPrev'),next=dock.querySelector('#readingNext');
 const ix=()=>steps.findIndex(x=>x.ch===chapter&&x.part===part);
 function refresh(){const i=ix();prev.disabled=i===0;next.disabled=i===steps.length-1;dock.querySelector('#readingProgressLabel').textContent=`${steps[i].label} · ${i+1}/${steps.length}`;dock.querySelector('#readingProgressFill').style.width=`${(i+1)/steps.length*100}%`;prev.title=i>0?steps[i-1].label:'Début du parcours';next.title=i<steps.length-1?steps[i+1].label:'Dernière partie publiée';}
 function activate(p, scroll){part=p;const btn=document.querySelector(`.orb[data-open="${p}"]`);btn?.click();if(!scroll)window.scrollTo({top:0,behavior:'instant'});refresh()}
 function move(delta){const i=ix();const target=steps[i+delta];if(!target)return;if(target.ch!==chapter){location.href=`chapitre-${target.ch}.html?part=${target.part}`;return;}activate(target.part,true)}
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 document.querySelectorAll('.orb[data-open], [data-jump]').forEach(btn=>btn.addEventListener('click',()=>{part=btn.dataset.open||btn.dataset.jump;refresh()}));
 document.addEventListener('keydown',e=>{if(e.altKey&&(e.key==='ArrowRight'||e.key==='ArrowLeft')&&!e.ctrlKey&&!e.metaKey){if(document.querySelector('.voice-overlay.open'))return;e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 if(new URLSearchParams(location.search).has('part'))activate(part,false);
 refresh();
})();
