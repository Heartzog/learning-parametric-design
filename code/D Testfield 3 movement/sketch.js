function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  fill(255);
  strokeWeight(2);

  for (let i = 0; i < 100; i += 1) {
    points.push({
      radius: random(30, 70),
      angle: random(0, 360),
    });
  }
}

function draw() {
  background(255, 7);
  stroke(255, 150, 100);
  //rect(0, 0, sketchWidth, sketchHeight);

  translate(sketchWidth / 2, sketchHeight / 2);

  for (let i = 0; i < points.length; i += 1) {
    points[i].angle += 1.5;

    const rad = (Math.PI / 180) * points[i].angle;
    let radius = points[i].radius;

    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    ellipse(x, y, 2, 2);
  }

  for (let a = 0; a < points.length; a += 1) {
    points[a].angle += 1;

    const rad = (Math.PI / 180) * points[a].angle;
    let radius = points[a].radius;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    ellipse(x * 2, y / 3, 2, 2);
  }
  noStroke();
  arc(0, -5, 56, 50, (Math.PI / 180) * -180, (Math.PI / 180) * 0, OPEN);
}

// hintergrund schwarz machen
// perfekter: eine Bewegung in der gesamten Form
// Form expandiert leicht
