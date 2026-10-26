/* Métadonnées pédagogiques communes — aucune donnée personnelle synchronisée. */
(function(){'use strict';
const chapters=[
 {id:1,title:'IA et recherche scientifique',hours:'4 h',parts:['Cours','TD','Atelier facultatif'],voice:'courbe-a-la-voix.html',voiceTitle:'Courbe à la voix',notebooks:[['Première expérience IA','ch01-premiere-experience-ia.ipynb']],summary:'Formuler des questions scientifiques et identifier les méthodes adaptées.'},
 {id:2,title:'Données scientifiques et Python',hours:'10 h',parts:['Cours','TD','TP (6 h)'],voice:'donnees-a-la-voix.html',voiceTitle:'Données à la voix',notebooks:[['TP1 · Exploration','ch02-tp1-exploration.ipynb'],['TP2 · Qualité des données','ch02-tp2-qualite-donnees.ipynb']],summary:'Explorer, nettoyer et représenter des observations scientifiques.'},
 {id:3,title:'Machine Learning pour les sciences',hours:'12 h',parts:['Cours','TD','TP (6 h)'],voice:'ml-a-la-voix.html',voiceTitle:'ML à la voix',notebooks:[['TP1 · Régression','ch03-tp1-regression.ipynb'],['TP2 · Classification et clustering','ch03-tp2-classification-clustering.ipynb']],summary:'Entraîner et comparer des modèles prédictifs avec une validation appropriée.'},
 {id:4,title:'Deep Learning scientifique',hours:'7 h',parts:['Cours','TD','TP (3 h)'],voice:'reseau-a-la-voix.html',voiceTitle:'Réseau à la voix',notebooks:[['TP1 · Du neurone au MLP','ch04-reseaux-neurones.ipynb'],['TP2 · PyTorch et CNN','ch04-tp2-pytorch-cnn.ipynb']],summary:'Comprendre le fonctionnement des réseaux neuronaux et leur généralisation.'},
 {id:5,title:'IA générative pour la recherche',hours:'6 h',parts:['Cours','TD','TP (3 h)'],voice:'rag-a-la-voix.html',voiceTitle:'RAG à la voix',notebooks:[['Mini-assistant scientifique','ch05-mini-rag.ipynb'],['Atelier facultatif · LLM vérifié','ch05-atelier-llm.ipynb']],summary:'Interroger des sources, concevoir des prompts et vérifier les réponses.'},
 {id:6,title:'Modélisation et découverte scientifique',hours:'3 h',parts:['Cours','TD','Atelier facultatif'],voice:'modele-a-la-voix.html',voiceTitle:'Modèle à la voix',notebooks:[['Ajustement de modèle','ch06-modele-scientifique.ipynb']],summary:'Relier modèles physiques, observations et estimation de paramètres.'},
 {id:7,title:'Fiabilité, explicabilité et éthique',hours:'3 h',parts:['Cours','TD','Atelier facultatif'],voice:'fiabilite-a-la-voix.html',voiceTitle:'Fiabilité à la voix',notebooks:[['Audit de validation','ch07-fiabilite-validation.ipynb']],summary:'Auditer les biais, les fuites de données et la solidité des conclusions.'},
 {id:8,title:'Projet scientifique intégrateur',hours:'3 h',parts:['Cours','Guide autonome','TP (2 h)'],voice:'projet-a-la-voix.html',voiceTitle:'Projet à la voix',notebooks:[['Notebook de référence','ch08-projet-integrateur.ipynb']],summary:'Construire et présenter une étude scientifique reproductible.'}
];
const skills=[
 ['C1','Fondements de l’IA','Distinguer régression, classification, apprentissage profond et IA générative.'],
 ['C2','Données & Python','Nettoyer, décrire et représenter un jeu de données scientifique.'],
 ['C3','Formulation scientifique','Traduire une question de recherche en tâche d’apprentissage.'],
 ['C4','Modèles & validation','Entraîner et comparer des modèles selon un protocole valide.'],
 ['C5','Deep Learning','Expliquer et expérimenter un réseau de neurones élémentaire.'],
 ['C6','IA générative','Interroger des outils génératifs et contrôler leurs sources.'],
 ['C7','Interprétation critique','Discuter limites, biais, incertitude et contexte scientifique.'],
 ['C8','Reproductibilité','Documenter code, données, paramètres et conclusions.']
];
const key='ias-learning-v1';
let mem={};
function read(){try{const v=localStorage.getItem(key);return v?JSON.parse(v):{}}catch{return mem||{}}}
function write(obj){mem=obj;try{localStorage.setItem(key,JSON.stringify(obj))}catch{}window.dispatchEvent(new Event('learning:updated'))}
function normalize(s){return {parts:(s&&typeof s.parts==='object'&&s.parts)||{},skills:(s&&typeof s.skills==='object'&&s.skills)||{},quizzes:(s&&typeof s.quizzes==='object'&&s.quizzes)||{}}}
function get(){return normalize(read())}
function setPart(id,part,val){const o=get();const k=String(id);o.parts[k]=o.parts[k]||{};o.parts[k][part]=!!val;write(o)}
function setSkill(skill,val){const o=get();o.skills[skill]=!!val;write(o)}
function recordQuiz(ch,score,total){const o=get();const k=String(ch);const previous=o.quizzes[k]||{};o.quizzes[k]={score,total, best:Math.max(previous.best||0,Math.round(score/total*100)),date:new Date().toISOString()};write(o)}
function stats(){const state=get();let count=0;chapters.forEach(c=>['cours','td','tp'].forEach(p=>{if(state.parts[String(c.id)]?.[p])count++}));const skillsDone=skills.filter(s=>state.skills[s[0]]).length;return {count,total:24,skillsDone,percent:Math.round(count/24*100),skillsTotal:8}}
window.IAScience={chapters,skills,get,setPart,setSkill,recordQuiz,stats,key,write};
})();
