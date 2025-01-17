function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

let scalefaktor = 1;
let points = [];
let verlaufB = 255;

function setup() {
  createLoop({
    duration: 5, // duration in seconds for our gif animation
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
      //verlaufB: 255 - i * 0.5,
    });
  }
}

function draw() {
  background(0, 7);

  translate(sketchWidth / 2, sketchHeight / 2);
  scale(scalefaktor);

  scalefaktor += 0.001;
  for (let i = 0; i < points.length; i += 1) {
    // stroke(255, 235, points[i].verlaufB);
    noStroke();
    points[i].angle += 4;

    const rad = (Math.PI / 180) * points[i].angle;
    let radius = points[i].radius;

    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    //stroke(255, 235, 220);
    fill(255, 235, 220);
    ellipse(x, y, 4, 4);
    fill(
      lerpColor(
        color(255, 255, 255),
        color(255, 200, 150),
        (points[i].radius - 30) / 40
      )
    );

    ellipse(x * 2, y / 3, 4, 4);
  }

  fill(0);
  noStroke();
  arc(0, -3, 56, 50, (Math.PI / 180) * -180, (Math.PI / 180) * 0, OPEN);
}
