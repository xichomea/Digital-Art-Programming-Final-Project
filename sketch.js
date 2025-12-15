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

// -----------------------
// Particle 클래스
// -----------------------
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = random(TWO_PI);
    this.radius = random(50, 150);
  }

  update(listener, center) {
    let dir = p5.Vector.sub(this.pos, listener);
    let dist = dir.mag();

    // 흔들림 강도
    let shake = map(dist, 0, width/2, 10, 0);

    // 원형 궤도 업데이트
    this.angle += 0.02 + random(-0.01, 0.01);
    this.pos.x = center.x + this.radius * cos(this.angle) + random(-shake, shake);
    this.pos.y = center.y + this.radius * sin(this.angle) + random(-shake, shake);
  }

  show() {
    fill(200, 100);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5);
  }
}

// -----------------------
// ParticleSystem 클래스
// -----------------------
class ParticleSystem {
  constructor(center, numParticles) {
    this.center = center;
    this.particles = [];
    for (let i = 0; i < numParticles; i++) {
      this.particles.push(new Particle(random(width), random(height)));
    }
  }

  update(listener) {
    for (let p of this.particles) {
      p.update(listener, this.center);
    }
  }

  show() {
    for (let p of this.particles) {
      p.show();
    }
  }
}


