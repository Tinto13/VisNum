// définition des dimensions et des marges du graphe
/*
const margin = {top: 100, right: 0, bottom: 0, left: 0},
   width = 900 - margin.left - margin.right,
   height = 1000 - margin.top - margin.bottom,
   innerRadius = 50;

// définition des valeurs globales

name = "Dummy";

// Enregistrement évènement de changement sur le menu


d3.select("#fichiers").on('change'), (e) => {
    fichier = d3.event.target.value;
    name = fichier;
    console.log(fichier);
    
}
console.log("impression2"+name);*/

function writeFile(){
    let prediction = document.getElementById("prediction").value;

    document.write(prediction);
    console.log(document);
    }


