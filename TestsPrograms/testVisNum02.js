 // Ajout d'un deuxième groupe avec translation uniforme de 20 pixels

 const group1 = svg.append('g').attr('transform', 'translate(20,300)');

 // Ajout du rectangle arrondi rouge
 group1.append('rect')
     .attr('width', 200)
     .attr('height', 200)
     .attr('rx', 30)
     .style('fill', 'red');

 // Ajout du cercle vert
 group1.append('circle')
     .attr('cx', 100)
     .attr('cy', 100)
     .attr('r', 80)
     .style('fill', 'green');

 // Ajout du texte   

 group1.append('text')
     .attr('x', 100)
     .attr('y', 125)
     .attr('font-size', 60)
     .attr('text-anchor','middle')
     .attr('fill', 'white')
     .text('SVG');
    
// Ajout d'un groupe avec translation uniforme de 20 pixels
const group4 = svg.append('g').attr('transform', 'translate(300,300)');

// Ajout du grand rectangle arrondi bleu
group4.append('rect')
    .attr('width', 200)
    .attr('height', 200)
    .attr('rx', 30)
    .style('fill', 'navy');

// Ajout du grand cercle blanc
group4.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 80)
    .style('fill', 'white');

// Ajout de la barre verticale bleue
group4.append('rect')
    .attr('x', 90)
    .attr('y', 40)
    .attr('width', 20)
    .attr('height', 80)
    .style('fill', 'navy');

// Ajout du point bleu
group4.append('circle')
    .attr('cx', 100)
    .attr('cy', 145)
    .attr('r', 10)
    .style('fill', 'navy');     