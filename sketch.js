let system;
let windowRect;

function setup() {
  createCanvas(600, 400);

  windowRect = {
    x: 150,
    y: 80,
    w: 300,
    h: 240
  };

  system = new ParticleSystem();
}

function draw() {
  background(30);

  noFill();
  stroke(200);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  let listener = createVector(mouseX, mouseY);
  system.applyForces(listener);
  system.update();
  system.display();
}