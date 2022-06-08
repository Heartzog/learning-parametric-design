function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(0);
  strokeWeight(0);

  beginShape();
  vertex(50, 200);

  bezierVertex(50, 200, 150, 180, 200, 125);
  vertex(200, 125);
  bezierVertex(200, 125, 250, 180, 350, 200);
  endShape();

  fill(250, 100, 0);
  arc(200, 200, 300, 30, (Math.PI / 180) * 0, (Math.PI / 90) * 180, OPEN);

  circle(200, 200, 150);

  fill(0);
  circle(200, 200, 100);

  fill(250, 100, 0);
  arc(200, 200, 300, 50, (Math.PI / 180) * 0, (Math.PI / 90) * 90, OPEN);
  arc(200, 200, 150, 30, (Math.PI / 180) * 0, (Math.PI / 90) * 90, OPEN);

  //strokeWeight(5);
}
