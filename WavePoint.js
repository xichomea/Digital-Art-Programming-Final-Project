// ----------------------------
// WavePoint (old: Particle)
// ----------------------------
class WavePoint {
  constructor(origin) {
    this.pos = origin.copy().add(
      p5.Vector.random3D().mult(random(200))
    );
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0);
    this.lifespan = 255;
    this.scale = random(0.3, 1);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update(params) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    const t = millis() * 0.001;

    const x = this.pos.x;
    const waveZ = sin(x * 0.05 + t * params.waveFrequency) * params.amplitude;

    const dX = sin(this.pos.y * 0.05 + t * params.distortion) * params.amplitude * 0.5;
    const dY = cos(this.pos.z * 0.05 + t * params.distortion) * params.amplitude * 0.5;

    this.pos.x = x + dX * params.spread * random(-1, 1);
    this.pos.y = waveZ + dY * params.spread * random(-1, 1);
    this.pos.z =
      sin(this.pos.x * 0.05 + t * params.waveFrequency * 0.5) * (params.amplitude * 0.2);

    this.currentScale = max(0.1, params.thickness * this.scale);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill(255);
    box(this.currentScale * 8);
    pop();
  }
}