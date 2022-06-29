function preload() {
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(10);
  frameRate(30);
}

const punkteArray = [];

let warteSchleife = 0;

function draw() {
  if (warteSchleife > 5) {
    //Geschwindigkeit
    warteSchleife = 0;
    let hatFunktioniert = false; //punkte werden nur im Bereich erstellt
    while (hatFunktioniert === false) {
      const x = random(width);
      const y = random(height);
      if (dist(x, y, width / 2, height / 2) < width * 0.1) {
        point(x, y);
        hatFunktioniert = true;
      }
    }
  }
  warteSchleife += 1;

  // var fade;
  // var fadeAmount = 1;

  // function setup() {
  //   createCanvas(400, 400);
  //   fade = 0;
  // }

  // function draw() {
  //   background(220);
  //   fill(255, 0, 0, fade);
  //   circle(100, 100, 100);
  //   if (fade < 0) fadeAmount = 1;

  //   if (fade > 255) fadeAmount = -5;

  //   fade += fadeAmount;
  //   print(fade);
  // }
}
