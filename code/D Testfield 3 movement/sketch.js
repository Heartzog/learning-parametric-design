function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

let scalefaktor = 1;
let points = [];

function setup() {
  frameRate(30);
  createLoop({
    duration: 3, // duration in seconds for our gif animation
    gif: true,
  });
  createCanvas(sketchWidth, sketchHeight);
  fill(255);
  strokeWeight(2);
  background(0);
  for (let i = 0; i < 100; i += 1) {
    points.push({
      radius: random(30, 70),
      angle: random(0, 360),
    });
  }
}

function draw() {
  background(0, 7);
  stroke(255, 150, 100);

  translate(sketchWidth / 2, sketchHeight / 2);
  scale(scalefaktor);
  scalefaktor += 0.0005;
  for (let i = 0; i < points.length; i += 1) {
    points[i].angle += 3;

    const rad = (Math.PI / 180) * points[i].angle;
    let radius = points[i].radius;

    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    ellipse(x, y, 2, 2);
    ellipse(x * 2, y / 3, 2, 2);
  }

  //for (let a = 0; a < points.length; a += 1) {
  //  points[a].angle += 1;
  //
  //  const rad = (Math.PI / 180) * points[a].angle;
  //  let radius = points[a].radius;
  //  const x = radius * Math.cos(rad);
  //  const y = radius * Math.sin(rad);
  //
  //  ellipse(x * 2, y / 3, 2, 2);
  //}
  fill(0);
  noStroke();
  arc(0, -3, 56, 50, (Math.PI / 180) * -180, (Math.PI / 180) * 0, OPEN);
}
