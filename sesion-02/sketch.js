var externa, total, promedio;
var duraciones = [];

function preload() {
  externa = loadJSON("https://api.myjson.com/bins/ene57");
}

function setup() {
  createCanvas(600, 300);
  background(255);
  fill(0);
  noStroke();
  textAlign(CENTER);
  text("Duración real de la carrera de Diseño", width / 2, 50);
  for (var x = 0; x < 5; x++) {
    if (externa[x].duracion > 14) {
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    ellipse(100 * (x + 1), height / 2, externa[x].duracion * 2);
    text(externa[x].universidad, 100 * (x + 1), (height / 2) + 50)
    duraciones.push(externa[x].duracion);
  }
  print(Math.round((duraciones[0] + duraciones[1] + duraciones[2] + duraciones[3] + duraciones[4]) / 4));
}

function draw() {}