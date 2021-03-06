// définition des dimensions et des marges du graphe

const margin = {top: 100, right: 0, bottom: 0, left: 0},
   width = 1000 - margin.left - margin.right,
   height = 1150 - margin.top - margin.bottom,
   innerRadius = 50;

// définition des valeurs globales

// données du fichier csv d'input
let radbData;

// échelles des axes
let radbScalex;
let radbScaley;

// année traitée pour les statistiques
let nameInFile;

// éléments du graphe, barres et titres
let radbBars;
let radbTitles;
let radbValues;

// autres variables

let radbTeinte;
radbTopMargin = 50;
outerRadius = Math.min(width, height) / 2;  

nameInFile = "2010";

// Evènement D3 pour lire l'année choisie ds le menu déroulant

d3.select("#annee").on('change',(e)=> {

    nameInFile = d3.event.target.value;
    console.log("Année : " + nameInFile);
    startInputFile();
});

// Lecture du ficher csv d'input et utilisation de la fonction callback
function startInputFile(){
    console.log("impression1"+nameInFile);
    //d3.csv('2019 csv.csv', function (d) {
    d3.csv(`DataFiles/${nameInFile} csv.csv`, function (d) {
    return {
        nomaxe: d.Nomaxe,
        param: d.Age3059
        }

    }).then(loadData);
}   

// fonction de chargement des données  et de préparation des variables du graphe
function loadData (data) {  

   radbData=data;

   // affichage du tableau data pour contrôle
   console.log(data);
   console.log(radbData);
      
   // on efface tout svg existant
   d3.select("svg").remove();
   
    // affichage de la légende du graphe et de l'année correspondante

    let txtTitre = document.getElementById("textAnnee");
    txtTitre.innerHTML = "Statistiques en % des personnes âgées de 30 à 59 ans pour l'année : "+nameInFile;
    document.body.appendChild(txtTitre);

    // création du svg au moyen d'une div
    let svg = d3.select("#dataVisual02")
        .append("svg")
        .attr("width", width )
        .attr("height", height )
        //.attr("style", "border: thin solid red;")
    
    // définition de l'échelle x
    radbScalex = d3.scaleBand()
        .range([0, (2 * Math.PI)])   // l'axe X va de 0 à 2 Pi
        .align(0)                  // scaling à vérifier
        .domain(data.map(function(d) { return d.nomaxe; })); // le domaine de l'axe x est l'ordinal du fichier d'input

    // définition de l'échelle y
    radbScaley = d3.scaleRadial()
        // définition dynamique du range
        .range([innerRadius, outerRadius]) 
        // définition dynamique du domain en fonction de la valeur max du fichier d'input
        .domain([0, d3.max(data, d => d.param*2)]);

        // groupage pour préparer et passer les barres 
        radbBars = svg.append('g')
            .attr("transform", "translate(" + width / 2 + "," + ( height/2-radbTopMargin)+ ")"); // centrage dynamique du graphe
        
        // groupage pour préparer et passer les titres des barres
        radbTitles = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + ( height/2-radbTopMargin)+ ")") // centrage dynamique du graphe

        // groupage pour préparer et passer les valeurs dans les barres
        radbValues = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + ( height/2-radbTopMargin)+ ")") // centrage dynamique du graphe

        // Dessin de la grille radar

        let radarGrid = d3.scaleLinear()
            .domain([0,10])
            .range([0,450]);
        
        let radarSteps = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8];

        radarSteps.forEach(d =>
        svg.append("circle")
            .attr("cx", width/2)
            .attr("cy", height/2-radbTopMargin)
            .attr("fill", "none")
            .attr("stroke", "white")
            .style("opacity", 0.5)
            .attr("r", radarGrid(d))
    );

    // ajout cercle central pour cacher les caractères %
    svg.append("circle")
        .attr("cx", width/2)
        .attr("cy", height/2-radbTopMargin)
        .attr("fill", "rgb(161, 217, 252)")
        .attr("r", innerRadius)

// Appel de la fonction de dessin du graphe
    graphRadBar();

}

// fonction de dessin du diagramme "Radial bars"
function graphRadBar () {

    console.log(radbData);

    // Echelle de couleur
    radColor = d3.scaleSequential()
        .domain([0, d3.max(radbData, d => d.param)])
        .interpolator(d3.interpolateHsl("yellow","lightblue"));
    
    // ajout du groupe des segments (barres) circulaires
    radbBars.selectAll("path" )
    .data(radbData)
    .enter()
    .append("path")
    //.style("fill", "#e8c8a9")
    .style('fill',d => radColor(d.param))
    .attr('stroke', 'black')
    // utilisation de la fonction d3.arc pour dessiner les barres
    .attr("d", d3.arc()
        // définition de innerRadius
        .innerRadius( innerRadius )
        // définition dynamique de outerRadius selon fichier d'input
        .outerRadius(d => radbScaley(d["param"]))
        // définition dynamique de startAngle selon fichier d'input
        .startAngle(d => radbScalex(d.nomaxe))
        // définition dynamique de endAngle selon fichier d'input
        .endAngle(d => radbScalex(d.nomaxe) + radbScalex.bandwidth())
        .padAngle(0.01)
        .padRadius(innerRadius-10))
  
    // ajout du texte sur les barres
    radbTitles.selectAll("g")
        .data(radbData)
        .enter()
        .append("g")
            .attr("text-anchor", function(d) { return (radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
            .attr("transform", function(d) { return "rotate(" + ((radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (radbScaley(d['param'])+10) + ",0)"; })
            .append("text")
            .text(d => d.nomaxe)
            .attr("transform", function(d) { return (radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
            //.style("stroke", "blue")
            .attr("fill","blue")
            .style("font-size", "12px")
            .attr("font-weight","bold")
            .attr("alignment-baseline", "middle")

    // ajout des valeurs dans les barres
    radbValues.selectAll("g")
        .data(radbData)
        .enter()
        .append("g")
            //.attr("text-anchor", function(d) { return (radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) { return "rotate(" + ((radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (radbScaley(d['param'])-25) + ",0)"; })
            .append("text")
            //.text(d => d.param)
            .text(d => d.param+"%")
            .attr("transform", function(d) { return (radbScalex(d.nomaxe) + radbScalex.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
            .attr("fill", "black")
            .style("font-size", "14px")
            //.style("opacity", 1.0)
            .attr("font-weight","bold")
            .attr("alignment-baseline", "middle")
              
};