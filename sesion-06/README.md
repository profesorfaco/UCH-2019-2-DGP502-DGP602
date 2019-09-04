# Sesión 6: Lunes 9 de septiembre

### CANVAS

[p5.js](https://p5js.org/es/reference/) nos ayuda a introducirnos a la programación en JavaScript; usándolo, con pocas líneas de código podemos, por ejemplo, dibujar una elipse en un [canvas](https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial) de 800 pixeles de ancho y 600 de alto:

```
function setup(){
  createCanvas(800,600);
}

function draw(){
  ellipse(width/2,height/2,50,50);
}
``` 

[p5.js] también nos ayuda a manipular el [DOM](https://developer.mozilla.org/es/docs/DOM), agregando elementos a la página web, siempre y cuando estemos sumando la biblioteca de [p5.dom](https://p5js.org/es/reference/#/libraries/p5.dom). Por ejemplo, podemos sumar un [select](https://www.w3schools.com/tags/tag_select.asp):

```
var s;

function setup() {
  noCanvas();
  s = createSelect();
  s.option('Primera opción',0);
  s.option('Segunda opción',1);
  s.option('Tercera opción',2);
  s.position(10,10);
}
``` 

Incluso antes del dibujo en el [canvas](https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial) y la manipulación del [DOM](https://developer.mozilla.org/es/docs/DOM), p5.js nos puede ayudar: Nos permite precargar datos mediante `loadJSON()`, `loadStrings()`, `loadTable()`, evitándonos algunas complicaciones de la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch).

Luego, si queremos hacer visualizaciones, podemos aprovechar todas o parte de las ayudas recién descritas: dibujo en canvas, manipulación del DOM o precarga de datos externos. Y si el dibujo en canvas resulta muy complejo, bien podrían aprovecharse otras bibliotecas enfocadas en facilitarlo. Podemos trabajar, sin problemas con p5.js y [Chart.js](https://www.chartjs.org/): **Eso es lo primero que exploraremos con los ejercicios en este repositorio.** 

#### CHART.JS / Simple yet flexible JavaScript charting for designers & developers

- https://www.chartjs.org/docs/latest/
- https://www.chartjs.org/samples/latest/


### SVG

Canvas no es la única manera de dibujar en un sitio web. También está [SVG](https://developer.mozilla.org/es/docs/Web/SVG). Y para trabajar visualizaciones de datos con SVG hay una vía de "simplificación": [d3.js](https://d3js.org/)

Como la simplificación va entre comillas, convendría partir por bibliotecas que simplifican el uso de la biblioteca de d3.js

#### D3PLUS.JS / Data visualization made easy
- https://d3plus.org/docs/
- https://d3plus.org/examples/

#### C3.JS / D3-based reusable chart library
- https://c3js.org/reference.html
- https://c3js.org/examples.html
