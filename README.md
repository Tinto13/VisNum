# VisNum
Projet de visualisation de données UNIL.


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
4) Architecture de l'app. VisNum
5) Design et fonctionnalités principales de l'application VisNum 
6) Documentation et mode d'emploi 
7) Evolution du projet VisNum 
8) Conclusion

_____________________________________________________________________________________________________________________________________

## 1) Le projet VisNum en bref 

Dans le projet VisNum nous allons créer une application avec le framework graphique D3.js pour charger des données statistiques issues de plusieurs fichiers en format Excel et les visualiser sous forme de diagrammes "Radial bars" en invoquant différents critères de regroupement et d'affichage.
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

### 3.1       Analyse et définition du projet : 

Choix des formes graphiques, du type de données et des sources de données disponibles. Définition des objectifs et du périmèttre du projet.

### 3.2       Préparation des données :

#### 3.2.1    Choix et analyse des données disponibles :

Sur le base du choix du domaine de l'utilisation privée d'Internet dans les ménages suisses il a fallu déterminer les rubriques et les catégories  parmi les données diponibles dans les fichiers originels et aussi vérifier que ces données étaient bien collectées pour les 4 années où les enquêtes ont eu lieu.

#### 3.2.2    Téléchargement des données d'origine :

4 fichiers en format tableur Excel ont été téléchargés du site Web de l'OFS le 14 Avril 2020 correspondant à chacune des 4 années où les enquêtes ont été faites par l'OFS : soient les années 2010, 2014, 2017 et 2019. Ces 4 fichiers initiaux sont fournis dans ce Github dans le folder Datafiles regroupés sous forme de feuilles Excel dans le fichier : Omnibus 20102019.xlsx.

#### 3.2.3    Elimination et regroupement des données non désirées :

Nous avons regroupé les données conservées dans une feuille Excel pour chaque année dans le fichier Omnibus 20102019.xlsx comme suit :

Les rubriques d'utilisation d'Internet conservées sont les 18 suivantes  : Communiquer par courrier électronique,	Chercher des informations sur biens ou services,	Lire ou consulter les nouvelles,	Consulter Internet dans le but d'apprendre,	Rechercher des informations en relation avec la santé,	Acheter/commander des produits (biens ou services),	Utiliser des services en relation avec des voyages,	Faire du e-banking,	Télécharger ou regarder des films ou des vidéos,	Télécharger ou écouter de la musique, Ecouter la radio ou regarder la TV,	Créer/actualiser son profil sur un réseau social,	Téléphoner ou video-conférences,	Rechercher un emploi,	Jouer en ligne ou télécharger des jeux , Vendre des produits,	S'exprimer lors de campagnes politiques, Suivre des cours en ligne. 

Pour des contraintes d'affichage des graphes, nous avons raccourci les noms de la plupart de ces rubriques mais en veillant à ne pas en dénaturer le sens initial.

Nous avons aussi éliminé avec Excel certaines catégories d'utilisateurs que nous ne voulions pas garder dans le cadre de ce projet pour conserver les 9 suivantes : Nombre de personnes, Total en % de la population âgée de 15 ans et plus, Total en % des internautes, Personnes âgées de 15 à 29 ans, Personnes âgées de 30 à 59 ans, Personnes âgées de 60 ans et plus, Habitants de Suisse alémanique, Habitants de Suisse romande, Habitants de Suisse italienne.

Toujours avec l'aide d'Excel nous avons inversé les lignes et colonnes pour obtenir le format désiré pour le traitement par l'application.

#### 3.2.4    Adaptation des fichiers au format csv :

Chacune de ces 4 feuilles Excel est finalement copiée dans un fichier annuel nommé "YYYY csv.csv" au format csv avec l'aide d'Excel, les fichiers sont ainsi prêts pour l'utilisation par l'application.

### 3.3 Stockage des fichiers annuels csv :

Les 4 fichiers "2010 csv.csv", "2014 csv.csv", "2017 csv.csv" et "2019 csv.csv" sont disponibles dans ce Github dans le folder Datafiles pour leur utilisation par l'application.

### 3.4       Codage de l'application :

Le codage a été fait de manière progressive de manière à bien pouvoir assimiler l'utilisation de D3.js. Chaque étape importante a fait l'objet du développement d'un programme individuel. Tous ceux-ci figurent dans la liste ci-dessous et sont également disponibles dans ce Github dans le folder TestPrograms :

1. RadialBarTestsV02.html : Familiarisation avec D3.arc et lecture de données dans un tableau
2. testsThen.html : Familiarisation avec la lecture de données dans un fichier csv
3. TestsRadarGrid.html : Dessin de lignes et d'axes de type "Radargrid"
4. RadialBarTestV04.html : Graphe "Radial Bars" complet avec lecture de données dans un fichier csv
5. TestCleanCode.html : reengineering du code précédent avec séparation en différentes fonctions
6. TestCleanCodeV01.html : split en différents modules html, js et css
7. main.html puis Index.html : application finale avec appel des modules html pour les différentes staatistiques et choix de l'année désirée

Dans tous les cas les styles sont définis dans le fichier main.css.

### 3.5       Tests de l'application

Les fichiers "dummy" au format csv qui ont été créées artificiellement pour les tests des différents programmes cités ci-dessus  sont stockés dans ce Github dans le folder TestDatafiles à toutes fins utiles. Dès l'étape 6 les tests ont été exécutés avec les fichiers de données réelles YYYY csv.csv fournis dans ce Github.
_____________________________________________________________________________________________________________________________________

## 4) Architecture de l'app. VisNum :

L'objectif principal est d'utiliser le framework D3.js, de ce fait on a fait appel aux fonctionnalités D3.js suivantes :

### 4.1. Modules/fonctions du framework D3.js:

1.    **d3.csv:**             Lecture des données depuis les fichiers csv
2.    **d3.select.remove:**   Clean-up des svg avant un nouvel affichage
3.    **d3.select:**          Affichage du graphe sur une div 
4.    **d3.scaleBand:**       Echelle x du graphe (positionnement des barres sur le cercle de 0 à 2Pi)
5.    **d3.scaleRadial:**     Echelle y du graphe (hauteur des barres)
6.    **d3.max:**             Détermination de la valeur maximum d'un set de données
7.    **d3.axisleft:**        Dessin d'un axe (pas utilisé)
8.    **d3.scaleLinear:**     Dessin du Radargrid
9.    **d3.scaleSequential:** Préparation de l'échelle de couleurs pour les barres
10.   **d3.interpolateHsl:**  Détermination des couleurs selon valeus Hsl
11.   **d3.arc:**             Dessin des arcs
12.   **d3.select.on:**       Détection de l'évènement change sur le menu déroulant du choix des années à afficher

### 4.2  Pages html :

Bootstrap a été utilisé pour la définition des pages html.
  
### 4.3  Style :
Tous les styles de l'application sont contenus dans le fichier main.css.

### 4.4  Programmes :

Composants js et html pour les programmes correspondants.

### 4.5  Gestion de l'application et des données :

Github et Github desktop pour le versioning et le stockage de l'application et des fichiers de données.
_____________________________________________________________________________________________________________________________________

## 5) Design et fonctionnalités principales de l'application VisNum :

L'application est constituée par le programme **index.html** qui fait office de Home page et qui contient un menu de 9 boutons permettant chacun de choisir la catégorie d'utilisateurs pour laquelle on souhaite afficher les statistiques d'utilisation privée d'Internet en faisant appel à un des 9 programmes ci-dessous :

1. **mainNbPers.html :** Statistiques en nombre total de personnes
2. **mainTotPopul.html :** Statistiques en % de la population totale
3. **mainTotInt.html :** Statistiques en % des Internautes
4. **mainSwRom.html :** Statistiques en % des habitants de Suisse Romande
5. **mainSwAll.html :** Statistiques en % des habitants de Suisse Allemande
6. **mainSwIt.html :** Statistiques en % des habitants de Suisse Italienne
7. **mainAge1529.html :** Statistiques en % des personnes âgées de 15 à 29 ans
8. **mainAge3059.html :** Statistiques en % des personnes âgées de 30 à 59 ans
9. **mainAge60plus.html :** Statistiques en % des personnes âgées de plus de 60 ans

Chacun des ces 9 programmes fait appel à son programme homonyme .js qui assure l'affichage des graphes "Radial Bars" de la catégorie choisie et correspondant à l'une des 4 années disponibles dans un menu déroulant qui s'affiche avec la page html. Le retour à la Home page est toujours possible à l'aide d'un bouton ad-hoc. La légende de chacun des graphes est assurée par un affichage clignotant rappelent le titre de la statistique et l'année correspondante.
_____________________________________________________________________________________________________________________________________

## 6) Documentation et mode d'emploi :

L'application VisNum est "self-explanatory" et l'information fournie dans ce README fait office de mode d'emploi. 

**Il suffit d'appeler le fichier index.html pour activer l'application.**

_____________________________________________________________________________________________________________________________________

## 7) Evolution du projet VisNum :

La première évolution serait d'optimiser le code en utilisant plus le passage de paramètres saisis sur le  menu de la home page html à un seul programme js. 

On pourrait aussi certainement continuer le reengineering du code js pour optimiser les phases de chargement du code et ainsi assurer des bonnes performances si on venait à devoir charger des fichiers de données de plus grandes tailles que ceux utilisés ici.

Optimiser en rendant plus réactifs les affichages des graphes avec par exemple l'affichage de plusieurs années sur un même graphe.

Aussi optimiser les styles et les couleurs et rendre dynamiques les affichages pour, par exemple, s'adapter à l'utilisation de devices différents.


_____________________________________________________________________________________________________________________________________

## 8) Conclusion :

Le format "Radial bar" m'a paru bien plus difficile à utiliser que les formats d'histogrammes plus classiques ce qui a rendu le projet encore plus intéressant.


_____________________________________________________________________________________________________________________________________




