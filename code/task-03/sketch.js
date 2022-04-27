function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(10);
}

function draw() {
  background(255);
  strokeweight = 1;
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      fill(255);
      line(x * size, y * size, random(400), random(400));
    }
  }
  rect(150, 150, 75, 75);
}
