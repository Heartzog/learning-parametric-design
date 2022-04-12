function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  //größe des Vierecks
}

function draw() {
  background('#1D2825');
  fill('white');
  
  stroke('transparent');
  ellipse(20,100,5,5);
  ellipse(50,20,5,5);
  ellipse(300,300,3,3);
  ellipse(170,340,5,5);
  ellipse(40,280,4,4);
  ellipse(50,20,5,5);
  ellipse(380,240,5,5);
  ellipse(270,50,6,6);
  ellipse(210,40,5,5);
  rect(220,270,10,5,10);
  
  stroke('rgba(0,0,0,0)');
  fill('#2D3736');
  square(280, 30, 100);

  fill('transparent');
  strokeWeight(3);
  stroke('#607D71');
  ellipse(200,200,100,100);
  

  strokeWeight(10);
  stroke('#85605F');
  fill('rgba(0,0,0,0)');
  arc(
    200, 200,
    150, 50,
    Math.PI / 180 * 0,
    Math.PI / 180 * 360,
    OPEN
  );

  fill('white');
  strokeWeight(3);
  stroke('#607D71');
  arc(
    200, 200,
    100, 100,
    Math.PI / 180 * -180,
    Math.PI / 180 * 0,
    OPEN
  );

  fill('rgba(0,0,0,0)');
  strokeWeight(2);
  stroke('#32092A');
  arc(
    50, 350,
    300, 100,
    Math.PI / 340 * -90,
    Math.PI / 180 * 0,
    OPEN
  );

  
}