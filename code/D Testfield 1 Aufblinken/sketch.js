function preload() {
  // preload assets
}

var fade;
var fadeAmount = 1;

function setup() {
  createCanvas(400, 400);
  textSize(100);
  fade = 0;
}

function draw() {
  background(220);
  fill(255, 0, 0, fade);
  circle(100, 100, 100);
  if (fade < 0) fadeAmount = 1;

  if (fade > 255) fadeAmount = -5;

  fade += fadeAmount;
  print(fade);
}
