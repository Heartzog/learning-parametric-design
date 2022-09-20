function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

let points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  fill(0);
  strokeWeight(2);

  for (let i = 0; i < 100; i += 1) {
    points.push({
      radius: random(40, 75),
      angle: random(0, 360),
    });
  }
}

function draw() {
  background(255, 10);
  //ellipse(200, 200, 100, 50);
  translate(sketchWidth / 2, sketchHeight / 2);

  for (let i = 0; i < points.length; i += 1) {
    points[i].angle += 2;

    const rad = (Math.PI / 180) * points[i].angle;
    let radius = points[i].radius;

    //radius = (points[i].angle - 90 * Math.floor(points[i].angle / 90)) * 5;

    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    ellipse(x * 2, y / 2, 2, 2);
  }
}
