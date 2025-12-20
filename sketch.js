let system;

function setup() {
  createCanvas(600, 400);
  system = new ParticleSystem();
}

function draw() {
  background(220);

  let listener = createVector(mouseX, mouseY);

  system.applyForces(listener);
  system.display();
  system.update();
}