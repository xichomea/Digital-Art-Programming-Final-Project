let system;
let windowRect;

function setup() {
  createCanvas(600, 400);

  windowRect = {x: 150, y: 80, w: 300, h: 240};

  system = new ParticleSystem();
}

function draw() {
  background(100, 180, 255);

  noStroke();
  fill(80, 50, 120, 180);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  noFill();
  stroke(255);
  stroke(3);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  let listener = createVector(mouseX, mouseY);
  system.applyForces(listener);
  system.update();
  system.display();
}