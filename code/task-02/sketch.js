function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 10;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);
  noStroke();

  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      square(x * size, y * size, random(size));
    }
  }
}
