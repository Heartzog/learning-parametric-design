function preload() {
  // preload assets
}

let sel;
let item = "Dreieck";
function setup() {
  createCanvas(400, 400);
  frameRate(2);

  textAlign(CENTER);
  sel = createSelect();
  sel.position(0, 400);
  sel.option("Dreieck");
  sel.option("Kreis");
  sel.option("Viereck");
  sel.changed(mySelectEvent);
}

function tri() {
  let weiß = [255, random(0, 255), 255, 255, 255, 255]; //zufall zwischen weiß oder zufälliger Farbe
  for (let x = 0; x < 10; x += 1) {
    //x wert
    for (let y = 0; y < 10; y += 1) {
      //y wert
      push();
      translate(100 * x, 200 * y); //die Dreiecke werden nach unten und nach recht multipliziert
      fill(random(weiß), random(weiß), random(weiß));
      triangle(50, 0, 100, 100, 0, 100);
      fill(random(weiß), random(weiß), random(weiß));
      triangle(50, 0, -50, 0, 0, 100);
      fill(random(weiß), random(weiß), random(weiß));
      triangle(0, 100, -50, 200, 50, 200);
      fill(random(weiß), random(weiß), random(weiß));
      triangle(100, 100, 0, 100, 50, 200);
      pop();
    }
  }
}

function vier() {
  let weiß = [255, random(0, 255), 255, 255, 255, 255]; //zufall zwischen weiß oder zufälliger Farbe
  for (let x = 0; x < 10; x += 1) {
    //x wert
    for (let y = 0; y < 10; y += 1) {
      //y wert
      push();
      translate(100 * x, 100 * y); //die Dreiecke werden nach unten und nach recht multipliziert
      fill(random(weiß), random(weiß), random(weiß));
      rect(0, 0, 100, 100);
      pop();
    }
  }
}

function circ() {
  let weiß = [255, random(0, 255), 255, 255, 255, 255]; //zufall zwischen weiß oder zufälliger Farbe
  for (let x = 0; x < 10; x += 1) {
    //x wert
    for (let y = 0; y < 10; y += 1) {
      //y wert
      push();
      translate(100 * x, 100 * y); //die Dreiecke werden nach unten und nach recht multipliziert
      fill(random(weiß), random(weiß), random(weiß));
      circle(50, 50, 100);
      pop();
    }
  }
}

function mySelectEvent() {
  let item = sel.value();
}

function draw() {
  background(255);
  if (item === "Dreieck") {
    tri();
  } else if (item === "Viereck") {
    background(255);
    vier();
  } else {
    background(255);
    circ();
  }
}
