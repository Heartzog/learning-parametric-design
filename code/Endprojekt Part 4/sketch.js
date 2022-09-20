function preload() {
  // preload assets
}

const sketchWidth = 1400;
const sketchHeight = 700;
const size = 20;

let scalefaktor = 0.5; //größe der Form
let points = [];

function setup() {
  createLoop({
    duration: 15, // Gif-Sekunden
    gif: true,
  });
  createCanvas(sketchWidth, sketchHeight);
  fill(255);
  strokeWeight(2);
  background(0);
  for (let i = 0; i < 100; i += 1) {
    points.push({
      //Punkte werden erstellt und Größe des Schweifs
      radius: random(30, 70),
      angle: random(0, 360),
    });
  }
}

function draw() {
  background(0, 7);
  translate(sketchWidth / 2, sketchHeight / 2);
  scale(scalefaktor);

  scalefaktor += 0.001; //Faktor wie schnell sich die Gesamtfläche vergrößert
  for (let i = 0; i < points.length; i += 1) {
    noStroke();
    points[i].angle += 4; //speed

    const rad = (Math.PI / 180) * points[i].angle;
    let radius = points[i].radius;

    const x = radius * Math.cos(rad); //kreisform
    const y = radius * Math.sin(rad);

    fill(255, 235, 220, 255 - (255 / 40) * (points[i].radius - 30)); //farbe geht von weiß nach außen hin zu transparent
    ellipse(x, y, 4, 4);

    fill(
      lerpColor(
        //farbtausch zwischen weiß und leichtem orange
        color(255, 255, 255),
        color(255, 200, 150, 0),
        (points[i].radius - 30) / 40
      )
    );
    ellipse(x * 2, y / 3, 4, 4);
  }

  fill(0);

  arc(0, -3, 56, 50, (Math.PI / 180) * -180, (Math.PI / 180) * 0, OPEN);

  const alphaOffset = 300;

  fill(0, rectAlpha - alphaOffset);
  if (direction == true) {
    rectAlpha += 1;
  } else {
    rectAlpha -= 1;
  }

  if (rectAlpha > 255 + alphaOffset) {
    direction = false;
    scalefaktor = 1;
  }
  if (rectAlpha < 0) {
    direction = true;
  }

  rect(-200, -200, 400, 400);
}

let rectAlpha = 255;
let direction = false;
