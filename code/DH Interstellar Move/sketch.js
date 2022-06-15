function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}
fill(0);
strokeWeight(2);
points = [];

for (let i = 0; i < 50; i += 1) {
  points.push({
    radius: random(50, 75),
    angle: random(0, 360),
  });
}

function draw() {
  //background(0);
  circle(200, 200, 100);
  points[i].angle += 1;
}
