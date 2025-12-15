let particleSystem;

function setup() {
  createCanvas(600, 400);
  let center = createVector(width/2, height/2);
  
  // ParticleSystem 생성 (50개의 Particle)
  particleSystem = new ParticleSystem(center, 50);
}

function draw() {
  background(30);

  let listener = createVector(mouseX, mouseY);

  // ParticleSystem 업데이트 및 표시
  particleSystem.update(listener);
  particleSystem.show();
}