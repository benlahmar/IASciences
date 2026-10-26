# Le Carnet — IA pour les sciences (Master 1, 48 h)

Cours d’intelligence artificielle pour étudiants de Master en sciences (biologie, chimie, géologie, physique, mathématiques, environnement) : huit chapitres, chacun avec un cours, un TD corrigé et un TP Jupyter, plus des démonstrations interactives et des laboratoires vocaux.

**Fil conducteur :** prédire n’est pas expliquer. Chaque chapitre apprend à construire un résultat *vérifiable* : baseline, validation adaptée, incertitude, limites.

## Utiliser le cours

```bash
python -m http.server 8000      # dans le dossier du dépôt
# puis ouvrir http://localhost:8000/index.html
```

Le site est entièrement statique : il peut aussi être publié avec **GitHub Pages** (*Settings → Pages → Deploy from a branch*, branche `main`, dossier racine).

## Programme

| Chapitre | Volume | Notebooks |
|---|---|---|
| 1. IA et recherche scientifique | 4 h | [Première expérience IA](notebooks/ch01-premiere-experience-ia.ipynb) (facultatif) |
| 2. Données scientifiques et Python | 10 h | [TP1 Exploration](notebooks/ch02-tp1-exploration.ipynb) · [TP2 Qualité des données](notebooks/ch02-tp2-qualite-donnees.ipynb) |
| 3. Machine Learning pour les sciences | 12 h | [TP1 Régression](notebooks/ch03-tp1-regression.ipynb) · [TP2 Classification et clustering (Wine)](notebooks/ch03-tp2-classification-clustering.ipynb) |
| 4. Deep Learning scientifique | 7 h | [TP1 Du neurone au MLP](notebooks/ch04-reseaux-neurones.ipynb) · [TP2 PyTorch et CNN](notebooks/ch04-tp2-pytorch-cnn.ipynb) |
| 5. IA générative pour la recherche | 6 h | [Mini-RAG traçable](notebooks/ch05-mini-rag.ipynb) · [Atelier LLM vérifié](notebooks/ch05-atelier-llm.ipynb) (facultatif) |
| 6. Modélisation et découverte scientifique | 3 h | [Ajustement et incertitude](notebooks/ch06-modele-scientifique.ipynb) (facultatif) |
| 7. Fiabilité, explicabilité et éthique | 3 h | [Audit de validation](notebooks/ch07-fiabilite-validation.ipynb) (facultatif) |
| 8. Projet scientifique intégrateur | 3 h | [Notebook de référence (cancer du sein, Wisconsin)](notebooks/ch08-projet-integrateur.ipynb) |

Maquette : 18 h de CM, 10 h de TD, 20 h de TP. Les ateliers facultatifs sont hors volume horaire.

## Notebooks

Chaque notebook comporte un bouton **Ouvrir dans Colab**, des explications avec formules, des démonstrations commentées, des **exercices à compléter** (cellules contenant `...`) et des **corrigés repliés**. Ils s’exécutent en quelques secondes sur un CPU.

Installation locale :

```bash
pip install -r requirements.txt
jupyter lab notebooks/
```

`torch` n’est nécessaire que pour `ch04-tp2-pytorch-cnn.ipynb`. L’atelier `ch05-atelier-llm.ipynb` fonctionne sans clé API (réponses simulées) ; l’appel à un LLM réel y est facultatif.

## Démonstrations interactives

Les pages de cours contiennent des démonstrations exécutées dans le navigateur (`demonstrations.js`) : surapprentissage polynomial, valeurs atypiques et statistiques robustes, seuil de décision et matrice de confusion, descente de gradient, convolution d’un spectre, température d’un modèle de langage, extrapolation d’une loi physique, intervalle de confiance par bootstrap. Toutes utilisent des **données simulées** et le précisent.

## Données et vie privée

Aucun compte, serveur de suivi ni envoi de données : la progression reste dans le navigateur (export JSON possible depuis le tableau de bord). Voir aussi `LISEZ-MOI.txt`.
