function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 10;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(10);
}

function draw() {
  background(255, 150, 50);
  noStroke();

  square(150, 150, 100, 100);

  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 2) {
      fill(random(50, 200), random(0, 255), random(0, 255));
      square(x * size, y * size, random(size));
    }
  }
}
