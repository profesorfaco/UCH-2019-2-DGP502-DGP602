# Sesión 6: Lunes 9 de septiembre

### CANVAS

[p5.js](https://p5js.org/es/reference/) ayuda a introducirnos a la programación en JavaScript; usándolo podemos, por ejemplo, dibujar una elipse al centro de un [canvas](https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial) de 800 pixeles de ancho y 600 de alto:

```
function setup(){
  createCanvas(800,600);
}

function draw(){
  ellipse(width/2,height/2,50,50);
}
``` 

p5.js también nos ayuda a manipular el [DOM](https://developer.mozilla.org/es/docs/DOM), agregando elementos a la página web, siempre y cuando estemos sumando la biblioteca de [p5.dom](https://p5js.org/es/reference/#/libraries/p5.dom). Por ejemplo, podemos sumar un [select](https://www.w3schools.com/tags/tag_select.asp):

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

Incluso antes del dibujo en el [canvas](https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial) y la manipulación del [DOM](https://developer.mozilla.org/es/docs/DOM), p5.js nos puede ayudar: Nos permite precargar datos mediante `loadJSON()`, `loadStrings()`, `loadTable()`, evitándonos algunas complicaciones del [Fetch](https://www.youtube.com/watch?v=tc8DU14qX6I).

Luego, si queremos hacer visualizaciones, podemos aprovechar todas o parte de las ayudas recién descritas (dibujo en canvas, manipulación del DOM o precarga de datos). Y si el dibujo en el canvas resulta muy complejo: Podríamos aprovechar otras bibliotecas enfocadas en facilitarlo. Así podríamos trabajar, sin problemas, con p5.js y [Chart.js](https://www.chartjs.org/): **Eso es lo que adelantamos en la evaluación de la [sesión recién pasada](https://github.com/profesorfaco/grafica_computacional/tree/gh-pages/sesion-05) y es lo que exploraremos con parte de los ejercicios en [este repositorio](https://profesorfaco.github.io/grafica_computacional/sesion-06/).** 

#### CHART.JS / Simple yet flexible JavaScript charting for designers & developers

- https://www.chartjs.org/docs/latest/
- https://www.chartjs.org/samples/latest/

--------------

### SVG

Pero el canvas no es la única manera en que se pueden incluir gráficos interactivo en una página web. También está [SVG](https://developer.mozilla.org/es/docs/Web/SVG). 

- [¿Canvas o SVG?](https://www.arsys.es/blog/programacion/diseno-web/canvas-o-svg/)

- [SVG vs canvas: how to choose](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg193983(v=vs.85)#Using_Canvas_AndOr_SVG)

Y para trabajar visualizaciones de datos con SVG hay una vía de "simplificación": [d3.js](https://d3js.org/)

Como la simplificación va entre comillas, convendría partir por bibliotecas que simplifican el uso de la biblioteca de d3.js

#### D3PLUS.JS / Data visualization made easy
- https://d3plus.org/docs/
- https://d3plus.org/examples/

#### C3.JS / D3-based reusable chart library
- https://c3js.org/reference.html
- https://c3js.org/examples.html

#### ¿Pero por qué partir al revés?

Porque [D3 (Data Driven Documents)](https://d3js.org/) es una biblioteca que ofrece, desde JavaScript, una manipulación eficiente y flexible de los documentos basados en datos, atendiendo a los estándares de HTML, SVG y CSS.

Con D3.js podemos tomar un JSON, pasarlo a una variable, desplegar tales datos en una tabla HTML y, también, generar un gráfico de barras en SVG. Pero una cosa es decirlo y otra es hacerlo; D3 no es un marco que proporcione las características que facilitarían generar el gráfico.

Por ejemplo, si quisiéramos dibujar un círculo amarillo, de radio 50 pixeles, al centro de un espacio SVG gris, de 400 x 400 pixeles, lo podríamos hacer sin D3.js, utilizando el dialecto SVG, de la siguiente manera: 

```
<svg width="400" height="400" style="background-color:silver">
	<circle cx="200" cy="200" r="50" fill="yellow"></circle>
</svg>
```

Pero hacerlo con D3.js implica dar instrucciones desde JavaScript para que aquello se dibuje según estándares SVG:

```
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>
	var espacio = d3.select("body").append("svg").attr("width", 400).attr("height", 400).style("background-color", "silver");
	espacio.append("circle").attr("cx", 200).attr("cy", 200).attr("r", "50").attr("fill", "yellow");
</script>
```

¿Dónde está la gracia? Aquí no está. La gracias de D3.js es la manipulación de datos… que luego pueden visualizarse de modo [simple](https://www.d3-graph-gallery.com/) o más [complejo](https://github.com/d3/d3/wiki/Gallery), con harta programación.
