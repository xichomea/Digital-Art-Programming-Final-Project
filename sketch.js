let system;
let windowRect;

function setup() {
  createCanvas(600, 400);

  windowRect = {x: 150, y: 80, w: 300, h: 240};

  system = new SoundField();
}

function draw() {
  background(70, 130, 180);

  noStroke();
  fill(255, 220, 220, 180);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  let listener = createVector(mouseX, mouseY);
  system.applyForces(listener);
  system.update();
  system.display();
}