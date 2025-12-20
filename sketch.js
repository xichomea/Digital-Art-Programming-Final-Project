let system;

function setup() {
  createCanvas(400, 400);
  system = new ParticleSystem();
}

function draw() {
  background(220);
  system.applyForces();
  system.display();
  system.update();
}