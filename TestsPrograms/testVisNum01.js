// Selection du body
const body = d3.select('body');

// Ajout d'un élément svg
 const svg = body.append('svg').attr('width', 600).attr('height', 600);

 // Ajout d'un groupe avec translation uniforme de 20 pixels
 const group = svg.append('g').attr('transform', 'translate(20,20)');

 // Ajout du grand rectangle arrondi bleu
 group.append('rect')
     .attr('width', 200)
     .attr('height', 200)
     .attr('rx', 30)
     .style('fill', 'navy');

 // Ajout du grand cercle blanc
 group.append('circle')
     .attr('cx', 100)
     .attr('cy', 100)
     .attr('r', 80)
     .style('fill', 'white');

 // Ajout de la barre verticale bleue
 group.append('rect')
     .attr('x', 90)
     .attr('y', 40)
     .attr('width', 20)
     .attr('height', 80)
     .style('fill', 'navy');

 // Ajout du point bleu
 group.append('circle')
     .attr('cx', 100)
     .attr('cy', 145)
     .attr('r', 10)
     .style('fill', 'navy');

 // Ajout d'un deuxième groupe avec translation uniforme de 20 pixels

 const group3 = svg.append('g').attr('transform', 'translate(300,20)');

 // Ajout du rectangle arrondi rouge
 group3.append('rect')
     .attr('width', 200)
     .attr('height', 200)
     .attr('rx', 30)
     .style('fill', 'red');

 // Ajout du cercle vert
 group3.append('circle')
     .attr('cx', 100)
     .attr('cy', 100)
     .attr('r', 80)
     .style('fill', 'green');

 // Ajout du texte   

 group3.append('text')
     .attr('x', 100)
     .attr('y', 125)
     .attr('font-size', 60)
     .attr('text-anchor','middle')
     .attr('fill', 'white')
     .text('SVG');


