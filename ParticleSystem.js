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