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
  noStroke();
  fill("orange");
  rect(0, 0, 400, 200);

  fill("yellow");
  rect(00, 200, 400, 200);

  stroke(23, 69, 158);
  strokeWeight(60);

  beginShape();
  for (let x = 0; x < sketchWidth; x += 1) {
    vertex(x, sin(((Math.PI * 6) / sketchWidth) * x) * 20 + sketchHeight / 2);
  }
  endShape();

  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 2; x < columns; x += 4) {
    for (let y = 14; y < rows; y += 2) {
      stroke(0);
      strokeWeight(3);

      circle(x * size, y * size, size);
    }
  }

  for (let x = 0.25; x < 5; x += 1) {
    for (let y = 1; y < 4; y += 1) {
      noFill();
      stroke(0);
      strokeWeight(5);

      beginShape();
      for (let x1 = 0; x1 < 40; x1 += 1) {
        const curveY = sin(((Math.PI * 20) / sketchWidth) * x1) * 4;
        const offsetY = y * 40;

        vertex(x1 + x * 80, curveY + offsetY);
      }
      endShape();
    }
  }
}
