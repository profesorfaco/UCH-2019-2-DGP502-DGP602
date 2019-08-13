var sel, data, opcion;

function preload() {
    data = loadJSON("https://api.myjson.com/bins/ene57");
}

function setup() {
    createCanvas(600, 300);
    background(200);
    fill(0);
    noStroke();
    textAlign(CENTER);
    sel = createSelect();
    sel.position(10, 10);
    sel.option('continuidad');
    sel.option('retención');
    sel.option('duración');
    sel.changed(mySelectEvent);
    text("% de titulados con continuidad de estudio", width / 2, 50);
    for (var x = 0; x < 5; x++) {
        ellipse(100 * (x + 1), height / 2, data[x].continuidad * 10);
        text(data[x].universidad, 100 * (x + 1), (height / 2) + 50)
        fill(0);
    }
}

function mySelectEvent() {
    clear();
    background(200);
    opcion = sel.value();

    if (opcion == "continuidad") {

        text("% de titulados con continuidad de estudio", width / 2, 50);
        for (var x = 0; x < 5; x++) {
            ellipse(100 * (x + 1), height / 2, data[x].continuidad * 10);
            text(data[x].universidad, 100 * (x + 1), (height / 2) + 50)
            fill(0);
        }

    } else if (opcion == "retención") {

        text("Retención de 1er. año", width / 2, 50);
        for (var x = 0; x < 5; x++) {
            ellipse(100 * (x + 1), height / 2, data[x].retencion / 2);
            text(data[x].universidad, 100 * (x + 1), (height / 2) + 50)
            fill(0);
        }

    } else if (opcion == "duración") {

        text("Duración real (semestres)", width / 2, 50);
        for (var x = 0; x < 5; x++) {
            ellipse(100 * (x + 1), height / 2, data[x].duracion * 3);
            text(data[x].universidad, 100 * (x + 1), (height / 2) + 50)
            fill(0);
        }

    } else {
        text("Say what?!", 10, 300);
    }

}