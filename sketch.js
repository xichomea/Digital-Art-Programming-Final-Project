let system;

function setup() {
  createCanvas(600, 400);
  system = new ParticleSystem();
}

function draw() {
  background(30);

  let listener = createVector(mouseX, mouseY);

  system.applyForces(listener);
  system.display();
  system.update();
}