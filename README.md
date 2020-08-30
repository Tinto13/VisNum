# VisNum
Projets de visualisation de données UNIL


## Cours Unil : Visualisation de données (P2020)

**Professeur :** Loïc Cattani   

**Assistant :** Loris Rimaz

Etudiant : Jacinto Fernandez

## Résumé du projet :

Le projet VisNum vise à utiliser la bibliothèque graphique D3.js pour réaliser une application graphique dans le cadre du cours Unil "Visualisation de données" du semestre de printemps 2020. Nous allons ainsi permettre la visualisation sous forme de graphes au format "Radial bars" de l'utilisation privée d'Internet par les ménages suisses. 

Les données utilisées sont issues des **Enquêtes Omnibus TIC de l'Office Fédéral de la statistique (OFS) pour les années 2010, 2014, 2017 et 2019. © OFS - Encyclopédie statistique de la Suisse.**

## Project abstract :

The VisNum project aims to develop a graphical application based on D3.js graphical library use as part of the Unil "Visualisation de données" course. We will so allow the vizualisation of Internet use in Swiss households with Radial Bar visualisation diagrams. 

The data used come from the **Omnibus TIC surveys of the Federal Statistical Office (OFS) for the years 2010, 2014, 2017 and 2019. © OFS - Encyclopédie statistique de la Suisse.**

_____________________________________________________________________________________________________________________________________

## Plan de la documentation :

1) Le projet VisNum en bref
2) Sources diverses
3) Plan du projet VisNum
4) Design de l'application
5) Brève description de l'architecture de l'app. VisNum
6) Pages et fonctionnalités principales de l'application VisNum 
7) Tests et validation de l'application 
8) Documentation et mode d'emploi 
9) Evolution du projet VisNum 

_____________________________________________________________________________________________________________________________________

## 1) Le projet VisNum en bref 

Dans le projet VisNum nous allons créer une application avec le framework graphique D3.js pour charger des données statistiques issues de plusieurs fichiers en format Excel et de les visualiser sous forme de diagrammes "Radial bars" en invoquant différents critères de regroupement et d'affichage.
_____________________________________________________________________________________________________________________________________

## 2) Sources diverses

### 2.1) Sources académiques

La source de formation et de documentation principale a consisté dans le cours "Unil - Visualisation de données (P2020)" du Professeur Loic Cattani assisté de Loris Rimaz. Je tiens à les remercier ici de leur excellent travail qui s'est avéré particulièrement difficile au vu des conditions dues à la pandémie Covid et aux mesures sanitaires nécessaires. Nonobstant les cours ont pu se dérouler à distance et les vidéos qu'ils ont créées pour appuyer et illustrer les cours, disponibles sur Moodle, m'ont été fort utiles pour ce projet.

### 2.2) Sources documentation et code

De nombreux tutoriels et exemples de réalisations D3.js disponibles sur le Web et plus particulièrement certains exemples de Graphiques "Radial Bars" de Mike Bostock m'ont aussi servi d'inspiration et de motivation dans le cadre du projet.

### 2.3) Données

Les données utilisées sont issues des **Enquêtes Omnibus TIC de l'Office Fédéral de la statistique (OFS) pour les années 2010, 2014, 2017 et 2019. © OFS - Encyclopédie statistique de la Suisse.**

L'exploitation de ces données est soumise à des conditions légales qui sont disponibles sur le site de l'OFS et dont un extrait est aussi à disposition dans le fichier OFSdata copyright.txt disponible dans ce Github sous : https://github.com/Tinto13/VisNum/blob/master/OFSdata%20copyright.txt. 

Certaines données sont soumises à des conditions d'interprétation et de restrictions. Prière de consulter les fichiers d'origine ou les conditions des enquêtes sur le site Web de l'OFS pour tous les détails. 

4 fichiers ont été téléchargés du site de l'OFS en format Excel le 14 Avril 2020 ( un pour chacune des années où l'enquête a été effectuée ) desquels nous avons extrait un certain nombre de données que nous avons ensuite regroupées dans 4 fichiers au format CSV pour servir de fichiers d'entrée pour l'application Visnum. 

Certaines données manquantes ou non représentatives ont été remplacées par une valeur vide et il est donc possible que certaines valeurs n'apparaissent ainsi pas sur les graphes.
_____________________________________________________________________________________________________________________________________

## 3) Plan du projet VisNum :

Le projet comprend les phases suivantes :

### 3.1       Définition du projet : 

Choix des formes graphiques, du type de données et des sources de données disponibles.

### 3.2       Préparation des données :

#### 3.2.1    Choix et analyse des données disponibles :

Sur le base du choix du domaine del'utilisation privée d'Interet dans les ménages suisses il a fallu déterminer les rubriques et les catégories  parmi les données diponibles dans les fichiers originels et aussi que ces donées étaient autant que possible disponibles pur les 4 années où des enquêtes ont eu lieu.

#### 3.2.2    Téléchargement des données d'origine :

4 fichiers en format tableur Excel ont été téléchargés du site Web de l'OFS le 14 Avril 2020 correpondant à chacune des 4 années où des enquêtes ont été faites par l'OFS : soient les années 2010, 2014, 2017 et 2019. Ces 4 fichiers initiaux sont fournis dans ce Github dans le folder Datafiles regroupés sous forme de feuilles Excel dans le fichier : Omnibus 20102019.xlsx.

#### 3.2.3    Elimination et regroupement des données non désirées :

Nous avons regroupé les données conservées dans une feuille Excel pour chaque année dans le fichier Omnibus 20102019.xlsx comme suit :

Les rubriques d'utilisation d'Internet conservées sont les 18 suivantes  : Communiquer par courrier électronique,	Chercher des informations sur biens ou services,	Lire ou consulter les nouvelles,	Consulter Internet dans le but d'apprendre,	Rechercher des informations en relation avec la santé,	Acheter/commander des produits (biens ou services),	Utiliser des services en relation avec des voyages,	Faire du e-banking,	Télécharger ou regarder des films ou des vidéos,	Télécharger ou écouter de la musique, Ecouter la radio ou regarder la TV,	Créer/actualiser son profil sur un réseau social,	Téléphoner ou video-conférences,	Rechercher un emploi,	Jouer en ligne ou télécharger des jeux , Vendre des produits,	S'exprimer lors de campagnes politiques, Suivre des cours en ligne. Pour des contraintes d'affichage des graphes, nous avons raccourci les noms de la plupart de ces rubriques mais en veillant à ne pas en dénaturer le sens initial.

Nous avons aussi éliminé avec Excel certaines catégories d'utilisateurs que nous ne voulions pas garder dans le cadre de ce projet pour conserver les 9 suivantes : Nombre de personnes, Total en % de la population âgée de 15 ans et plus, Total en % des internautes, Personnes âgées de 15 à 29 ans, Personnes âgées de 30 à 59 ans, Personnes âgées de 60 ans et plus, Habitants de Suisse alémanique, Habitants de Suisse romande, Habitants de Suisse italienne.

#### 3.2.4    Adaptation des fichiers au format csv :

Chacune des 4 feuilles Excel est copiée dans un fichier annuel au format csv avec l'aide d'Excel, les fichiers sont ainsi prêts pour l'utilisation par l'application.

### 3.3 Stockage des fichiers annuels csv :

Les 4 fichiers "2010 csv.csv", "2014 csv.csv", "2017 csv.csv" et "2019 csv.csv" sont disponibles dans ce Github dans le folder Datafiles pour leur utilisation par l'application.

### 3.4       Codage de l'application :

Le codage a été fait de manière progressive de manière àbien pouvoir assimiler l'utilisation de D3.js. Chaque étape importante a fait l'objet du développement d'un programme particulier. Tous ceux-ci figurent dans la liste ci-dessous et sont également disponibles dans ce Github dans le folder TestPrograms :

1. RadialBarTestsV02.html : Familiarisation avec D3.arc et lecture de données dans un tableau
2. testsThen.html : Familiarisation avec la lecture de données dans un fichier csv
3. TestsRadarGrid.html : Dessin de lignes et d'axes de type "Radargrid"
4. RadialBarTestV04.html : Graphe "Radial Bars" complet avec lecture de données dans un fichier csv
5. TestCleanCode.html : reengineering du code avec séparation en différentes fonctions
6. TestCleanCodeV01.html : split en différents modules html, js et css
7. main.html puis Index.html : application finale avec appel des modules html pour les différentes staatistiques et choix de l'année désirée

Dans tous les cas les styles sont définis dans le fichier main.css.

### 3.5       Tests de l'application

### 3.6       Documentation de l'application

_____________________________________________________________________________________________________________________________________

## 4) Design de l'application :

Le design de l'application a été fait à l'aide du logiciel 
_____________________________________________________________________________________________________________________________________

## 5) Brève description de l'architecture de l'app. VisNum :

Les principaux composants de l'application VisNum sont :

1. Framework D3.js
2. Bootstrap pour 
3. Le style de l'application est contenu dans le fichier main.css
4. Git, Github et Gihub desktop pour le versioning de l'application ainsi que pour la coordination du codage par le team

_____________________________________________________________________________________________________________________________________

## 6) Pages et fonctionnalités principales de l'application VisNum :

Les pages principales de la version prototype disponibles sont :

- Page d

Les fonctionnalités principales sont :

- 

_____________________________________________________________________________________________________________________________________

## 7) Tests et validation de l'application :

Work in progress
_____________________________________________________________________________________________________________________________________

## 8) Documentation et mode d'emploi :

L'application VisNum est "self-explanatory" et l'information fournie sur ce README fait office de mode d'emploi.

_____________________________________________________________________________________________________________________________________


## 9) Evolution du projet VisNum :

En fonction du temps à disposition des fonctionnalités supplémentaires telles que définies dans le full-version design viendront s'ajouter à celles présentes dans la version prototype.

