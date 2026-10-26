/* Le bouton de validation d'un espace est ajouté sans modifier le texte pédagogique. */
(()=>{'use strict';const db=window.IAScience;if(!db)return;
const number=Number(document.body.dataset.chapterNumber);
if(!Number.isInteger(number)||number<1||number>8)return;
const title=db.chapters[number-1];
const toolbar=document.querySelector('.toolbar');
if(toolbar){const target=toolbar.querySelector('a');const a=document.createElement('a');a.className='btn';a.href='dashboard.html';a.textContent='◫ Tableau de bord';target?.insertAdjacentElement('afterend',a);const b=document.createElement('a');b.className='btn';b.href=`quiz.html?chapter=${number}`;b.textContent='✓ Quiz du chapitre';a.insertAdjacentElement('afterend',b)}
for(const part of ['cours','td','tp']){
 const reading=document.querySelector(`.panel-view[data-view="${part}"] .reading`);if(!reading)continue;
 const card=document.createElement('section');card.className='finish-part';card.dataset.finishPart=part;
 card.innerHTML=`<div><div class="eyebrow">PROGRESSION PERSONNELLE</div><h3>Vous avez terminé cette partie ?</h3><p>Marquez la partie comme étudiée après la lecture ou l'activité. Ce repère est personnel et ne certifie pas l'acquisition des compétences.</p></div><button class="btn finish-btn" type="button" aria-pressed="false"></button>`;
 const button=card.querySelector('button');function refresh(){const done=!!db.get().parts[String(number)]?.[part];button.textContent=done?'✓ Marqué comme étudié':'○ Marquer comme étudié';button.setAttribute('aria-pressed',String(done));card.classList.toggle('done',done)}
 button.addEventListener('click',()=>{db.setPart(number,part,!db.get().parts[String(number)]?.[part]);refresh()});reading.append(card);refresh();window.addEventListener('learning:updated',refresh);
}
})();
